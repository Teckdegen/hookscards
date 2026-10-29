import {
  ArrowDownToLine,
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  CircleGauge,
  CreditCard,
  Eye,
  Info,
  Lock,
  PieChart,
  RefreshCw,
  Send,
  ShieldCheck,
  Snowflake,
  Sparkle,
  TrendingUp,
} from "lucide-react";
import ExchangeUniswap from "@web3icons/react/icons/exchanges/ExchangeUniswap";
import { HookMark } from "./Logo";
import { MerchantIcon } from "./Merchant";
import { app, Cents, MiniCard, TxRow } from "./Phone";

// All sizes below are iOS points: the Phone frame scales the 390pt-wide screen down.

const panel = { background: app.surface, boxShadow: `inset 0 0 0 1px ${app.line}` };

function SquareButton({ icon: Icon, label }: { icon: typeof Send; label: string }) {
  return (
    <div className="flex w-[78px] flex-col items-center gap-2">
      <span
        className="grid h-[60px] w-[60px] place-items-center rounded-[20px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        style={{ background: app.surface2 }}
      >
        <Icon className="h-6 w-6" strokeWidth={1.7} />
      </span>
      <span className="whitespace-nowrap text-[13px] font-medium">{label}</span>
    </div>
  );
}

function ActivePill() {
  return (
    <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px]" style={{ background: app.surface2 }}>
      <span className="h-2 w-2 rounded-full bg-acid" />
      Active
    </span>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="relative mt-1 flex h-12 items-center justify-center px-5">
      <span className="absolute left-5 grid h-11 w-11 place-items-center rounded-full" style={panel}>
        <ChevronLeft className="h-6 w-6" strokeWidth={1.8} />
      </span>
      <span className="text-[17px] font-semibold tracking-tight">{title}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[17px] font-semibold tracking-tight">{children}</p>;
}

function ListRow({ icon: Icon, label, value }: { icon: typeof Send; label: string; value?: string }) {
  return (
    <div className="flex items-center gap-3.5 py-3">
      <Icon className="h-[22px] w-[22px] shrink-0" strokeWidth={1.6} />
      <span className="flex-1 whitespace-nowrap text-[16px]">{label}</span>
      {value && <span className="whitespace-nowrap text-[15px]" style={{ color: app.muted }}>{value}</span>}
      <ChevronRight className="h-5 w-5 shrink-0" style={{ color: app.muted }} />
    </div>
  );
}

function PillButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[54px] items-center justify-center gap-2.5 rounded-full text-[16px] font-medium" style={panel}>
      {children}
    </div>
  );
}

function DayChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full px-3.5 py-1.5 text-[13px] font-medium" style={{ background: app.surface }}>
      {children}
    </span>
  );
}

function TabBar() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 z-10 px-12 pb-8 pt-20"
      style={{ background: `linear-gradient(to top, ${app.bg} 45%, transparent)` }}
    >
      <div
        className="flex items-center justify-between rounded-full p-1.5 backdrop-blur-md"
        style={{ background: "rgba(32,32,35,0.85)", boxShadow: `inset 0 0 0 1px ${app.line}` }}
      >
        <span className="grid h-12 w-20 place-items-center opacity-70"><TrendingUp className="h-6 w-6" strokeWidth={1.7} /></span>
        <span className="grid h-12 w-24 place-items-center rounded-full bg-white/10"><CreditCard className="h-6 w-6" strokeWidth={1.7} /></span>
        <span className="grid h-12 w-20 place-items-center opacity-70"><Sparkle className="h-6 w-6" strokeWidth={1.7} /></span>
      </div>
    </div>
  );
}

/* ---------- Home ---------- */
export function HomeScreen() {
  return (
    <div className="px-5">
      <span className="absolute right-5 top-[64px] h-10 w-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4a4a4e,#161618)] ring-1 ring-white/10" />
      <p className="mt-14 text-center text-[15px]" style={{ color: app.muted }}>Spending balance</p>
      <p className="mt-2 text-center text-[52px] font-semibold leading-none tracking-[-0.045em]">
        <Cents v="$1,924.00" />
      </p>

      <div className="mt-8 flex justify-center gap-6">
        <SquareButton icon={ArrowDownToLine} label="Add money" />
        <SquareButton icon={Send} label="Send" />
        <SquareButton icon={CreditCard} label="Card" />
      </div>

      <div className="relative mt-7 overflow-hidden rounded-[24px] px-5 py-4" style={panel}>
        <HookMark className="absolute -right-4 -top-4 h-28 w-28 text-white/[0.035]" />
        <div className="relative flex items-start justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-[15px] font-medium">
              <span className="h-2 w-2 rounded-full bg-acid" /> Hook active
            </p>
            <p className="mt-1.5 whitespace-nowrap text-[20px] font-medium" style={{ color: "#c9cbcf" }}>
              $1.84 <span className="text-acid">earned</span>
            </p>
          </div>
          <div className="mt-0.5 whitespace-nowrap text-right">
            <p className="flex items-center justify-end gap-1.5 text-[14px]" style={{ color: app.muted }}>
              <MerchantIcon id="netflix" size={18} /> Netflix
            </p>
            <p className="mt-1 text-[14px] font-medium">refilled by hook</p>
            <div className="mt-2.5 flex justify-end gap-1">
              <span className="h-1.5 w-3.5 rounded-full bg-acid" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6"><DayChip>Today</DayChip></div>
      <div className="mt-1.5">
        <TxRow merchant="netflix" name="Netflix" date="Today · 9:12 AM" amount="-$15.49" status="ok" />
        <TxRow merchant="hook" name="Ready cash refill" date="Today · 9:12 AM" amount="+$50.00" positive />
        <TxRow merchant="uber" name="Uber" date="Today · 8:40 AM" amount="-$23.80" status="ok" />
        <TxRow merchant="spotify" name="Spotify" date="Today · 7:05 AM" amount="-$11.99" status="ok" />
        <TxRow merchant="starbucks" name="Starbucks" date="Today · 6:52 AM" amount="-$6.45" status="ok" />
      </div>
      <TabBar />
    </div>
  );
}

/* ---------- Card ---------- */
export function CardScreen() {
  return (
    <div>
      <Header title="Card" />
      <div className="mt-5 px-5">
        <MiniCard />
      </div>
      <div className="mx-5 mt-5 flex items-center justify-between rounded-[20px] px-5 py-3.5" style={panel}>
        <span className="flex items-center gap-2 whitespace-nowrap text-[16px]">
          Backed by liquidity <Info className="h-[18px] w-[18px]" strokeWidth={1.7} style={{ color: app.muted }} />
        </span>
        <ActivePill />
      </div>
      <div className="mt-6 flex justify-center gap-6">
        <SquareButton icon={Eye} label="Details" />
        <SquareButton icon={Snowflake} label="Freeze" />
      </div>
      <div className="mt-6 px-5">
        <SectionTitle>Card</SectionTitle>
        <div className="mt-1">
          <ListRow icon={CreditCard} label="Card limit" value="$2,500 / mo" />
          <ListRow icon={PieChart} label="Spend from" value="Ready cash" />
          <ListRow icon={RefreshCw} label="Auto refill" value="On" />
        </div>
      </div>
      <div className="mt-5 px-5">
        <PillButton>
          <HookMark className="h-6 w-6 text-acid" /> Top up ready cash
        </PillButton>
      </div>
    </div>
  );
}

/* ---------- Hook ---------- */
export function HookScreen() {
  return (
    <div>
      <Header title="Hook" />
      <div className="mx-5 mt-5 flex items-center gap-4 rounded-[24px] p-4" style={panel}>
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[18px] bg-acid text-black">
          <HookMark className="h-8 w-8" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-2 whitespace-nowrap text-[17px] font-semibold tracking-tight">
            The hook <ExchangeUniswap variant="branded" size={18} />
          </p>
          <p className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[14px]" style={{ color: app.muted }}>
            <span className="h-2 w-2 rounded-full bg-acid" /> Active on Uniswap v4
          </p>
        </div>
        <ChevronRight className="h-5 w-5" style={{ color: app.muted }} />
      </div>

      <div className="mx-5 mt-3 grid grid-cols-2 gap-3">
        {[
          ["Stablecoin peg", "$1.000"],
          ["Ready cash", "22%"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-[20px] px-4 py-3.5" style={panel}>
            <p className="text-[14px]" style={{ color: app.muted }}>{k}</p>
            <p className="mt-1 text-[24px] font-semibold tracking-tight">{v}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 px-5">
        <SectionTitle>Protection</SectionTitle>
        <div className="mt-1">
          <ListRow icon={CircleGauge} label="Volatility fee" value="Base" />
          <ListRow icon={Lock} label="Depeg breaker" value="Armed" />
          <ListRow icon={ShieldCheck} label="Pool access" value="Cardholders" />
          <ListRow icon={ArrowLeftRight} label="Spend fee" value="Discounted" />
        </div>
      </div>

      <div className="mt-4 px-5">
        <SectionTitle>Recent</SectionTitle>
        <div className="mt-1">
          <TxRow merchant="hook" name="Ready cash refill" date="Today · 9:12 AM" amount="+$50.00" positive />
          <TxRow merchant="hook" name="Pool fees earned" date="This week" amount="+$1.84" positive />
        </div>
      </div>

      <div className="mt-4 px-5">
        <PillButton>
          <ExchangeUniswap variant="branded" size={22} /> View hook onchain
        </PillButton>
      </div>
    </div>
  );
}
