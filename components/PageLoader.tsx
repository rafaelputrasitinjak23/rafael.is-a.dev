"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PageLoader() {
  const [progress, setProgress] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 850; // ms

    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
        }, 120);
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          id="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#050505] p-6 sm:p-12 text-white select-none"
        >
          {/* Top metadata */}
          <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/40">
            <span>RAFAELXD.IS-A.DEV</span>
            <span>SYSTEM // 2026</span>
          </div>

          {/* Center Brand Identity */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white uppercase font-sans">
                RAFAELXD<span className="text-white/40">.IS-A.DEV</span>
              </h1>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-white/40">
                DEVELOPER • BUILDER • CREATOR
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="space-y-3">
            <div className="flex justify-between items-end text-[10px] uppercase tracking-[0.3em] text-white/40">
              <span>LOADING ENVIRONMENT</span>
              <span className="text-white text-base sm:text-xl font-light font-mono">
                {String(progress).padStart(2, "0")}{" "}
                <span className="text-white/30 text-xs">/ 100</span>
              </span>
            </div>

            {/* Line progress indicator */}
            <div className="w-full h-[1px] bg-white/10 overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-75 ease-out shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
