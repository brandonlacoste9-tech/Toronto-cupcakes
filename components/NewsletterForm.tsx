"use client";

import { useState } from "react";

export function NewsletterForm({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("done");
    setEmail("");
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <label className="sr-only" htmlFor={`newsletter-${variant}`}>
        Email address
      </label>
      <div className="flex gap-2">
        <input
          id={`newsletter-${variant}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={`min-w-0 flex-1 rounded-sm border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blush ${
            isDark
              ? "border-white/20 bg-white/10 text-cream placeholder:text-cream/40"
              : "border-chocolate/15 bg-white text-ink placeholder:text-ink-muted/60"
          }`}
        />
        <button
          type="submit"
          className={`shrink-0 rounded-sm px-3 py-2 text-sm font-medium transition ${
            isDark
              ? "bg-blush text-chocolate hover:bg-blush-deep hover:text-white"
              : "bg-chocolate text-cream hover:bg-chocolate-soft"
          }`}
        >
          Join
        </button>
      </div>
      {status === "done" && (
        <p
          className={`text-xs ${isDark ? "text-blush" : "text-blush-deep"}`}
          role="status"
        >
          Thanks — you’re on the list.
        </p>
      )}
    </form>
  );
}
