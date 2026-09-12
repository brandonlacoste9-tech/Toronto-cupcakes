"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data/site";
import { useCart } from "@/lib/cart/CartProvider";

export function Header() {
  const pathname = usePathname();
  const { itemCount, justAdded } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-chocolate/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-chocolate sm:text-2xl"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-sm px-2.5 py-1.5 text-sm transition ${
                  active
                    ? "text-chocolate font-medium"
                    : "text-ink-muted hover:text-chocolate"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cupcakes"
            className="hidden rounded-sm bg-blush-deep px-3 py-2 text-sm font-medium text-white transition hover:bg-chocolate sm:inline-flex"
          >
            Shop
          </Link>
          <Link
            href="/cart"
            className={`relative inline-flex items-center gap-2 rounded-sm border border-blush-deep/40 bg-white px-3 py-2 text-sm text-chocolate transition hover:border-blush-deep ${
              justAdded ? "animate-badge-pulse" : ""
            }`}
            aria-label={`Cart, ${itemCount} items`}
          >
            <PinkBoxIcon />
            <span className="hidden sm:inline">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-blush-deep px-1 text-[11px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="inline-flex rounded-sm border border-chocolate/15 p-2 text-chocolate lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-chocolate/10 bg-cream px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-3 py-2.5 text-base text-chocolate hover:bg-cream-dark"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cupcakes"
              className="mt-2 rounded-sm bg-blush-deep px-3 py-2.5 text-center text-white"
            >
              Shop cupcakes
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function PinkBoxIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="8"
        width="18"
        height="13"
        rx="1.5"
        fill="#E8B4BC"
        stroke="#C4788A"
        strokeWidth="1.5"
      />
      <path
        d="M3 11h18"
        stroke="#C4788A"
        strokeWidth="1.5"
      />
      <path
        d="M12 8V4.5M9 6.5c1.2-1.5 2.8-1.5 3 0M15 6.5c-1.2-1.5-2.8-1.5-3 0"
        stroke="#C4788A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
