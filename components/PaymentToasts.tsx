"use client";

import { useEffect, useState } from "react";
import { MerchantIcon, type MerchantId } from "./Merchant";

// Illustrative events only.
const events: { merchant: MerchantId; title: string; detail: string }[] = [
  { merchant: "revolut", title: "$33.53 Cashed out", detail: "Settled to Revolut in EUR" },
  { merchant: "amazon", title: "Order placed", detail: "Paid with crypto on Amazon" },
  { merchant: "chime", title: "$120.00 Cashed out", detail: "Sent to your Chime account" },
  { merchant: "zedkr", title: "Gift card ready", detail: "Bought with crypto" },
  { merchant: "ebay", title: "Order placed", detail: "Paid with crypto on eBay" },
  { merchant: "zedkr", title: "Hotel booked", detail: "Corinthia Lisbon · 1 night" },
  { merchant: "zelle", title: "$75.00 Cashed out", detail: "Sent with Zelle" },
];

export default function PaymentToasts() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % events.length), 2800);
    return () => clearInterval(id);
  }, []);

  const e = events[i];
  return (
    <div
      key={i}
      className="toast-in flex w-full max-w-[340px] items-center gap-3.5 rounded-[22px] border border-white/5 bg-[#1a1a1a]/90 p-3.5 pr-5 shadow-2xl backdrop-blur"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#232323]">
        <MerchantIcon id={e.merchant} size={30} />
      </span>
      <div className="min-w-0">
        <p className="text-[15px] font-medium">{e.title}</p>
        <p className="truncate text-[13px] text-muted">{e.detail}</p>
      </div>
    </div>
  );
}
