import Image from "next/image";

export function FlavorVisual({
  name,
  accent,
  image,
  className = "",
  priority = false,
}: {
  name: string;
  accent: string;
  image: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-cream-dark ${className}`}
      style={{
        background: `linear-gradient(160deg, color-mix(in oklab, ${accent} 18%, #faf6f1), #f0e8df)`,
      }}
    >
      <Image
        src={image}
        alt={`${name} cupcake`}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-chocolate/55 to-transparent p-3 pt-10">
        <span className="inline-block rounded-sm bg-white/90 px-2 py-1 text-[11px] font-medium tracking-wide text-chocolate">
          {name}
        </span>
      </div>
    </div>
  );
}
