import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/#projects" className="text-sm text-accent hover:underline">
        &larr; All projects
      </Link>
      <p className="mt-6 text-sm text-muted">{project.status}</p>
      <h1 className="mt-1 font-display text-4xl font-semibold">{project.name}</h1>
      <p className="mt-4 text-lg text-muted">{project.summary}</p>
      <div className="mt-8 space-y-4 leading-relaxed">
        {project.description.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted">Built with</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li key={s} className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs">
            {s}
          </li>
        ))}
      </ul>
      {(project.href || project.repo) && (
        <div className="mt-8 flex gap-4 text-sm">
          {project.href && (
            <a className="text-accent hover:underline" href={project.href} target="_blank" rel="noopener noreferrer">
              Visit site
            </a>
          )}
          {project.repo && (
            <a className="text-accent hover:underline" href={project.repo} target="_blank" rel="noopener noreferrer">
              Source on GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}
