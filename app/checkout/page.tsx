import { CheckoutView } from "@/components/CheckoutView";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Checkout",
  path: "/checkout",
  description:
    "Submit your Toronto Cupcake order request. We’ll email an invoice for PayPal or card payment.",
});

export default function CheckoutPage() {
  return <CheckoutView />;
}
