import React, { useState } from "react";
import { projects, Project } from "../../content/projects";
import { GlassPanel } from "../effects/GlassPanel";
import { ProjectModal } from "../work/ProjectModal";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

interface SelectedWorkProps {
  onOpenContact: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenContact }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#0D0D0D] border-t border-white/5 overflow-hidden"
      aria-label="Selected Work and Case Studies"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full blur-[180px] opacity-20 bg-[#1B2638] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6] tracking-[0.2em]">
              <span>05 / 07</span>
              <span aria-hidden="true">·</span>
              <span>SELECTED WORK & CASE ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F2F0E8] tracking-tight">
              Selected Engagements
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#F2F0E8]/70 font-light leading-relaxed">
            Real projects across agricultural technology research, cinematic scriptwriting, and multi-voice brand strategy.
          </p>
        </div>

        {/* Projects Presentation Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-white/10 bg-[#0D1B2A]/30 overflow-hidden hover:border-[#E0C9A6]/40 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#1B2638] cursor-pointer ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                    onClick={() => setActiveProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Glass Tag */}
                    <div className="absolute top-4 left-4">
                      <GlassPanel variant="clear" className="px-3 py-1">
                        <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#E0C9A6]">
                          {project.number}
                        </span>
                      </GlassPanel>
                    </div>
                  </div>

                  {/* Editorial Detail Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#E0C9A6]/80 font-mono-code">
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.period}</span>
                    </div>

                    <div className="space-y-3">
                      <h3
                        onClick={() => setActiveProject(project)}
                        className="text-2xl sm:text-3xl font-display font-bold text-[#F2F0E8] group-hover:text-[#E0C9A6] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-editorial italic text-[#E0C9A6]/90 leading-snug">
                        "{project.headline}"
                      </p>
                      <p className="text-sm text-[#F2F0E8]/70 leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    {/* Disciplines as Clean Text */}
                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono-code text-[#F2F0E8]/50">
                      {project.category.map((cat, i) => (
                        <span key={cat}>
                          {cat}
                          {i < project.category.length - 1 && " ·"}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F2F0E8] hover:text-[#E0C9A6] group/btn cursor-pointer"
                      >
                        <span>Examine Project Dossier</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future CMS Archive Marker */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-[#1B2638]/30 text-xs font-mono-code text-[#F2F0E8]/60">
            <FolderGit2 className="w-3.5 h-3.5 text-[#E0C9A6]" />
            <span>ARISTOS ARCHIVE REPOSITORY · 3 FEATURED ENGAGEMENTS DEPLOYED</span>
          </div>
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
