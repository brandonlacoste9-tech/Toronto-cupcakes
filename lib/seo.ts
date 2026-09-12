import type { Metadata } from "next";
import { site } from "./data/site";

const defaultDescription =
  "Gourmet cupcakes baked fresh daily. GTA delivery in our signature pink box. Founded in 2010 by Michelle Harrison.";

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} — Fresh gourmet cupcakes, GTA delivery`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: site.name,
    description: defaultDescription,
    url: site.url,
    email: site.email,
    telephone: [site.phones.northAmerica, site.phones.local],
    foundingDate: String(site.founded),
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 43.6532,
        longitude: -79.3832,
      },
      geoRadius: `${site.deliveryRadiusKm * 1000}`,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    servesCuisine: "Cupcakes",
    priceRange: "$$",
  };
}
