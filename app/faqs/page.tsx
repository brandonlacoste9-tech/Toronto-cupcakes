import { PageHero } from "@/components/PageHero";
import { ShopCta } from "@/components/ShopCta";
import { faqs } from "@/lib/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQs",
  path: "/faqs",
  description:
    "Ordering, delivery, ingredients, allergens, and storage FAQs for Toronto Cupcake.",
});

const categories = [
  { id: "ordering", label: "Ordering" },
  { id: "delivery", label: "Delivery" },
  { id: "ingredients", label: "Ingredients & allergens" },
  { id: "storage", label: "Storage" },
] as const;

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="FAQs"
        subtitle="Everything you need to know about ordering, delivery, ingredients, and keeping cupcakes fresh."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 space-y-12">
        {categories.map((cat) => {
          const items = faqs.filter((f) => f.category === cat.id);
          if (!items.length) return null;
          return (
            <div key={cat.id}>
              <h2 className="font-display text-2xl text-chocolate">{cat.label}</h2>
              <div className="mt-4 divide-y divide-chocolate/10">
                {items.map((item) => (
                  <details key={item.id} className="group py-4">
                    <summary className="cursor-pointer list-none font-medium text-chocolate marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start justify-between gap-4">
                        {item.question}
                        <span className="text-blush-deep transition group-open:rotate-45">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <ShopCta />
    </>
  );
}
