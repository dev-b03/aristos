import React from "react";
import { siteConfig } from "../../content/site";
import { GlassPanel } from "../effects/GlassPanel";
import { Dna, Briefcase, Cpu, Feather } from "lucide-react";

export const Intersection: React.FC = () => {
  return (
    <section
      id="intersection"
      className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#0D1B2A]/50 border-t border-white/5 overflow-hidden"
      aria-label="The Interdisciplinary Intersection"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[140px] opacity-20 bg-[#E0C9A6] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[160px] opacity-25 bg-[#1B2638] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6] tracking-[0.2em]">
              <span>04 / 07</span>
              <span aria-hidden="true">·</span>
              <span>THE INTERDISCIPLINARY CONVERGENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F2F0E8] tracking-tight">
              Where Rigor Meets Resonance
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#F2F0E8]/70 font-light leading-relaxed">
            Complex ideas deserve clear communication. The intersection of biochemistry research, commercial strategy, and storytelling.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <GlassPanel variant="frosted" className="p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#E0C9A6]/10 border border-[#E0C9A6]/20 flex items-center justify-center text-[#E0C9A6]">
              <Dna className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono-code text-[#E0C9A6]/80 uppercase tracking-wider">
                Academic Foundation
              </div>
              <h3 className="text-lg font-display font-semibold text-[#F2F0E8]">
                Biochemistry & Science
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#F2F0E8]/70 leading-relaxed font-light">
              Training in biochemistry sharpens systemic thinking, evidentiary critique, and the capacity to decipher dense technical paradigms without losing nuance.
            </p>
          </GlassPanel>

          <GlassPanel variant="frosted" className="p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#E0C9A6]/10 border border-[#E0C9A6]/20 flex items-center justify-center text-[#E0C9A6]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono-code text-[#E0C9A6]/80 uppercase tracking-wider">
                Applied Context
              </div>
              <h3 className="text-lg font-display font-semibold text-[#F2F0E8]">
                Technology & AgroTech
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#F2F0E8]/70 leading-relaxed font-light">
              Deep operational engagement with post-harvest food loss, agricultural preservation systems, and high-stakes emerging digital innovations.
            </p>
          </GlassPanel>

          <GlassPanel variant="frosted" className="p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#E0C9A6]/10 border border-[#E0C9A6]/20 flex items-center justify-center text-[#E0C9A6]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono-code text-[#E0C9A6]/80 uppercase tracking-wider">
                Commercial Driver
              </div>
              <h3 className="text-lg font-display font-semibold text-[#F2F0E8]">
                Business & E-Commerce
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#F2F0E8]/70 leading-relaxed font-light">
              Understanding market mechanics, buyer psychology, unit economics, and competitive differentiation to ensure messages generate tangible commercial traction.
            </p>
          </GlassPanel>

          <GlassPanel variant="frosted" className="p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#E0C9A6]/10 border border-[#E0C9A6]/20 flex items-center justify-center text-[#E0C9A6]">
              <Feather className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono-code text-[#E0C9A6]/80 uppercase tracking-wider">
                Artistic Craft
              </div>
              <h3 className="text-lg font-display font-semibold text-[#F2F0E8]">
                Narrative & Storytelling
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#F2F0E8]/70 leading-relaxed font-light">
              Infusing facts with emotional resonance, cadence, and human vulnerability. Crafting screenplays and essays that linger in the audience's mind.
            </p>
          </GlassPanel>
        </div>

        {/* The Triad Synthesis Visual Block */}
        <div className="rounded-2xl border border-white/10 bg-[#0D0D0D]/70 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="text-xs font-mono-code text-[#E0C9A6] tracking-widest uppercase">
              The Strategic Axiom
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#F2F0E8] leading-tight text-balance">
              "Strong ideas need equally strong communication."
            </h3>
            <p className="text-sm sm:text-base text-[#F2F0E8]/75 leading-relaxed font-light">
              When cutting-edge technology or scientific research fails to reach people, it is rarely a failure of engineering—it is almost always an inability to translate value into an undeniable human narrative. Aristos is built to bridge that exact chasm.
            </p>
          </div>

          {/* Subtle architectural schematic grid in the background */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center opacity-10 pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-64 h-64 border border-[#E0C9A6] rounded-full flex items-center justify-center">
              <div className="w-48 h-48 border border-[#E0C9A6] rounded-full flex items-center justify-center">
                <div className="w-32 h-32 border border-[#E0C9A6] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
