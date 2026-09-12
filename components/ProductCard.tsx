"use client";

import { useState } from "react";
import type { Flavor } from "@/lib/data/flavors";
import { formatPrice } from "@/lib/data/pricing";
import { useCart } from "@/lib/cart/CartProvider";
import type { CartLine } from "@/lib/cart/types";
import { FlavorVisual } from "./FlavorVisual";
import { QuantityStepper } from "./QuantityStepper";

export function ProductCard({
  flavor,
  defaultPack = "half-dozen",
  featured = false,
  onOpenDetails,
}: {
  flavor: Flavor;
  defaultPack?: CartLine["pack"];
  featured?: boolean;
  onOpenDetails?: (flavor: Flavor) => void;
}) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [pack, setPack] = useState<CartLine["pack"]>(
    flavor.category === "assorted" ? "dozen" : defaultPack,
  );

  const unitPrice =
    pack === "each"
      ? flavor.priceEach
      : pack === "half-dozen"
        ? flavor.priceHalfDozen
        : flavor.priceDozen;

  function handleAdd() {
    addItem({
      productId: flavor.id,
      name: flavor.name,
      unitPrice,
      pack,
      quantity: qty,
    });
  }

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-sm border border-chocolate/10 bg-white ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <button
        type="button"
        className={`group relative block w-full text-left ${
          featured ? "md:w-1/2" : ""
        }`}
        onClick={() => onOpenDetails?.(flavor)}
        aria-label={`View details for ${flavor.name}`}
      >
        <FlavorVisual
          name={flavor.name}
          accent={flavor.accent}
          image={flavor.image}
          priority={featured}
          className={featured ? "h-56 md:h-full min-h-48" : "h-52"}
        />
      </button>
      <div className={`flex flex-1 flex-col gap-3 p-4 ${featured ? "md:p-6" : ""}`}>
        <div>
          <h3 className="font-display text-xl text-chocolate">{flavor.name}</h3>
          <p className="mt-1 text-sm text-ink-muted">{flavor.description}</p>
        </div>
        <p className="text-sm font-medium text-chocolate">
          {formatPrice(unitPrice)}
          <span className="ml-1 font-normal text-ink-muted">
            / {pack === "each" ? "each" : pack === "half-dozen" ? "½ dozen" : "dozen"}
          </span>
        </p>

        {flavor.category !== "assorted" && (
          <div className="flex flex-wrap gap-2" role="group" aria-label="Pack size">
            {(
              [
                ["each", "Each"],
                ["half-dozen", "½ doz"],
                ["dozen", "Dozen"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setPack(value)}
                className={`rounded-sm px-2.5 py-1 text-xs transition ${
                  pack === value
                    ? "bg-chocolate text-cream"
                    : "bg-cream-dark text-ink-muted hover:text-chocolate"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
          <QuantityStepper value={qty} onChange={setQty} />
          <button
            type="button"
            onClick={handleAdd}
            className="rounded-sm bg-blush-deep px-4 py-2 text-sm font-medium text-white transition hover:bg-chocolate"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
