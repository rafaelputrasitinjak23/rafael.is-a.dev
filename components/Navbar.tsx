"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal } from "lucide-react";

interface NavbarProps {
  onOpenTerminal?: () => void;
  onOpenContact?: () => void;
}

export function Navbar({ onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Experiments", href: "#experiments" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "stack", "experiments"];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-5 px-6 sm:px-12"
            : "bg-transparent py-7 sm:py-8 px-6 sm:px-12 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            id="nav-brand-logo"
            className="text-base sm:text-lg font-bold tracking-tighter text-white hover:opacity-85 transition-opacity"
          >
            RAFAELXD<span className="text-white/40">.IS-A.DEV</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`transition-colors duration-200 py-1 hover:text-white ${
                    isActive ? "text-white border-b border-white pb-1" : "text-white/60"
                  }`}
                  data-cursor="link"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action (Developer Terminal ⌘K) */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenTerminal && (
              <button
                type="button"
                id="terminal-toggle-btn"
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-3.5 py-2 text-[10px] font-mono tracking-widest text-white/60 hover:text-white bg-[#0A0A0A] hover:bg-[#141414] border border-white/10 hover:border-white/30 transition-all uppercase"
                title="Quick Command Terminal (Cmd+K)"
                data-cursor="button"
              >
                <Terminal className="w-3.5 h-3.5 text-white/70" />
                <span>TERMINAL</span>
                <span className="text-[9px] text-white/40 bg-white/5 px-1.5 py-0.5 rounded-xs">⌘K</span>
              </button>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white bg-[#0a0a0a] border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-8 pb-12 flex flex-col justify-between md:hidden border-b border-white/10"
          >
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 border-l border-white/40 pl-3">
                01 &mdash; Navigation
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xl tracking-tight font-bold text-white hover:text-white/60 transition-colors flex items-center justify-between border-b border-white/5 pb-3 uppercase"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] tracking-widest text-white/30">0{idx + 1}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
                <span>STATUS</span>
                <span className="text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Available for 2026
                </span>
              </div>
              {onOpenTerminal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-slate-200"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Open Terminal (⌘K)</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
