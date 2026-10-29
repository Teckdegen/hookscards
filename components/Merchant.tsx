import Image from "next/image";
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
  siRevolut,
  siMonzo,
  siZelle,
  siEbay,
  siRobinhood,
  siEthereum,
  siMercadopago,
} from "simple-icons";
import { HookMark } from "./Logo";
import zedkrMark from "@/public/zedkr-logo.png";

type Brand = { path: string; bg: string; fg: string };

// Brand tiles styled the way each company's app icon looks. Only third-party logos carry
// colour; the site's own icons stay black, white and silver.
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
  revolut: { path: siRevolut.path, bg: "#ffffff", fg: "#191C1F" },
  monzo: { path: siMonzo.path, bg: "#14233C", fg: "#ffffff" },
  zelle: { path: siZelle.path, bg: "#6D1ED4", fg: "#ffffff" },
  ebay: { path: siEbay.path, bg: "#ffffff", fg: "#E53238" },
  robinhood: { path: siRobinhood.path, bg: "#000000", fg: "#CCFF00" },
  ethereum: { path: siEthereum.path, bg: "#ffffff", fg: "#3C3C3D" },
  mercadopago: { path: siMercadopago.path, bg: "#ffffff", fg: "#00B1EA" },
};

// Logos that only exist as image files (official SVGs in public/logos).
const imageBrands = {
  amazon: { src: "/logos/amazon.svg", bg: "#ffffff", scale: 0.6 },
  chime: { src: "/logos/chime.svg", bg: "#ffffff", scale: 0.82 },
};

export type MerchantId = keyof typeof brands | keyof typeof imageBrands | "hook" | "zedkr";

export function MerchantIcon({ id, size = 36 }: { id: MerchantId; size?: number }) {
  if (id === "hook") {
    return (
      <span
        className="grid shrink-0 place-items-center rounded-full bg-accent text-black"
        style={{ width: size, height: size }}
      >
        <HookMark className="h-[55%] w-[55%]" />
      </span>
    );
  }
  if (id === "zedkr") {
    return (
      <span className="grid shrink-0 place-items-center rounded-full bg-white" style={{ width: size, height: size }}>
        <Image src={zedkrMark} alt="" className="h-[52%] w-auto" />
      </span>
    );
  }
  if (id in imageBrands) {
    const b = imageBrands[id as keyof typeof imageBrands];
    return (
      <span
        className="grid shrink-0 place-items-center rounded-full ring-1 ring-white/10"
        style={{ width: size, height: size, background: b.bg }}
      >
        <Image src={b.src} alt="" width={Math.round(size * b.scale)} height={Math.round(size * b.scale)} className="object-contain" unoptimized />
      </span>
    );
  }
  const b = brands[id as keyof typeof brands];
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
