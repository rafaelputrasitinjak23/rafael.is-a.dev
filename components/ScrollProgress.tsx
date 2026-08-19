"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollPercentage((winScroll / height) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="scroll-progress-bar"
      className="fixed top-0 left-0 w-full h-[1px] bg-white/10 z-50 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-white transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
