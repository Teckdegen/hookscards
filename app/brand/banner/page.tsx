import type { Metadata } from "next";
import { Phone, MiniCard } from "@/components/Phone";
import { HomeScreen } from "@/components/AppScreens";
import { HookMark } from "@/components/Logo";

// X header layout (1500×500). Captured to brand/x-banner.png with headless Chrome.
export const metadata: Metadata = { title: "Zedkr — X banner", robots: { index: false } };

export default function Banner() {
  return (
    <div className="relative h-[500px] w-[1500px] overflow-hidden bg-[radial-gradient(55%_95%_at_38%_20%,#202022_0%,#0a0a0b_55%,#000_100%)]">
      {/* keep the Next.js dev badge out of the capture */}
      <style>{`nextjs-portal{display:none!important}`}</style>

      {/* soft light under the phone */}
      <div className="absolute left-[400px] top-[300px] h-[260px] w-[520px] rounded-full bg-accent/[0.12] blur-[90px]" />

      {/* card, standing with its logo at the top, leaning on the phone */}
      <div className="absolute left-[210px] top-[262px] w-[430px] rotate-[102deg]">
        <div className="shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
          <MiniCard />
        </div>
      </div>

      {/* phone, running off the bottom edge */}
      <div className="absolute left-[500px] top-[38px] origin-top-left scale-[1.16]">
        <Phone label="Zedkr app home screen">
          <HomeScreen />
        </Phone>
      </div>

      {/* wordmark */}
      <div className="absolute right-[100px] top-1/2 flex -translate-y-1/2 items-center gap-3.5 text-white">
        <HookMark className="h-9 w-9" />
        <span className="text-[32px] font-semibold tracking-[-0.03em]">Zedkr</span>
        <span className="ml-1.5 text-[32px] font-normal tracking-[-0.03em] text-white/85">Coming soon.</span>
      </div>
    </div>
  );
}
