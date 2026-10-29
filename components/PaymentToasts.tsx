"use client";

import { useEffect, useState } from "react";
import { MerchantIcon, type MerchantId } from "./Merchant";

// Illustrative events only — the product is not live.
const events: { merchant: MerchantId; title: string; detail: string }[] = [
  { merchant: "netflix", title: "$15.49 Paid", detail: "Card purchase at Netflix" },
  { merchant: "hook", title: "Ready cash refilled", detail: "Hook moved $50.00 from your pool" },
  { merchant: "airbnb", title: "$184.00 Paid", detail: "Card purchase at Airbnb" },
  { merchant: "hook", title: "Volatility fee raised", detail: "Hook is protecting your balance" },
  { merchant: "uber", title: "$23.80 Paid", detail: "Card purchase at Uber" },
  { merchant: "claude", title: "$20.00 Paid", detail: "Card purchase at Claude" },
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
