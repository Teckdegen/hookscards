import Image, { type StaticImageData } from "next/image";
import { Star } from "lucide-react";
import seaVilla from "@/public/travel/sea-villa.jpg";
import palmPool from "@/public/travel/palm-pool.jpg";
import beachResort from "@/public/travel/beach-resort.jpg";

// Illustrative stays (photos from Unsplash), styled like the app's hotel results.
const stays: { photo: StaticImageData; name: string; place: string; stars: number; score: string; price: string }[] = [
  { photo: seaVilla, name: "Ocean view villas", place: "Infinity pool · Sea view", stars: 5, score: "9.6", price: "$270" },
  { photo: palmPool, name: "Palm garden retreat", place: "Pool · Beach access", stars: 4, score: "9.2", price: "$184" },
  { photo: beachResort, name: "Beachfront resort", place: "Pool · Ocean front", stars: 5, score: "9.4", price: "$242" },
];

function StayCard({ stay, tall = false }: { stay: (typeof stays)[number]; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-[26px] border border-white/[0.08] ${tall ? "h-full min-h-[420px]" : "h-[200px]"}`}>
      <Image
        src={stay.photo}
        alt={stay.name}
        fill
        placeholder="blur"
        sizes="(min-width: 1024px) 320px, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[12px] font-semibold text-black">
        {stay.stars} <Star className="h-3 w-3 fill-black" strokeWidth={0} />
      </span>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="truncate text-[16px] font-semibold">{stay.name}</p>
          <p className="truncate text-[12px] text-white/65">{stay.place}</p>
          <p className="mt-1 flex items-center gap-1 text-[12px] text-white/80">
            <Star className="h-3 w-3 fill-white/80" strokeWidth={0} /> {stay.score}
          </p>
        </div>
        <p className="shrink-0 text-right">
          <span className="block text-[18px] font-semibold">{stay.price}</span>
          <span className="block text-[11px] text-white/60">/ night</span>
        </p>
      </div>
    </div>
  );
}

// One tall stay beside two short ones.
export default function TravelCards() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <StayCard stay={stays[0]} tall />
      <div className="grid gap-3">
        <StayCard stay={stays[1]} />
        <StayCard stay={stays[2]} />
      </div>
    </div>
  );
}
