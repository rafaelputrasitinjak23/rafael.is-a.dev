"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "project" | "image">("default");
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "view") {
          setCursorVariant("project");
          setCursorText("VIEW");
        } else if (type === "open") {
          setCursorVariant("image");
          setCursorText("OPEN");
        } else if (type === "link" || type === "button") {
          setCursorVariant("hover");
          setCursorText("");
        }
        return;
      }

      if (target.closest("a, button, input, textarea, select, [role='button']")) {
        setCursorVariant("hover");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animId: number;
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.2;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      id="custom-cursor-container"
      className={`hidden lg:block pointer-events-none fixed inset-0 z-[9998] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Center dot */}
      <div
        ref={dotRef}
        id="cursor-dot"
        className={`fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white rounded-full transition-transform duration-75 ${
          cursorVariant !== "default" ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      />

      {/* Smooth ring */}
      <div
        ref={ringRef}
        id="cursor-ring"
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-200 ease-out ${
          cursorVariant === "project" || cursorVariant === "image"
            ? "w-16 h-16 -ml-8 -mt-8 bg-white text-black font-mono text-[10px] font-bold tracking-widest border border-white"
            : cursorVariant === "hover"
            ? "w-9 h-9 -ml-[18px] -mt-[18px] bg-white/10 border border-white/80"
            : "w-5 h-5 -ml-2.5 -mt-2.5 bg-transparent border border-white/40"
        }`}
      >
        {cursorText && (
          <span className="uppercase select-none leading-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
