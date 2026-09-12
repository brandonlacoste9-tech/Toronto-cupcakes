import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShopCta } from "@/components/ShopCta";
import { occasionServices, occasions } from "@/lib/data/occasions";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Occasions",
  path: "/occasions",
  description:
    "Custom cupcakes for weddings, birthdays, showers, graduations, and more. Stand rentals and custom themes.",
});

export default function OccasionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Celebrate"
        title="Occasions"
        subtitle="Every celebration deserves a sweet touch — custom flavours, colours, and designs that reflect your event."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {occasionServices.map((service) => (
            <div key={service.title} className="border-t border-chocolate/15 pt-5">
              <h2 className="font-display text-2xl text-chocolate">
                {service.title}
              </h2>
              <p className="mt-2 text-ink-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-chocolate/10 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl text-chocolate">Select an occasion</h2>
          <div className="stagger-children mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((item) => (
              <article key={item.id}>
                <h3 className="font-display text-xl text-chocolate">{item.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.blurb}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink-muted">
            Planning a corporate event?{" "}
            <Link href="/corporate" className="text-blush-deep hover:underline">
              See Corporate
            </Link>
            .
          </p>
        </div>
      </section>

      <ShopCta
        title="Planning something special?"
        subtitle="Order classic dozens or contact us for custom themes and stand rentals."
      />
    </>
  );
}
