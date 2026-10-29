import { Check, X } from "lucide-react";
import { siVisa } from "simple-icons";
import { MerchantIcon, type MerchantId } from "./Merchant";
import { MARK_PARTS } from "./Logo";

// App palette: neutral black, matching the site
export const app = {
  bg: "#0b0b0c",
  surface: "#161618",
  surface2: "#202023",
  line: "rgba(255,255,255,0.07)",
  text: "#f4f4f5",
  muted: "#8e8e93",
};

// The visible screen is 286px wide (310 frame − 3px edge − 9px bezel, each side).
const SCREEN_W = 390;
const SCALE = 286 / SCREEN_W;
const SCREEN_H = Math.round(620 / SCALE);

function StatusBar() {
  return (
    <div className="relative z-20 flex h-[54px] items-center justify-between pl-11 pr-8 pt-2 text-[17px] font-semibold tracking-tight">
      <span>9:41</span>
      <span className="absolute left-1/2 top-[11px] h-[37px] w-[125px] -translate-x-1/2 rounded-full bg-black" />
      <span className="flex items-center gap-[6px]">
        {/* signal */}
        <svg viewBox="0 0 18 12" className="h-[12px] w-[18px]" fill="currentColor" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        {/* wifi */}
        <svg viewBox="0 0 16 12" className="h-[12px] w-[17px]" fill="currentColor" aria-hidden="true">
          <path d="M8 2.2c2.3 0 4.4.9 6 2.4l1.1-1.2A10 10 0 0 0 8 .6 10 10 0 0 0 .9 3.4L2 4.6a8.5 8.5 0 0 1 6-2.4Zm0 3.3c1.4 0 2.6.5 3.6 1.4l1.1-1.2A6.7 6.7 0 0 0 8 3.9a6.7 6.7 0 0 0-4.7 1.8l1.1 1.2c1-.9 2.2-1.4 3.6-1.4Zm0 3.2c-.6 0-1.2.2-1.6.6L8 11l1.6-1.7c-.4-.4-1-.6-1.6-.6Z" />
        </svg>
        {/* battery */}
        <svg viewBox="0 0 27 13" className="h-[13px] w-[27px]" aria-hidden="true">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" fill="none" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="2" y="2" width="19" height="9" rx="2" fill="currentColor" />
          <path d="M24.5 4.5v4c.8-.3 1.5-1.1 1.5-2s-.7-1.7-1.5-2Z" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </span>
    </div>
  );
}

// iPhone-style frame: titanium edge, side buttons, black bezel.
export function Phone({
  children,
  label,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  // Decorative mockup: screen readers get one description instead of every fake row.
  return (
    <div role="img" aria-label={label} className={`relative mx-auto w-[310px] ${className}`}>
      {/* side buttons */}
      <span className="absolute -left-[3px] top-[118px] h-8 w-[3px] rounded-l bg-[#3a3d42]" />
      <span className="absolute -left-[3px] top-[170px] h-14 w-[3px] rounded-l bg-[#3a3d42]" />
      <span className="absolute -left-[3px] top-[236px] h-14 w-[3px] rounded-l bg-[#3a3d42]" />
      <span className="absolute -right-[3px] top-[190px] h-20 w-[3px] rounded-r bg-[#3a3d42]" />
      <div aria-hidden className="rounded-[56px] bg-[linear-gradient(145deg,#5b5f66,#2a2c30_30%,#1a1b1e_60%,#4a4d53)] p-[3px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9),0_30px_80px_-40px_rgba(198,255,61,0.25)]">
        <div className="rounded-[53px] bg-black p-[9px]">
          <div className="relative h-[620px] overflow-hidden rounded-[44px]" style={{ background: app.bg, color: app.text }}>
            {/* Laid out at real iPhone size (390×844pt), then scaled to fit the frame. */}
            <div
              className="relative origin-top-left"
              style={{ width: SCREEN_W, height: SCREEN_H, transform: `scale(${SCALE})` }}
            >
              <StatusBar />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Cents({ v, className = "" }: { v: string; className?: string }) {
  const [whole, cents] = v.split(".");
  return (
    <span className={`tabular-nums ${className}`}>
      {whole}
      <span className="text-[0.55em] font-medium opacity-70">.{cents}</span>
    </span>
  );
}

export function TxRow({
  merchant,
  name,
  date,
  amount,
  positive,
  status,
}: {
  merchant: MerchantId;
  name: string;
  date: string;
  amount: string;
  positive?: boolean;
  status?: "ok" | "declined";
}) {
  return (
    <div className="flex items-center gap-3.5 py-[10px]">
      <span className="relative shrink-0">
        <MerchantIcon id={merchant} size={44} />
        {status && (
          <span
            className={`absolute -bottom-0.5 -right-0.5 grid h-[18px] w-[18px] place-items-center rounded-full ring-2 ${
              status === "ok" ? "bg-acid text-black" : "bg-white text-black"
            }`}
            style={{ ["--tw-ring-color" as string]: app.bg }}
          >
            {status === "ok" ? <Check className="h-2.5 w-2.5" strokeWidth={4} /> : <X className="h-2.5 w-2.5" strokeWidth={4} />}
          </span>
        )}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[16px] font-medium leading-tight">{name}</p>
        <p className="mt-1 text-[13px] leading-tight" style={{ color: app.muted }}>{date}</p>
      </div>
      <span className={`text-[16px] font-medium tabular-nums ${positive ? "text-acid" : ""}`}>{amount}</span>
    </div>
  );
}

// Concentric contour lines rippling out from the hook, like a machined metal card.
const contours = Array.from({ length: 80 }, (_, i) => 18 + i * 11);

// Brushed lime metal card: raised hook mark, contour lines, network logo. No text.
export function MiniCard() {
  return (
    <div className="relative aspect-[1.586] w-full overflow-hidden rounded-[18px] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(0,0,0,0.12)]">
      <svg viewBox="0 0 860 540" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="hc-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#efffc4" />
            <stop offset="0.28" stopColor="#b6ec2a" />
            <stop offset="0.52" stopColor="#dcff86" />
            <stop offset="0.78" stopColor="#9ccf17" />
            <stop offset="1" stopColor="#c6ff3d" />
          </linearGradient>
          <linearGradient id="hc-raised" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#d4f97a" />
            <stop offset="1" stopColor="#f2ffcf" />
          </linearGradient>
          <linearGradient id="hc-sheen" x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0.3" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.48" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="0.62" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="860" height="540" fill="url(#hc-metal)" />

        {/* contour lines centred on the mark's meeting point */}
        <g fill="none" stroke="#2c4200" strokeOpacity="0.28" strokeWidth="1.6">
          {contours.map((r) => (
            <circle key={r} cx="240" cy="200" r={r} />
          ))}
        </g>

        {/* raised mark: shadow, faceted body, edge highlight */}
        <g transform="translate(-30 -70) scale(5.4)">
          <g transform="translate(0.7 0.9)" fill="#1f3000" fillOpacity="0.3">
            {MARK_PARTS.map(({ points }) => (
              <polygon key={points} points={points} />
            ))}
          </g>
          {MARK_PARTS.map(({ points, shade }) => (
            <polygon
              key={points}
              points={points}
              fill="url(#hc-raised)"
              fillOpacity={0.45 + shade * 0.55}
              stroke="#fff"
              strokeOpacity="0.65"
              strokeWidth="0.35"
              strokeLinejoin="round"
            />
          ))}
        </g>

        <rect width="860" height="540" fill="url(#hc-sheen)" />

        {/* network mark */}
        <path d={siVisa.path} transform="translate(694 420) scale(5.2)" fill="#2f4700" />
      </svg>
    </div>
  );
}
