import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { SectionHeading } from "@/components/section-heading";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Short notes on building products, validating ideas, and learning in public."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12 pb-20 pt-10 md:pt-16">
      <SectionHeading
        eyebrow=""
        title="Notes from the build"
        description="Short reads on ideas, customer conversations, and what is getting clearer each week."
      />
      <div className="grid gap-5">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
