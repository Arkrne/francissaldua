"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface ScrollVelocityTextProps {
  texts: string[];
  className?: string;
  baseVelocity?: number;
}

export function ScrollVelocityText({
  texts,
  className = "",
  baseVelocity = 2,
}: ScrollVelocityTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [200, -600 * baseVelocity]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-600 * baseVelocity, 200]);

  const smoothX1 = useSpring(x1, { damping: 50, stiffness: 100 });
  const smoothX2 = useSpring(x2, { damping: 50, stiffness: 100 });

  return (
    <div ref={containerRef} className={`overflow-hidden py-8 ${className}`}>
      {/* Row 1 - moves left */}
      <motion.div className="flex whitespace-nowrap mb-4" style={{ x: smoothX1 }}>
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-transparent mx-8"
            style={{
              WebkitTextStroke: "1px rgba(57, 255, 20, 0.3)",
            }}
          >
            {texts[0]}&nbsp;—&nbsp;
          </span>
        ))}
      </motion.div>

      {/* Row 2 - moves right */}
      <motion.div className="flex whitespace-nowrap" style={{ x: smoothX2 }}>
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-transparent mx-8"
            style={{
              WebkitTextStroke: "1px rgba(29, 107, 107, 0.4)",
            }}
          >
            {texts[1] || texts[0]}&nbsp;—&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}
