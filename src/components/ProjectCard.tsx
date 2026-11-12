import Link from "next/link";
import type { Project } from "@/lib/site";

const statusStyles: Record<Project["status"], string> = {
  Live: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  "In progress": "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  Planned: "bg-slate-500/15 text-slate-600 dark:text-slate-300",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
    >
      <span
        className={`mb-4 w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
      >
        {project.status}
      </span>
      <h3 className="font-display text-xl font-semibold">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li key={s} className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted">
            {s}
          </li>
        ))}
      </ul>
    </Link>
  );
}
