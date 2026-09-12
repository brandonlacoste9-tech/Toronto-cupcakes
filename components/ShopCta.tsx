import Link from "next/link";

export function ShopCta({
  title = "Ready for fresh cupcakes?",
  subtitle = "Order online for next-day GTA delivery in our signature pink box.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-y border-chocolate/10 bg-gradient-to-br from-blush/40 via-cream to-gold-soft/20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
        <div className="max-w-xl space-y-2">
          <h2 className="font-display text-3xl text-chocolate sm:text-4xl">
            {title}
          </h2>
          <p className="text-ink-muted">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/cupcakes"
            className="rounded-sm bg-blush-deep px-5 py-3 text-sm font-medium text-white transition hover:bg-chocolate"
          >
            Shop cupcakes
          </Link>
          <Link
            href="/delivery"
            className="rounded-sm border border-chocolate/25 bg-white/70 px-5 py-3 text-sm font-medium text-chocolate transition hover:border-chocolate"
          >
            Order delivery
          </Link>
        </div>
      </div>
    </section>
  );
}
