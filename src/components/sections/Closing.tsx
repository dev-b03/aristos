import React from "react";
import { siteConfig } from "../../content/site";
import { GlassPanel } from "../effects/GlassPanel";
import { ArrowUpRight } from "lucide-react";

interface ClosingProps {
  onOpenContact: () => void;
}

export const Closing: React.FC<ClosingProps> = ({ onOpenContact }) => {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 lg:px-16 bg-[#0D0D0D] border-t border-white/5 overflow-hidden"
      aria-label="Closing philosophical crescendo"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[200px] opacity-15 bg-[#E0C9A6] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[500px] h-[400px] rounded-full blur-[180px] opacity-20 bg-[#1B2638] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        {/* Category Lead-in */}
        <div className="inline-flex items-center gap-3 text-xs font-mono-code text-[#E0C9A6] tracking-[0.25em] uppercase">
          <span>07 / 07</span>
          <span aria-hidden="true">·</span>
          <span>THE CREATIVE CREDO</span>
        </div>

        {/* The 4-Line Typographic Crescendo */}
        <div className="space-y-2 sm:space-y-4">
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#F2F0E8]/70">
            {siteConfig.coreMotto.line1}
          </div>
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#F2F0E8]/85">
            {siteConfig.coreMotto.line2}
          </div>
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#FFFFFF]">
            {siteConfig.coreMotto.line3}
          </div>
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#E0C9A6] pt-2">
            {siteConfig.coreMotto.conclusion}
          </div>
        </div>

        {/* Supporting Signature Note */}
        <div className="max-w-xl mx-auto pt-4 pb-2">
          <p className="text-base sm:text-lg text-[#F2F0E8]/80 font-editorial italic leading-relaxed">
            "A creative platform built around identity, thinking, and trajectory. Designed to give ideas the resonance they deserve."
          </p>
          <div className="text-xs font-mono-code text-[#E0C9A6]/70 uppercase tracking-widest mt-2">
            — {siteConfig.fullName}
          </div>
        </div>

        {/* Action Button & Platform Lockup */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-widest text-[#0D0D0D] bg-[#F2F0E8] hover:bg-[#E0C9A6] transition-all duration-300 active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={siteConfig.socials[0].url}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-mono-code uppercase tracking-wider text-[#F2F0E8] hover:text-[#E0C9A6] border border-white/10 hover:border-[#E0C9A6]/40 transition-colors flex items-center justify-center gap-2"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E0C9A6]" />
          </a>
        </div>
      </div>
    </section>
  );
};
