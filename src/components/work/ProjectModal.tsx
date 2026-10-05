import React, { useEffect } from "react";
import { Project } from "../../content/projects";
import { GlassPanel } from "../effects/GlassPanel";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D0D0D] border border-white/10 shadow-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#1B2638]/80 text-[#F2F0E8] hover:text-[#E0C9A6] border border-white/10 hover:border-[#E0C9A6]/40 transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Media Container */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden bg-[#1B2638]">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />

          {/* Floating Metadata on the image */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#E0C9A6] mb-2 tracking-widest uppercase">
              <span>{project.number}</span>
              <span aria-hidden="true">·</span>
              <span>{project.period}</span>
            </div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-4xl font-display font-bold text-[#FFFFFF]"
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Zero-Pill Category Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#E0C9A6]/90 font-mono-code">
            <span className="text-[#F2F0E8]/40">DISCIPLINES:</span>
            {project.category.map((cat, i) => (
              <React.Fragment key={cat}>
                <span>{cat}</span>
                {i < project.category.length - 1 && (
                  <span aria-hidden="true" className="text-white/20">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Headline & Overview */}
          <div className="space-y-3">
            <div className="text-lg sm:text-xl font-editorial italic text-[#E0C9A6] leading-relaxed">
              "{project.headline}"
            </div>
            <p className="text-base text-[#F2F0E8]/80 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Strategic Context */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="text-xs font-mono-code uppercase tracking-wider text-[#E0C9A6]">
              Strategic Context & Problem Framing
            </div>
            <p className="text-sm sm:text-base text-[#F2F0E8]/70 leading-relaxed font-light">
              {project.context}
            </p>
          </div>

          {/* Execution & Approach Points */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-xs font-mono-code uppercase tracking-wider text-[#E0C9A6]">
              Execution & Analytical Methodology
            </div>
            <ul className="space-y-2.5">
              {project.execution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#F2F0E8]/85">
                  <CheckCircle2 className="w-4 h-4 text-[#E0C9A6] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-xs font-mono-code uppercase tracking-wider text-[#E0C9A6]">
              Key Tangible Deliverables
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((del, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#1B2638]/40 border border-white/5 text-xs text-[#F2F0E8]/80 font-mono-code"
                >
                  {del}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#F2F0E8]/50 font-mono-code">
              AUTHENTIC ARISTOS ARCHIVE CASE STUDY
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#F2F0E8] hover:bg-[#E0C9A6] text-[#0D0D0D] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
