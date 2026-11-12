import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.meta.title, description: post.meta.summary } : {};
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/blog" className="text-sm text-accent hover:underline">
        &larr; All posts
      </Link>
      <p className="mt-6 text-sm text-muted">{formatDate(post.meta.date)}</p>
      <h1 className="mt-1 font-display text-4xl font-semibold">{post.meta.title}</h1>
      <div className="prose mt-8 max-w-none dark:prose-invert prose-a:text-accent prose-headings:font-display">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
