export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-sm border border-chocolate/10 bg-white"
        >
          <div className="h-44 animate-pulse bg-cream-dark" />
          <div className="space-y-3 p-4">
            <div className="h-5 w-2/3 animate-pulse rounded bg-cream-dark" />
            <div className="h-4 w-full animate-pulse rounded bg-cream-dark" />
            <div className="h-9 w-28 animate-pulse rounded bg-cream-dark" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6">
      <div className="h-10 w-64 animate-pulse rounded bg-cream-dark" />
      <div className="h-4 w-full max-w-xl animate-pulse rounded bg-cream-dark" />
      <div className="h-4 w-full max-w-lg animate-pulse rounded bg-cream-dark" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-40 animate-pulse rounded bg-cream-dark" />
        <div className="h-40 animate-pulse rounded bg-cream-dark" />
      </div>
    </div>
  );
}
