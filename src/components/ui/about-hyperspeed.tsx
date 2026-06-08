"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import Hyperspeed from "./Hyperspeed";

export default function AboutHyperspeed() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current) return;
    // STAGED FALLBACK — phones (<768px) never mount the Three.js + bloom road.
    // Folding the check into the observer means isVisible stays false on phones
    // (and on the server / first client paint, so no hydration mismatch).
    // Tablets/desktops are unaffected. Combined with the existing observer +
    // dispose, this keeps the heaviest WebGL context off iOS WebKit entirely.
    const isPhone = window.matchMedia("(max-width: 767px)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting && !isPhone),
      { rootMargin: "200px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const options = useMemo(
    () => ({
      onSpeedUp: () => {},
      onSlowDown: () => {},
      distortion: "turbulentDistortion",
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 3,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 12,
      lightPairsPerRoadWay: 20,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5] as [number, number],
      lightStickHeight: [1.3, 1.7] as [number, number],
      movingAwaySpeed: [60, 80] as [number, number],
      movingCloserSpeed: [-120, -160] as [number, number],
      carLightsLength: [12, 80] as [number, number],
      carLightsRadius: [0.05, 0.14] as [number, number],
      carWidthPercentage: [0.3, 0.5] as [number, number],
      carShiftX: [-0.8, 0.8] as [number, number],
      carFloorSeparation: [0, 5] as [number, number],
      colors: {
        roadColor: 0x080d12,
        islandColor: 0x0a0f14,
        background: 0x000000,
        shoulderLines: 0x1d6b6b,
        brokenLines: 0x1d6b6b,
        leftCars: [0x39ff14, 0x00ffff, 0x1d6b6b],
        rightCars: [0xff00ff, 0x00ffff, 0x39ff14],
        sticks: 0x39ff14,
      },
    }),
    []
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 opacity-40 pointer-events-none"
    >
      {isVisible && !reducedMotion && <Hyperspeed effectOptions={options} />}
    </div>
  );
}
