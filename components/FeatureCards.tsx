import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";
import Reveal from "./Reveal";
import { MerchantIcon, type MerchantId } from "./Merchant";
import seaVilla from "@/public/travel/sea-villa.jpg";

// 01: crypto leaves the wallet and lands in a bank app
function CashOutVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 bg-[#f2f0eb] px-5 text-black">
      <div className="relative">
        <div className="absolute inset-x-3 -top-2 h-6 rounded-2xl bg-white/60" />
        <div className="relative flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
          <MerchantIcon id="zedkr" size={36} />
          <span className="min-w-0">
            <span className="block text-[15px] font-medium">Zedkr wallet</span>
            <span className="block text-[13px] text-black/45">−120.00 USDC</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center -space-y-2 text-black/25">
        <ChevronDown className="h-5 w-5 opacity-40" />
        <ChevronDown className="h-5 w-5 opacity-70" />
        <ChevronDown className="h-5 w-5" />
      </div>
      <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
        <MerchantIcon id="chime" size={36} />
        <span className="min-w-0">
          <span className="block text-[15px] font-medium">Chime</span>
          <span className="block text-[13px] font-medium text-black/70">+$120.00</span>
        </span>
      </div>
    </div>
  );
}

// 02: soft colour field with the two stores in a checkout pill
function ShopVisual() {
  return (
    <div className="relative grid h-full place-items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_30%_35%,#fde2c4_0%,transparent_70%),radial-gradient(55%_55%_at_75%_40%,#e4d4ff_0%,transparent_70%),radial-gradient(60%_55%_at_45%_75%,#ffd0dc_0%,transparent_70%),radial-gradient(50%_45%_at_80%_80%,#cfe0ff_0%,transparent_70%)] blur-xl" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-5 text-black shadow-[0_12px_30px_-10px_rgba(0,0,0,0.3)]">
          <span className="flex -space-x-2">
            <span className="rounded-full ring-2 ring-white"><MerchantIcon id="amazon" size={34} /></span>
            <span className="rounded-full ring-2 ring-white"><MerchantIcon id="ebay" size={34} /></span>
          </span>
          <span className="text-[17px] font-semibold tracking-tight">Pay with crypto</span>
        </div>
        <span className="rounded-full bg-white/70 px-3 py-1 text-[12px] text-black/55 backdrop-blur">Order placed · Paid in ETH</span>
      </div>
    </div>
  );
}

const giftCards: { id: MerchantId; bg: string; fg: string; name: string; value: string; rotate: string }[] = [
  { id: "spotify", bg: "#121212", fg: "#ffffff", name: "Spotify", value: "$30", rotate: "-rotate-[14deg] -translate-x-12 translate-y-4" },
  { id: "apple", bg: "#f5f5f7", fg: "#000000", name: "Apple", value: "$100", rotate: "rotate-[12deg] translate-x-12 translate-y-4" },
  { id: "netflix", bg: "#000000", fg: "#ffffff", name: "Netflix", value: "$50", rotate: "-translate-y-4" },
];

// 03: a fanned hand of gift cards
function GiftCardsVisual() {
  return (
    <div className="relative grid h-full place-items-center overflow-hidden bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,#e9eaec_60%,#d5d7da_100%)]">
      {giftCards.map((c) => (
        <div
          key={c.id}
          className={`absolute flex h-[100px] w-[156px] flex-col justify-between rounded-2xl p-3.5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.45)] ring-1 ring-black/5 transition duration-500 group-hover:scale-[1.03] ${c.rotate}`}
          style={{ background: c.bg, color: c.fg }}
        >
          <div className="flex items-center justify-between">
            <MerchantIcon id={c.id} size={26} />
            <span className="text-[17px] font-semibold tabular-nums">{c.value}</span>
          </div>
          <span className="text-[12px] font-medium opacity-70">{c.name} gift card</span>
        </div>
      ))}
    </div>
  );
}

// 04: a real hotel photo with the booking on top
function TravelVisual() {
  return (
    <div className="relative h-full">
      <Image
        src={seaVilla}
        alt=""
        fill
        placeholder="blur"
        sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
      <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-black shadow-lg backdrop-blur">
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14px] font-medium">Sea villa · 3 nights</span>
          <span className="flex items-center gap-1 text-[12px] text-black/50">
            <Star className="h-3 w-3 fill-black text-black" /> 9.4 · Paid in ETH
          </span>
        </span>
        <span className="text-[15px] font-semibold tabular-nums">$642</span>
      </div>
    </div>
  );
}

const features = [
  { title: "Cash out", body: "Send your crypto to Chime, Revolut, Zelle, Monzo or Mercado Pago as everyday money.", visual: <CashOutVisual /> },
  { title: "Shop", body: "Check out on Amazon and eBay and pay with your Robinhood assets.", visual: <ShopVisual /> },
  { title: "Gift cards", body: "Buy gift cards with crypto, ready to use or send to someone.", visual: <GiftCardsVisual /> },
  { title: "Travel", body: "Book hotels for your next trip and pay with crypto.", visual: <TravelVisual /> },
];

// Four picture cards, one per thing Zedkr does, with a title and line beneath each.
export default function FeatureCards() {
  return (
    <div className="mx-auto mt-16 grid max-w-6xl gap-x-5 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ title, body, visual }, i) => (
        <Reveal key={title} delay={i * 100}>
          <div className="group h-[340px] overflow-hidden rounded-[26px] sm:h-[380px] lg:h-[360px]">{visual}</div>
          <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
        </Reveal>
      ))}
    </div>
  );
}
