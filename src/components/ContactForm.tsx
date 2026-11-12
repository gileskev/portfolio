"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setState("sent");
      form.reset();
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const field =
    "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium">
          Name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>
      <label className="grid gap-1 text-sm font-medium">
        Message
        <textarea name="message" required rows={5} maxLength={5000} className={field} />
      </label>
      {/* Honeypot: real visitors never see or fill this */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition hover:opacity-90 disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" className="text-sm">
          {state === "sent" && <span className="text-emerald-600 dark:text-emerald-300">Thanks! I&apos;ll be in touch soon.</span>}
          {state === "error" && <span className="text-red-600 dark:text-red-400">{message}</span>}
        </p>
      </div>
    </form>
  );
}
