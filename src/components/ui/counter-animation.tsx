"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", label, duration = 2 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const endValue = value;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * endValue);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#39ff14] tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-[#c9c9c9] uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16">
      <AnimatedCounter value={50} suffix="+" label="Projects Shipped" />
      <AnimatedCounter value={99} suffix="%" label="Client Satisfaction" />
      <AnimatedCounter value={3} suffix="x" label="Faster Delivery" />
      <AnimatedCounter value={24} suffix="/7" label="Support Ready" />
    </div>
  );
}
