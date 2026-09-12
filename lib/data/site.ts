export const site = {
  name: "Toronto Cupcake",
  tagline: "Delicious cupcakes made fresh for every occasion.",
  founded: 2010,
  founder: "Michelle Harrison",
  email: "inquiry@torontocupcake.com",
  phones: {
    northAmerica: "+1-877-334-9468",
    northAmericaTel: "+18773349468",
    local: "647-478-9464",
    localTel: "+16474789464",
    international: "+001-647-478-9464",
  },
  hours: {
    weekdays: "Monday – Saturday: 7am – 10pm",
    sunday: "Sunday: 7am – 10pm (no pickups; delivery for 2 dozen or more)",
    summary: "Mon–Sun 7am–10pm",
  },
  url: "https://www.torontocupcake.com",
  areaServed: "Toronto & Greater Toronto Area (GTA)",
  deliveryRadiusKm: 80,
  landAcknowledgement:
    "Toronto Cupcake acknowledges that Toronto is in the Dish With One Spoon territory — a treaty between the Anishinaabe, Mississaugas, and Haudenosaunee to share the territory and protect the land in peace, friendship, and respect.",
  flagshipNote:
    "Our flagship Toronto location is opening soon. In the meantime, we are delivery-first across the GTA.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cupcakes", label: "Cupcakes" },
  { href: "/occasions", label: "Occasions" },
  { href: "/corporate", label: "Corporate" },
  { href: "/delivery", label: "Delivery" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
] as const;
