import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function Image({
  params
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(255, 119, 62, 0.55), transparent 30%), #111320",
          color: "#fff7e8",
          padding: "56px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: "0.35em"
          }}
        >
          <span>Blog</span>
          <span>[PLACEHOLDER] Your Name</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1 }}>
            {post?.title ?? "[PLACEHOLDER] Missing Post"}
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,247,232,0.72)" }}>
            {post?.excerpt ?? "[PLACEHOLDER] Short excerpt goes here."}
          </div>
        </div>
      </div>
    ),
    size
  );
}
