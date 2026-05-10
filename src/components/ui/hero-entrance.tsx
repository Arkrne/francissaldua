"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion, Variants } from "motion/react";

interface HeroEntranceProps {
  children: React.ReactNode;
}

const BOOT_LOGS = [
  "[INITIALIZING NEURAL LINK...]",
  "[BYPASSING FIREWALL: 12%]",
  "[BYPASSING FIREWALL: 47%]",
  "[BYPASSING FIREWALL: 89%]",
  "[ACCESS GRANTED: ADMIN]",
  "[SYNCING BIOMETRICS...]",
  "[LOADING CORE_MODULE_v4.2]",
];

const SHARDS = Array.from({ length: 12 });

export default function HeroEntrance({ children }: HeroEntranceProps) {
  const [mounted, setMounted] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [currentLog, setCurrentLog] = useState(0);
  const [syncProgress, setSyncProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  // Memoize random values to keep render pure
  const rainColumns = useMemo(() => Array.from({ length: 24 }).map(() => ({
    duration: 1.5 + Math.random() * 2,
    delay: Math.random() * 2,
    binary: Array.from({ length: 40 }).map(() => Math.round(Math.random())).join("\n")
  })), []);

  const shardData = useMemo(() => SHARDS.map(() => ({
    x: Math.random() * 1200 - 600,
    y: Math.random() * 1000 - 500,
    rotate: Math.random() * 360,
    targetX: (Math.random() * 1200 - 600) * 1.5,
    targetY: (Math.random() * 1000 - 500) * 1.5,
    targetRotate: Math.random() * 720
  })), []);

  useEffect(() => {
    setMounted(true);
    
    // Cycle through boot logs
    const logInterval = setInterval(() => {
      setCurrentLog((prev) => (prev + 1) % BOOT_LOGS.length);
    }, 200);

    // Sync progress bar logic
    const progressInterval = setInterval(() => {
      setSyncProgress((prev) => Math.min(prev + 1, 100));
    }, 30);

    const timer = setTimeout(() => {
      setIntroComplete(true);
      clearInterval(logInterval);
      clearInterval(progressInterval);
    }, 4200);

    return () => {
      clearTimeout(timer);
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const brandVariants: Variants = {
    initial: { opacity: 0, scale: 0.8, filter: "url(#cyber-glitch-2)" },
    animate: { 
      opacity: [0, 1, 0.7, 1, 0.8, 1],
      scale: [0.8, 1.1, 0.95, 1, 1.05, 1],
      filter: [
        "url(#cyber-glitch-2)",
        "url(#cyber-glitch-1)",
        "url(#cyber-glitch-0)",
        "url(#cyber-glitch-2)",
        "url(#cyber-glitch-0)",
      ],
      textShadow: [
        "4px 0 #ff00c1, -4px 0 #00fff9",
        "-3px 0 #ff00c1, 3px 0 #00fff9",
        "0 0 15px rgba(57,255,20,1)",
        "3px 0 #ff00c1, -3px 0 #00fff9",
        "0 0 25px rgba(57,255,20,0.8)",
      ],
      transition: { 
        duration: 2.5,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        delay: 1.0
      }
    },
    exit: {
      opacity: 0,
      scale: 1.8,
      filter: "url(#cyber-glitch-2)",
      transition: { duration: 0.6, ease: "easeIn" }
    }
  };

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      <svg className="hidden">
        <defs>
          <filter id="cyber-glitch-0">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" />
          </filter>
          <filter id="cyber-glitch-1">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" />
          </filter>
          <filter id="cyber-glitch-2">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
          </filter>
        </defs>
      </svg>

      <AnimatePresence mode="wait">
        {mounted && !introComplete && (
          <motion.div
            key="mega-entrance"
            className="fixed inset-0 z-[10000] bg-[#080d12] flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
          >
            {/* Binary Rain Layer */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex justify-around">
              {rainColumns.map((col, i) => (
                <motion.div
                  key={i}
                  initial={{ y: "-100%" }}
                  animate={{ y: "100%" }}
                  transition={{
                    duration: col.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: col.delay
                  }}
                  className="text-[#39ff14] font-mono text-[8px] leading-none whitespace-pre"
                >
                  {col.binary}
                </motion.div>
              ))}
            </div>

            {/* Floating Data Shards */}
            {shardData.map((shard, i) => (
              <motion.div
                key={`shard-${i}`}
                className="absolute w-24 h-px bg-[#39ff14]/30 blur-[1px]"
                initial={{ 
                  x: shard.x, 
                  y: shard.y, 
                  rotate: shard.rotate,
                  opacity: 0
                }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  x: shard.targetX,
                  y: shard.targetY,
                  rotate: shard.targetRotate
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}

            {/* System Breach Warning (Flash) */}
            <motion.div
              className="absolute inset-0 bg-red-600/10 pointer-events-none flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0, 0.5, 0] }}
              transition={{ duration: 1.0, delay: 0.5, times: [0, 0.2, 0.4, 0.6, 1] }}
            >
              <div className="border-8 border-red-600/60 p-12 rotate-[-8deg] text-red-600 font-black text-5xl md:text-9xl tracking-tighter opacity-50 uppercase italic text-center">
                Critical Breach
              </div>
            </motion.div>

            {/* Top Info Bar */}
            <div className="absolute top-0 left-0 w-full p-8 flex justify-between font-mono text-[10px] text-[#39ff14]/80 uppercase tracking-widest z-20">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.2 }}
                    className="w-2 h-2 bg-red-500 rounded-full" 
                  />
                  SEC_LINK: ACTIVE_SNIFFING
                </div>
                <div className="text-[#00FFFF]">NODE: ARK-RE_EX_04</div>
                <div className="text-[#39ff14]/40">V_MEM: 16.4TB / 128.0TB</div>
              </div>
              <div className="text-right">
                <div className="text-[#00FFFF]">CPU_STRESS: 94.2%</div>
                <div className="text-red-500 font-bold">SECURITY: COMPROMISED</div>
                <div>HASH: 0x82F...E91A</div>
              </div>
            </div>

            {/* Main Logo Scaffolding Brackets */}
            <div className="relative p-16 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: [0, 1, 0, 0.3], scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute inset-0 border-2 border-[#39ff14]/30 rounded-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="absolute -top-6 -left-6 w-20 h-20 border-t-4 border-l-4 border-[#39ff14]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                className="absolute -bottom-6 -right-6 w-20 h-20 border-b-4 border-r-4 border-[#39ff14]"
              />

              <motion.div
                variants={brandVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-[#39ff14] text-6xl md:text-[12rem] font-black tracking-[0.2em] select-none text-center leading-none"
              >
                ARKRNE
              </motion.div>

              {/* Access Granted Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.4, duration: 0.4 }}
                className="absolute -bottom-24 left-0 w-full text-center px-4"
              >
                <div className="text-[#00FFFF] font-mono text-sm md:text-base tracking-[0.8em] mb-4 font-bold text-center">
                  {"// ACCESS_GRANTED_ROOT"}
                </div>
                <div className="w-full h-2 bg-[#1d6b6b]/30 rounded-full overflow-hidden border border-[#1d6b6b]/50 text-center">
                  <motion.div 
                    className="h-full bg-[#39ff14] shadow-[0_0_20px_#39ff14]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.8, delay: 0.6, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Corner Status Displays */}
            <div className="absolute bottom-8 left-8 font-mono text-[10px] md:text-xs text-[#39ff14] space-y-2">
              <div className="opacity-40 mb-2 border-b border-[#39ff14]/20 pb-1">PROCESS_LIST</div>
              {BOOT_LOGS.slice(0, Math.floor(syncProgress / 14) + 1).map((log, i) => (
                <motion.div 
                  key={i} 
                  initial={{ x: -20, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}
                  className={i === currentLog ? "text-white bg-[#39ff14]/30 px-2 py-0.5 rounded-sm" : "opacity-80"}
                >
                  {log}
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-8 right-8 font-mono text-right space-y-2 z-20">
              <div className="text-[#00FFFF] text-sm md:text-lg font-bold tracking-tighter shadow-[0_0_10px_rgba(0,255,255,0.3)] text-right">
                NEURAL_SYNC: {syncProgress}%
              </div>
              <div className="text-[#39ff14]/60 text-[10px] tracking-widest uppercase text-right">
                LATENCY: 14ms | DROP: 0.02%
              </div>
              <div className="text-[#39ff14]/40 text-[8px] italic text-right">
                * ENCRYPT_OVERRIDE_ENABLED *
              </div>
            </div>

            {/* Scanline Sweep on Entire Screen */}
            <motion.div 
              className="absolute inset-0 bg-[#39ff14]/[0.03] pointer-events-none"
              style={{
                background: "repeating-linear-gradient(0deg, transparent 0%, rgba(57, 255, 20, 0.05) 0.5%, transparent 1%)",
                backgroundSize: "100% 4px"
              }}
              animate={{ backgroundPositionY: ["0px", "100px"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extreme Transition Voltage Flash */}
      {mounted && introComplete && (
        <>
          <motion.div
            className="fixed top-0 left-0 right-0 h-[6px] z-[9999] pointer-events-none"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }}
            style={{
              background: "linear-gradient(90deg, transparent, #39ff14, #00FFFF, #ff00c1, #39ff14, transparent)",
              boxShadow: "0 0 50px rgba(57,255,20,1), 0 0 100px rgba(0,255,255,0.5)",
            }}
          />
          {/* Intense Power-On Sequence Flash */}
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none bg-white"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none bg-[#00FFFF]"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.0, delay: 0.1 }}
          />
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none bg-[#ff00c1]"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
        </>
      )}

      {children}
    </>
  );
}

export function HeroText({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, filter: "blur(30px)", skewX: -20, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", skewX: 0, scale: 1 }}
      transition={{
        duration: 1.2,
        delay: 0.6 + delay,
        ease: [0.2, 0.65, 0.3, 0.9],
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
      initial={{ opacity: 0, scale: 0.6, x: 150, filter: "brightness(4) contrast(2) hue-rotate(180deg) blur(20px)" }}
      animate={{ opacity: 1, scale: 1, x: 0, filter: "brightness(1) contrast(1) hue-rotate(0deg) blur(0px)" }}
      transition={{
        duration: 1.6,
        delay: 0.9,
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
