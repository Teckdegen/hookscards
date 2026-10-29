import {
  ArrowLeftRight,
  BadgeCheck,
  CreditCard,
  Gauge,
  Lock,
  Droplets,
  RefreshCw,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { siX } from "simple-icons";
import heroPhoto from "@/public/hero.jpg";
import PaymentToasts from "@/components/PaymentToasts";
import Reveal from "@/components/Reveal";
import { Logo } from "@/components/Logo";
import { Phone } from "@/components/Phone";
import { HomeScreen, CardScreen, HookScreen } from "@/components/AppScreens";
import SwipeCards from "@/components/SwipeCards";
import MerchantMarquee from "@/components/MerchantMarquee";
import DownloadMenu from "@/components/DownloadMenu";
import ExchangeUniswap from "@web3icons/react/icons/exchanges/ExchangeUniswap";

// TODO: replace with the real X account.
const X_HANDLE = "@hooksdotcards";
const X_URL = "https://x.com/hooksdotcards";

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
  { icon: Wallet, title: "One balance", body: "Spending money and liquidity are the same balance. Nothing to move between accounts." },
  { icon: Zap, title: "Ready cash", body: "A slice of your balance is always ready for the next swipe, kept topped up by the hook." },
  { icon: CreditCard, title: "Debit card", body: "Pay anywhere cards are accepted. The merchant sees a normal card payment." },
  { icon: ShieldCheck, title: "The hook", body: "A Uniswap v4 hook protects your balance and keeps it spendable, onchain and in the open." },
];

const spendList = [
  { icon: CreditCard, text: "Pays like a normal debit card" },
  { icon: RefreshCw, text: "Ready cash refilled by the hook" },
  { icon: ArrowLeftRight, text: "Lower fee on card spending" },
  { icon: BadgeCheck, text: "No bank account behind it" },
];

const guardList = [
  { icon: Gauge, text: "Higher fees for traders when markets swing" },
  { icon: Lock, text: "Depeg breaker for stablecoins" },
  { icon: ShieldCheck, text: "Pool open to cardholders only" },
  { icon: Droplets, text: "Earns a share of trading fees" },
];

function FeatureList({ items }: { items: { icon: typeof Wallet; text: string }[] }) {
  return (
    <ul className="border-t border-line">
      {items.map(({ icon: Icon, text }, i) => (
        <Reveal key={text} delay={i * 90}>
          <li className="flex items-center gap-4 border-b border-line py-5 text-[17px]">
            <Icon className="h-5 w-5 shrink-0" strokeWidth={1.6} />
            {text}
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

function SplitHeading({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <h2 className="headline text-fade text-4xl sm:text-[52px]">{title}</h2>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{body}</p>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" aria-label="hooks.cards home">
            <Logo />
          </a>
          <div className="hidden gap-8 text-[15px] font-medium md:flex">
            <a href="#card" className="transition hover:text-white/60">The Card</a>
            <a href="#hook" className="transition hover:text-white/60">The Hook</a>
          </div>
          <DownloadMenu />
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

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="headline text-[42px] sm:text-6xl lg:text-[68px]">
            <span className="rise d1 text-fade inline-block pb-1">A debit card</span>{" "}
            <br className="hidden sm:block" />
            <span className="rise d2 text-fade inline-block pb-1">backed by liquidity</span>
          </h1>
          <p className="rise d3 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
            No bank account behind it. A Uniswap v4 hook keeps your balance protected,
            spendable, and cheap to spend.
          </p>
          <DownloadMenu variant="hero" />
        </div>

        {/* Hero photo */}
        <div className="rise d5 relative mx-auto mt-20 max-w-6xl px-4">
          <div className="relative h-[460px] overflow-hidden sm:h-[620px] [mask-image:radial-gradient(ellipse_62%_75%_at_50%_45%,black_40%,transparent_100%)]">
            <div className="slow-zoom absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_70%,#1e2a12_0%,#0b0d09_45%,#000_75%)]" />
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
          <p className="mx-auto inline-flex items-center gap-3 rounded-full bg-[#121212] px-5 py-3 text-[17px] text-muted">
            <ExchangeUniswap variant="branded" size={24} />
            Built on Uniswap v4 hooks
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="headline mx-auto mt-20 max-w-3xl text-4xl sm:text-[52px]">
            The bank&apos;s job, done by a hook.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted sm:text-xl">
            Hold, protect, and spend your money. No bank account in the middle.
          </p>
        </Reveal>
      </section>

      {/* App overview */}
      <section className="px-4 pb-24">
        <Reveal>
          <div className="float">
            <Phone label="hooks.cards app home screen: spending balance, hook status and recent card payments">
              <HomeScreen />
            </Phone>
          </div>
        </Reveal>

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

      {/* The card */}
      <section id="card" className="scroll-mt-20 px-4 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_380px_1fr]">
          <SplitHeading
            title="Spend from the pool you own"
            body="Your card draws from ready cash. The hook refills it from your liquidity, so you never top up by hand."
          />
          <Reveal delay={120}>
            <Phone label="hooks.cards app card screen: the debit card, its status and spending settings">
              <CardScreen />
            </Phone>
          </Reveal>
          <div className="min-w-0">
            <FeatureList items={spendList} />
            <MerchantMarquee />
          </div>
        </div>
      </section>

      {/* The hook */}
      <section id="hook" className="scroll-mt-20 px-4 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_380px_1fr]">
          <SplitHeading
            title="Guarded by code"
            body="Earning fees doesn't need a hook. Any pool does that. The hook is what makes liquidity safe enough to back a debit card."
          />
          <Reveal delay={120}>
            <Phone label="hooks.cards app hook screen: protection status for your balance">
              <HookScreen />
            </Phone>
          </Reveal>
          <FeatureList items={guardList} />
        </div>
      </section>

      {/* How it works — gradient cards */}
      <section id="how" className="px-4 py-24">
        <Reveal className="text-center">
          <h2 className="headline text-fade text-4xl sm:text-[52px]">One swipe. Two worlds.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted sm:text-xl">
            The swipe runs on the card network, fast and familiar. Everything around it runs
            onchain, through the hook.
          </p>
        </Reveal>
        <SwipeCards />
      </section>

      {/* Footer */}
      <footer className="relative mt-12 overflow-hidden border-t border-white/[0.06]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(198,255,61,0.12),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
              A debit card backed by liquidity. A Uniswap v4 hook does the bank&apos;s job.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#111] px-3.5 py-2 text-[13px] text-white/70">
              <ExchangeUniswap variant="branded" size={18} />
              Built on Uniswap v4
            </span>
          </div>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/40">Explore</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li><a href="#card" className="text-white/75 transition hover:text-white">The Card</a></li>
              <li><a href="#hook" className="text-white/75 transition hover:text-white">The Hook</a></li>
              <li><a href="#how" className="text-white/75 transition hover:text-white">How it works</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-white/40">Follow</p>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#111] py-2 pl-2 pr-4 text-[15px] text-white/80 transition hover:border-white/20 hover:text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d={siX.path} />
                </svg>
              </span>
              {X_HANDLE}
            </a>
          </div>
        </div>
        <p
          aria-hidden
          className="headline relative mx-auto mt-16 -mb-[0.18em] max-w-6xl select-none whitespace-nowrap bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.02)_85%)] bg-clip-text px-4 text-center text-[17vw] font-semibold leading-none text-transparent xl:text-[210px]"
        >
          hooks.cards
        </p>
      </footer>

    </main>
  );
}
