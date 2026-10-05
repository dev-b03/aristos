import React, { useState } from "react";
import { insights, Insight } from "../../content/insights";
import { GlassPanel } from "../effects/GlassPanel";
import { BookOpen, X, ArrowUpRight, ExternalLink } from "lucide-react";

export const Insights: React.FC = () => {
  const [activeInsight, setActiveInsight] = useState<Insight | null>(null);

  return (
    <section
      id="thought"
      className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#0D1B2A]/40 border-t border-white/5 overflow-hidden"
      aria-label="Thought and Archive Section"
    >
      {/* Background ambient glow */}
      <div className="absolute -top-32 left-1/3 w-80 h-80 rounded-full blur-[140px] opacity-15 bg-[#E0C9A6] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6] tracking-[0.2em]">
              <span>06 / 07</span>
              <span aria-hidden="true">·</span>
              <span>FROM THE ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F2F0E8] tracking-tight">
              Thought & Perspectives
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#F2F0E8]/70 font-light leading-relaxed">
            Essays on purpose, stillness, food system logistics, and intellectual positioning extracted from Dien's executive writing archives.
          </p>
        </div>

        {/* Featured Thought Card + List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Editorial Feature Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <GlassPanel
              variant="frosted"
              withSpecular
              className="p-8 sm:p-10 h-full flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#1B2638] relative border border-white/10">
                  <img
                    src="/src/assets/images/thought_editorial_archive_1791208782819.jpg"
                    alt="Contemplative desk with notebook and fountain pen"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-115 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#E0C9A6] bg-[#0D0D0D]/80 px-2.5 py-1 rounded">
                      Lead Thought Piece
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6]/80">
                    <span>{insights[0].category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{insights[0].readTime}</span>
                  </div>
                  <h3
                    onClick={() => setActiveInsight(insights[0])}
                    className="text-2xl font-display font-bold text-[#F2F0E8] hover:text-[#E0C9A6] transition-colors cursor-pointer"
                  >
                    {insights[0].title}
                  </h3>
                  <p className="text-sm text-[#F2F0E8]/75 font-light leading-relaxed">
                    {insights[0].excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveInsight(insights[0])}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E0C9A6] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Full Essay</span>
                </button>
                <a
                  href={insights[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="View on LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </GlassPanel>
          </div>

          {/* Secondary Thought List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {insights.slice(1).map((insight) => (
              <div
                key={insight.id}
                onClick={() => setActiveInsight(insight)}
                className="group p-6 sm:p-8 rounded-xl border border-white/5 bg-[#0D0D0D]/60 hover:bg-[#1B2638]/40 hover:border-[#E0C9A6]/30 transition-all duration-300 cursor-pointer space-y-3"
              >
                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex items-center justify-between text-xs font-mono-code text-[#E0C9A6]/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[#F2F0E8]/40">{insight.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{insight.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#F2F0E8]/50">{insight.readTime}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#E0C9A6] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#F2F0E8] group-hover:text-[#E0C9A6] transition-colors">
                  {insight.title}
                </h3>

                <p className="text-sm text-[#F2F0E8]/70 font-light leading-relaxed">
                  {insight.excerpt}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono-code text-[#F2F0E8]/40">
                  {insight.tags.map((tag, i) => (
                    <span key={tag}>
                      #{tag}
                      {i < insight.tags.length - 1 && " ·"}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reading Modal for Full Insight Content */}
      {activeInsight && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-insight-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in"
        >
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0D0D0D] border border-white/10 shadow-2xl p-8 sm:p-10 my-auto space-y-6">
            <button
              onClick={() => setActiveInsight(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1B2638] text-[#F2F0E8] hover:text-[#E0C9A6] transition-colors cursor-pointer"
              aria-label="Close insight essay"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6]">
              <span>{activeInsight.number}</span>
              <span aria-hidden="true">·</span>
              <span>{activeInsight.category}</span>
              <span aria-hidden="true">·</span>
              <span>{activeInsight.readTime}</span>
            </div>

            <h2
              id="modal-insight-title"
              className="text-2xl sm:text-3xl font-display font-bold text-[#F2F0E8]"
            >
              {activeInsight.title}
            </h2>

            <div className="text-xs font-mono-code text-[#E0C9A6]/70 pb-3 border-b border-white/10">
              ORIGINAL SOURCE: {activeInsight.source}
            </div>

            <div className="space-y-4 text-base text-[#F2F0E8]/85 font-light leading-relaxed">
              {activeInsight.fullBody.map((p, idx) => (
                <p key={idx} className="font-editorial text-lg leading-relaxed text-[#F4EDE1]">
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono-code">
              <span className="text-[#F2F0E8]/40">DIEN EL-SHADDAI KING DIEN · ARCHIVE</span>
              {activeInsight.url && (
                <a
                  href={activeInsight.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#E0C9A6] hover:underline"
                >
                  <span>Verify on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
