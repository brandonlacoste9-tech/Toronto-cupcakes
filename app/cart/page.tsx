import { CartView } from "@/components/CartView";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cart",
  path: "/cart",
  description: "Your Toronto Cupcake cart — review flavours before checkout.",
});

export default function CartPage() {
  return <CartView />;
}
