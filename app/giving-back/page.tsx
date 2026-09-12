import { PageHero } from "@/components/PageHero";
import { ShopCta } from "@/components/ShopCta";
import { site } from "@/lib/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Giving Back",
  path: "/giving-back",
  description:
    "Toronto Cupcake community giving — land acknowledgement and support for neighbourhood causes across the GTA.",
});

export default function GivingBackPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Giving back"
        subtitle={`“We make a living by what we get. We make a life by what we give.” — Sir Winston Churchill`}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 space-y-10">
        <p className="leading-relaxed text-ink">
          Toronto Cupcake works with neighbourhood and community organisations in
          the GTA. Since opening in {site.founded}, we have assisted by donating
          cupcakes, time, and care to many charitable causes.
        </p>

        <div className="rounded-sm border border-chocolate/10 bg-white/70 p-6">
          <h2 className="font-display text-2xl text-chocolate">
            Land acknowledgement
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {site.landAcknowledgement}
          </p>
        </div>

        <article>
          <h2 className="font-display text-2xl text-chocolate">
            March 8 — International Women&apos;s Day
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            We recognize and celebrate the achievements of women around the world.
            IWD is a collective day of celebration and a call for gender parity —
            marked each year with events, advocacy, and community gatherings.
          </p>
        </article>

        <article>
          <h2 className="font-display text-2xl text-chocolate">June — Pride Month</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            June honours LGBTQ+ communities worldwide, rooted in the Stonewall
            uprising of 1969 and celebrated in Toronto through Pride events that
            bring the city together in colour, solidarity, and joy.
          </p>
        </article>

        <article>
          <h2 className="font-display text-2xl text-chocolate">
            May 5 — National Day of Awareness for Missing and Murdered Indigenous
            Women and Girls
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            We acknowledge the ongoing national crisis of violence against
            Indigenous women, girls, and two-spirit people. Awareness days matter
            when paired with listening, learning, and supporting Indigenous-led
            organisations working toward safety and justice.
          </p>
        </article>
      </section>

      <ShopCta title="Order with purpose" subtitle="Celebrate someone — or support a cause with a pink-box delivery." />
    </>
  );
}
