import { ArrowRight, ArrowUpRight, Landmark, Plane, ShoppingBag } from "lucide-react";
import { MerchantIcon, type MerchantId } from "./Merchant";

const apps: { label: string; sub: string; href: string; icon: typeof Landmark; logos: MerchantId[] }[] = [
  { label: "Cash", sub: "Cash out to your bank", href: "https://cash.zedkr.finance", icon: Landmark, logos: ["revolut", "chime", "zelle"] },
  { label: "Shop", sub: "Amazon and eBay with crypto", href: "https://shop.zedkr.finance", icon: ShoppingBag, logos: ["amazon", "ebay"] },
  { label: "Travel", sub: "Book hotels with crypto", href: "https://cash.zedkr.finance/travel", icon: Plane, logos: [] },
];

// "Get started" button that opens a menu with the Cash, Shop and Travel apps.
export default function GetStartedMenu({ variant = "nav" }: { variant?: "nav" | "hero" }) {
  const isHero = variant === "hero";

  return (
    <details className={`group relative ${isHero ? "rise d4 mt-6 inline-block text-left" : ""}`}>
      <summary className={`flex cursor-pointer list-none items-center gap-2.5 rounded-full font-medium transition [&::-webkit-details-marker]:hidden ${isHero
        ? "bg-accent px-[22px] py-3 text-[14px] text-black shadow-[0_0_30px_-8px_rgba(255,255,255,0.7)] hover:brightness-110"
        : "border border-white/10 bg-[#161616] px-5 py-2.5 text-[15px] hover:bg-panel-2"
      }`}>
        Get started
        <ArrowRight className="h-4 w-4 transition group-open:rotate-90" strokeWidth={2} />
      </summary>

      <div className={`invisible pointer-events-none absolute top-full z-50 mt-2.5 w-[min(19rem,calc(100vw-2rem))] translate-y-1 rounded-[20px] border border-white/10 bg-[#0f0f10] p-1.5 opacity-0 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9)] transition duration-150 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-open:visible group-open:pointer-events-auto group-open:translate-y-0 group-open:opacity-100 ${isHero ? "left-1/2 -translate-x-1/2" : "right-0"}`}>
        {apps.map(({ label, sub, href, icon: Icon, logos }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/item flex items-center gap-3 rounded-[14px] px-3 py-2.5 transition hover:bg-white/[0.06]"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-white/[0.07] text-white ring-1 ring-white/10">
              <Icon className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-1 text-[14px] font-medium text-white">
                {label}
                <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 text-white/0 transition group-hover/item:translate-x-0 group-hover/item:text-white/70" strokeWidth={2} />
              </span>
              <span className="block truncate text-[12px] text-white/45">{sub}</span>
            </span>
            <span className="flex shrink-0 -space-x-1.5">
              {logos.map((id) => (
                <span key={id} className="rounded-full ring-2 ring-[#0f0f10]">
                  <MerchantIcon id={id} size={20} />
                </span>
              ))}
            </span>
          </a>
        ))}
      </div>
    </details>
  );
}
