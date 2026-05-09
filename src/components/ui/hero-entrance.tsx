"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface HeroEntranceProps {
  children: React.ReactNode;
}

export default function HeroEntrance({ children }: HeroEntranceProps) {
  const [mounted, setMounted] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIntroComplete(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Cinematic dark curtain reveal */}
      {mounted && !introComplete && (
        <motion.div
          className="fixed inset-0 z-[10000] pointer-events-none bg-[#080d12] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="text-[#39ff14] text-sm font-mono uppercase tracking-[0.5em]"
            initial={{ opacity: 0, letterSpacing: "0.8em" }}
            animate={{ opacity: [0, 1, 1, 0], letterSpacing: ["0.8em", "0.5em", "0.5em", "0.3em"] }}
            transition={{ duration: 1.5, times: [0, 0.3, 0.7, 1] }}
          >
            ARKRNE
          </motion.div>
        </motion.div>
      )}

      {/* Neon scan line on initial load */}
      {mounted && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 1.0 }}
          style={{
            background: "linear-gradient(90deg, transparent, #39ff14, #00FFFF, #39ff14, transparent)",
            boxShadow: "0 0 15px rgba(57,255,20,0.6), 0 0 30px rgba(57,255,20,0.3)",
          }}
        />
      )}

      {/* Secondary scan line */}
      {mounted && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[1px] z-[9999] pointer-events-none"
          initial={{ y: 0, opacity: 0.6 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1], delay: 1.15 }}
          style={{
            background: "linear-gradient(90deg, transparent, #00FFFF, transparent)",
            boxShadow: "0 0 10px rgba(0,255,255,0.4)",
          }}
        />
      )}

      {/* Brief screen flash */}
      {mounted && (
        <motion.div
          className="fixed inset-0 z-[9998] pointer-events-none bg-[#39ff14]/[0.04]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      )}

      {/* Corner accent lines that draw in */}
      {mounted && (
        <>
          <motion.div
            className="fixed top-4 left-4 z-[9997] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          >
            <motion.div
              className="w-8 h-px bg-[#39ff14]/50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              style={{ transformOrigin: "left" }}
            />
            <motion.div
              className="w-px h-8 bg-[#39ff14]/50"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
          <motion.div
            className="fixed top-4 right-4 z-[9997] pointer-events-none flex flex-col items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          >
            <motion.div
              className="w-8 h-px bg-[#39ff14]/50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              style={{ transformOrigin: "right" }}
            />
            <motion.div
              className="w-px h-8 bg-[#39ff14]/50 self-end"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
        </>
      )}

      {children}
    </>
  );
}

export function HeroText({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.7,
        delay: 0.3 + delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroImage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.5,
        type: "spring",
        bounce: 0.3,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
