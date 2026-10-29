import { ImageResponse } from "next/og";
import { MARK_PARTS } from "@/components/Logo";

export const alt = "hooks.cards — A debit card backed by liquidity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share preview: black canvas, lime hook tile, headline.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(120% 80% at 50% 0%, #2a2a2a 0%, #0d0d0d 55%, #000 100%)",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 24,
              background: "linear-gradient(180deg, #2a2a2c, #111112)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="64" height="64" viewBox="0 0 100 100">
              {MARK_PARTS.map(({ points, shade }) => (
                <polygon key={points} points={points} fill="#c6ff3d" fillOpacity={shade} />
              ))}
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 600, letterSpacing: -1.5 }}>
            hooks<span style={{ color: "rgba(255,255,255,0.45)" }}>.cards</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 600, letterSpacing: -4, lineHeight: 1.02 }}>
            A debit card backed by liquidity
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#9a9a9a" }}>
            No bank account behind it. A Uniswap v4 hook instead.
          </div>
        </div>
      </div>
    ),
    size
  );
}
