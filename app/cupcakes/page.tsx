import { CupcakesShop } from "@/components/CupcakesShop";
import { PageHero } from "@/components/PageHero";
import { ShopCta } from "@/components/ShopCta";
import { getAllProducts } from "@/lib/data/flavors";
import { createMetadata } from "@/lib/seo";
import { formatPrice } from "@/lib/data/pricing";

export const metadata = createMetadata({
  title: "Cupcakes",
  path: "/cupcakes",
  description:
    "Shop always-available gourmet cupcakes. Assorted dozen, holiday specials, and custom designs. GTA delivery.",
});

export default function CupcakesPage() {
  const products = getAllProducts();
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.slice(0, 8).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          price: p.priceDozen.toFixed(2),
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <PageHero
        eyebrow="Shop"
        title="Cupcakes"
        subtitle={`Handcrafted flavours from ${formatPrice(3.75)} each. Baked fresh daily for Toronto & the GTA.`}
      />
      <CupcakesShop />
      <ShopCta title="Need a custom design?" subtitle="Tell us about your event — we’ll help with flavours, colours, and delivery." />
    </>
  );
}
