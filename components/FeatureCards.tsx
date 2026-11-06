"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { Check, LoaderCircle, MapPin, Star } from "lucide-react";
import Reveal from "./Reveal";
import { MerchantIcon, type MerchantId } from "./Merchant";
import seaVilla from "@/public/travel/sea-villa.jpg";
import palmPool from "@/public/travel/palm-pool.jpg";
import beachResort from "@/public/travel/beach-resort.jpg";

// Ticks forward on a timer so each screen can loop through its states.
function useStep(ms: number) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((n) => n + 1), ms);
    return () => clearInterval(id);
  }, [ms]);
  return step;
}

/* ---------- Pay then success, shared by cash out, shop and gift cards ---------- */

type Payment = { id: MerchantId; amount: string; payLabel: string; doneLabel: string; button: string; doneButton: string };

// Loops: a single pay button, a moment of sending, then success, then the next payment.
function PayFlow({ payments, offset = 0 }: { payments: Payment[]; offset?: number }) {
  const step = useStep(800) + offset;
  const phase = step % 6; // 0-2 pay, 3 sending, 4-5 success
  const p = payments[Math.floor(step / 6) % payments.length];
  const [whole, cents] = p.amount.split(".");
  const done = phase >= 4;

  return (
    <div
      key={`${p.id}-${p.amount}-${done}`}
      className="toast-in relative flex w-full max-w-[250px] flex-col items-center rounded-[22px] bg-white px-5 py-6 text-center text-black shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]"
    >
      {done ? (
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[#22c55e] text-white shadow-[0_10px_30px_-8px_rgba(34,197,94,0.7)]">
          <Check className="h-7 w-7" strokeWidth={3} />
        </span>
      ) : (
        <MerchantIcon id={p.id} size={56} />
      )}
      <p className="mt-4 text-[13px] text-black/50">{done ? p.doneLabel : p.payLabel}</p>
      <p className="mt-1 text-[32px] font-semibold leading-none tracking-tight tabular-nums">
        ${whole}
        <span className="text-black/30">.{cents}</span>
      </p>
      <div
        className={`mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-full text-[13px] font-semibold ${done ? "bg-[#e9f7ee] text-[#137a3a]" : "bg-black text-white"}`}
      >
        {done ? (
          <>
            <Check className="h-4 w-4" strokeWidth={3} /> {p.doneButton}
          </>
        ) : phase === 3 ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" strokeWidth={2.5} /> Paying
          </>
        ) : (
          p.button
        )}
      </div>
    </div>
  );
}

/* ---------- 01 Cash out ---------- */

const payouts: Payment[] = [
  { id: "chime", amount: "120.00", payLabel: "Cash out to Chime", doneLabel: "Sent to Chime", button: "Pay", doneButton: "Paid" },
  { id: "revolut", amount: "33.53", payLabel: "Cash out to Revolut", doneLabel: "Sent to Revolut", button: "Pay", doneButton: "Paid" },
  { id: "zelle", amount: "75.00", payLabel: "Cash out to Zelle", doneLabel: "Sent to Zelle", button: "Pay", doneButton: "Paid" },
  { id: "monzo", amount: "58.20", payLabel: "Cash out to Monzo", doneLabel: "Sent to Monzo", button: "Pay", doneButton: "Paid" },
  { id: "mercadopago", amount: "46.10", payLabel: "Cash out to Mercado Pago", doneLabel: "Sent to Mercado Pago", button: "Pay", doneButton: "Paid" },
];

function CashOutVisual() {
  return (
    <div className="grid h-full place-items-center bg-[#f2f0eb] px-5">
      <PayFlow payments={payouts} />
    </div>
  );
}

/* ---------- 02 Shop ---------- */

const orders: Payment[] = [
  { id: "amazon", amount: "84.99", payLabel: "Amazon order", doneLabel: "Order placed on Amazon", button: "Pay with crypto", doneButton: "Paid" },
  { id: "ebay", amount: "129.00", payLabel: "eBay order", doneLabel: "Order placed on eBay", button: "Pay with crypto", doneButton: "Paid" },
];

function ShopVisual() {
  return (
    <div className="relative grid h-full place-items-center overflow-hidden bg-white px-5">
      <div className="drift absolute -inset-1/4 bg-[radial-gradient(60%_55%_at_30%_35%,#fde2c4_0%,transparent_70%),radial-gradient(55%_55%_at_75%_40%,#e4d4ff_0%,transparent_70%),radial-gradient(60%_55%_at_45%_75%,#ffd0dc_0%,transparent_70%),radial-gradient(50%_45%_at_80%_80%,#cfe0ff_0%,transparent_70%)] blur-xl" />
      <PayFlow payments={orders} offset={2} />
    </div>
  );
}

/* ---------- 03 Gift cards ---------- */

const gifts: Payment[] = [
  { id: "netflix", amount: "50.00", payLabel: "Netflix gift card", doneLabel: "Netflix code sent", button: "Pay with crypto", doneButton: "Paid" },
  { id: "spotify", amount: "30.00", payLabel: "Spotify gift card", doneLabel: "Spotify code sent", button: "Pay with crypto", doneButton: "Paid" },
  { id: "apple", amount: "100.00", payLabel: "Apple gift card", doneLabel: "Apple code sent", button: "Pay with crypto", doneButton: "Paid" },
  { id: "uber", amount: "25.00", payLabel: "Uber gift card", doneLabel: "Uber code sent", button: "Pay with crypto", doneButton: "Paid" },
];

function GiftCardsVisual() {
  return (
    <div className="grid h-full place-items-center bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,#e9eaec_60%,#d5d7da_100%)] px-5">
      <PayFlow payments={gifts} offset={4} />
    </div>
  );
}

/* ---------- 04 Travel ---------- */

const stays: { photo: StaticImageData; name: string; place: string; score: string; nights: number; price: string }[] = [
  { photo: seaVilla, name: "Sea villa", place: "Maldives", score: "9.4", nights: 3, price: "642" },
  { photo: palmPool, name: "Palm garden retreat", place: "Bali", score: "9.2", nights: 4, price: "736" },
  { photo: beachResort, name: "Beachfront resort", place: "Tulum", score: "9.0", nights: 2, price: "484" },
];

function TravelVisual() {
  const step = useStep(3200);
  const si = step % stays.length;
  const s = stays[si];

  return (
    <div className="relative h-full overflow-hidden">
      {stays.map((x, n) => (
        <Image
          key={x.place}
          src={x.photo}
          alt=""
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
          className={`ken-burns object-cover transition-opacity duration-1000 ${n === si ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/20" />
      <span key={`pin-${s.place}`} className="toast-in absolute left-4 top-4 flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1 text-[12px] font-medium text-white backdrop-blur-md">
        <MapPin className="h-3 w-3" /> {s.place}
      </span>
      <div key={s.place} className="toast-in absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-3 text-black shadow-lg backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[14px] font-medium">{s.name}</span>
            <span className="flex items-center gap-1 text-[12px] text-black/50">
              <Star className="h-3 w-3 fill-black text-black" /> {s.score} · {s.nights} nights
            </span>
          </span>
          <span className="text-right">
            <span className="block text-[15px] font-semibold tabular-nums">${s.price}</span>
            <span className="block text-[10px] text-black/45">total</span>
          </span>
        </div>
        <div className="mt-2.5 flex items-center justify-center gap-1.5 rounded-full bg-black py-2 text-[12px] font-semibold text-white">
          <MerchantIcon id="ethereum" size={16} /> Book with ETH
        </div>
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
          <div className="group h-[380px] overflow-hidden rounded-[26px] sm:h-[400px] lg:h-[380px]">{visual}</div>
          <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
        </Reveal>
      ))}
    </div>
  );
}
