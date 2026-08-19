"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Lock, X, Check, Globe, Maximize2 } from "lucide-react";
import { projectsData, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const categories = ["ALL", "WEB PLATFORM", "WEB TOOLS", "E-COMMERCE", "BOTS"];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "WEB PLATFORM") return project.category.includes("Web Platform");
    if (activeFilter === "WEB TOOLS") return project.category.includes("Tools");
    if (activeFilter === "E-COMMERCE") return project.category.includes("E-Commerce");
    if (activeFilter === "BOTS") return project.category.includes("Bot");
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 border-l border-white/40 pl-3">
            02 &mdash; Selected Work
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-sans leading-[1.05]">
            Featured Projects & Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl font-sans">
            A curated selection of web platforms, developer utilities, e-commerce storefronts, and automated bot systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all ${
                activeFilter === cat
                  ? "bg-white text-black font-bold"
                  : "bg-[#0A0A0A] text-white/50 hover:text-white border border-white/10"
              }`}
              data-cursor="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Project Cards Stack */}
      <div className="space-y-12 sm:space-y-16">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={hoveredProjectId === project.id}
            isAnyHovered={hoveredProjectId !== null}
            onHover={setHoveredProjectId}
            onSelectProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Project Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#0A0A0A] border border-white/15 p-6 sm:p-10 text-white max-h-[90vh] overflow-y-auto space-y-6"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white border border-white/10 hover:border-white/40 transition-colors z-20"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 border-b border-white/5 pb-2">
                  PROJECT SPECIFICATION // {selectedProject.number}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.private && (
                    <span className="px-2 py-0.5 bg-[#141414] border border-white/10 text-[9px] font-mono text-white/60">
                      PRIVATE PROJECT
                    </span>
                  )}
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {selectedProject.category} • Year {selectedProject.year}
                </p>
              </div>

              {/* Responsive High-Resolution Screenshot Frame in Modal */}
              <div className="border border-white/10 bg-[#050505] overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1.5 bg-[#121212] border-b border-white/5 text-[10px] font-mono text-white/40">
                  <span>PREVIEW SCREENSHOT</span>
                  <a
                    href={selectedProject.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-1"
                    title="Open full resolution"
                  >
                    <span>Full Image</span>
                    <Maximize2 className="w-3 h-3" />
                  </a>
                </div>
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#111111] overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} Interface`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Architecture Highlights */}
              {selectedProject.highlights && (
                <div className="space-y-3 pt-2">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Architectural Highlights:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-2 p-3 bg-[#050505] border border-white/10 text-xs text-white/80"
                      >
                        <Check className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack Breakdown */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Technologies & Dependencies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-[#111111] border border-white/10 text-[10px] uppercase tracking-widest text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Link */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                {!selectedProject.private && selectedProject.url ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Visit Live Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="text-xs text-white/40 flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5" />
                    <span>This is a private project. Source and endpoints are restricted.</span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-3 text-xs uppercase tracking-widest text-white/60 hover:text-white border border-white/10"
                >
                  Close Spec
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
