import React, { useState } from "react";
import { siteConfig } from "../../content/site";
import { GlassPanel } from "../effects/GlassPanel";
import { Sparkles, ArrowRight } from "lucide-react";

interface DisciplineDetail {
  name: string;
  category: string;
  focus: string;
  application: string;
}

const disciplineDetails: Record<string, DisciplineDetail> = {
  Copywriting: {
    name: "Copywriting",
    category: "Commercial Precision",
    focus: "Distilling complex products and value propositions into punchy, high-converting language.",
    application: "Landing pages, launch campaigns, product announcements, and brand collateral.",
  },
  Ghostwriting: {
    name: "Ghostwriting",
    category: "Executive Voice",
    focus: "Capturing the authentic voice, nuance, and intellectual depth of founders and leaders.",
    application: "LinkedIn thought leadership, keynotes, op-eds, and founder manifestos.",
  },
  "Content Writing": {
    name: "Content Writing",
    category: "Editorial Depth",
    focus: "Developing substantive, high-retention essays and articles that inform without fatiguing.",
    application: "Industry deep dives, comprehensive company archives, and educational content.",
  },
  "B2B Content": {
    name: "B2B Content",
    category: "Enterprise Rigor",
    focus: "Speaking to corporate decision-makers with commercial and technical acumen.",
    application: "White papers, business case studies, sector analyses, and solution briefs.",
  },
  "Brand Messaging": {
    name: "Brand Messaging",
    category: "Identity Architecture",
    focus: "Defining what a brand stands for, how it sounds, and why it commands loyalty.",
    application: "Brand guidelines, core narratives, mission directives, and tagline suites.",
  },
  "Thought Leadership": {
    name: "Thought Leadership",
    category: "Intellectual Authority",
    focus: "Using empirical research, statistical context, and editorial angles to lead industry conversations.",
    application: "Executive LinkedIn platforms, agricultural innovation pieces, and industry essays.",
  },
  Storytelling: {
    name: "Storytelling",
    category: "Human Resonance",
    focus: "Weaving emotional truth and dramatic progression into commercial and philosophical subjects.",
    application: "Origin stories, brand documentaries, narrative podcasts, and long-form memoirs.",
  },
  Scriptwriting: {
    name: "Scriptwriting",
    category: "Audio-Visual Rhythm",
    focus: "Writing for the ear and the camera, balancing dialogue economy with cinematic pacing.",
    application: "Exploratory screenplays (e.g. The Price of Presence), film treatments, and video scripts.",
  },
  "Strategic Communication": {
    name: "Strategic Communication",
    category: "Organizational Alignment",
    focus: "Orchestrating multi-channel messaging that guides stakeholder perception.",
    application: "Market repositioning, agricultural supply chain narratives, and investor updates.",
  },
  "Technical & Business Writing": {
    name: "Technical & Business Writing",
    category: "Scientific Precision",
    focus: "Translating biochemistry, data, and software architecture into clear, unambiguous prose.",
    application: "Research briefs, technical summaries, operational manuals, and methodology papers.",
  },
};

export const Words: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("Copywriting");
  const detail = disciplineDetails[selectedDiscipline] || disciplineDetails["Copywriting"];

  return (
    <section
      id="words"
      className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#0D0D0D] border-t border-white/5 overflow-hidden"
      aria-label="Words and creative writing capabilities"
    >
      {/* Background ambient lighting */}
      <div className="absolute -bottom-24 right-0 w-[500px] h-[500px] rounded-full blur-[180px] opacity-15 bg-[#E0C9A6] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6] tracking-[0.2em]">
              <span>03 / 07</span>
              <span aria-hidden="true">·</span>
              <span>WORDS & CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F2F0E8] tracking-tight">
              An Architectural Typographic Field
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#F2F0E8]/70 font-light leading-relaxed">
            Ten specific writing and communication disciplines forged across Aristos Creative, agricultural technology research, and executive thought leadership.
          </p>
        </div>

        {/* Interactive Typographic Landscape */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Typographic List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-2">
            {siteConfig.capabilities.disciplines.map((item, index) => {
              const isSelected = selectedDiscipline === item;
              return (
                <button
                  key={item}
                  onClick={() => setSelectedDiscipline(item)}
                  onMouseEnter={() => setSelectedDiscipline(item)}
                  className={`group relative text-left py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? "bg-[#1B2638]/70 border-[#E0C9A6]/40 text-[#FFFFFF] shadow-lg"
                      : "bg-transparent border-transparent hover:border-white/10 text-[#F2F0E8]/60 hover:text-[#F2F0E8]"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`text-xs font-mono-code ${
                        isSelected ? "text-[#E0C9A6]" : "text-[#F2F0E8]/30 group-hover:text-[#F2F0E8]/60"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-wide transition-all ${
                        isSelected
                          ? "translate-x-1 text-[#F2F0E8]"
                          : "group-hover:translate-x-0.5 text-[#F2F0E8]/70"
                      }`}
                    >
                      {item}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono-code text-[#E0C9A6]/70 hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                      {disciplineDetails[item]?.category}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-200 ${
                        isSelected
                          ? "text-[#E0C9A6] translate-x-1"
                          : "text-white/20 group-hover:text-white/60"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Focal Detail Panel (5 cols) - Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <GlassPanel variant="frosted" withSpecular className="p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{detail.category}</span>
                </div>
                <div className="text-[11px] font-mono-code text-[#F2F0E8]/40">
                  DISCIPLINE DOSSIER
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F2F0E8] mb-3">
                  {detail.name}
                </h3>
                <p className="text-base text-[#F2F0E8]/90 font-light leading-relaxed">
                  {detail.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-xs uppercase tracking-wider font-mono-code text-[#E0C9A6]/80">
                  Typical Application
                </div>
                <div className="text-sm text-[#F2F0E8]/75 leading-relaxed bg-[#0D0D0D]/40 p-4 rounded-lg border border-white/5">
                  {detail.application}
                </div>
              </div>

              <div className="pt-2 text-xs text-[#F2F0E8]/50 italic font-editorial">
                "Words are not decorative veneers. They are structural instruments of thought and influence."
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  );
};
