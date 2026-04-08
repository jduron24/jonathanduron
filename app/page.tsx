import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { getFeaturedProject, getLatestPost } from "@/lib/content";
import currentBookImage from "@/images/cur_book.jpg";
import portraitImage from "@/images/pp_pic2.jpg";

export const metadata: Metadata = {
  title: "Home",
  description:
    "[PLACEHOLDER] A bold personal site for sharing work, writing, and current obsessions."
};

export default function HomePage() {
  const latestPost = getLatestPost();
  const featuredProject = getFeaturedProject();

  return (
    <div className="space-y-20 pb-20 pt-10 md:space-y-28 md:pt-16">
      <MotionSection className="relative overflow-hidden rounded-[2rem] border border-border bg-card/60 px-7 py-8 shadow-glow backdrop-blur md:px-12 md:py-12">
        <div className="mesh absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-grid bg-[size:34px_34px] opacity-[0.07]" />
        <div className="relative grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12">
          <div className="space-y-8 md:space-y-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Natural Builder with taste
            </p>
            <div className="max-w-3xl space-y-5">
              <h1 className="font-display text-6xl uppercase leading-[0.9] tracking-[0.03em] text-foreground sm:text-7xl md:text-[7rem]">
                Jonathan
                <br />
                Duron
              </h1>
              <p className="max-w-xl text-lg leading-8 text-foreground/78 sm:text-[1.35rem] sm:leading-9">
                Natural builder drawn to complexity, turning scattered ideas into
                clear, working systems that create momentum.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:translate-y-[-2px]"
              >
                See Builds
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-muted"
              >
                More About Me
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:max-w-[23rem] md:justify-self-end">
            <div className="rounded-[1.75rem] border border-border bg-background/70 p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Current status
              </p>
              <p className="mt-4 text-[1.9rem] font-semibold leading-[1.2] text-foreground">
                Open to sharp teams, ambitious products, and generous collaborators.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-background/50 p-4">
              <div className="relative min-h-[320px] overflow-hidden rounded-[1.25rem] border border-border bg-gradient-to-br from-accent/15 via-transparent to-sky-400/10 md:min-h-[420px]">
                <Image
                  src={portraitImage}
                  alt="Portrait of Jonathan Duron"
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {/* Portrait */}
                  </p>
                </div>
              </div>
            </div>
            {/*
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-border bg-background/50 p-5">
                <p className="font-mono text-xs uppercase text-muted-foreground">
                  Focus
                </p>
                <p className="mt-3 text-sm text-foreground/80">
                  [PLACEHOLDER] product engineering, design systems, creative tooling
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-background/50 p-5">
                <p className="font-mono text-xs uppercase text-muted-foreground">
                  Mood
                </p>
                <p className="mt-3 text-sm text-foreground/80">
                  [PLACEHOLDER] calm, opinionated, still allergic to boring software
                </p>
              </div>
            </div>
            */}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading
          eyebrow=""
          title="A quick tour"
          description=""
        />
        <div className="grid gap-5 md:grid-cols-2">
          {latestPost ? (
            <SpotlightCard
              href={`/blog/${latestPost.slug}`}
              label="Latest writing"
              title={latestPost.title}
              description={latestPost.excerpt}
              tags={latestPost.tags}
            />
          ) : null}
          {featuredProject ? (
            <SpotlightCard
              href={`/projects/${featuredProject.slug}`}
              label="Featured build"
              title={featuredProject.title}
              description={featuredProject.description}
              tags={featuredProject.tags}
            />
          ) : null}
        </div>
        <div className="rounded-[1.75rem] border border-border bg-card/60 p-4 md:col-span-2">
          <p className="px-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Current book read
          </p>
          <div className="mt-4 flex items-center gap-4 rounded-[1.25rem] border border-dashed border-border bg-background/50 p-4">
            <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-[1rem] border border-border bg-gradient-to-br from-accent/15 via-transparent to-sky-400/10">
              <Image
                src={currentBookImage}
                alt="Cover of The Mom Test by Rob Fitzpatrick"
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold leading-tight text-foreground">
                The Mom Test: How to Talk to Customers & Learn If Your Business Is a Good Idea When Everyone Is Lying to You
              </p>
              <p className="text-sm leading-6 text-foreground/75">
                Rob Fitzpatrick

              </p>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
