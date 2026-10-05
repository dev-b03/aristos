import React, { useState, useEffect } from "react";
import { siteConfig } from "../../content/site";
import { HeroDepthScene } from "../effects/HeroDepthScene";
import { GlassPanel } from "../effects/GlassPanel";
import { ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handlePointerMove = (e: MouseEvent) => {
      if (mediaQuery.matches) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setPointer({ x, y });
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#0D0D0D]"
      aria-label="Hero section"
    >
      {/* Layer 1: Ambient Environment Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep navy atmospheric light */}
        <div
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 bg-[#1B2638]"
          style={{
            transform: isReducedMotion
              ? "none"
              : `translate(${pointer.x * -15}px, ${pointer.y * -15}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
        {/* Subtle gold specular beam */}
        <div
          className="absolute top-1/3 -right-24 w-[450px] h-[450px] rounded-full blur-[160px] opacity-15 bg-[#E0C9A6]"
          style={{
            transform: isReducedMotion
              ? "none"
              : `translate(${pointer.x * 20}px, ${pointer.y * 20}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-ambient-grain opacity-60" />
      </div>

      {/* Layer 1b: 3D Spatial Depth Scene (Three.js glass slabs & reflective floor plane) */}
      <HeroDepthScene pointer={pointer} />

      {/* Main Viewport Content Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Intellectual Positioning & Typography (7 cols on lg) */}
        <div
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
          style={{
            transform: isReducedMotion
              ? "none"
              : `translate(${pointer.x * -8}px, ${pointer.y * -8}px)`,
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Layer 6: Micro UI Header Metadata (Zero-pill, clean unboxed text) */}
          <div className="flex items-center gap-3 text-xs font-mono-code tracking-[0.2em] text-[#E0C9A6]/70">
            <span className="text-[#F2F0E8]/90 font-semibold">ARISTOS / 01</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>IDENTITY & ARCHIVE</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span className="text-[#F4EDE1]/50 hidden sm:inline">2024—2026</span>
          </div>

          {/* Layer 3: Primary Typography */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold leading-[1.05] tracking-tight text-[#F2F0E8] text-balance">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4EDE1] to-[#E0C9A6]/90">
                {siteConfig.coreMotto.line1}
              </span>
              <span className="block text-[#F2F0E8]/95">
                {siteConfig.coreMotto.line2}
              </span>
              <span className="block text-[#E0C9A6]">
                {siteConfig.coreMotto.line3}
              </span>
            </h1>

            {/* Sub-identity tag */}
            <div className="pt-2">
              <p className="text-lg md:text-xl font-editorial italic text-[#E0C9A6]/90 tracking-wide">
                {siteConfig.fullName}
              </p>
            </div>
          </div>

          {/* Supporting Positioning Paragraph */}
          <p className="max-w-xl text-base md:text-lg text-[#F2F0E8]/80 leading-relaxed font-light text-balance border-l border-[#E0C9A6]/30 pl-5 py-1">
            {siteConfig.positioning}
          </p>

          {/* Layer 4: Glass Control Area & Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest text-[#0D0D0D] bg-[#F2F0E8] hover:bg-[#E0C9A6] transition-all duration-200 active:scale-[0.98] shadow-lg cursor-pointer"
            >
              Start a Conversation
            </button>

            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs uppercase tracking-widest text-[#F2F0E8] hover:text-[#E0C9A6] border border-white/10 hover:border-[#E0C9A6]/30 transition-all duration-200"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            {/* Clean metadata badge */}
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono-code text-[#F2F0E8]/50 pl-2">
              <Sparkles className="w-3 h-3 text-[#E0C9A6]" />
              <span>RESEARCH · WRITING · STRATEGY</span>
            </div>
          </div>
        </div>

        {/* Right Column: Layer 2 Portrait & Reflection Composition (5 cols on lg) */}
        <div
          className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 lg:pt-0"
          style={{
            transform: isReducedMotion
              ? "none"
              : `translate(${pointer.x * 12}px, ${pointer.y * 12}px)`,
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Portrait Container with Dimensional Framing */}
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square">
            {/* Outer subtle glow circle */}
            <div className="absolute inset-0 rounded-full border border-[#E0C9A6]/20 scale-105 pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-white/5 scale-115 pointer-events-none" />

            {/* Primary Portrait Card */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-[#E0C9A6]/25 bg-[#0D1B2A]/40 shadow-2xl shadow-black/80">
              <img
                src="/src/assets/images/dien_hero_portrait_1791208797728.jpg"
                alt="Dien El-Shaddai King Dien — Research-driven writer and strategist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-110 hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle gradient vignette to blend with dark canvas */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Glass Metadata Panel */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 z-20 max-w-[260px]">
              <GlassPanel variant="frosted" withSpecular className="p-4">
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#E0C9A6]">
                    Curated Persona
                  </div>
                  <div className="text-sm font-display font-semibold text-[#F2F0E8]">
                    Dien El-Shaddai King Dien
                  </div>
                  <div className="text-[11px] text-[#F2F0E8]/70 leading-snug">
                    Biochemical analytical rigor meets commercial narrative strategy.
                  </div>
                </div>
              </GlassPanel>
            </div>

            {/* Floating Glass Badge (Top Right) */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-20">
              <GlassPanel variant="clear" className="px-3.5 py-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0C9A6] animate-pulse" />
                <span className="text-[10px] font-mono-code tracking-widest uppercase text-[#F2F0E8]/90">
                  Available for Select Engagements
                </span>
              </GlassPanel>
            </div>
          </div>

          {/* Layer 5: Specular Mirror Reflection Beneath */}
          <div
            className="w-full max-w-[380px] sm:max-w-[420px] aspect-[4/1] mt-1 overflow-hidden pointer-events-none select-none relative opacity-25"
            aria-hidden="true"
          >
            <div className="mirror-surface w-full h-[320px] -mt-[260px] flex items-center justify-center">
              <img
                src="/src/assets/images/dien_hero_portrait_1791208797728.jpg"
                alt=""
                className="w-full h-full object-cover rounded-full grayscale filter blur-[2px]"
              />
            </div>
            {/* Mirror floor fade mask */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D0D]/60 to-[#0D0D0D]" />
          </div>
        </div>
      </div>

      {/* Layer 6: Section Footer Anchor & Down Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 flex items-center justify-between border-t border-white/5 text-xs text-[#F2F0E8]/40">
        <div className="flex items-center gap-2 font-mono-code text-[11px]">
          <span>01 / 07</span>
          <span aria-hidden="true">·</span>
          <span>THE CREATIVE WORLD OF ARISTOS</span>
        </div>
        <a
          href="#mind"
          className="flex items-center gap-2 hover:text-[#E0C9A6] transition-colors font-mono-code text-[11px]"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
