export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <section className="texture-cream border-b border-chocolate/10">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {eyebrow && (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-blush-deep">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display animate-rise text-4xl text-chocolate sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="animate-rise-delay mt-3 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
