"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Monitor,
  Database,
  ShieldCheck,
  Puzzle,
  Settings,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Front-End & UI/UX",
    description:
      "Interface systems designed for trust. Fast rendering and conversion-focused flows.",
    icon: Monitor,
    accent: "#00FFFF",
  },
  {
    title: "Back-End & Database",
    description:
      "Reliable data architecture with secure APIs and optimized PostgreSQL queries designed to scale.",
    icon: Database,
    accent: "#39ff14",
  },
  {
    title: "Security-First Builds",
    description:
      "Access control, audit-friendly logs, and hardened deployment practices to protect client data.",
    icon: ShieldCheck,
    accent: "#FF00FF",
  },
  {
    title: "Custom Integrations",
    description:
      "CRM, booking, inventory, and payment integrations tailored to how your team actually works day to day.",
    icon: Puzzle,
    accent: "#00FFFF",
  },
  {
    title: "Maintenance Control",
    description:
      "Transparent per-change scope and pricing so you only pay for what you need, when you need it.",
    icon: Settings,
    accent: "#39ff14",
  },
  {
    title: "AI-Ready Systems",
    description:
      "Automation and insight layers ready for AI enhancements without breaking your existing workflows.",
    icon: Cpu,
    accent: "#FF00FF",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cardVariants: any = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.92,
    rotateX: 8,
    filter: "blur(6px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      bounce: 0.25,
    },
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const glowLineVariants: any = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconVariants: any = {
  hidden: { scale: 0, rotate: -45, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.5,
      type: "spring",
      bounce: 0.4,
    },
  }),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const statusVariants: any = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.3,
    },
  }),
};

function CyberCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      custom={index}
      initial={reducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      whileHover={{ scale: 1.03, y: -6, rotateX: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative"
      style={{ transformStyle: "preserve-3d", perspective: "800px" }}
    >
      {/* Outer glow on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `linear-gradient(135deg, ${feature.accent}40, transparent 60%)`,
        }}
      />

      {/* Card body */}
      <div className="relative h-full rounded-2xl border border-white/[0.06] bg-[#0a1018]/80 backdrop-blur-xl p-7 md:p-8 overflow-hidden transition-all duration-500 group-hover:border-white/[0.12] group-hover:bg-[#0c1420]/90">
        {/* Corner accents */}
        <div
          className="absolute top-0 left-0 w-6 h-6 border-t border-l transition-all duration-500 group-hover:w-8 group-hover:h-8"
          style={{ borderColor: `${feature.accent}30` }}
        />
        <div
          className="absolute top-0 right-0 w-6 h-6 border-t border-r transition-all duration-500 group-hover:w-8 group-hover:h-8"
          style={{ borderColor: `${feature.accent}30` }}
        />
        <div
          className="absolute bottom-0 left-0 w-6 h-6 border-b border-l transition-all duration-500 group-hover:w-8 group-hover:h-8"
          style={{ borderColor: `${feature.accent}30` }}
        />
        <div
          className="absolute bottom-0 right-0 w-6 h-6 border-b border-r transition-all duration-500 group-hover:w-8 group-hover:h-8"
          style={{ borderColor: `${feature.accent}30` }}
        />

        {/* Scanline overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />

        {/* Top glow line - animated on scroll reveal */}
        <motion.div
          custom={index}
          initial={reducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={glowLineVariants}
          className="absolute top-0 left-8 right-8 h-px origin-left"
          style={{
            background: `linear-gradient(90deg, transparent, ${feature.accent}60, transparent)`,
          }}
        />

        {/* Icon - animated entrance */}
        <motion.div
          custom={index}
          initial={reducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconVariants}
          className="relative inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 border transition-all duration-500"
          style={{
            borderColor: `${feature.accent}25`,
            background: `${feature.accent}08`,
          }}
        >
          <Icon
            className="size-6 transition-all duration-500"
            style={{ color: feature.accent }}
          />
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: `0 0 20px ${feature.accent}30, inset 0 0 10px ${feature.accent}10` }}
          />
          {/* Pulse ring on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg border opacity-0 group-hover:opacity-100"
            style={{ borderColor: `${feature.accent}40` }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Title */}
        <h3
          className="text-lg md:text-xl font-bold mb-3 tracking-tight transition-colors duration-500 text-white group-hover:drop-shadow-[0_0_8px_var(--card-accent)]"
          style={{ ["--card-accent" as string]: `${feature.accent}60` }}
        >
          {feature.title}
        </h3>

        {/* HUD label */}
        <div
          className="inline-block mb-4 font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 group-hover:opacity-80 transition-opacity duration-500"
          style={{ color: feature.accent }}
        >
          SYS.MODULE_{String(index + 1).padStart(2, "0")}
        </div>

        {/* Description */}
        <p className="text-sm md:text-[15px] leading-relaxed text-[#8a9ba8] group-hover:text-[#b0c4d4] transition-colors duration-500">
          {feature.description}
        </p>

        {/* Bottom status bar - animated */}
        <motion.div
          custom={index}
          initial={reducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={statusVariants}
          className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
        >
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: feature.accent }}
          />
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: feature.accent }}
          >
            Active
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesFeatureGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-40 relative z-10">
      <div className="mx-auto w-full px-6 lg:px-12 max-w-[1440px]">
        {/* Header Module */}
        <div className="relative mb-24 md:mb-40">
          <div className="relative grid gap-12 md:gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-center z-10">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="space-y-8 text-center lg:text-left relative z-10"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    transition: { type: "spring", bounce: 0.4, duration: 1 },
                  },
                }}
                className="inline-flex items-center gap-3 rounded-full border border-[#39ff14]/50 bg-[#39ff14]/10 px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#39ff14] backdrop-blur-xl"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#39ff14]"></span>
                </div>
                Service Framework
              </motion.div>

              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 1.2,
                    },
                  },
                }}
                className="text-5xl md:text-7xl lg:text-[84px] font-black tracking-tighter text-white leading-[1.0]"
              >
                Precision<span className="text-[#39ff14]">.</span>
                <br className="hidden lg:block" /> Velocity
                <span className="text-[#00FFFF]">.</span>
                <br className="hidden lg:block" /> Control
                <span className="text-[#FF00FF]">.</span>
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeOut" },
                  },
                }}
                className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-2xl leading-[1.6] text-[#8a9ba8] font-medium"
              >
                A multi-discipline build pipeline for local brands that require
                confidence, clarity, and long-term technical ownership.
              </motion.p>
            </motion.div>

            {/* Right Content: Cyberpunk Feature Card */}
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, scale: 0.8, rotateY: 20, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.02, rotateY: -3, rotateX: 3 }}
              className="relative rounded-2xl border border-[#39ff14]/15 bg-[#0a1018]/80 backdrop-blur-xl p-[1px] shadow-[0_0_60px_rgba(57,255,20,0.08)] overflow-hidden group/box"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              {/* Border glow animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#39ff14]/20 via-transparent to-[#00FFFF]/20 opacity-30 group-hover/box:opacity-60 transition-opacity duration-700" />

              <div className="relative h-full w-full rounded-2xl bg-[#0a1018]/95 backdrop-blur-3xl p-8 md:p-12">
                {/* Corner HUD elements */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#39ff14]/40" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#39ff14]/40" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#39ff14]/40" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#39ff14]/40" />

                <motion.div
                  initial={reducedMotion ? {} : { scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#39ff14]/10 mb-8 border border-[#39ff14]/30 text-[#39ff14] shadow-[0_0_20px_rgba(57,255,20,0.15)]"
                >
                  <Sparkles className="size-7" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white md:text-4xl mb-6 leading-tight">
                  Per-change maintenance, without retainers
                </h3>
                <p className="text-base md:text-xl leading-relaxed text-[#8a9ba8] mb-10">
                  Each update is scoped before work begins, so your team gets
                  precise cost control, faster turnaround, and no monthly drag.
                </p>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {[
                    "Fixed scope build",
                    "Clear approval",
                    "Fast response",
                    "Pay for changes",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                      whileHover={{
                        scale: 1.03,
                        borderColor: "rgba(57,255,20,0.6)",
                      }}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#080d12]/80 px-5 py-4 transition-all duration-300 cursor-default"
                    >
                      <ArrowRight className="size-4 text-[#39ff14] shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wider text-[#dae3ee]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cyberpunk Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-20">
          {features.map((feature, i) => (
            <CyberCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
