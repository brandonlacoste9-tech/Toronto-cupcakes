import { PageHero } from "@/components/PageHero";
import { ShopCta } from "@/components/ShopCta";
import {
  bulkBoxSizes,
  corporateExamples,
  corporateHighlights,
} from "@/lib/data/corporate";
import { site } from "@/lib/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Corporate",
  path: "/corporate",
  description:
    "Branded logo cupcakes for corporate events. Edible fondant graphics, bulk boxes of 1/4/6/12, GTA delivery.",
});

export default function CorporatePage() {
  return (
    <>
      <PageHero
        eyebrow="Brand"
        title="Corporate & branding events"
        subtitle="Custom-branded cupcakes for product launches, client appreciation, and team celebrations — edible logos that look sharp and taste exceptional."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {corporateHighlights.map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-2xl text-chocolate">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-sm bg-chocolate px-6 py-8 text-cream">
          <h2 className="font-display text-2xl text-blush">Bulk box sizes</h2>
          <p className="mt-2 text-cream/75">
            Package your message in boxes of{" "}
            {bulkBoxSizes.map(String).join(", ").replace(/, ([^,]*)$/, ", or $1")}{" "}
            depending on marketing needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {bulkBoxSizes.map((size) => (
              <span
                key={size}
                className="rounded-sm border border-cream/25 px-4 py-2 text-sm"
              >
                Box of {size}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-chocolate/10 bg-cream-dark/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl text-chocolate">Client examples</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {corporateExamples.map((ex) => (
              <article key={ex.id} className="border-l-2 border-gold pl-4">
                <h3 className="font-display text-xl text-chocolate">{ex.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{ex.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink-muted">
            Send graphics as JPG, PNG, GIF, BMP, or SVG. Call{" "}
            <a className="text-blush-deep" href={`tel:${site.phones.northAmericaTel}`}>
              {site.phones.northAmerica}
            </a>{" "}
            or email{" "}
            <a className="text-blush-deep" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      <ShopCta
        title="Sweeten your next campaign"
        subtitle="Order classic boxes online or contact us for logo and fondant branding."
      />
    </>
  );
}
