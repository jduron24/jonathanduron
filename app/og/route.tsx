import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(255, 119, 62, 0.5), transparent 24%), radial-gradient(circle at top right, rgba(15, 173, 255, 0.35), transparent 24%), #111320",
          color: "#fff7e8",
          padding: "56px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.35em", textTransform: "uppercase" }}>
          [PLACEHOLDER] Your Name
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1 }}>
            Personal site with taste.
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,247,232,0.72)" }}>
            [PLACEHOLDER] Recruiters, collaborators, curious people: start here.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
