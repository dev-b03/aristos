import React, { useState } from "react";
import { siteConfig } from "../../content/site";
import { GlassPanel } from "../effects/GlassPanel";
import { ChevronRight, Compass } from "lucide-react";

export const Approach: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = siteConfig.approach[activeStepIndex];

  return (
    <section
      id="mind"
      className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#0D1B2A]/40 border-t border-white/5 overflow-hidden"
      aria-label="Approach and Mind methodology"
    >
      {/* Ambient background depth */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1B2638] rounded-full blur-[160px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6] tracking-[0.2em]">
              <span>02 / 07</span>
              <span aria-hidden="true">·</span>
              <span>THE MIND & METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F2F0E8] tracking-tight">
              How Ideas Are Shaped
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#F2F0E8]/70 font-light leading-relaxed">
            "My work sits at the intersection of writing, research, storytelling and strategy. Understanding what a business or individual is really trying to say, and making that message resonate."
          </p>
        </div>

        {/* The 7-Phase Linear Progression Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {siteConfig.approach.map((item, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-[#1B2638] border-[#E0C9A6]/50 shadow-lg shadow-black/40"
                      : "bg-[#0D0D0D]/60 border-white/5 hover:border-white/20 text-[#F2F0E8]/60 hover:text-[#F2F0E8]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono-code ${
                        isActive ? "text-[#E0C9A6]" : "text-[#F2F0E8]/40"
                      }`}
                    >
                      {item.step}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E0C9A6] animate-pulse" />
                    )}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-semibold tracking-wider uppercase font-modern ${
                      isActive ? "text-[#F2F0E8]" : "text-[#F2F0E8]/70"
                    }`}
                  >
                    {item.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Card on the Active Step */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Analytical Detail Panel */}
          <div className="lg:col-span-8">
            <GlassPanel variant="frosted" withSpecular className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E0C9A6]/10 border border-[#E0C9A6]/30 flex items-center justify-center text-[#E0C9A6] font-mono-code font-bold text-sm">
                    {activeStep.step}
                  </div>
                  <div>
                    <div className="text-[11px] font-mono-code tracking-widest uppercase text-[#E0C9A6]/70">
                      Phase Focus
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#F2F0E8]">
                      {activeStep.label}
                    </h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#F2F0E8]/90 font-light leading-relaxed">
                  {activeStep.description}
                </p>

                {/* Analytical Breakdown quote */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-xs uppercase tracking-wider font-mono-code text-[#E0C9A6]/60">
                    Execution Philosophy
                  </div>
                  <p className="text-sm text-[#F2F0E8]/70 italic font-editorial">
                    {activeStepIndex === 0 &&
                      "Without rigorous evidence, writing devolves into mere posturing. We ground every argument in primary data and market realities."}
                    {activeStepIndex === 1 &&
                      "Strip away buzzwords to locate the core thesis: what is the genuine value proposition or emotional tension?"}
                    {activeStepIndex === 2 &&
                      "Every piece of writing exists for an audience. We frame the narrative through their fears, desires, and decision matrices."}
                    {activeStepIndex === 3 &&
                      "Connecting disparate disciplines: linking biochemical logic with consumer psychology and technological market strategy."}
                    {activeStepIndex === 4 &&
                      "Words chosen for velocity, cadence, and uncompromising clarity. No filler, no algorithmic sludge."}
                    {activeStepIndex === 5 &&
                      "Ruthless editorial reduction. If a sentence does not advance the objective or substantiate the claim, it is excised."}
                    {activeStepIndex === 6 &&
                      "Delivery across platforms—whether an executive LinkedIn thought piece, a cinematic script, or a strategic investor brief."}
                  </p>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-8 flex items-center justify-between border-t border-white/5 text-xs">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded border border-white/10 hover:border-white/30 text-[#F2F0E8]/70 hover:text-[#F2F0E8] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  ← Previous Phase
                </button>
                <div className="font-mono-code text-[#E0C9A6] text-xs">
                  {activeStepIndex + 1} of {siteConfig.approach.length}
                </div>
                <button
                  disabled={activeStepIndex === siteConfig.approach.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) => Math.min(siteConfig.approach.length - 1, prev + 1))
                  }
                  className="px-4 py-2 rounded bg-[#F2F0E8]/10 hover:bg-[#F2F0E8]/20 border border-white/10 text-[#F2F0E8] disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </GlassPanel>
          </div>

          {/* Right Analytical Context Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <GlassPanel variant="clear" className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6] uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>The Core Mandate</span>
              </div>
              <p className="text-xl font-display font-medium text-[#F2F0E8] leading-snug mb-3">
                "Think deeply. Research properly. Write clearly. Make it matter."
              </p>
              <p className="text-xs text-[#F2F0E8]/60 leading-relaxed">
                A disciplined operational framework refined through academic biochemistry training and practical creative leadership at Aristos Creative and Havilah AgroTech.
              </p>
            </GlassPanel>

            <div className="p-6 rounded-xl border border-white/5 bg-[#0D0D0D]/60 space-y-3">
              <div className="text-[11px] font-mono-code tracking-widest text-[#E0C9A6]/80 uppercase">
                Continuous Cycle
              </div>
              <div className="text-xs text-[#F2F0E8]/70 leading-relaxed">
                The framework is not a linear conveyor belt, but an evolving loop. Each project informs the next, feeding the overarching Aristos creative archive.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
