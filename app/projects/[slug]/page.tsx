import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Github } from "lucide-react";
import { MDXContent } from "@/components/mdx-content";
import { ArticleHero } from "@/components/article-hero";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [`/projects/${project.slug}/opengraph-image`]
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [`/projects/${project.slug}/opengraph-image`]
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8 pb-20 pt-10 md:pt-16">
      <ArticleHero
        title={project.title}
        description={project.description}
        date={project.date}
        tags={project.tags}
      />
      <div className="flex flex-wrap gap-3">
        {project.url ? (
          <a
            href={project.url}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:translate-y-[-2px]"
            target="_blank"
            rel="noreferrer"
          >
            Visit project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
        {project.github ? (
          <a
            href={project.github}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-muted"
            target="_blank"
            rel="noreferrer"
          >
            View code
            <Github className="h-4 w-4" />
          </a>
        ) : null}
      </div>
      <div className="rounded-[2rem] border border-border bg-card/60 p-6 md:p-10">
        <MDXContent source={project.content} />
      </div>
    </article>
  );
}
