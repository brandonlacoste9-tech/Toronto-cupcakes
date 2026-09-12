"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import type { Flavor } from "@/lib/data/flavors";
import { formatPrice } from "@/lib/data/pricing";
import { FlavorVisual } from "./FlavorVisual";

const allergenLabels: Record<string, string> = {
  dairy: "Dairy",
  eggs: "Eggs",
  wheat: "Wheat",
  soy: "Soy",
  peanuts: "Peanuts",
  "tree nuts": "Tree nuts",
};

export function FlavorModal({
  flavor,
  onClose,
}: {
  flavor: Flavor | null;
  onClose: () => void;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!flavor) return;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [flavor, onClose]);

  if (!flavor) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-chocolate/50 p-4 sm:items-center"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-sm bg-cream shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <FlavorVisual
          name={flavor.name}
          accent={flavor.accent}
          image={flavor.image}
          className="h-56 w-full"
        />
        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 id={titleId} className="font-display text-2xl text-chocolate">
                {flavor.name}
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                {flavor.cake} cake · {flavor.frosting} frosting
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="rounded-sm border border-chocolate/15 p-2 text-chocolate hover:bg-cream-dark"
              aria-label="Close details"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm leading-relaxed text-ink">{flavor.description}</p>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              Ingredients
            </p>
            <ul className="mt-2 list-inside list-disc text-sm text-ink">
              {flavor.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              Allergens
            </p>
            <p className="mt-2 text-sm text-ink">
              {flavor.allergens.map((a) => allergenLabels[a] ?? a).join(", ")}
            </p>
            <p className="mt-2 text-xs text-ink-muted">
              Not a nut-free kitchen. May contact common allergens during baking.
            </p>
          </div>
          <p className="text-sm font-medium text-chocolate">
            {formatPrice(flavor.priceEach)} each ·{" "}
            {formatPrice(flavor.priceHalfDozen)} half dozen ·{" "}
            {formatPrice(flavor.priceDozen)} dozen
          </p>
        </div>
      </div>
    </div>
  );
}
