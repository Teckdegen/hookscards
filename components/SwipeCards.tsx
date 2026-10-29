import { Check, ArrowRight } from "lucide-react";
import ExchangeUniswap from "@web3icons/react/icons/exchanges/ExchangeUniswap";
import TokenUSDC from "@web3icons/react/icons/tokens/TokenUSDC";
import TokenUSDT from "@web3icons/react/icons/tokens/TokenUSDT";
import Reveal from "./Reveal";
import { HookMark } from "./Logo";
import { MerchantIcon } from "./Merchant";

function Money({ v, className = "" }: { v: string; className?: string }) {
  const [whole, cents] = v.split(".");
  return (
    <span className={`tabular-nums ${className}`}>
      {whole}
      <span className="opacity-40">.{cents}</span>
    </span>
  );
}

// 01 — the pool behind the card
function PoolPanel() {
  return (
    <div className="absolute inset-x-8 top-10 -bottom-px rounded-t-[22px] bg-white p-6 text-black shadow-2xl sm:inset-x-12">
      <div className="flex items-center gap-2 text-[13px] text-black/55">
        <ExchangeUniswap variant="branded" size={20} />
        Hooks.cards pool · Uniswap v4
      </div>
      <p className="mt-4 text-[13px] text-black/55">Your balance</p>
      <Money v="$1,924.00" className="text-[32px] font-semibold tracking-tight" />
      <div className="mt-5 divide-y divide-black/[0.07] border-t border-black/[0.07] text-[15px]">
        <div className="flex items-center gap-3 py-3">
          <TokenUSDC variant="branded" size={26} />
          <span className="flex-1">USDC</span>
          <Money v="$962.12" />
        </div>
        <div className="flex items-center gap-3 py-3">
          <TokenUSDT variant="branded" size={26} />
          <span className="flex-1">USDT</span>
          <Money v="$961.88" />
        </div>
        <div className="flex items-center gap-3 py-3">
          <MerchantIcon id="hook" size={26} />
          <span className="flex-1">Ready cash</span>
          <Money v="$423.76" />
        </div>
        <div className="flex items-center gap-3 py-3 text-black/45">
          <span className="w-[26px]" />
          <span className="flex-1">Fees this week</span>
          <Money v="+$1.84" className="text-[#3f8f00]" />
        </div>
      </div>
    </div>
  );
}

// 02 — the card network approves the swipe
function ApprovalPanel() {
  return (
    <div className="absolute inset-x-8 top-10 -bottom-px rounded-t-[22px] bg-white p-6 text-black shadow-2xl sm:inset-x-12">
      <div className="flex items-center justify-between">
        <MerchantIcon id="netflix" size={44} />
        <span className="flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-[12px] font-medium text-acid">
          <Check className="h-3.5 w-3.5" strokeWidth={3} /> Approved
        </span>
      </div>
      <p className="mt-5 text-[13px] text-black/55">Card purchase at Netflix</p>
      <Money v="$15.49" className="text-[32px] font-semibold tracking-tight" />
      <div className="mt-5 space-y-3 border-t border-black/[0.07] pt-4 text-[13px]">
        {[
          ["Card", "hooks.cards •••• 4096"],
          ["Paid from", "Ready cash"],
          ["Approved in", "0.4 seconds"],
          ["Merchant sees", "A normal card payment"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between">
            <span className="text-black/45">{k}</span>
            <span className="font-medium">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 03 — settlement through the hook, then refill
function SettlePanel() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6">
      <div className="flex items-center gap-4 sm:gap-6">
        <span className="grid h-28 w-28 place-items-center rounded-full bg-white shadow-2xl sm:h-32 sm:w-32">
          <ExchangeUniswap variant="branded" size={64} />
        </span>
        <ArrowRight className="h-6 w-6 text-white/80" />
        <span className="grid h-28 w-28 place-items-center rounded-full bg-[#111] text-acid shadow-2xl sm:h-32 sm:w-32">
          <HookMark className="h-14 w-14" />
        </span>
      </div>
      <div className="w-full max-w-[300px] space-y-2.5">
        <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-[13px] text-black shadow-lg backdrop-blur">
          <MerchantIcon id="netflix" size={28} />
          <span className="flex-1">Settled at card-spend fee</span>
          <Money v="$15.49" className="font-medium" />
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-[13px] text-black shadow-lg backdrop-blur">
          <MerchantIcon id="hook" size={28} />
          <span className="flex-1">Ready cash refilled</span>
          <Money v="+$15.49" className="font-medium text-[#3f8f00]" />
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    step: "Before you swipe",
    tag: "Onchain · the hook",
    body: "Your balance sits in a hook-managed pool, earning a share of trading fees. The hook keeps a slice ready to spend.",
    bg: "bg-[radial-gradient(120%_90%_at_0%_0%,#f4ffd6_0%,#c6ff3d_45%,#7cc81a_100%)]",
    panel: <PoolPanel />,
  },
  {
    step: "When you swipe",
    tag: "Offchain · card network",
    body: "The card network approves the payment against your ready cash in milliseconds. The merchant sees a normal card payment.",
    bg: "bg-[radial-gradient(120%_90%_at_100%_0%,#f2f2f2_0%,#cfd3d6_50%,#9aa1a6_100%)]",
    panel: <ApprovalPanel />,
  },
  {
    step: "After you swipe",
    tag: "Onchain · the hook",
    body: "The purchase settles at the lower card-spending fee. The hook refills your ready cash for the next one.",
    bg: "bg-[radial-gradient(110%_90%_at_30%_15%,#3a3a3e_0%,#18181a_50%,#070708_100%)]",
    panel: <SettlePanel />,
  },
];

export default function SwipeCards() {
  return (
    <div className="mx-auto mt-16 grid max-w-[1320px] gap-5 lg:grid-cols-3">
      {cards.map((c, i) => (
        <Reveal key={c.step} delay={i * 120}>
          <div className={`group relative h-[440px] overflow-hidden rounded-[30px] ${c.bg}`}>
            <div className="absolute inset-0 transition duration-700 group-hover:-translate-y-2">{c.panel}</div>
            {/* fade the panel into the card bottom, like a cropped screenshot */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          <div className="mt-6 px-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-acid">0{i + 1} · {c.tag}</p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">{c.step}</h3>
            <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
