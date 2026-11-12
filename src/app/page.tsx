import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllPosts, formatDate } from "@/lib/posts";
import { projects, site, skills } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,color-mix(in_oklab,var(--sunset)_22%,transparent),transparent),radial-gradient(50%_70%_at_0%_100%,color-mix(in_oklab,var(--accent)_20%,transparent),transparent)]"
        />
        <div className="relative mx-auto max-w-5xl px-5 py-24 sm:py-32">
          <p className="font-mono text-sm text-accent">Hello, I&apos;m {site.name}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            I run a cruise travel agency and build the tools I wish existed: a shore excursion
            finder for ocean and river cruisers, and a tracker for the planes passing over my house.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition hover:opacity-90"
            >
              See my projects
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-5 py-20">
        <h2 className="font-display text-3xl font-semibold">About</h2>
        <div className="mt-6 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4 leading-relaxed text-muted">
            {/* TODO: replace with your own story */}
            <p>
              I&apos;m a travel entrepreneur who loves helping people plan cruises, and a builder who
              enjoys turning ideas into working software. Combining the two lets me create tools that
              solve real problems for travelers.
            </p>
            <p>
              Away from the keyboard I&apos;m usually planning the next voyage or watching aircraft
              cross the sky above my house, which is how the plane tracker project started.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Toolbox</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-border bg-surface px-3 py-1 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-16 border-y border-border bg-surface/40">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="font-display text-3xl font-semibold">Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      {posts.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold">Latest writing</h2>
            <Link href="/blog" className="text-sm text-accent hover:underline">
              All posts
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block py-5 hover:text-accent">
                  <p className="text-xs text-muted">{formatDate(post.date)}</p>
                  <p className="mt-1 text-lg font-semibold">{post.title}</p>
                  <p className="mt-1 text-sm text-muted">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-display text-3xl font-semibold">Contact</h2>
        <p className="mt-3 mb-8 text-muted">
          Questions, ideas or cruise plans? Send a note and I&apos;ll reply soon.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
