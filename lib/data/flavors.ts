import { pricing } from "./pricing";

export type Allergen =
  | "dairy"
  | "eggs"
  | "wheat"
  | "soy"
  | "peanuts"
  | "tree nuts";

export type Flavor = {
  id: string;
  name: string;
  slug: string;
  description: string;
  cake: string;
  frosting: string;
  ingredients: string[];
  allergens: Allergen[];
  accent: string;
  image: string;
  category: "always" | "assorted" | "holiday";
  priceEach: number;
  priceHalfDozen: number;
  priceDozen: number;
};

const basePrices = {
  priceEach: pricing.each,
  priceHalfDozen: pricing.halfDozen,
  priceDozen: pricing.dozen,
};

function flavor(
  partial: Omit<
    Flavor,
    "priceEach" | "priceHalfDozen" | "priceDozen" | "category" | "image"
  > & { category?: Flavor["category"]; image?: string },
): Flavor {
  const { image: customImage, category, ...rest } = partial;
  return {
    ...basePrices,
    ...rest,
    category: category ?? "always",
    image: customImage ?? `/images/flavors/${partial.slug}.png`,
  };
}

export const assortedDozen: Flavor = flavor({
  id: "assorted-dozen",
  name: "Assorted Dozen",
  slug: "assorted-dozen",
  description:
    "One Dozen One Click — can’t decide? We’ll pick 12 delicious treats for you.",
  cake: "Chef’s selection",
  frosting: "Assorted",
  ingredients: [
    "Flour",
    "Sugar",
    "Butter",
    "Eggs",
    "Milk",
    "Seasonal fillings and frostings",
  ],
  allergens: ["dairy", "eggs", "wheat", "soy", "peanuts", "tree nuts"],
  accent: "#C4788A",
  category: "assorted",
});

export const alwaysAvailable: Flavor[] = [
  flavor({
    id: "chocolate-peanut-butter",
    name: "Chocolate Peanut Butter",
    slug: "chocolate-peanut-butter",
    description: "Rich chocolate cake crowned with creamy peanut butter frosting.",
    cake: "Chocolate",
    frosting: "Peanut butter",
    ingredients: ["Chocolate cake", "Peanut butter frosting", "Butter", "Sugar"],
    allergens: ["dairy", "eggs", "wheat", "peanuts", "soy"],
    accent: "#6B3F2A",
  }),
  flavor({
    id: "chocolate-hazelnut",
    name: "Chocolate Hazelnut",
    slug: "chocolate-hazelnut",
    description: "Chocolate cake with smooth hazelnut frosting.",
    cake: "Chocolate",
    frosting: "Hazelnut",
    ingredients: ["Chocolate cake", "Hazelnut frosting", "Cocoa"],
    allergens: ["dairy", "eggs", "wheat", "tree nuts", "soy"],
    accent: "#5C3A21",
  }),
  flavor({
    id: "vanilla-coconut",
    name: "Vanilla Coconut",
    slug: "vanilla-coconut",
    description: "Light vanilla cake finished with coconut frosting.",
    cake: "Vanilla",
    frosting: "Coconut",
    ingredients: ["Vanilla cake", "Coconut frosting", "Shredded coconut"],
    allergens: ["dairy", "eggs", "wheat"],
    accent: "#E8D5C4",
  }),
  flavor({
    id: "chocolate-coconut",
    name: "Chocolate Coconut",
    slug: "chocolate-coconut",
    description: "Chocolate cake topped with coconut frosting.",
    cake: "Chocolate",
    frosting: "Coconut",
    ingredients: ["Chocolate cake", "Coconut frosting"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#4A2F23",
  }),
  flavor({
    id: "chocolate-chocolate",
    name: "Chocolate Chocolate",
    slug: "chocolate-chocolate",
    description: "Double chocolate — cake and frosting.",
    cake: "Chocolate",
    frosting: "Chocolate",
    ingredients: ["Chocolate cake", "Chocolate frosting", "Cocoa"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#3D2317",
  }),
  flavor({
    id: "chocolate-vanilla",
    name: "Chocolate Vanilla",
    slug: "chocolate-vanilla",
    description: "Chocolate cake with classic vanilla frosting.",
    cake: "Chocolate",
    frosting: "Vanilla",
    ingredients: ["Chocolate cake", "Vanilla frosting"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#7A4B32",
  }),
  flavor({
    id: "red-velvet",
    name: "Red Velvet",
    slug: "red-velvet",
    description: "Signature red velvet with cream cheese frosting.",
    cake: "Red velvet",
    frosting: "Cream cheese",
    ingredients: ["Red velvet cake", "Cream cheese frosting"],
    allergens: ["dairy", "eggs", "wheat"],
    accent: "#9B2D3B",
  }),
  flavor({
    id: "vanilla-vanilla",
    name: "Vanilla Vanilla",
    slug: "vanilla-vanilla",
    description: "Pure vanilla cake and frosting — Madagascar vanilla.",
    cake: "Vanilla",
    frosting: "Vanilla",
    ingredients: ["Vanilla cake", "Vanilla frosting", "Madagascar vanilla"],
    allergens: ["dairy", "eggs", "wheat"],
    accent: "#F5E6D3",
  }),
  flavor({
    id: "vanilla-chocolate",
    name: "Vanilla Chocolate",
    slug: "vanilla-chocolate",
    description: "Vanilla cake with chocolate frosting.",
    cake: "Vanilla",
    frosting: "Chocolate",
    ingredients: ["Vanilla cake", "Chocolate frosting"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#C4A484",
  }),
  flavor({
    id: "vanilla-chocolate-ganache",
    name: "Vanilla Chocolate Ganache",
    slug: "vanilla-chocolate-ganache",
    description: "Vanilla cake finished with silky chocolate ganache.",
    cake: "Vanilla",
    frosting: "Chocolate ganache",
    ingredients: ["Vanilla cake", "Chocolate ganache", "Cream"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#8B6914",
  }),
  flavor({
    id: "chocolate-caramel",
    name: "Chocolate Caramel",
    slug: "chocolate-caramel",
    description: "Chocolate cake with caramel frosting.",
    cake: "Chocolate",
    frosting: "Caramel",
    ingredients: ["Chocolate cake", "Caramel frosting"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#A67C52",
  }),
  flavor({
    id: "vanilla-caramel",
    name: "Vanilla Caramel",
    slug: "vanilla-caramel",
    description: "Vanilla cake with caramel frosting.",
    cake: "Vanilla",
    frosting: "Caramel",
    ingredients: ["Vanilla cake", "Caramel frosting"],
    allergens: ["dairy", "eggs", "wheat"],
    accent: "#D4A574",
  }),
  flavor({
    id: "chocolate-caramel-ii",
    name: "Chocolate Caramel II",
    slug: "chocolate-caramel-ii",
    description: "Chocolate cake with an elevated caramel finish.",
    cake: "Chocolate",
    frosting: "Caramel II",
    ingredients: ["Chocolate cake", "Caramel frosting", "Sea salt"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#8B5E3C",
  }),
  flavor({
    id: "lemon",
    name: "Lemon",
    slug: "lemon",
    description: "Bright lemon cake with citrus frosting.",
    cake: "Lemon",
    frosting: "Lemon",
    ingredients: ["Lemon cake", "Lemon frosting", "Citrus zest"],
    allergens: ["dairy", "eggs", "wheat"],
    accent: "#E8D48A",
  }),
  flavor({
    id: "chocolate-toffee",
    name: "Chocolate Toffee",
    slug: "chocolate-toffee",
    description: "Chocolate cake with toffee frosting and crunch.",
    cake: "Chocolate",
    frosting: "Toffee",
    ingredients: ["Chocolate cake", "Toffee frosting", "Toffee bits"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#9C6B3C",
  }),
  flavor({
    id: "chocolate-oreo",
    name: "Chocolate Oreo",
    slug: "chocolate-oreo",
    description: "Chocolate cake with cookies-and-cream frosting.",
    cake: "Chocolate",
    frosting: "Oreo",
    ingredients: ["Chocolate cake", "Cookies-and-cream frosting", "Cookie crumbs"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#2C2C2C",
  }),
  flavor({
    id: "hummingbird",
    name: "Hummingbird",
    slug: "hummingbird",
    description: "Banana-pineapple spice cake with cream cheese frosting.",
    cake: "Hummingbird",
    frosting: "Cream cheese",
    ingredients: ["Banana", "Pineapple", "Pecans", "Cream cheese frosting"],
    allergens: ["dairy", "eggs", "wheat", "tree nuts"],
    accent: "#C9A66B",
  }),
  flavor({
    id: "red-velvet-fudge",
    name: "Red Velvet Fudge",
    slug: "red-velvet-fudge",
    description: "Red velvet cake with fudge frosting.",
    cake: "Red velvet",
    frosting: "Fudge",
    ingredients: ["Red velvet cake", "Fudge frosting"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#7A1F2B",
  }),
  flavor({
    id: "chocolate-chocolate-ganache",
    name: "Chocolate Chocolate Ganache",
    slug: "chocolate-chocolate-ganache",
    description: "Chocolate cake draped in chocolate ganache.",
    cake: "Chocolate",
    frosting: "Chocolate ganache",
    ingredients: ["Chocolate cake", "Chocolate ganache"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#2A1810",
  }),
  flavor({
    id: "hot-fudge-sundae",
    name: "Hot Fudge Sundae",
    slug: "hot-fudge-sundae",
    description: "A sundae-inspired cupcake with hot fudge vibes.",
    cake: "Vanilla or chocolate",
    frosting: "Hot fudge sundae",
    ingredients: ["Cake", "Fudge frosting", "Cherry garnish style"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#B84A3A",
  }),
  flavor({
    id: "chocolate-mocha",
    name: "Chocolate Mocha",
    slug: "chocolate-mocha",
    description: "Chocolate cake with mocha frosting.",
    cake: "Chocolate",
    frosting: "Mocha",
    ingredients: ["Chocolate cake", "Mocha frosting", "Coffee"],
    allergens: ["dairy", "eggs", "wheat", "soy"],
    accent: "#4E342E",
  }),
  flavor({
    id: "red-velvet-raspberry",
    name: "Red Velvet Raspberry",
    slug: "red-velvet-raspberry",
    description: "Red velvet cake with raspberry frosting.",
    cake: "Red velvet",
    frosting: "Raspberry",
    ingredients: ["Red velvet cake", "Raspberry frosting"],
    allergens: ["dairy", "eggs", "wheat"],
    accent: "#C23B5A",
  }),
  flavor({
    id: "vanilla-strawberry",
    name: "Vanilla Strawberry",
    slug: "vanilla-strawberry",
    description: "Vanilla cake with strawberry frosting.",
    cake: "Vanilla",
    frosting: "Strawberry",
    ingredients: ["Vanilla cake", "Strawberry frosting"],
    allergens: ["dairy", "eggs", "wheat"],
    accent: "#E8A0B0",
  }),
];

export const holidayTeasers = [
  {
    id: "valentines",
    name: "Valentine’s Collection",
    blurb: "Blush hearts and chocolate pairings for February.",
  },
  {
    id: "halloween",
    name: "Halloween Specials",
    blurb: "Playful seasonal designs — individually priced.",
  },
  {
    id: "holiday",
    name: "Holiday Season",
    blurb: "Festive flavours and colours for December celebrations.",
  },
] as const;

export function getFlavorById(id: string): Flavor | undefined {
  if (id === assortedDozen.id) return assortedDozen;
  return alwaysAvailable.find((f) => f.id === id);
}

export function getAllProducts(): Flavor[] {
  return [assortedDozen, ...alwaysAvailable];
}
