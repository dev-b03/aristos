import React, { useState, useEffect } from "react";
import { navigationItems } from "../../content/site";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/8 shadow-2xl"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg md:text-xl font-display font-bold tracking-[0.2em] text-[#F2F0E8] hover:text-[#E0C9A6] transition-colors shrink-0"
          >
            ARISTOS
          </a>

          {/* Zone 2: 4–6 text navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.16em] font-medium text-[#F2F0E8]/70"
          >
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="relative py-1 hover:text-[#F2F0E8] transition-colors group whitespace-nowrap"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E0C9A6] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase text-[#0D0D0D] bg-[#F2F0E8] hover:bg-[#E0C9A6] transition-all duration-200 active:scale-[0.98] shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F2F0E8] hover:text-[#E0C9A6] transition-colors focus-visible:ring-1 focus-visible:ring-[#E0C9A6] rounded cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-24 md:hidden border-b border-white/10"
        >
          <div className="flex flex-col gap-6">
            <div className="text-[11px] font-mono-code tracking-[0.2em] text-[#E0C9A6]/60 uppercase mb-2">
              Index / Navigation
            </div>
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between text-2xl font-display text-[#F2F0E8] hover:text-[#E0C9A6] transition-colors border-b border-white/5 pb-3"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono-code text-[#E0C9A6]/60">{item.number}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-[#0D0D0D] bg-[#F2F0E8] hover:bg-[#E0C9A6] transition-colors text-center cursor-pointer"
            >
              Start a Conversation
            </button>
            <div className="text-[11px] text-[#F2F0E8]/40 tracking-wider text-center font-mono-code">
              DIEN EL-SHADDAI KING DIEN · ARISTOS
            </div>
          </div>
        </div>
      )}
    </>
  );
};
