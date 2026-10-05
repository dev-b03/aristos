import React, { useState } from "react";
import { Navigation } from "./components/layout/Navigation";
import { Hero } from "./components/hero/Hero";
import { Approach } from "./components/sections/Approach";
import { Words } from "./components/sections/Words";
import { Intersection } from "./components/sections/Intersection";
import { SelectedWork } from "./components/sections/SelectedWork";
import { Insights } from "./components/sections/Insights";
import { Closing } from "./components/sections/Closing";
import { ContactModal } from "./components/sections/ContactModal";
import { Footer } from "./components/layout/Footer";

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F0E8] font-sans selection:bg-[#E0C9A6]/30 selection:text-[#FFFFFF] relative overflow-x-hidden">
      {/* Top Navigation */}
      <Navigation onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 01 — Hero */}
        <Hero onOpenContact={() => setContactModalOpen(true)} />

        {/* 02 — The Mind / Approach */}
        <Approach />

        {/* 03 — Words / Capabilities */}
        <Words />

        {/* 04 — The Intersection */}
        <Intersection />

        {/* 05 — Selected Work */}
        <SelectedWork onOpenContact={() => setContactModalOpen(true)} />

        {/* 06 — Thought / Archive */}
        <Insights />

        {/* 07 — Closing Credo */}
        <Closing onOpenContact={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
