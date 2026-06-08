"use client";

import React from "react";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" data-no-cascade>
      <style>{`
        @keyframes aurora-shift {
          0%, 100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translate(5%, -10%) rotate(3deg) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-3%, 5%) rotate(-2deg) scale(0.95);
            opacity: 0.35;
          }
          75% {
            transform: translate(-5%, -5%) rotate(4deg) scale(1.05);
            opacity: 0.55;
          }
        }
        @keyframes aurora-shift-2 {
          0%, 100% {
            transform: translate(0%, 0%) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(-8%, 5%) rotate(-4deg) scale(1.15);
            opacity: 0.5;
          }
          66% {
            transform: translate(6%, -8%) rotate(3deg) scale(0.9);
            opacity: 0.4;
          }
        }
        @keyframes aurora-pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `}</style>

      {/* Primary aurora blob */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full blur-[120px]"
        style={{
          background: "conic-gradient(from 180deg, rgba(29, 107, 107, 0.4), rgba(57, 255, 20, 0.15), rgba(0, 255, 255, 0.2), rgba(29, 107, 107, 0.4))",
          animation: "aurora-shift 20s ease-in-out infinite",
        }}
      />

      {/* Secondary aurora blob */}
      <div
        className="absolute bottom-[-30%] right-[-15%] w-[70%] h-[70%] rounded-full blur-[100px]"
        style={{
          background: "conic-gradient(from 90deg, rgba(192, 132, 252, 0.2), rgba(29, 107, 107, 0.3), rgba(57, 255, 20, 0.1), rgba(192, 132, 252, 0.2))",
          animation: "aurora-shift-2 25s ease-in-out infinite",
        }}
      />

      {/* Center pulse */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(ellipse, rgba(0, 255, 255, 0.08) 0%, transparent 70%)",
          animation: "aurora-pulse 8s ease-in-out infinite",
        }}
      />
    </div>
  );
}
