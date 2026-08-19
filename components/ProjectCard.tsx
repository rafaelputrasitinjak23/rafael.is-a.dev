"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Lock, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHover: (id: string | null) => void;
  onSelectProject: (project: Project) => void;
}

export function ProjectCard({
  project,
  isHovered,
  isAnyHovered,
  onHover,
  onSelectProject,
}: ProjectCardProps) {
  const isDimmed = isAnyHovered && !isHovered;

  const getButtonText = () => {
    if (project.private) return "Private Project";
    if (project.id === "rafael-store") return "Visit Store";
    if (project.id === "alightfree-bot") return "Open Telegram";
    return "Visit Project";
  };

  return (
    <motion.article
      id={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className={`group relative border bg-[#0A0A0A] p-1.5 sm:p-2 transition-all duration-300 ${
        isHovered ? "border-white/30" : "border-white/10"
      } ${isDimmed ? "opacity-40" : "opacity-100"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-[#050505] border border-white/5 overflow-hidden">
        {/* Left Side: Metadata, Title, Description, Tech */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 sm:space-y-8 order-2 lg:order-1">
          <div className="space-y-4 sm:space-y-6">
            {/* Top metadata row */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/40 border-b border-white/5 pb-3">
              <span className="text-white font-bold text-sm font-mono">{project.number}</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="truncate max-w-[140px] sm:max-w-none">{project.category}</span>
                <span className="text-white/20">/</span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase group-hover:translate-x-1 transition-transform duration-200">
                  {project.title}
                </h3>
                {project.private && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#141414] border border-white/10 text-[9px] font-mono text-white/60 uppercase tracking-widest">
                    <Lock className="w-2.5 h-2.5 text-white/50" />
                    Private
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
              {project.description}
            </p>

            {/* Key highlights bullets */}
            {project.highlights && (
              <ul className="space-y-2 pt-1">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2.5 text-xs text-white/60 font-sans"
                  >
                    <span className="w-1 h-1 bg-white/60 inline-block shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Bottom Area: Tech stack tags & Action button */}
          <div className="space-y-5 sm:space-y-6 pt-5 sm:pt-6 border-t border-white/5">
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#111111] border border-white/10 text-[10px] uppercase tracking-widest text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {!project.private && project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-link-${project.id}`}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all flex-1 sm:flex-initial"
                  data-cursor="button"
                >
                  <span>{getButtonText()}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-[#111111] text-white/40 border border-white/10 text-xs font-bold uppercase tracking-widest cursor-not-allowed flex-1 sm:flex-initial"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Private Project</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 bg-transparent text-white/60 hover:text-white border border-white/10 hover:border-white/30 text-xs uppercase tracking-widest transition-all font-medium flex-1 sm:flex-initial"
                data-cursor="button"
              >
                <span>View Spec</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Responsive Device Browser Window Mockup with Screenshot */}
        <div
          onClick={() => onSelectProject(project)}
          data-cursor="view"
          className="lg:col-span-6 relative flex flex-col bg-[#0d0d0d] border-b lg:border-b-0 lg:border-l border-white/10 cursor-pointer group/img order-1 lg:order-2 overflow-hidden"
        >
          {/* Minimalist Browser Frame Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#121212] border-b border-white/5 z-20 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div className="text-[10px] font-mono text-white/40 truncate max-w-[200px] sm:max-w-[280px]">
              {project.url ? project.url.replace(/^https?:\/\//, "") : "private-node://localhost"}
            </div>
            <div className="flex items-center text-white/30">
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>

          {/* Screenshot Display Frame */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[420px] bg-[#111111] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} Interface Screenshot`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              priority={project.number === "01"}
              className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Overlay to match dark theme, fading slightly on hover */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/10 transition-all duration-700" />

            {/* Overlay Corner Badge */}
            <div className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-black/85 border border-white/15 text-[9px] uppercase font-mono tracking-widest text-white/80 backdrop-blur-sm">
              {project.number} {"// 05"}
            </div>

            {/* Bottom Hover Progress Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/20 w-full z-20">
              <div className="h-full bg-white w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
