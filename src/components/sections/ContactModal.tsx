import React, { useState } from "react";
import { GlassPanel } from "../effects/GlassPanel";
import { X, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../content/site";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectFocus: "Strategic Copywriting & Messaging",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      projectFocus: "Strategic Copywriting & Messaging",
      message: "",
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in"
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0D0D0D] border border-white/10 shadow-2xl p-6 sm:p-10 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1B2638] text-[#F2F0E8] hover:text-[#E0C9A6] transition-colors cursor-pointer"
          aria-label="Close conversation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <div className="text-xs font-mono-code text-[#E0C9A6] tracking-widest uppercase mb-1">
                ARISTOS / ENGAGEMENT INQUIRY
              </div>
              <h2
                id="contact-modal-title"
                className="text-2xl sm:text-3xl font-display font-bold text-[#F2F0E8]"
              >
                Start a Conversation
              </h2>
              <p className="text-xs sm:text-sm text-[#F2F0E8]/70 font-light mt-1">
                For research-driven copywriting, executive ghostwriting, narrative strategy, or agritech content collaborations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-code text-[#E0C9A6]/80 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#1B2638]/40 border border-white/10 text-sm text-[#F2F0E8] placeholder:text-white/30 focus:outline-none focus:border-[#E0C9A6]/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#E0C9A6]/80 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#1B2638]/40 border border-white/10 text-sm text-[#F2F0E8] placeholder:text-white/30 focus:outline-none focus:border-[#E0C9A6]/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#E0C9A6]/80 uppercase tracking-wider mb-1.5">
                  What Are You Working On?
                </label>
                <select
                  value={formData.projectFocus}
                  onChange={(e) => setFormData({ ...formData, projectFocus: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#1B2638] border border-white/10 text-sm text-[#F2F0E8] focus:outline-none focus:border-[#E0C9A6]/50 transition-colors cursor-pointer"
                >
                  <option value="Strategic Copywriting & Messaging">
                    Strategic Copywriting & Messaging
                  </option>
                  <option value="Executive Thought Leadership & Ghostwriting">
                    Executive Thought Leadership & Ghostwriting
                  </option>
                  <option value="AgroTech & Scientific Research Communication">
                    AgroTech & Scientific Research Communication
                  </option>
                  <option value="Scriptwriting & Narrative Storytelling">
                    Scriptwriting & Narrative Storytelling
                  </option>
                  <option value="Long-Term Creative Advisory">
                    Long-Term Creative Advisory
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#E0C9A6]/80 uppercase tracking-wider mb-1.5">
                  Message / Context
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share a brief overview of your objective, audience, and timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#1B2638]/40 border border-white/10 text-sm text-[#F2F0E8] placeholder:text-white/30 focus:outline-none focus:border-[#E0C9A6]/50 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#0D0D0D] bg-[#F2F0E8] hover:bg-[#E0C9A6] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code text-[#F2F0E8]/50">
              <span className="text-[11px]">PROTOTYPE INTERFACE · VERIFIED MOCK DISPATCH</span>
              <a
                href={siteConfig.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#E0C9A6] hover:underline"
              >
                <span>Direct on LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-5 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-[#E0C9A6]/10 border border-[#E0C9A6]/40 flex items-center justify-center mx-auto text-[#E0C9A6]">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-[#F2F0E8]">
                Inquiry Formatted
              </h3>
              <p className="text-sm text-[#F2F0E8]/80 max-w-sm mx-auto font-light leading-relaxed">
                Thank you, {formData.name}. In this visual direction prototype, submissions are logged locally for evaluation. You can also connect directly with Dien via LinkedIn.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={siteConfig.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#E0C9A6] text-[#0D0D0D] text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-2 hover:bg-[#FFFFFF] transition-colors"
              >
                <span>Open LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-lg border border-white/10 text-xs font-mono-code text-[#F2F0E8] hover:bg-white/5 transition-colors cursor-pointer"
              >
                Return to Aristos
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
