import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  href: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
};

export function SpotlightCard({
  href,
  label,
  title,
  description,
  tags,
  className
}: SpotlightCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group rounded-[1.75rem] border border-border bg-card/60 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </p>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-accent" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
