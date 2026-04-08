import { formatDate } from "@/lib/utils";

type ArticleHeroProps = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime?: string;
};

export function ArticleHero({
  title,
  description,
  date,
  tags,
  readingTime
}: ArticleHeroProps) {
  return (
    <header className="mb-8 space-y-6">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
        <span>{formatDate(date)}</span>
        {readingTime ? <span>{readingTime}</span> : null}
      </div>
      <div className="space-y-4">
        <h1 className="font-display text-6xl uppercase leading-none tracking-[0.04em] text-foreground sm:text-7xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
