import {
  siNetflix,
  siSpotify,
  siUber,
  siStarbucks,
  siAirbnb,
  siApple,
  siDoordash,
  siMcdonalds,
  siClaude,
  siUbereats,
} from "simple-icons";
import { HookMark } from "./Logo";

type Brand = { path: string; bg: string; fg: string };

// Brand tiles styled the way each company's app icon looks. Only third-party logos carry
// colour; the site's own icons stay black, white, silver and lime.
const brands: Record<string, Brand> = {
  netflix: { path: siNetflix.path, bg: "#000000", fg: "#E50914" },
  spotify: { path: siSpotify.path, bg: "#000000", fg: "#1ED760" },
  uber: { path: siUber.path, bg: "#ffffff", fg: "#000000" },
  ubereats: { path: siUbereats.path, bg: "#06C167", fg: "#ffffff" },
  starbucks: { path: siStarbucks.path, bg: "#006241", fg: "#ffffff" },
  airbnb: { path: siAirbnb.path, bg: "#FF5A5F", fg: "#ffffff" },
  apple: { path: siApple.path, bg: "#ffffff", fg: "#000000" },
  doordash: { path: siDoordash.path, bg: "#FF3008", fg: "#ffffff" },
  mcdonalds: { path: siMcdonalds.path, bg: "#DA291C", fg: "#FFC72C" },
  claude: { path: siClaude.path, bg: "#F4F3EE", fg: "#D97757" },
};

export type MerchantId = keyof typeof brands | "hook";

export function MerchantIcon({ id, size = 36 }: { id: MerchantId; size?: number }) {
  if (id === "hook") {
    return (
      <span
        className="grid shrink-0 place-items-center rounded-full bg-acid text-black"
        style={{ width: size, height: size }}
      >
        <HookMark className="h-[55%] w-[55%]" />
      </span>
    );
  }
  const b = brands[id];
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full ring-1 ring-white/10"
      style={{ width: size, height: size, background: b.bg }}
    >
      <svg viewBox="0 0 24 24" style={{ width: size * 0.5, height: size * 0.5 }} fill={b.fg} aria-hidden="true">
        <path d={b.path} />
      </svg>
    </span>
  );
}
