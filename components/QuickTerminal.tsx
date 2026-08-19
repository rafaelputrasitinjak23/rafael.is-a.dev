"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, X, CornerDownLeft } from "lucide-react";

interface QuickTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickTerminal({ isOpen, onClose }: QuickTerminalProps) {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "Rafaelxd.is-a.dev [Version 2026.3.1]",
    "Type 'help' for available commands or click a shortcut below.",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    const newLogs = [...logs, `> ${cmdStr}`];

    if (cleanCmd === "clear") {
      setLogs([]);
      setInput("");
      return;
    }

    if (cleanCmd === "help") {
      newLogs.push(
        "Available commands:",
        "  about        - Navigate to About section",
        "  projects     - Jump to Selected Work",
        "  stack        - View Tech Stack & tools",
        "  experiments  - View Lab & micro-utilities",
        "  contact      - Open contact channels",
        "  email        - Copy email to clipboard",
        "  status       - Check developer availability",
        "  clear        - Clear terminal screen",
        "  exit         - Close terminal"
      );
    } else if (cleanCmd === "about" || cleanCmd === "goto about") {
      newLogs.push("Navigating to 01 — ABOUT...");
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(onClose, 400);
    } else if (cleanCmd === "projects" || cleanCmd === "goto projects") {
      newLogs.push("Navigating to 02 — SELECTED WORK...");
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(onClose, 400);
    } else if (cleanCmd === "stack" || cleanCmd === "goto stack") {
      newLogs.push("Navigating to 03 — TECH STACK...");
      document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(onClose, 400);
    } else if (cleanCmd === "experiments" || cleanCmd === "goto experiments") {
      newLogs.push("Navigating to 04 — EXPERIMENTS...");
      document.getElementById("experiments")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(onClose, 400);
    } else if (cleanCmd === "contact" || cleanCmd === "goto contact") {
      newLogs.push("Opening Customer Service & Contact Popup...");
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
      setTimeout(onClose, 300);
    } else if (cleanCmd === "email") {
      navigator.clipboard.writeText("zyphraaxd@gmail.com");
      newLogs.push("Copied 'zyphraaxd@gmail.com' to clipboard.");
    } else if (cleanCmd === "status") {
      newLogs.push("STATUS: Active / Available for selected projects (2026).");
    } else if (cleanCmd === "exit") {
      onClose();
      return;
    } else {
      newLogs.push(`Command not recognized: '${cmdStr}'. Type 'help' for options.`);
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 10 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#0A0A0A] border border-white/15 text-white font-mono text-xs shadow-2xl flex flex-col max-h-[80vh] overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#050505] border-b border-white/10">
              <div className="flex items-center gap-2 text-white/50">
                <Terminal className="w-3.5 h-3.5 text-white" />
                <span className="text-white font-bold tracking-wider uppercase text-[11px]">
                  RAFAEL // TERMINAL
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-white/30 hidden sm:inline">ESC TO CLOSE</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Log Screen */}
            <div className="p-4 overflow-y-auto space-y-1.5 flex-1 min-h-[220px] max-h-[360px] bg-[#050505]">
              {logs.map((log, i) => (
                <div
                  key={i}
                  className={`${
                    log.startsWith(">")
                      ? "text-white font-bold"
                      : log.startsWith("Available") || log.startsWith("  ")
                      ? "text-white/40"
                      : "text-slate-400"
                  }`}
                >
                  {log}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Quick Command Chips */}
            <div className="px-4 py-2 bg-[#080808] border-t border-white/5 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] text-white/30 mr-1 uppercase">SHORTCUTS:</span>
              {["projects", "stack", "experiments", "contact", "email", "help"].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleCommand(c)}
                  className="px-2 py-0.5 bg-[#111111] border border-white/10 text-[10px] text-white/60 hover:text-white hover:border-white/30 transition-colors uppercase"
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 bg-[#050505] border-t border-white/10"
            >
              <span className="text-white font-bold">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command..."
                className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-white/20 font-mono text-xs"
              />
              <button
                type="submit"
                className="p-1 bg-white text-black hover:bg-slate-200 transition-colors"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
