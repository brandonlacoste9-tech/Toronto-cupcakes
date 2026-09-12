export const pricing = {
  each: 3.75,
  halfDozen: 21.5,
  dozen: 41.5,
  currency: "CAD",
  holiday: {
    eachMin: 3.75,
    eachMax: 5.0,
    halfDozenMin: 20.0,
    halfDozenMax: 28.0,
    dozenMin: 38.0,
    dozenMax: 50.0,
    note: "Special holiday cupcakes are individually priced.",
  },
  deliveryFeeMin: 15,
  deliveryFeeMax: 35,
  minOrderHalfDozens: 1,
  orderCutoffHour: 17,
  orderCutoffLabel: "5pm Toronto time",
  deliveryWindows: [
    { label: "Morning", range: "8am – noon" },
    { label: "Afternoon", range: "noon – 6pm" },
  ],
} as const;

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(amount);
}
