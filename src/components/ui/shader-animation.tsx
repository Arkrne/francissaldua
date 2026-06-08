"use client";

import React from "react";

export function ShaderAnimation() {
  return (
    <div
      className="absolute inset-0 opacity-30 overflow-hidden"
      data-no-cascade
    >
      {/* Concentric pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-[#1d6b6b]/20 animate-[ping_4s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-[#1d6b6b]/30 animate-[ping_4s_ease-in-out_1s_infinite]" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-[#1d6b6b]/40 animate-[ping_4s_ease-in-out_2s_infinite]" />
      </div>

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,107,107,0.12)_0%,transparent_60%)]" />
    </div>
  );
}
