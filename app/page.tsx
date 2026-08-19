"use client";

import { useState } from "react";
import { PageLoader } from "@/components/PageLoader";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Experiments } from "@/components/Experiments";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { Footer } from "@/components/Footer";
import { QuickTerminal } from "@/components/QuickTerminal";
import { CustomerServiceWidget } from "@/components/CustomerServiceWidget";

export default function HomePage() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="relative bg-[#050505] text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
      {/* 01. Initial Loading Sequence */}
      <PageLoader />

      {/* 02. Desktop Smooth Custom Cursor */}
      <CustomCursor />

      {/* 03. Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Subtle outer inset aesthetic frame (Sophisticated Dark) */}
      <div className="fixed inset-0 pointer-events-none border border-white/5 m-3 sm:m-4 z-30" />

      {/* 04. Fixed Navigation Bar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* 05. Main Scroll Narrative Sections (Contact section removed from page flow) */}
      <div className="relative z-10 space-y-0">
        <Hero onOpenContact={() => setContactOpen(true)} />
        <About />
        <Projects />
        <TechStack />
        <Experiments />
        <CurrentlyBuilding />
      </div>

      {/* 06. Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* 07. Floating Customer Service & Direct Contact Widget Popup */}
      <CustomerServiceWidget
        isOpen={contactOpen}
        onOpen={() => setContactOpen(true)}
        onClose={() => setContactOpen(false)}
        onToggle={() => setContactOpen(!contactOpen)}
      />

      {/* 08. Interactive Developer Terminal */}
      <QuickTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </main>
  );
}
