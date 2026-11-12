import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Build notes and write-ups from my projects.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-semibold">Blog</h1>
      <p className="mt-3 text-muted">Build notes and write-ups from my projects.</p>
      {posts.length === 0 ? (
        <p className="mt-10 text-muted">No posts yet.</p>
      ) : (
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block py-6 hover:text-accent">
                <p className="text-xs text-muted">{formatDate(post.date)}</p>
                <p className="mt-1 text-xl font-semibold">{post.title}</p>
                <p className="mt-1 text-sm text-muted">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
