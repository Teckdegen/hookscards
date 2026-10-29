import { ArrowRight, BedDouble, Check, ChevronRight, Gift, Landmark, ShoppingBag } from "lucide-react";
import TokenUSDC from "@web3icons/react/icons/tokens/TokenUSDC";
import Reveal from "./Reveal";
import { MerchantIcon, type MerchantId } from "./Merchant";

function Money({ v, className = "" }: { v: string; className?: string }) {
  const [whole, cents] = v.split(".");
  return (
    <span className={`tabular-nums ${className}`}>
      {whole}
      <span className="opacity-40">.{cents}</span>
    </span>
  );
}

// 01 — what you hold
function WalletPanel() {
  return (
    <div className="absolute inset-x-8 top-10 -bottom-px rounded-t-[22px] bg-white p-6 text-black shadow-2xl sm:inset-x-12">
      <div className="flex items-center gap-2 text-[13px] text-black/55">
        <MerchantIcon id="zedkr" size={22} />
        Zedkr wallet · Robinhood Chain
      </div>
      <p className="mt-4 text-[13px] text-black/55">Total balance</p>
      <Money v="$1,924.00" className="text-[32px] font-semibold tracking-tight" />
      <div className="mt-5 divide-y divide-black/[0.07] border-t border-black/[0.07] text-[15px]">
        <div className="flex items-center gap-3 py-3">
          <MerchantIcon id="ethereum" size={26} />
          <span className="flex-1">ETH</span>
          <Money v="$962.12" />
        </div>
        <div className="flex items-center gap-3 py-3">
          <TokenUSDC variant="branded" size={26} />
          <span className="flex-1">USDC</span>
          <Money v="$741.88" />
        </div>
        <div className="flex items-center gap-3 py-3">
          <MerchantIcon id="zedkr" size={26} />
          <span className="flex-1">ZED</span>
          <Money v="$220.00" />
        </div>
      </div>
    </div>
  );
}

// 02 — pick what to do with it
function ActionsPanel() {
  const actions: { icon: typeof Landmark; label: string; sub: string; logos: MerchantId[] }[] = [
    { icon: Landmark, label: "Cash out", sub: "To your bank or app", logos: ["revolut", "chime", "zelle"] },
    { icon: ShoppingBag, label: "Shop", sub: "Amazon and eBay", logos: ["amazon", "ebay"] },
    { icon: Gift, label: "Gift cards", sub: "Bought with crypto", logos: [] },
    { icon: BedDouble, label: "Hotels", sub: "Book your next stay", logos: [] },
  ];
  return (
    <div className="absolute inset-x-8 top-10 -bottom-px rounded-t-[22px] bg-white p-5 text-black shadow-2xl sm:inset-x-12">
      <p className="px-1 text-[13px] text-black/55">What do you want to do?</p>
      <p className="mt-1 px-1 text-[22px] font-semibold tracking-tight">Use your crypto</p>
      <div className="mt-4 space-y-2">
        {actions.map(({ icon: Icon, label, sub, logos }, i) => {
          const active = i === 0;
          return (
            <div
              key={label}
              className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 ${active ? "bg-black text-white" : "bg-black/[0.04]"}`}
            >
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${active ? "bg-white/15" : "bg-white"}`}>
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium leading-tight">{label}</span>
                <span className={`block text-[12px] leading-tight ${active ? "text-white/60" : "text-black/45"}`}>{sub}</span>
              </span>
              {logos.length > 0 ? (
                <span className="flex -space-x-1.5">
                  {logos.map((id) => (
                    <span key={id} className={`rounded-full ring-2 ${active ? "ring-black" : "ring-[#f5f5f5]"}`}>
                      <MerchantIcon id={id} size={22} />
                    </span>
                  ))}
                </span>
              ) : (
                <ChevronRight className={`h-4 w-4 ${active ? "text-white/60" : "text-black/30"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 03 — settled
function DonePanel() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6">
      <div className="flex items-center gap-4 sm:gap-6">
        <span className="grid h-28 w-28 place-items-center rounded-full bg-white shadow-2xl sm:h-32 sm:w-32">
          <MerchantIcon id="zedkr" size={84} />
        </span>
        <ArrowRight className="h-6 w-6 text-white/80" />
        <span className="grid h-28 w-28 place-items-center rounded-full bg-white shadow-2xl sm:h-32 sm:w-32">
          <MerchantIcon id="revolut" size={84} />
        </span>
      </div>
      <div className="w-full max-w-[300px] space-y-2.5">
        <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-[13px] text-black shadow-lg backdrop-blur">
          <MerchantIcon id="revolut" size={28} />
          <span className="flex-1">Cashed out to Revolut</span>
          <Money v="$33.53" className="font-medium" />
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-[13px] text-black shadow-lg backdrop-blur">
          <MerchantIcon id="amazon" size={28} />
          <span className="flex-1">Amazon order placed</span>
          <span className="flex items-center gap-1 rounded-full bg-black px-2 py-0.5 text-[11px] font-medium text-white">
            <Check className="h-3 w-3" strokeWidth={3} /> Paid
          </span>
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    step: "Hold",
    tag: "Your wallet",
    body: "Keep ETH, USDC and other Robinhood Chain assets in your Zedkr wallet.",
    bg: "bg-[radial-gradient(120%_90%_at_0%_0%,#ffffff_0%,#e6e8eb_45%,#b4b8be_100%)]",
    panel: <WalletPanel />,
  },
  {
    step: "Choose",
    tag: "Cash out, shop, book",
    body: "Cash out to your bank, shop Amazon and eBay, buy gift cards or book a hotel.",
    bg: "bg-[radial-gradient(120%_90%_at_100%_0%,#f2f2f2_0%,#cfd3d6_50%,#9aa1a6_100%)]",
    panel: <ActionsPanel />,
  },
  {
    step: "Done",
    tag: "Settled",
    body: "Zedkr pays in crypto on your behalf. The money lands, the order ships, the room is booked.",
    bg: "bg-[radial-gradient(110%_90%_at_30%_15%,#3a3a3e_0%,#18181a_50%,#070708_100%)]",
    panel: <DonePanel />,
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
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">0{i + 1} · {c.tag}</p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">{c.step}</h3>
            <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
