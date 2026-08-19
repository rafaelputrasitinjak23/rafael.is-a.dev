"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experimentsData, type ExperimentItem } from "@/data/experiments";
import { ArrowUpRight, Terminal, X } from "lucide-react";

export function Experiments() {
  const [selectedExp, setSelectedExp] = useState<ExperimentItem | null>(null);

  return (
    <motion.section
      id="experiments"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Section Header */}
      <div className="space-y-4 mb-16">
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 border-l border-white/40 pl-3">
          04 &mdash; Experiments
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-sans leading-[1.05]">
          Lab & Micro-Utilities
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl font-sans">
          Explorations in API routing, bot workflows, automation pipelines, and tool calling harnesses.
        </p>
      </div>

      {/* Editorial List */}
      <div className="divide-y divide-white/5 border-y border-white/5">
        {experimentsData.map((exp, idx) => (
          <div
            key={exp.id}
            onClick={() => setSelectedExp(exp)}
            className="group py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-[#0A0A0A] px-4 transition-colors"
            data-cursor="open"
          >
            <div className="flex items-start md:items-center gap-6">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
                0{idx + 1}
              </span>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                    {exp.name}
                  </h3>
                  <span className="px-2 py-0.5 bg-[#111111] border border-white/10 text-[9px] uppercase tracking-widest text-white/50">
                    {exp.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans max-w-xl">
                  {exp.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 pl-10 md:pl-0">
              <div className="hidden lg:flex items-center gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-[#050505] border border-white/10 text-[9px] uppercase tracking-widest text-white/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors font-medium">
                <span>Inspect</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Experiment Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/15 p-6 sm:p-8 text-white space-y-6"
            >
              <button
                type="button"
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white border border-white/10 hover:border-white/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 border-b border-white/5 pb-2">
                  <Terminal className="w-3 h-3" />
                  <span>EXPERIMENT SPEC // {selectedExp.id.toUpperCase()}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase">
                  {selectedExp.name}
                </h3>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
                  <span>{selectedExp.category}</span>
                  <span>•</span>
                  <span>{selectedExp.year}</span>
                  <span>•</span>
                  <span className="text-green-400">Status: {selectedExp.status}</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {selectedExp.description}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Architecture Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[#111111] border border-white/10 text-[10px] uppercase tracking-widest text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setSelectedExp(null)}
                  className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-slate-200"
                >
                  Close Spec
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
