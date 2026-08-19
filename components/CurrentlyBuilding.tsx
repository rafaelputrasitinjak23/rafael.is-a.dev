"use client";

import { motion } from "motion/react";
import { Activity } from "lucide-react";

export function CurrentlyBuilding() {
  return (
    <motion.section
      id="status"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="p-8 sm:p-10 bg-[#0A0A0A] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-[10px] font-mono">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
              <span className="font-bold tracking-widest uppercase text-xs">Building</span>
            </span>
            <span className="text-white/20">{"//"}</span>
            <span className="uppercase tracking-[0.3em] text-white/40">CURRENT INITIATIVE</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
            Next-Gen Autonomous Agent Tooling & Realtime Sync Engines
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-2xl leading-relaxed">
            Exploring zero-latency tool calling bridges for Gemini 2.5 Flash, distributed webhook retry queues, and micro-frontend state architectures.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/60">
            <Activity className="w-3.5 h-3.5 text-green-400" />
            <span>Active Sprint • Q1 2026</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
