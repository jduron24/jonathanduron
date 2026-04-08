import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-start justify-center gap-6 pb-20 pt-16">
      <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">404</p>
      <h1 className="font-display text-6xl uppercase leading-none tracking-[0.05em] sm:text-7xl">
        Page wandered off.
      </h1>
      <p className="max-w-xl text-lg text-foreground/75">
        [PLACEHOLDER] If this was meant to exist, it probably moved somewhere more
        interesting. Let&apos;s get you back to the good stuff.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:translate-y-[-2px]"
      >
        Return home
      </Link>
    </div>
  );
}
