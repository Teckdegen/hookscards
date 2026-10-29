import { ArrowUpRight } from "lucide-react";
import ExchangeUniswap from "@web3icons/react/icons/exchanges/ExchangeUniswap";

const STATS_URL = "https://zedkr-airdop-bot-production.up.railway.app/stats";
const BUY_URL = "https://app.uniswap.org/explore/tokens/robinhood/0x6662060B16B61bA3F83bca6cCc796Eb3AcDf7777";

// Last known total, shown if the airdrop API can't be reached.
const FALLBACK_USD = 12253;

async function getAirdroppedUsd(): Promise<number> {
  try {
    const res = await fetch(STATS_URL, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(String(res.status));
    const data = (await res.json()) as { airdropped_usd?: unknown };
    if (typeof data.airdropped_usd !== "number") throw new Error("bad shape");
    return data.airdropped_usd;
  } catch {
    return FALLBACK_USD;
  }
}

// One live number, straight on the page, and a way to buy the token.
export default async function StatsCards() {
  const usd = (await getAirdroppedUsd()).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <div className="text-center">
      <p className="headline text-fade text-[64px] tabular-nums leading-none sm:text-[120px] lg:text-[150px]">{usd}</p>
      <p className="mt-6 text-lg text-muted sm:text-xl">Value in USD airdropped to users</p>
      <a
        href={BUY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-[17px] font-medium text-black transition hover:bg-white/85"
      >
        <ExchangeUniswap variant="branded" size={22} />
        Buy $ZED
        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
      </a>
    </div>
  );
}
