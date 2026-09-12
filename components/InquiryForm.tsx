"use client";

import { useState } from "react";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          [...formData.entries()].map(([k, v]) => [k, String(v)]),
        ).toString(),
      });
      if (!res.ok) throw new Error("Submit failed");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className="rounded-sm border border-blush-deep/30 bg-blush/20 px-5 py-8 text-center"
        role="status"
      >
        <p className="font-display text-2xl text-chocolate">Message sent</p>
        <p className="mt-2 text-sm text-ink-muted">
          Thanks — we’ll get back to you soon about your order or event.
        </p>
        <button
          type="button"
          className="mt-4 text-sm text-blush-deep underline"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      name="inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="inquiry" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <label className="block text-sm">
        <span className="text-ink-muted">Name</span>
        <input
          required
          name="name"
          className="mt-1 w-full rounded-sm border border-chocolate/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blush"
        />
      </label>

      <label className="block text-sm">
        <span className="text-ink-muted">Email</span>
        <input
          required
          type="email"
          name="email"
          className="mt-1 w-full rounded-sm border border-chocolate/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blush"
        />
      </label>

      <label className="block text-sm">
        <span className="text-ink-muted">Phone</span>
        <input
          type="tel"
          name="phone"
          className="mt-1 w-full rounded-sm border border-chocolate/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blush"
        />
      </label>

      <label className="block text-sm">
        <span className="text-ink-muted">Inquiry type</span>
        <select
          name="topic"
          className="mt-1 w-full rounded-sm border border-chocolate/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blush"
          defaultValue="general"
        >
          <option value="general">General</option>
          <option value="delivery">Delivery</option>
          <option value="corporate">Corporate / logo cupcakes</option>
          <option value="wedding">Wedding / occasion</option>
          <option value="allergens">Allergens / special diet</option>
        </select>
      </label>

      <label className="block text-sm">
        <span className="text-ink-muted">Message</span>
        <textarea
          required
          name="message"
          rows={4}
          className="mt-1 w-full rounded-sm border border-chocolate/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blush"
          placeholder="Tell us about your date, quantity, or custom design…"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Something went wrong. Please email inquiry@torontocupcake.com or try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-sm bg-blush-deep px-5 py-3 text-sm font-medium text-white hover:bg-chocolate disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
