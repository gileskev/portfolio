import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Off the map</h1>
      <p className="mt-3 text-muted">That page doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block text-accent hover:underline">
        Back home
      </Link>
    </section>
  );
}
