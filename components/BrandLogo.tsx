import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data/site";

export function BrandLogo({
  size = "md",
  showWordmark = true,
  href = "/",
  invert = false,
}: {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  href?: string;
  invert?: boolean;
}) {
  const dim = size === "sm" ? 36 : size === "lg" ? 64 : 48;

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 transition hover:opacity-90 ${
        invert ? "text-cream" : "text-chocolate"
      }`}
      aria-label={site.name}
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={dim}
        height={dim}
        priority
        className="shrink-0 rounded-full object-cover shadow-sm ring-1 ring-gold/30"
      />
      {showWordmark && (
        <span
          className={`font-display tracking-wide ${
            size === "lg" ? "text-2xl" : size === "sm" ? "text-lg" : "text-xl sm:text-2xl"
          } ${invert ? "text-blush" : "text-chocolate"}`}
        >
          {site.name}
        </span>
      )}
    </Link>
  );
}
