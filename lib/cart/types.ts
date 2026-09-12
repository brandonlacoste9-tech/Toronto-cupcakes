export type CartLine = {
  productId: string;
  name: string;
  unitPrice: number;
  quantity: number;
  pack: "each" | "half-dozen" | "dozen";
};

export type CartState = {
  lines: CartLine[];
};

export const CART_STORAGE_KEY = "toronto-cupcake-cart-v1";

export function lineKey(line: Pick<CartLine, "productId" | "pack">): string {
  return `${line.productId}:${line.pack}`;
}

export function cartItemCount(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.quantity, 0);
}

export function cartSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);
}

export function packLabel(pack: CartLine["pack"]): string {
  switch (pack) {
    case "each":
      return "Each";
    case "half-dozen":
      return "Half dozen";
    case "dozen":
      return "Dozen";
  }
}
