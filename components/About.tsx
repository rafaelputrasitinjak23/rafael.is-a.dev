"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { Cpu, Terminal, Zap, ShieldCheck } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function StatCounter({ target, suffix = "+", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="p-6 sm:p-8 bg-[#0A0A0A] border border-white/10 hover:border-white/25 transition-all group"
    >
      <div className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-2 group-hover:translate-x-1 transition-transform">
        {count}
        <span className="text-white/40 text-2xl font-light">{suffix}</span>
      </div>
      <div className="text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/70 transition-colors">
        {label}
      </div>
    </div>
  );
}

export function About() {
  const coreFocus = [
    {
      icon: Terminal,
      title: "Web Platforms & Tools",
      description:
        "Building fast, reactive Next.js and TypeScript applications with clean architecture and zero fluff.",
    },
    {
      icon: Zap,
      title: "Bots & Automation",
      description:
        "Developing automated background pipelines, Telegram bots, webhook routers, and custom workflows.",
    },
    {
      icon: Cpu,
      title: "AI & Model Integration",
      description:
        "Harnessing Google Gemini, OpenAI, Claude, and DeepSeek for practical, structured agent tools.",
    },
    {
      icon: ShieldCheck,
      title: "Performance & Reliability",
      description:
        "Dedicated to minimal bundles, low server response latency, robust error handling, and clean UX.",
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Section Header */}
      <div className="space-y-4 mb-16">
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 border-l border-white/40 pl-3">
          01 &mdash; About
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl leading-[1.05] uppercase font-sans">
          Building things that are useful, fast, and thoughtfully designed.
        </h2>
      </div>

      {/* Editorial Text & Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
          <p>
            I am <strong className="text-white font-semibold">Rafael</strong>, a software developer and creator focused on building web platforms, developer utilities, bots, and automated systems that solve real problems.
          </p>
          <p>
            My work is grounded in clean craftsmanship: solid typography, tight interaction loops, minimal dependencies, and performance-first architecture. Whether architecting an e-commerce platform, orchestrating an automated Telegram bot engine, or integrating LLM reasoning flows, I prioritize reliability and intuitive design over visual gimmicks.
          </p>
        </div>

        <div className="lg:col-span-5 p-6 bg-[#0A0A0A] border border-white/10 space-y-4 text-xs font-mono">
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 border-b border-white/5 pb-2">
            PROFILE SUMMARY //
          </div>
          <div className="space-y-3 text-white/80">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">ROLE</span>
              <span className="text-white font-medium">Full-Stack & Systems Builder</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">FOCUS</span>
              <span className="text-white font-medium">Web Apps, Bots, Tools, AI</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">AESTHETIC</span>
              <span className="text-white font-medium">Sophisticated Dark • Clean Code</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">STATUS</span>
              <span className="text-white font-medium">Active (2026)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Numerical Stats Counters */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
        <StatCounter target={15} label="Projects" />
        <StatCounter target={10} label="Websites" />
        <StatCounter target={8} label="Bots & Automations" />
        <StatCounter target={25} label="Experiments" />
      </div>

      {/* Four Core Focus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreFocus.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-6 bg-[#0A0A0A] border border-white/10 hover:border-white/25 transition-all duration-200 group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#111111] border border-white/10 text-white mb-6 group-hover:border-white/40 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 group-hover:translate-x-0.5 transition-transform">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
