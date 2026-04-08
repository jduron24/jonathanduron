import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-[1.75rem] border border-border bg-card/60 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
        <span>{formatDate(post.date)}</span>
        <span>{post.readingTime}</span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">{post.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-accent" />
      </div>
    </Link>
  );
}
