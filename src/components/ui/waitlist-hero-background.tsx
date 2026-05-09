"use client";

import React from "react";

export function WaitlistHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" data-no-cascade>
      {/* Rotating rings with perspective */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        style={{
          perspective: "1200px",
        }}
      >
        <div
          className="absolute w-[800px] h-[800px] rounded-full border border-[#1d6b6b]/20"
          style={{
            transform: "rotateX(60deg)",
            animation: "spin-slow 40s linear infinite",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full border border-[#39ff14]/10"
          style={{
            transform: "rotateX(60deg) rotateZ(45deg)",
            animation: "spin-slow-reverse 35s linear infinite",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full border border-[#c084fc]/10"
          style={{
            transform: "rotateX(60deg) rotateZ(90deg)",
            animation: "spin-slow 30s linear infinite",
          }}
        />
      </div>

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,107,107,0.08)_0%,transparent_50%)]" />

      {/* Bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8, 13, 18, 0.95) 5%, rgba(8, 13, 18, 0.6) 40%, transparent 100%)",
        }}
      />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotateX(60deg) rotateZ(0deg); }
          to { transform: rotateX(60deg) rotateZ(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotateX(60deg) rotateZ(45deg); }
          to { transform: rotateX(60deg) rotateZ(-315deg); }
        }
      `}</style>
    </div>
  );
}
