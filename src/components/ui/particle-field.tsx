"use client";

import React, { useEffect, useRef } from "react";

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  color?: string;
  speed?: number;
  connectionDistance?: number;
}

export function ParticleField({
  className = "",
  particleCount = 60,
  color = "29, 107, 107",
  speed = 0.3,
  connectionDistance = 120,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // STAGED FALLBACK — phones (<768px) skip the canvas entirely. Two of these
    // run on the home page; on iOS WebKit each unclamped DPR-3 backing store is
    // ~9× the logical pixel area, and the pair was the top contributor to the
    // out-of-memory tab kill. The transparent canvas just lets the CSS
    // background show through. Tablets/desktops are unaffected by this gate.
    const isPhone = window.matchMedia("(max-width: 767px)").matches;
    if (isPhone) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clamp the device pixel ratio: HiDPI displays gain nothing visible from a
    // decorative particle field beyond 2×, and the memory/fill cost is linear
    // in pixels. setTransform (not scale) is used so repeated resize() calls
    // reset the matrix instead of compounding it.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const rect = canvas.getBoundingClientRect();
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    // Only burn frames while the canvas is on (or near) screen — the second,
    // below-the-fold instance would otherwise animate the whole time.
    let onScreen = true;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > rect.width) p.vx *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineOpacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${color}, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Under reduced-motion we render a single static frame and stop the loop.
      if (!prefersReducedMotion && onScreen) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasOnScreen = onScreen;
        onScreen = entry.isIntersecting;
        // Resume the loop only on a false→true edge so we never stack frames.
        if (onScreen && !wasOnScreen && !prefersReducedMotion) {
          animate();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(canvas);

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [particleCount, color, speed, connectionDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
}
