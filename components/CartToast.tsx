"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart/CartProvider";

export function CartToast() {
  const { toast, dismissToast } = useCart();

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => dismissToast(), 3200);
    return () => window.clearTimeout(id);
  }, [toast, dismissToast]);

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 left-4 right-4 z-[70] mx-auto flex max-w-md items-center justify-between gap-3 rounded-sm border border-blush-deep/30 bg-chocolate px-4 py-3 text-sm text-cream shadow-lg sm:left-auto sm:right-6"
    >
      <p>
        <span className="font-medium text-blush">{toast.name}</span> added to cart
      </p>
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href="/cart"
          className="rounded-sm bg-blush px-2.5 py-1 text-xs font-semibold text-chocolate"
          onClick={dismissToast}
        >
          View cart
        </Link>
        <button
          type="button"
          onClick={dismissToast}
          className="text-cream/70 hover:text-cream"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
