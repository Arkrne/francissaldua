"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9990] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #1d6b6b, #39ff14, #00FFFF)",
        boxShadow: "0 0 8px rgba(57, 255, 20, 0.4)",
      }}
    />
  );
}
