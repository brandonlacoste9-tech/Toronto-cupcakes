import Link from "next/link";
import { site } from "@/lib/data/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-chocolate/10 bg-chocolate text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3 lg:col-span-1">
          <p className="font-display text-2xl text-blush">{site.name}</p>
          <p className="text-sm leading-relaxed text-cream/75">
            Gourmet cupcakes baked fresh daily. Signature pink-box delivery across
            Toronto &amp; the GTA since {site.founded}.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium text-gold-soft">Contact</p>
          <p>
            <a
              className="hover:text-blush"
              href={`tel:${site.phones.northAmericaTel}`}
            >
              {site.phones.northAmerica}
            </a>
          </p>
          <p>
            <a className="hover:text-blush" href={`tel:${site.phones.localTel}`}>
              {site.phones.local}
            </a>
          </p>
          <p>
            <a className="hover:text-blush" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium text-gold-soft">Hours &amp; delivery</p>
          <p className="text-cream/80">{site.hours.summary}</p>
          <p className="text-cream/70">{site.hours.sunday}</p>
          <p className="text-cream/70">{site.areaServed}</p>
          <Link href="/delivery" className="inline-block text-blush hover:underline">
            Delivery areas
          </Link>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-gold-soft">Newsletter</p>
          <p className="text-sm text-cream/70">
            Seasonal flavours and pink-box surprises.
          </p>
          <NewsletterForm variant="dark" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs leading-relaxed text-cream/55 sm:px-6 sm:flex-row sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="max-w-xl">{site.landAcknowledgement}</p>
        </div>
      </div>
    </footer>
  );
}
