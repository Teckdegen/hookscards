import {
  siNetflix,
  siSpotify,
  siUber,
  siStarbucks,
  siAirbnb,
  siApple,
  siDoordash,
  siFigma,
  siNotion,
  siClaude,
  siYoutube,
  siShopify,
  siDuolingo,
  siLyft,
} from "simple-icons";

const logos = [
  siNetflix, siSpotify, siUber, siAirbnb, siStarbucks, siApple, siClaude,
  siFigma, siNotion, siYoutube, siDoordash, siShopify, siDuolingo, siLyft,
];

// Brand colour, or white when the brand colour is too dark to see on black.
function glyphColor(hex: string) {
  const n = parseInt(hex, 16);
  const lum = 0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255);
  return lum < 60 ? "#ffffff" : `#${hex}`;
}

// Infinite logo strip; the list is rendered twice so the loop is seamless.
export default function MerchantMarquee() {
  return (
    <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="marquee flex w-max gap-10">
        {[...logos, ...logos].map((l, i) => (
          <span key={i} className="flex items-center gap-2 text-[17px] font-semibold tracking-tight text-white/85">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill={glyphColor(l.hex)} aria-hidden="true">
              <path d={l.path} />
            </svg>
            {l.title}
          </span>
        ))}
      </div>
    </div>
  );
}
