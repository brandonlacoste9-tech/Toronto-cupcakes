import Link from "next/link";
import { AnimatedHero } from "@/components/AnimatedHero";
import { ShopCta } from "@/components/ShopCta";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  path: "/",
  description:
    "Toronto Cupcake — gourmet cupcakes baked fresh daily. Signature pink-box delivery across Toronto & the GTA since 2010.",
});

const whyUs = [
  {
    title: "Baked fresh daily",
    body: "Maximum flavour and quality — never from a freezer aisle.",
  },
  {
    title: "Perfect for any occasion",
    body: "Corporate events, weddings, birthdays, or just because.",
  },
  {
    title: "Custom designs",
    body: "Match your theme, colours, or brand with handcrafted finishes.",
  },
  {
    title: "GTA delivery",
    body: "Fast, trackable courier delivery across ~80km of the GTA.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <AnimatedHero />

      <section className="border-b border-chocolate/10 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blush-deep">
            Loved across the GTA
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "The pink box arrived right on time for our board meeting — logo cupcakes that actually tasted as good as they looked.",
                name: "Priya M.",
                place: "Downtown Toronto",
              },
              {
                quote:
                  "We order for birthdays every year. Fresh, beautiful, and the kids still talk about the red velvet.",
                name: "Daniel & Ana",
                place: "Mississauga",
              },
              {
                quote:
                  "Next-day delivery to Vaughan made our last-minute shower feel effortless. Assorted dozen was perfect.",
                name: "Jordan K.",
                place: "Vaughan",
              },
            ].map((t) => (
              <blockquote key={t.name} className="border-l-2 border-blush-deep pl-4">
                <p className="text-sm leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-3 text-xs text-ink-muted">
                  <span className="font-medium text-chocolate">{t.name}</span>
                  {" · "}
                  {t.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-3xl text-chocolate sm:text-4xl">
          Why Toronto Cupcake
        </h2>
        <p className="mt-2 max-w-2xl text-ink-muted">
          One of Canada’s first gourmet cupcakeries — warm, premium, and made for
          celebration.
        </p>
        <div className="stagger-children mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-xl text-chocolate">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-chocolate/10 bg-white/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blush-deep">
              Signature
            </p>
            <h2 className="mt-2 font-display text-3xl text-chocolate sm:text-4xl">
              The pink box
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Our signature pink delivery box is how celebrations arrive across
              Toronto and the GTA — fresh cupcakes, thoughtfully packed, ready to
              make someone’s day.
            </p>
            <Link
              href="/cupcakes"
              className="mt-6 inline-flex text-sm font-medium text-blush-deep hover:underline"
            >
              Browse always-available flavours →
            </Link>
          </div>
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-sm"
            style={{
              background:
                "linear-gradient(145deg, #f5d0d6 0%, #e8b4bc 40%, #c4788a 100%)",
            }}
            role="img"
            aria-label="Signature pink Toronto Cupcake delivery box"
          >
            <div className="absolute inset-8 border border-white/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-display text-3xl text-chocolate/80 sm:text-4xl">
                Pink box delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl text-chocolate sm:text-4xl">
          Seasonal &amp; always available
        </h2>
        <p className="mt-2 max-w-2xl text-ink-muted">
          Classics you can count on, plus holiday and special-event collections
          that change with the calendar.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              href: "/cupcakes",
              title: "Always Available",
              body: "Chocolate Peanut Butter, Red Velvet, Lemon, and more.",
            },
            {
              href: "/cupcakes#holidays",
              title: "Holidays",
              body: "Individually priced seasonal specials.",
            },
            {
              href: "/occasions",
              title: "Special events",
              body: "Weddings, showers, grads — custom themes welcome.",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group border-b border-chocolate/15 pb-4 transition hover:border-blush-deep"
            >
              <h3 className="font-display text-2xl text-chocolate group-hover:text-blush-deep">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{card.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-chocolate text-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
          <Link href="/occasions" className="group block space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">
              Celebrate
            </p>
            <h2 className="font-display text-3xl group-hover:text-blush">
              Occasions
            </h2>
            <p className="text-cream/70">
              Weddings, birthdays, showers, grads — plus stand rentals and custom
              themes.
            </p>
          </Link>
          <Link href="/corporate" className="group block space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">
              Brand
            </p>
            <h2 className="font-display text-3xl group-hover:text-blush">
              Corporate
            </h2>
            <p className="text-cream/70">
              Logo fondant branding, bulk boxes of 1 / 4 / 6 / 12, and event
              displays.
            </p>
          </Link>
        </div>
      </section>

      <ShopCta />
    </>
  );
}
