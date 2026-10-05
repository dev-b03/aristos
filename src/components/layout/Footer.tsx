import React from "react";
import { siteConfig, navigationItems } from "../../content/site";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-16 bg-[#0D0D0D] border-t border-white/10 text-xs text-[#F2F0E8]/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Identity */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-base font-display font-bold tracking-widest text-[#F2F0E8]">
            ARISTOS
          </div>
          <div className="text-[11px] font-mono-code text-[#E0C9A6]/70">
            {siteConfig.fullName} · CREATIVE ARCHIVE
          </div>
        </div>

        {/* Quick Nav Links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-wider font-mono-code"
        >
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="hover:text-[#E0C9A6] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.socials[0].url}
            target="_blank"
            rel="noreferrer"
            className="text-[#E0C9A6] hover:underline"
          >
            LinkedIn
          </a>
        </nav>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center gap-4">
          <span className="font-mono-code text-[11px] text-[#F2F0E8]/40">
            © {new Date().getFullYear()} ARISTOS
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-white/10 hover:border-[#E0C9A6]/50 text-[#F2F0E8] hover:text-[#E0C9A6] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
