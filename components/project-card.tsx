import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectMeta } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <article className="rounded-[1.75rem] border border-border bg-card/60 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          {formatDate(project.date)}
        </p>
        <div className="flex items-center gap-2">
          {project.github ? (
            <a
              href={project.github}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:bg-muted"
              aria-label={`${project.title} GitHub`}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          ) : null}
          {project.url ? (
            <a
              href={project.url}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:bg-muted"
              aria-label={`${project.title} external link`}
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
      <Link href={`/projects/${project.slug}`} className="block">
        <h3 className="mt-5 text-2xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
