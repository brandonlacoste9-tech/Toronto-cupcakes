import { ImageResponse } from "next/og";

export const alt = "Toronto Cupcake — fresh gourmet cupcakes, GTA delivery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "linear-gradient(145deg, #3d2317 0%, #c4788a 55%, #e8b4bc 100%)",
          color: "#faf6f1",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          Est. 2010
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 600,
            marginTop: 12,
            lineHeight: 1.05,
          }}
        >
          Toronto Cupcake
        </div>
        <div style={{ fontSize: 32, marginTop: 20, maxWidth: 800, opacity: 0.92 }}>
          Delicious cupcakes made fresh for every occasion.
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 16,
            fontSize: 22,
            opacity: 0.9,
          }}
        >
          <span>Signature pink box</span>
          <span>·</span>
          <span>GTA delivery</span>
          <span>·</span>
          <span>Baked daily</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
