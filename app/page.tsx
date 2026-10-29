import {
  Gift,
  Landmark,
  Plane,
  ShoppingBag,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import heroPhoto from "@/public/hero.jpg";
import payingPhoto from "@/public/offramp/paying.jpg";
import PaymentToasts from "@/components/PaymentToasts";
import Reveal from "@/components/Reveal";
import { Logo } from "@/components/Logo";
import { MerchantIcon, type MerchantId } from "@/components/Merchant";
import OfframpToast from "@/components/OfframpToast";
import ShopCards from "@/components/ShopCards";
import TravelCards from "@/components/TravelCards";
import StatsCards from "@/components/StatsCards";
import SwipeCards from "@/components/SwipeCards";
import GetStartedMenu from "@/components/GetStartedMenu";

const SOCIALS = [
  { label: "Twitter", href: "https://x.com/ZedkrPay" },
  { label: "Telegram", href: "https://t.me/zedkrpay" },
  { label: "DEX Screener", href: "https://dexscreener.com/robinhood/0x1650ed40d8d506b9b29199e9d7e934805f4bdafa" },
]

// Faint scattered glyphs behind the hero, placed with a fixed seed so server and client match.
const glyphs = (() => {
  let seed = 7;
  const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  const chars = ["$", "$", "Ξ", "◎", "↺", "$", "€"];
  return Array.from({ length: 220 }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    c: chars[Math.floor(rand() * chars.length)],
    d: rand() * 5,
  }));
})();

const features = [
  { icon: Landmark, title: "Cash out", body: "Send your crypto to Chime, Revolut, Zelle, Monzo or Mercado Pago as everyday money." },
  { icon: ShoppingBag, title: "Shop", body: "Check out on Amazon and eBay and pay with your Robinhood assets." },
  { icon: Gift, title: "Gift cards", body: "Buy gift cards with crypto, ready to use or send to someone." },
  { icon: Plane, title: "Travel", body: "Book hotels for your next trip and pay with crypto." },
];

type Row = { logo?: MerchantId; icon?: typeof Wallet; title: string; sub: string };

const cashbackRows: Row[] = [
  { icon: Landmark, title: "Off-ramp cashback", sub: "Tokens back on every cash out" },
  { icon: ShoppingBag, title: "Shopping cashback", sub: "Tokens back on Amazon and eBay orders" },
  { icon: TrendingUp, title: "Counts as holdings", sub: "Cashback makes you eligible for stock airdrops" },
];

/* ---------- small building blocks ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/50">{children}</p>;
}

function SplitHeading({ eyebrow, title, body, children }: { eyebrow: string; title: React.ReactNode; body: string; children?: React.ReactNode }) {
  return (
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="headline text-fade mt-4 text-4xl sm:text-[52px]">{title}</h2>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{body}</p>
      {children}
    </Reveal>
  );
}

function RowList({ rows }: { rows: Row[] }) {
  return (
    <ul className="border-t border-line">
      {rows.map(({ logo, icon: Icon, title, sub }, i) => (
        <Reveal key={title} delay={i * 90}>
          <li className="flex items-center gap-4 border-b border-line py-4 transition hover:translate-x-1">
            {logo ? (
              <MerchantIcon id={logo} size={40} />
            ) : (
              Icon && (
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.06] text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
              )
            )}
            <span className="min-w-0">
              <span className="block text-[17px] font-medium">{title}</span>
              <span className="block text-[14px] text-muted">{sub}</span>
            </span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" aria-label="Zedkr home">
            <Logo />
          </a>
          <div className="hidden gap-7 text-[15px] font-medium md:flex">
            <a href="#offramp" className="transition hover:text-white/60">Off-ramp</a>
            <a href="#shop" className="transition hover:text-white/60">Shop</a>
            <a href="#cashback" className="transition hover:text-white/60">Cashback</a>
            <a href="#travel" className="transition hover:text-white/60">Travel</a>
            <a href="#stats" className="transition hover:text-white/60">Stats</a>
          </div>
          <GetStartedMenu />
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-glow relative overflow-hidden pt-36 sm:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent_85%)]">
          {glyphs.map((g, i) => (
            <span
              key={i}
              className="twinkle absolute font-mono text-[13px] text-white/[0.09]"
              style={{ left: `${g.x}%`, top: `${g.y}%`, animationDelay: `${g.d}s` }}
            >
              {g.c}
            </span>
          ))}
        </div>

        <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
          <h1 className="headline text-[42px] sm:text-6xl lg:text-[68px]">
            <span className="rise d1 text-fade inline-block pb-1">Spend. Earn.</span>{" "}
            <br className="hidden sm:block" />
            <span className="rise d2 text-fade inline-block pb-1">Hold. Repeat.</span>
          </h1>
          <p className="rise d3 mx-auto mt-5 max-w-xl text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
            Zedkr turns Robinhood Chain assets into everyday money. Cash out to Chime, Revolut,
            Zelle and Monzo, shop on Amazon and eBay, buy gift cards, book hotels and send money,
            all with crypto. Earn tokenized stock rewards funded by token taxes and protocol activity.
          </p>
          <GetStartedMenu variant="hero" />
        </div>

        {/* Hero photo */}
        <div className="rise d5 relative mx-auto mt-20 max-w-6xl px-4">
          <div className="relative h-[460px] overflow-hidden sm:h-[620px] [mask-image:radial-gradient(ellipse_62%_75%_at_50%_45%,black_40%,transparent_100%)]">
            <div className="slow-zoom absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_70%,#1d1d1f_0%,#0b0b0c_45%,#000_75%)]" />
            <Image
              src={heroPhoto}
              alt="Two colleagues working late in a dimly lit office"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="slow-zoom object-cover brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
          </div>
          <div className="absolute inset-x-0 top-6 flex justify-center px-4 sm:top-10">
            <PaymentToasts />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-24 text-center">
        <Reveal>
          <p className="mx-auto inline-flex items-center gap-3 rounded-full bg-[#121212] py-2 pl-2 pr-5 text-[17px] text-muted">
            <MerchantIcon id="robinhood" size={30} />
            Built on Robinhood Chain
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="headline mx-auto mt-20 max-w-3xl text-4xl sm:text-[52px]">
            Your crypto, as everyday money.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted sm:text-xl">
            One wallet to cash out, shop, book trips and send money, paid with the assets you
            already hold.
          </p>
        </Reveal>
      </section>

      {/* Overview stage + features */}
      <section className="px-4 pb-24">

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-x-5 gap-y-10 sm:mt-20 sm:gap-10 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-medium tracking-tight sm:mt-8 sm:text-xl">{title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted sm:mt-2 sm:text-base">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Off-ramp */}
      <section id="offramp" className="scroll-mt-20 px-4 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <SplitHeading
            eyebrow="Off-Ramp"
            title="Crypto out. Cash in."
            body="Convert supported Robinhood Chain assets into fiat and get paid through the apps you already use."
          >
          </SplitHeading>
          <Reveal delay={100}>
            <div className="group relative h-[520px] overflow-hidden rounded-[30px] border border-white/[0.08] lg:h-[600px]">
              <Image
                src={payingPhoto}
                alt="Someone paying with their phone at a café counter"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
              <div className="absolute inset-x-5 bottom-5">
                <OfframpToast />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="scroll-mt-20 px-4 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <SplitHeading
            eyebrow="Shop"
            title={<>Shop on Amazon and eBay. <span className="text-white/45">Pay with Robinhood assets.</span></>}
            body="Fill your cart on two of the biggest stores online and check out with crypto. Buy gift cards the same way."
          >
          </SplitHeading>
          <Reveal delay={100}>
            <ShopCards />
          </Reveal>
        </div>
      </section>

      {/* Travel */}
      <section id="travel" className="scroll-mt-20 px-4 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <SplitHeading
            eyebrow="Travel"
            title="Book hotels, pay in crypto."
            body="Find a place to stay, compare ratings and prices, and pay for the night with crypto."
          />
          <Reveal delay={100}>
            <TravelCards />
          </Reveal>
        </div>
      </section>

      {/* Cashback */}
      <section id="cashback" className="scroll-mt-20 px-4 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <SplitHeading
            eyebrow="Cashback"
            title="Tokens back on every move."
            body="For every off-ramp transaction or item you buy on Amazon or eBay, you get tokens airdropped as cashback. Those tokens count as holdings, so you become eligible for stock airdrops."
          >
          </SplitHeading>
          <RowList rows={cashbackRows} />
        </div>
      </section>

      {/* Protocol stats */}
      <section id="stats" className="scroll-mt-20 px-4 py-24">
        <Reveal>
          <StatsCards />
        </Reveal>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-20 px-4 py-24">
        <Reveal className="text-center">
          <h2 className="headline text-fade text-4xl sm:text-[52px]">How it works</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted sm:text-xl">
            Three steps from tokens on Robinhood Chain to money you can use.
          </p>
        </Reveal>
        <SwipeCards />
      </section>

      {/* Footer */}
      <footer className="relative mt-12 overflow-hidden border-t border-white/[0.06]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
              Zedkr turns Robinhood Chain assets into everyday money.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#111] py-1.5 pl-1.5 pr-3.5 text-[13px] text-white/70">
              <MerchantIcon id="robinhood" size={22} />
              Built on Robinhood Chain
            </span>
          </div>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/40">Explore</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li><a href="#offramp" className="text-white/75 transition hover:text-white">Off-ramp</a></li>
              <li><a href="#shop" className="text-white/75 transition hover:text-white">Shop</a></li>
              <li><a href="#cashback" className="text-white/75 transition hover:text-white">Cashback</a></li>
              <li><a href="#travel" className="text-white/75 transition hover:text-white">Travel</a></li>
              <li><a href="#stats" className="text-white/75 transition hover:text-white">Stats</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/40">Follow</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/75 transition hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p
          aria-hidden
          className="headline relative mx-auto mt-16 -mb-[0.18em] max-w-6xl select-none whitespace-nowrap bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.02)_85%)] bg-clip-text px-4 text-center text-[17vw] font-semibold leading-none text-transparent xl:text-[210px]"
        >
          Zedkr
        </p>
      </footer>
    </main>
  );
}
