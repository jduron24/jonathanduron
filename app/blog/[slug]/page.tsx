import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import { ArticleHero } from "@/components/article-hero";
import { getAllPostSlugs, getPostBySlug } from "@/lib/content";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [`/blog/${post.slug}/opengraph-image`]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`/blog/${post.slug}/opengraph-image`]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="pb-20 pt-10 md:pt-16">
      <ArticleHero
        title={post.title}
        description={post.excerpt}
        date={post.date}
        tags={post.tags}
        readingTime={post.readingTime}
      />
      <div className="rounded-[2rem] border border-border bg-card/60 p-6 md:p-10">
        <MDXContent source={post.content} />
      </div>
    </article>
  );
}
