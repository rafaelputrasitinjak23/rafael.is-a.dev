"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  once?: boolean;
}

export function SectionReveal({
  children,
  className = "",
  id,
  delay = 0,
  once = false,
}: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.12, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
