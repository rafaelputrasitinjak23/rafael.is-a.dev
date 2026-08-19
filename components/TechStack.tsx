"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { techStackData } from "@/data/tech-stack";
import { Terminal, Database, Bot } from "lucide-react";

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const getCategoryIcon = (id: string) => {
    if (id === "frontend") return Terminal;
    if (id === "backend") return Database;
    return Bot;
  };

  return (
    <motion.section
      id="stack"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Section Header */}
      <div className="space-y-4 mb-16">
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 border-l border-white/40 pl-3">
          03 &mdash; Tech Stack
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-sans leading-[1.05]">
          Tools I build with.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-sans">
          A practical stack across frontend, backend, databases, and AI-powered systems.
        </p>
      </div>

      {/* Editorial Stack Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16">
        {techStackData.map((categoryGroup) => {
          const CategoryIcon = getCategoryIcon(categoryGroup.id);
          return (
            <div key={categoryGroup.id} className="space-y-6">
              {/* Category Subheading */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white/80">
                  <CategoryIcon className="w-3.5 h-3.5 text-white/50" />
                  <span>{categoryGroup.category}</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/30">
                  0{categoryGroup.items.length}
                </span>
              </div>

              {/* Rows matching Sophisticated Dark design */}
              <div className="space-y-4">
                {categoryGroup.items.map((item) => {
                  const isHovered = hoveredTech === item.name;
                  const isDimmed = hoveredTech !== null && !isHovered;

                  return (
                    <div
                      key={item.name}
                      onMouseEnter={() => setHoveredTech(item.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className={`group border-b border-white/5 pb-3 transition-all duration-200 cursor-pointer ${
                        isDimmed ? "opacity-35" : "opacity-100"
                      } ${isHovered ? "border-white/30" : "border-white/5"}`}
                    >
                      <div className="flex justify-between items-baseline gap-4 mb-1.5">
                        <span className="text-[13px] sm:text-[14px] font-medium text-white group-hover:translate-x-1 transition-transform">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest group-hover:text-white transition-colors shrink-0">
                          {item.level}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
