"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart/CartProvider";
import { formatPrice } from "@/lib/data/pricing";
import { packLabel } from "@/lib/cart/types";
import { site } from "@/lib/data/site";
import { PageHero } from "@/components/PageHero";

export function CheckoutView() {
  const { lines, subtotal, clearCart, itemCount, meetsMinimum, cupcakeCount } =
    useCart();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  if (submitted) {
    return (
      <>
        <PageHero
          eyebrow="Checkout"
          title="Request received"
          subtitle="We’ll review your order and email an invoice so you can pay via PayPal or card."
        />
        <section className="mx-auto max-w-xl px-4 py-12 text-center sm:px-6">
          <p className="text-ink-muted">
            Questions? Call{" "}
            <a className="text-blush-deep" href={`tel:${site.phones.localTel}`}>
              {site.phones.local}
            </a>{" "}
            or email {site.email}.
          </p>
          <Link
            href="/cupcakes"
            className="mt-8 inline-flex rounded-sm bg-chocolate px-5 py-3 text-sm font-medium text-cream"
          >
            Back to shop
          </Link>
        </section>
      </>
    );
  }

  if (itemCount === 0) {
    return (
      <>
        <PageHero
          eyebrow="Checkout"
          title="Nothing to check out"
          subtitle="Add cupcakes to your cart first."
        />
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <Link
            href="/cupcakes"
            className="inline-flex rounded-sm bg-blush-deep px-5 py-3 text-sm font-medium text-white"
          >
            Shop cupcakes
          </Link>
        </section>
      </>
    );
  }

  if (!meetsMinimum) {
    return (
      <>
        <PageHero
          eyebrow="Checkout"
          title="Almost a half dozen"
          subtitle={`You have ${cupcakeCount} cupcake${cupcakeCount === 1 ? "" : "s"}. Minimum order is 6.`}
        />
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <Link
            href="/cart"
            className="inline-flex rounded-sm bg-blush-deep px-5 py-3 text-sm font-medium text-white"
          >
            Back to cart
          </Link>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Checkout"
        title="Almost there"
        subtitle="This is a stubbed checkout. We’ll email an invoice after reviewing your order — matching our usual PayPal / card flow."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            clearCart();
            setSubmitted(true);
          }}
        >
          <label className="block text-sm">
            <span className="text-ink-muted">Full name</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-sm border border-chocolate/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blush"
            />
          </label>
          <label className="block text-sm">
            <span className="text-ink-muted">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-sm border border-chocolate/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blush"
            />
          </label>
          <label className="block text-sm">
            <span className="text-ink-muted">Phone</span>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-sm border border-chocolate/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blush"
            />
          </label>
          <label className="block text-sm">
            <span className="text-ink-muted">Delivery notes / address</span>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1 w-full rounded-sm border border-chocolate/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blush"
            />
          </label>
          <button
            type="submit"
            className="rounded-sm bg-blush-deep px-5 py-3 text-sm font-medium text-white hover:bg-chocolate"
          >
            Submit order request
          </button>
        </form>

        <aside className="h-fit rounded-sm border border-chocolate/10 bg-white p-5">
          <h2 className="font-display text-2xl text-chocolate">Order summary</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {lines.map((line) => (
              <li
                key={`${line.productId}-${line.pack}`}
                className="flex justify-between gap-3"
              >
                <span>
                  {line.name} × {line.quantity}{" "}
                  <span className="text-ink-muted">({packLabel(line.pack)})</span>
                </span>
                <span className="font-medium">
                  {formatPrice(line.unitPrice * line.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex justify-between border-t border-chocolate/10 pt-4 font-medium text-chocolate">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </p>
        </aside>
      </section>
    </>
  );
}
