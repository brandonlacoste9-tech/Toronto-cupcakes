"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { FlavorModal } from "@/components/FlavorModal";
import {
  alwaysAvailable,
  assortedDozen,
  holidayTeasers,
  type Flavor,
} from "@/lib/data/flavors";
import { formatPrice, pricing } from "@/lib/data/pricing";

export function CupcakesShop() {
  const [selected, setSelected] = useState<Flavor | null>(null);

  return (
    <>
      <div className="border-b border-chocolate/10 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-sm sm:px-6">
          <p className="font-medium text-chocolate">
            {formatPrice(pricing.each)} each · {formatPrice(pricing.halfDozen)}{" "}
            half dozen · {formatPrice(pricing.dozen)} dozen
          </p>
          <p className="text-ink-muted">
            Minimum order: half dozen · Order by {pricing.orderCutoffLabel} for
            next-day delivery
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl text-chocolate">One Dozen One Click</h2>
        <p className="mt-2 text-ink-muted">
          In a panic or can’t decide? We’ll pick 12 delicious treats for you.
        </p>
        <div className="mt-6">
          <ProductCard
            flavor={assortedDozen}
            featured
            onOpenDetails={setSelected}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <h2 className="font-display text-3xl text-chocolate">Always Available</h2>
        <p className="mt-2 text-ink-muted">
          Select flavours below — tap a cupcake for ingredients and allergens.
        </p>
        <div className="stagger-children mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {alwaysAvailable.map((flavor) => (
            <ProductCard
              key={flavor.id}
              flavor={flavor}
              onOpenDetails={setSelected}
            />
          ))}
        </div>
      </section>

      <section
        id="holidays"
        className="border-t border-chocolate/10 bg-cream-dark/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl text-chocolate">Holidays</h2>
          <p className="mt-2 text-sm text-ink-muted">
            {formatPrice(pricing.holiday.eachMin)}–{formatPrice(pricing.holiday.eachMax)}{" "}
            each · {formatPrice(pricing.holiday.halfDozenMin)}–
            {formatPrice(pricing.holiday.halfDozenMax)} half dozen ·{" "}
            {formatPrice(pricing.holiday.dozenMin)}–{formatPrice(pricing.holiday.dozenMax)}{" "}
            dozen
          </p>
          <p className="mt-1 text-sm text-ink-muted">{pricing.holiday.note}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {holidayTeasers.map((item) => (
              <div key={item.id} className="border-l-2 border-blush-deep pl-4">
                <h3 className="font-display text-xl text-chocolate">{item.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="special-events" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl text-chocolate">
          Special Events &amp; Festivals
        </h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Looking for weddings, engagements, or other special occasions? Visit our
          Occasions page. For logo cupcakes and marketing events, see Corporate.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/occasions"
            className="rounded-sm bg-chocolate px-4 py-2.5 text-sm font-medium text-cream"
          >
            Occasions
          </Link>
          <Link
            href="/corporate"
            className="rounded-sm border border-chocolate/20 px-4 py-2.5 text-sm font-medium text-chocolate"
          >
            Corporate
          </Link>
        </div>
      </section>

      <FlavorModal flavor={selected} onClose={() => setSelected(null)} />
    </>
  );
}
