"use client";

import React from "react";

export function GlitchDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-16 overflow-hidden ${className}`} data-no-cascade>
      <style>{`
        @keyframes glitch-line-1 {
          0%, 100% { transform: translateX(0); opacity: 0.6; }
          10% { transform: translateX(-5%); opacity: 1; }
          20% { transform: translateX(3%); opacity: 0.4; }
          30% { transform: translateX(-2%); opacity: 0.8; }
          40% { transform: translateX(0); opacity: 0.6; }
        }
        @keyframes glitch-line-2 {
          0%, 100% { transform: translateX(0) scaleY(1); opacity: 0.4; }
          15% { transform: translateX(4%) scaleY(1.5); opacity: 0.9; }
          25% { transform: translateX(-3%) scaleY(0.8); opacity: 0.3; }
          35% { transform: translateX(1%) scaleY(1); opacity: 0.6; }
          45% { transform: translateX(0) scaleY(1); opacity: 0.4; }
        }
        @keyframes glitch-flicker {
          0%, 92%, 94%, 96%, 100% { opacity: 0; }
          93%, 95% { opacity: 1; }
        }
      `}</style>

      {/* Base line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1d6b6b]/50 to-transparent" />

      {/* Glitch line 1 */}
      <div
        className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39ff14]/60 to-transparent"
        style={{ animation: "glitch-line-1 4s ease-in-out infinite" }}
      />

      {/* Glitch line 2 */}
      <div
        className="absolute top-[55%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FFFF]/40 to-transparent"
        style={{ animation: "glitch-line-2 3.5s ease-in-out infinite 0.5s" }}
      />

      {/* Random flicker blocks */}
      <div
        className="absolute top-[40%] left-[20%] w-[15%] h-[3px] bg-[#39ff14]/30"
        style={{ animation: "glitch-flicker 6s step-end infinite" }}
      />
      <div
        className="absolute top-[55%] left-[60%] w-[10%] h-[2px] bg-[#00FFFF]/25"
        style={{ animation: "glitch-flicker 5s step-end infinite 1.5s" }}
      />
      <div
        className="absolute top-[48%] left-[40%] w-[8%] h-[1px] bg-[#c084fc]/30"
        style={{ animation: "glitch-flicker 7s step-end infinite 3s" }}
      />
    </div>
  );
}
