import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/content";

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
  const project = await getProjectBySlug(params.slug);

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
            "radial-gradient(circle at top right, rgba(15, 173, 255, 0.42), transparent 28%), #111320",
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
          <span>Project</span>
          <span>[PLACEHOLDER] Your Name</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1 }}>
            {project?.title ?? "[PLACEHOLDER] Missing Project"}
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,247,232,0.72)" }}>
            {project?.description ?? "[PLACEHOLDER] Project description goes here."}
          </div>
        </div>
      </div>
    ),
    size
  );
}
