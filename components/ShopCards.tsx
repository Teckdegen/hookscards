import Image, { type StaticImageData } from "next/image";
import { Gift, Truck } from "lucide-react";
import { MerchantIcon, type MerchantId } from "./Merchant";
import delivery from "@/public/shop/delivery.jpg";
import checkout from "@/public/shop/checkout.jpg";

// Photos from Unsplash; store logos sit on top.
const stores: { id: MerchantId; name: string; line: string; photo: StaticImageData }[] = [
  { id: "amazon", name: "Amazon", line: "Millions of items, paid with crypto", photo: delivery },
  { id: "ebay", name: "eBay", line: "New and used, paid with your tokens", photo: checkout },
];

const extras = [
  { icon: Gift, title: "Gift cards", line: "Buy gift cards with crypto" },
  { icon: Truck, title: "Free shipping", line: "On eligible items" },
];

// The two stores as photo cards, with gift cards and shipping beneath.
export default function ShopCards() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stores.map((s) => (
        <div
          key={s.id}
          className="group relative min-h-[300px] overflow-hidden rounded-[26px] border border-white/[0.08]"
        >
          <Image
            src={s.photo}
            alt=""
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 280px, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
          <div className="absolute left-4 top-4">
            <MerchantIcon id={s.id} size={44} />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-2xl font-semibold tracking-tight">{s.name}</p>
            <p className="mt-1 text-[13px] text-white/70">{s.line}</p>
          </div>
        </div>
      ))}
      {extras.map(({ icon: Icon, title, line }) => (
        <div key={title} className="flex items-center gap-3.5 py-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.06]">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <span className="min-w-0">
            <span className="block text-[15px] font-medium">{title}</span>
            <span className="block text-[13px] text-muted">{line}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
