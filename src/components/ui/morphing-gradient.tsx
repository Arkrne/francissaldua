"use client";

import React from "react";

export function MorphingGradient({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} data-no-cascade>
      <style>{`
        @keyframes morph-blob-1 {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(90deg) scale(1.1); }
          50% { border-radius: 50% 60% 30% 60% / 30% 50% 70% 60%; transform: rotate(180deg) scale(0.95); }
          75% { border-radius: 60% 30% 60% 50% / 70% 40% 50% 60%; transform: rotate(270deg) scale(1.05); }
        }
        @keyframes morph-blob-2 {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(0deg) scale(1); }
          33% { border-radius: 70% 30% 50% 60% / 30% 70% 40% 50%; transform: rotate(120deg) scale(1.1); }
          66% { border-radius: 50% 50% 30% 70% / 60% 40% 60% 40%; transform: rotate(240deg) scale(0.9); }
        }
      `}</style>

      <div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] opacity-20"
        style={{
          background: "linear-gradient(135deg, #1d6b6b, #39ff14, #00FFFF)",
          animation: "morph-blob-1 15s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] opacity-15"
        style={{
          background: "linear-gradient(225deg, #c084fc, #1d6b6b, #39ff14)",
          animation: "morph-blob-2 18s ease-in-out infinite",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}
