import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartToast } from "@/components/CartToast";
import { CartProvider } from "@/lib/cart/CartProvider";
import { createMetadata, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = localBusinessJsonLd();

  return (
    <html
      lang="en-CA"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="texture-cream flex min-h-full flex-col font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartToast />
        </CartProvider>
      </body>
    </html>
  );
}
