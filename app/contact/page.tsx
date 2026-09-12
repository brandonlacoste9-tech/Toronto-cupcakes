import { PageHero } from "@/components/PageHero";
import { ShopCta } from "@/components/ShopCta";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Contact Toronto Cupcake — phones, email, hours, and inquiry form. Flagship opening soon; delivery-first across the GTA.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Hello"
        title="Contact"
        subtitle={site.flagshipNote}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl text-chocolate">Phone</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <span className="text-ink-muted">North America: </span>
                <a
                  className="text-chocolate hover:text-blush-deep"
                  href={`tel:${site.phones.northAmericaTel}`}
                >
                  {site.phones.northAmerica}
                </a>
              </li>
              <li>
                <span className="text-ink-muted">Toronto &amp; GTA: </span>
                <a
                  className="text-chocolate hover:text-blush-deep"
                  href={`tel:${site.phones.localTel}`}
                >
                  {site.phones.local}
                </a>
              </li>
              <li>
                <span className="text-ink-muted">Outside North America: </span>
                <span className="text-chocolate">{site.phones.international}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-chocolate">Email</h2>
            <a
              className="mt-3 inline-block text-blush-deep hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>

          <div>
            <h2 className="font-display text-2xl text-chocolate">Hours</h2>
            <p className="mt-3 text-sm text-ink-muted">{site.hours.weekdays}</p>
            <p className="mt-1 text-sm text-ink-muted">{site.hours.sunday}</p>
          </div>

          <div className="rounded-sm border border-chocolate/10 bg-white/70 p-5">
            <h2 className="font-display text-xl text-chocolate">Opening soon</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Our flagship Toronto location is opening soon. Until then we are
              delivery-first across the GTA.
            </p>
          </div>
        </div>

        <div className="rounded-sm border border-chocolate/10 bg-white p-6">
          <h2 className="font-display text-2xl text-chocolate">Send an inquiry</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Custom orders, corporate branding, allergens, or delivery questions —
            we usually reply within one business day.
          </p>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </section>

      <ShopCta title="Order for delivery" />
    </>
  );
}
