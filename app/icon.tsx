import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#E8B4BC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 18,
            height: 14,
            background: "#C4788A",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
