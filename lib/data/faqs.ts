export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: "ordering" | "delivery" | "ingredients" | "storage";
};

export const faqs: FaqItem[] = [
  {
    id: "custom-notice",
    category: "ordering",
    question: "How many days notice do I need for a custom order?",
    answer:
      "It is helpful to give a minimum of 48 hours notice for custom orders.",
  },
  {
    id: "smallest-order",
    category: "ordering",
    question: "What is the smallest order I can make?",
    answer: "The minimum order is a half dozen cupcakes.",
  },
  {
    id: "advance-notice",
    category: "ordering",
    question: "How much advanced notice to place an order?",
    answer:
      "Place your order before 5pm Toronto time to have it delivered the following day.",
  },
  {
    id: "payment",
    category: "ordering",
    question: "How do I pay for my order?",
    answer:
      "Once we receive your order we check it for errors or omissions, then send an invoice via PayPal. You can pay with PayPal or most major credit cards. We also accept cheques or Interac e-Transfers (Canada only).",
  },
  {
    id: "cards",
    category: "ordering",
    question: "What credit cards do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, and other major cards. We also accept debit cards.",
  },
  {
    id: "when-pay",
    category: "ordering",
    question: "When do I have to pay?",
    answer: "Payment is due when you receive your invoice via email.",
  },
  {
    id: "do-you-deliver",
    category: "delivery",
    question: "Does Toronto Cupcake deliver?",
    answer:
      "Yes. We deliver throughout the GTA, with some same-day service available when capacity allows. See our Delivery page for coverage.",
  },
  {
    id: "delivery-fees",
    category: "delivery",
    question: "What are the delivery fees?",
    answer: "Delivery fees vary by location and typically range from $15–$35 CAD.",
  },
  {
    id: "delivery-times",
    category: "delivery",
    question: "What are your delivery times?",
    answer:
      "Earliest window is 8am–noon. Latest window is noon–6pm, seven days a week. Need something outside these windows? Call or email and we will try to accommodate.",
  },
  {
    id: "pickup",
    category: "delivery",
    question: "Can I pick up instead of delivery?",
    answer:
      "We are delivery-first while our flagship location prepares to open. Pickup availability may change — contact us for the latest.",
  },
  {
    id: "not-home",
    category: "delivery",
    question: "What if no one is home when you deliver?",
    answer:
      "Provide a contact name and number at the delivery location. Please ensure someone is available during the delivery window. We do our best to leave the order with someone or indoors; occasionally we may leave it at the door.",
  },
  {
    id: "gluten-free",
    category: "ingredients",
    question: "Do you have gluten-free cupcakes?",
    answer:
      "Yes, by special order. Please contact us. There is a minimum order of one dozen.",
  },
  {
    id: "preservatives",
    category: "ingredients",
    question: "Do you use preservatives?",
    answer:
      "No. Cupcakes are baked daily with fine ingredients from mostly local suppliers. Flour, milk, eggs, sugar, and butter are sourced locally without additives. Vanilla is from Madagascar or Tahiti. Cream cheese icings are made as used. Chocolates come from Belgium, France, and Switzerland.",
  },
  {
    id: "allergens",
    category: "ingredients",
    question: "Toronto Cupcake allergen alert",
    answer:
      "Toronto Cupcake is NOT a nut-free kitchen. Several flavours use peanuts or other nut products. Customers with severe allergies should err on the side of caution. Cupcakes may contain or contact dairy, eggs, wheat, soybeans, tree nuts, or peanuts.",
  },
  {
    id: "corporate",
    category: "ordering",
    question: "Do you offer corporate event services?",
    answer:
      "Yes. We offer customized cupcakes for corporate events, including logo designs. Visit our Corporate page for details.",
  },
  {
    id: "storage",
    category: "storage",
    question: "How do I store my cupcakes?",
    answer:
      "If eating within a day, store at room temperature. To keep longer, freeze them. Thaw lightly covered with plastic wrap to minimize condensation — about an hour. Do not refrigerate overnight; they will dry out.",
  },
];
