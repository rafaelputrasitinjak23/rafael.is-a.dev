"use client";

import { ArrowUp, Headphones } from "lucide-react";

interface FooterProps {
  onOpenContact?: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <footer
      id="main-footer"
      className="px-6 sm:px-12 py-10 border-t border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/30 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
    >
      {/* Copyright */}
      <div className="flex items-center gap-3">
        <span className="text-white/60 font-bold">RAFAELXD.IS-A.DEV</span>
        <span>&mdash;</span>
        <span>&copy; 2026 RAFAEL</span>
      </div>

      {/* Social and Quick Links */}
      <div className="flex items-center gap-6 sm:gap-8">
        <button
          type="button"
          onClick={handleContactClick}
          className="hover:text-white transition-colors flex items-center gap-1.5 uppercase text-white/50"
          data-cursor="button"
        >
          <Headphones className="w-3 h-3 text-emerald-400" />
          <span>Contact CS</span>
        </button>
        <a
          href="https://github.com/rafaelxd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          data-cursor="link"
        >
          GitHub
        </a>
        <a
          href="https://t.me/AlightFreeBot"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          data-cursor="link"
        >
          Telegram
        </a>
        <button
          type="button"
          onClick={handleContactClick}
          className="hover:text-white transition-colors uppercase"
          data-cursor="button"
        >
          Email
        </button>
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-white transition-colors text-white/40"
          data-cursor="button"
          title="Scroll back to top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>

      {/* Live Activity Status */}
      <div className="flex items-center gap-2 text-white/50">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Exploring new ideas</span>
      </div>
    </footer>
  );
}
