"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/lib/data/site";

export function AnimatedHero() {
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    function onMove(e: PointerEvent) {
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--px", String(x * 12));
      stage.style.setProperty("--py", String(y * 8));
    }

    stage.addEventListener("pointermove", onMove);
    return () => stage.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={stageRef}
      className="hero-stage relative min-h-[100svh] overflow-hidden text-cream"
      style={{ ["--px" as string]: "0", ["--py" as string]: "0" }}
      aria-label="Toronto Cupcake hero"
    >
      <div className="hero-media absolute inset-[-4%]">
        <Image
          src="/images/hero-cupcakes.png"
          alt="Assortment of gourmet Toronto Cupcake cupcakes with blush, chocolate, and strawberry frosting"
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover object-[78%_42%]"
        />
      </div>
      <div className="hero-scrim pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-glow-orb hero-glow-orb-a" />
        <div className="hero-glow-orb hero-glow-orb-b" />
        <div className="hero-sprinkles">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={`sprinkle sprinkle-${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 md:justify-center md:pb-24 md:pt-28">
        <div className="max-w-xl">
          <p className="hero-copy-1 text-xs font-medium uppercase tracking-[0.28em] text-blush">
            Est. {site.founded} · Toronto &amp; GTA
          </p>
          <h1 className="hero-copy-2 font-display mt-4 text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            {site.name.toUpperCase()}
          </h1>
          <p className="hero-copy-3 mt-5 text-lg text-cream/90 sm:text-xl">
            {site.tagline}
          </p>
          <div className="hero-copy-4 mt-8 flex flex-wrap gap-3">
            <Link
              href="/cupcakes"
              className="rounded-sm bg-blush px-6 py-3.5 text-sm font-semibold text-chocolate transition hover:bg-white"
            >
              Shop cupcakes
            </Link>
            <Link
              href="/delivery"
              className="rounded-sm border border-cream/45 bg-cream/5 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur-sm transition hover:bg-cream/15"
            >
              Order delivery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
