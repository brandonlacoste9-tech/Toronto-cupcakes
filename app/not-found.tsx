import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-4 py-20 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-blush-deep">
        404
      </p>
      <h1 className="mt-2 font-display text-4xl text-chocolate sm:text-5xl">
        This page crumbled
      </h1>
      <p className="mt-3 max-w-md text-ink-muted">
        We couldn’t find what you were looking for. Head back for fresh cupcakes
        and pink-box delivery.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-sm bg-chocolate px-5 py-3 text-sm font-medium text-cream"
        >
          Home
        </Link>
        <Link
          href="/cupcakes"
          className="rounded-sm bg-blush-deep px-5 py-3 text-sm font-medium text-white"
        >
          Shop cupcakes
        </Link>
      </div>
    </section>
  );
}
