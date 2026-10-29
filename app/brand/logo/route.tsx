/* eslint-disable @next/next/no-img-element -- ImageResponse renders plain <img>, not next/image */
import { ImageResponse } from "next/og";
import { MARK_PARTS } from "@/components/Logo";

// 1024×1024 logo PNGs. /brand/logo?style=tile | white | black
const SIZE = 1024;

const styles = {
  tile: { bg: "linear-gradient(180deg, #2a2a2c, #111112)", fill: "#ffffff", inset: 0.16, rounded: true },
  white: { bg: "transparent", fill: "#ffffff", inset: 0.06, rounded: false },
  black: { bg: "transparent", fill: "#000000", inset: 0.06, rounded: false },
} as const;

export function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("style") ?? "tile";
  const s = styles[key as keyof typeof styles] ?? styles.tile;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${SIZE}" height="${SIZE}">${MARK_PARTS.map(
    ({ points, shade }) => `<polygon points="${points}" fill="${s.fill}" fill-opacity="${shade}"/>`
  ).join("")}</svg>`;
  const markSize = Math.round(SIZE * (1 - s.inset * 2));

  return new ImageResponse(
    (
      <div
        style={{
          width: SIZE,
          height: SIZE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: s.bg,
          borderRadius: s.rounded ? 230 : 0,
        }}
      >
        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`} width={markSize} height={markSize} alt="" />
      </div>
    ),
    { width: SIZE, height: SIZE }
  );
}
