import Image from "next/image";
import zedkrMark from "@/public/zedkr-logo-white.png";

// The hook icon (used for hook activity in the app mockups): an "H" made of four blocks whose corners meet at one centre point.
// The lower-right block curls into a barbed hook.
// `shade` sets each facet's light level, so the mark reads as bevelled in any colour.
export const MARK_PARTS: { points: string; shade: number }[] = [
  { points: "16,14 34,14 34,37 50,50 16,45", shade: 1 }, // upper-left block
  { points: "16,55 50,50 34,63 34,86 16,86", shade: 0.78 }, // lower-left block
  { points: "66,14 84,14 84,45 50,50 66,37", shade: 0.9 }, // upper-right block
  { points: "50,50 84,55 84,76 72,88 51,88 41,79 40,67 45,59 49,64 49,74 54,79 66,79 66,63", shade: 0.7 }, // the hook
];

export function HookMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {MARK_PARTS.map(({ points, shade }) => (
        <polygon key={points} points={points} fill="currentColor" fillOpacity={shade} />
      ))}
    </svg>
  );
}

// Brand logo: the glossy Z (white version, for the dark site) plus the wordmark.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src={zedkrMark} alt="" className="h-8 w-auto" priority />
      <span className="text-[22px] font-semibold tracking-[-0.03em]">Zedkr</span>
    </span>
  );
}

// App-icon style: the mark on a dark tile.
export function HookTile({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-xl bg-[#1c1c1e] text-accent ${className}`}>
      <HookMark className="h-[62%] w-[62%]" />
    </span>
  );
}
