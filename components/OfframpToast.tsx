"use client";

import { useEffect, useState } from "react";
import { MerchantIcon, type MerchantId } from "./Merchant";

// Illustrative cash outs, one per payout method.
const cashouts: { id: MerchantId; amount: string; detail: string }[] = [
  { id: "revolut", amount: "$33.53", detail: "Settled to Revolut in EUR" },
  { id: "zelle", amount: "$75.00", detail: "Sent with Zelle in USD" },
  { id: "chime", amount: "$120.00", detail: "Settled to Chime in USD" },
  { id: "monzo", amount: "$58.20", detail: "Settled to Monzo in GBP" },
  { id: "mercadopago", amount: "$46.10", detail: "Settled to Mercado Pago" },
];

// Cycles through payout methods on the off-ramp photo.
export default function OfframpToast() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % cashouts.length), 2600);
    return () => clearInterval(id);
  }, []);

  const c = cashouts[i];
  return (
    <div
      key={i}
      className="toast-in flex items-center gap-3.5 rounded-[22px] border border-white/10 bg-black/60 p-3.5 pr-5 backdrop-blur-md"
    >
      <MerchantIcon id={c.id} size={40} />
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-medium">{c.amount} Cashed out</p>
        <p className="truncate text-[13px] text-white/60">{c.detail}</p>
      </div>
      <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-black">Settled</span>
    </div>
  );
}
