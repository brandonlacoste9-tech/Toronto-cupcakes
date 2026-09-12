import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShopCta } from "@/components/ShopCta";
import { deliveryAreas } from "@/lib/data/delivery-areas";
import { pricing } from "@/lib/data/pricing";
import { site } from "@/lib/data/site";
import { createMetadata } from "@/lib/seo";
import { formatPrice } from "@/lib/data/pricing";

export const metadata = createMetadata({
  title: "Delivery",
  path: "/delivery",
  description:
    "Next-day cupcake delivery across ~80km of the GTA. Trackable courier, $15–$35 fees, morning and afternoon windows.",
});

export default function DeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="GTA"
        title="Delivery"
        subtitle={`Swift, reliable cupcake delivery throughout Toronto and the Greater Toronto Area — about ${site.deliveryRadiusKm}km around the city.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl text-chocolate">Next-day</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Order before {pricing.orderCutoffLabel} for delivery the following
              day. Some same-day service may be available.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-chocolate">Fees</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Delivery fees typically range from{" "}
              {formatPrice(pricing.deliveryFeeMin)}–
              {formatPrice(pricing.deliveryFeeMax)} CAD based on location.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-chocolate">Windows</h2>
            <ul className="mt-2 space-y-1 text-sm text-ink-muted">
              {pricing.deliveryWindows.map((w) => (
                <li key={w.label}>
                  {w.label}: {w.range}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink-muted">
          Trackable courier delivery keeps your pink box on schedule. Custom
          designs, logos, and personalized messages are welcome — see{" "}
          <Link href="/corporate" className="text-blush-deep hover:underline">
            Corporate
          </Link>
          .
        </p>
      </section>

      <section className="border-y border-chocolate/10 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl text-chocolate">Delivery areas</h2>
          <p className="mt-2 text-ink-muted">
            We deliver across Toronto, Mississauga, Vaughan, Markham, and beyond.
          </p>
          <ul className="mt-8 columns-2 gap-x-8 sm:columns-3 md:columns-4">
            {deliveryAreas.map((area) => (
              <li
                key={area}
                className="break-inside-avoid border-b border-chocolate/10 py-2 text-sm text-chocolate"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-muted">
            Questions?{" "}
            <a href={`tel:${site.phones.northAmericaTel}`} className="text-blush-deep">
              {site.phones.northAmerica}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${site.email}`} className="text-blush-deep">
              {site.email}
            </a>
          </p>
        </div>
      </section>

      <ShopCta title="Order for delivery" subtitle="Shop cupcakes, then select delivery when you check out." />
    </>
  );
}
