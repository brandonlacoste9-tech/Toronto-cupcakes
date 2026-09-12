import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShopCta } from "@/components/ShopCta";
import { site } from "@/lib/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  path: "/about",
  description:
    "Founded in 2010 by Michelle Harrison — one of Canada’s first gourmet cupcakeries. Fresh daily baking and community giving.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About Toronto Cupcake"
        subtitle={`Founded in ${site.founded}, we are proud to be a leading destination for gourmet branded cupcakes across Toronto and the GTA.`}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-lg leading-relaxed text-ink">
          Whether you&apos;re celebrating a birthday, hosting a corporate event, or
          simply indulging in a sweet treat, our handcrafted cupcakes are made
          fresh daily using the finest ingredients. We love that our treats make
          people happy with every bite.
        </p>
        <p className="mt-6 leading-relaxed text-ink-muted">
          At Toronto Cupcake, we believe in giving back. Since our inception we
          have partnered with local organizations, donating time and cupcakes to
          causes that make a difference. We welcome opportunities to collaborate
          on charitable events.
        </p>
      </section>

      <section className="border-y border-chocolate/10 bg-chocolate text-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">
            Founder
          </p>
          <h2 className="mt-2 font-display text-3xl text-blush">
            About Michelle
          </h2>
          <p className="mt-4 leading-relaxed text-cream/80">
            Toronto Cupcake was created by {site.founder} to pursue her love of
            baking. Inspired by her mother, Michelle opened Toronto Cupcake in
            August {site.founded} as one of Canada&apos;s first gourmet
            cupcakeries.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-2xl text-chocolate">Community</h2>
        <p className="mt-3 text-ink-muted leading-relaxed">
          From International Women&apos;s Day to Pride and awareness initiatives,
          we show up for our neighbours.{" "}
          <Link href="/giving-back" className="text-blush-deep hover:underline">
            Read about giving back
          </Link>
          .
        </p>
      </section>

      <ShopCta />
    </>
  );
}
