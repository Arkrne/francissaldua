"use client";

import React from "react";
import { motion } from "motion/react";

interface Badge {
  label: string;
  x: string;
  y: string;
  delay: number;
}

const badges: Badge[] = [
  { label: "Next.js", x: "10%", y: "20%", delay: 0 },
  { label: "TypeScript", x: "75%", y: "15%", delay: 0.3 },
  { label: "React", x: "85%", y: "55%", delay: 0.6 },
  { label: "Node.js", x: "5%", y: "65%", delay: 0.9 },
  { label: "PostgreSQL", x: "60%", y: "80%", delay: 1.2 },
  { label: "Tailwind", x: "25%", y: "85%", delay: 1.5 },
];

export function FloatingBadges() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block" data-no-cascade>
      {badges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className="absolute"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.5 + badge.delay,
            type: "spring",
            bounce: 0.5,
            duration: 0.8,
          }}
        >
          <motion.div
            className="rounded-full border border-[#1d6b6b]/30 bg-[#0a1018]/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#39ff14]/70 backdrop-blur-sm shadow-[0_0_15px_rgba(57,255,20,0.05)]"
            animate={{
              y: [0, -8, 0],
              rotate: [0, i % 2 === 0 ? 2 : -2, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {badge.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
