import { siApple, siGoogleplay } from "simple-icons";

const stores = [
  {
    label: "Download for iOS",
    href: "https://apps.apple.com/us/search?term=hooks.cards",
    icon: siApple,
    color: "currentColor",
  },
  {
    label: "Download for Android",
    href: "https://play.google.com/store/search?q=hooks.cards&c=apps",
    icon: siGoogleplay,
    color: "#34a853",
  },
];

export default function DownloadMenu({ variant = "nav" }: { variant?: "nav" | "hero" }) {
  const isHero = variant === "hero";

  return (
    <details className={`group relative ${isHero ? "rise d4 mt-9 inline-block text-left" : ""}`}>
      <summary className={`flex cursor-pointer list-none items-center gap-3 rounded-full font-medium transition [&::-webkit-details-marker]:hidden ${isHero
        ? "bg-acid px-7 py-4 text-[17px] text-black shadow-[0_0_30px_-8px_rgba(198,255,61,0.7)] hover:brightness-110"
        : "border border-white/10 bg-[#161616] px-5 py-2.5 text-[15px] hover:bg-panel-2"
      }`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d={siApple.path} />
        </svg>
        Download App
      </summary>

      <div className={`invisible pointer-events-none absolute top-full z-50 mt-3 w-[min(21rem,calc(100vw-2rem))] translate-y-1 rounded-3xl border border-white/[0.08] bg-[#151515]/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition duration-150 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-open:visible group-open:pointer-events-auto group-open:translate-y-0 group-open:opacity-100 ${isHero ? "left-1/2 -translate-x-1/2" : "right-0"}`}>
        {stores.map(({ label, href, icon, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl px-4 py-4 text-[16px] font-medium text-white/85 transition hover:bg-white/[0.06] hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill={color} aria-hidden="true">
              <path d={icon.path} />
            </svg>
            {label}
          </a>
        ))}
      </div>
    </details>
  );
}
