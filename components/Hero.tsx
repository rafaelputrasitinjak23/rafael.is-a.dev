"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { projectsData } from "@/data/projects";

interface HeroProps {
  onOpenContact?: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const [timeString, setTimeString] = useState("");
  const featured = projectsData[0]; // AlightFree

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTimeString(formatted + " (UTC+7)");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
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
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-12 max-w-7xl mx-auto"
    >
      {/* Top Section Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-white/70 font-medium">RAFAELXD.IS-A.DEV</span>
          <span className="text-white/20">/</span>
          <span>EST. 2026</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline">DEVELOPER • BUILDER • CREATOR</span>
          <span className="text-white/60 font-mono">{timeString || "06:50:00 (UTC+7)"}</span>
        </div>
      </div>

      {/* Main Grid: Left Hero Pitch & Right Featured Editorial Box */}
      <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Section Eyebrow */}
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 border-l border-white/40 pl-3">
              01 &mdash; Identity
            </span>
          </div>

          {/* Large Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[84px] leading-[0.9] font-bold tracking-tight mb-8 text-white uppercase font-sans">
            Building digital experiences with code.
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-base sm:text-lg max-w-md leading-relaxed mb-10">
            Developer focused on building useful, fast, and interactive digital experiences with a premium touch.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-5 items-center">
            <button
              type="button"
              id="hero-cta-projects"
              onClick={() => handleScrollTo("projects")}
              className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center gap-2"
              data-cursor="button"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              id="hero-cta-contact"
              onClick={() => {
                if (onOpenContact) onOpenContact();
                else window.dispatchEvent(new CustomEvent("open-contact-modal"));
              }}
              className="border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-white"
              data-cursor="button"
            >
              Get in touch
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="mt-16 sm:mt-20 flex gap-10 sm:gap-14 border-t border-white/5 pt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-light text-white">15+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 mt-1">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-light text-white">10+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 mt-1">Websites</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-light text-white">08+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 mt-1">Bots</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Featured Project Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center relative"
        >
          <div className="flex justify-between items-center py-2 mb-2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
              Featured Project 01/05
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/40">2026</span>
          </div>

          {/* Card Frame */}
          <div
            onClick={() => handleScrollTo("projects")}
            className="border border-white/10 bg-[#0A0A0A] p-1.5 sm:p-2 group cursor-pointer relative transition-all duration-300 hover:border-white/30 overflow-hidden"
            data-cursor="view"
          >
            {/* Minimalist Browser Frame Bar */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#121212] border-b border-white/5 z-20 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="text-[10px] font-mono text-white/40 truncate max-w-[200px]">
                {featured.url ? featured.url.replace(/^https?:\/\//, "") : "alightfree.my.id"}
              </div>
              <div className="text-[9px] font-mono text-white/30">FEATURED</div>
            </div>

            <div className="w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[420px] bg-[#111111] overflow-hidden relative">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-all duration-700" />

              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1.5">
                      {featured.category}
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase">
                      {featured.title}
                    </h3>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                    VISIT &rarr;
                  </div>
                </div>

                {/* Animated Line */}
                <div className="mt-3 sm:mt-4 h-[1px] bg-white/20 w-full overflow-hidden">
                  <div className="h-full bg-white w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                </div>
              </div>
            </div>

            {/* Rotated Tag Badge */}
            <div className="absolute top-8 right-3 w-16 h-16 border border-white/10 flex items-center justify-center bg-[#050505]/90 shadow-xl backdrop-blur-sm pointer-events-none">
              <div className="text-[8px] uppercase tracking-widest rotate-90 text-white/70 font-mono">
                TOP 01
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Footer Hint */}
      <div className="flex flex-wrap items-end justify-between gap-6 pt-6 border-t border-white/5">
        <button
          type="button"
          onClick={() => handleScrollTo("about")}
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
          data-cursor="link"
        >
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse" />
          </div>
          <span>Scroll to explore &darr;</span>
        </button>

        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/30">
          <span>INDONESIA • REMOTE</span>
          <span>HTTPS://RAFAELXD.IS-A.DEV</span>
        </div>
      </div>
    </section>
  );
}
