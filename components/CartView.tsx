"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart/CartProvider";
import { formatPrice } from "@/lib/data/pricing";
import { packLabel } from "@/lib/cart/types";
import { QuantityStepper } from "@/components/QuantityStepper";
import { PageHero } from "@/components/PageHero";

export function CartView() {
  const {
    lines,
    subtotal,
    setQuantity,
    removeItem,
    clearCart,
    itemCount,
    cupcakeCount,
    meetsMinimum,
  } = useCart();

  return (
    <>
      <PageHero
        eyebrow="Order"
        title="Cart"
        subtitle={
          itemCount
            ? `${itemCount} item${itemCount === 1 ? "" : "s"} ready for checkout.`
            : "Your pink box is empty — add a few favourites."
        }
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {lines.length === 0 ? (
          <div className="rounded-sm border border-dashed border-chocolate/20 bg-white/60 px-6 py-16 text-center">
            <p className="font-display text-2xl text-chocolate">Nothing here yet</p>
            <p className="mt-2 text-ink-muted">
              Browse always-available flavours or grab an Assorted Dozen.
            </p>
            <Link
              href="/cupcakes"
              className="mt-6 inline-flex rounded-sm bg-blush-deep px-5 py-3 text-sm font-medium text-white"
            >
              Shop cupcakes
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <ul className="space-y-4">
              {lines.map((line) => (
                <li
                  key={`${line.productId}-${line.pack}`}
                  className="flex flex-col gap-4 rounded-sm border border-chocolate/10 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-display text-xl text-chocolate">
                      {line.name}
                    </p>
                    <p className="text-sm text-ink-muted">
                      {packLabel(line.pack)} · {formatPrice(line.unitPrice)} each
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <QuantityStepper
                      value={line.quantity}
                      min={0}
                      onChange={(q) =>
                        setQuantity(line.productId, line.pack, q)
                      }
                    />
                    <p className="min-w-20 text-right text-sm font-medium text-chocolate">
                      {formatPrice(line.unitPrice * line.quantity)}
                    </p>
                    <button
                      type="button"
                      className="text-xs text-ink-muted underline hover:text-chocolate"
                      onClick={() => removeItem(line.productId, line.pack)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="h-fit rounded-sm border border-chocolate/10 bg-white p-5">
              <p className="text-sm text-ink-muted">Subtotal</p>
              <p className="mt-1 font-display text-3xl text-chocolate">
                {formatPrice(subtotal)}
              </p>
              <p className="mt-2 text-xs text-ink-muted">
                Delivery fees ($15–$35) calculated at invoicing.{" "}
                {cupcakeCount} cupcake{cupcakeCount === 1 ? "" : "s"} in cart.
              </p>
              {!meetsMinimum && (
                <p
                  className="mt-3 rounded-sm bg-blush/25 px-3 py-2 text-xs text-chocolate"
                  role="status"
                >
                  Minimum order is a half dozen (6 cupcakes). Add{" "}
                  {6 - cupcakeCount} more to continue.
                </p>
              )}
              {meetsMinimum ? (
                <Link
                  href="/checkout"
                  className="mt-5 flex w-full items-center justify-center rounded-sm bg-blush-deep px-4 py-3 text-sm font-medium text-white hover:bg-chocolate"
                >
                  Continue to checkout
                </Link>
              ) : (
                <span className="mt-5 flex w-full cursor-not-allowed items-center justify-center rounded-sm bg-chocolate/25 px-4 py-3 text-sm font-medium text-cream">
                  Continue to checkout
                </span>
              )}
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full text-center text-xs text-ink-muted underline"
              >
                Clear cart
              </button>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}
