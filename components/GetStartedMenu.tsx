import { ArrowRight, ArrowUpRight, Landmark, ShoppingBag } from "lucide-react";

const apps = [
  { label: "Cash", sub: "Cash out to your bank or app", href: "https://cash.zedkr.finance", icon: Landmark },
  { label: "Shop", sub: "Amazon and eBay with crypto", href: "https://shop.zedkr.finance", icon: ShoppingBag },
];

// "Get started" button that opens a menu with the Cash and Shop apps.
export default function GetStartedMenu({ variant = "nav" }: { variant?: "nav" | "hero" }) {
  const isHero = variant === "hero";

  return (
    <details className={`group relative ${isHero ? "rise d4 mt-6 inline-block text-left" : ""}`}>
      <summary className={`flex cursor-pointer list-none items-center gap-2.5 rounded-full font-medium transition [&::-webkit-details-marker]:hidden ${isHero
        ? "bg-accent px-7 py-4 text-[17px] text-black shadow-[0_0_30px_-8px_rgba(255,255,255,0.7)] hover:brightness-110"
        : "border border-white/10 bg-[#161616] px-5 py-2.5 text-[15px] hover:bg-panel-2"
      }`}>
        Get started
        <ArrowRight className="h-4 w-4 transition group-open:rotate-90" strokeWidth={2} />
      </summary>

      <div className={`invisible pointer-events-none absolute top-full z-50 mt-3 w-[min(21rem,calc(100vw-2rem))] translate-y-1 rounded-3xl border border-white/[0.08] bg-[#151515]/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition duration-150 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-open:visible group-open:pointer-events-auto group-open:translate-y-0 group-open:opacity-100 ${isHero ? "left-1/2 -translate-x-1/2" : "right-0"}`}>
        {apps.map(({ label, sub, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/item flex items-center gap-4 rounded-2xl px-3 py-3 text-white/85 transition hover:bg-white/[0.06] hover:text-white"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-black">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[16px] font-medium">{label}</span>
              <span className="block text-[13px] text-white/50">{sub}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-white" strokeWidth={2} />
          </a>
        ))}
      </div>
    </details>
  );
}
