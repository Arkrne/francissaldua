"use client";
import React from "react";

export default function GlobalCyberBackground() {
  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden bg-[#080d12]">
      {/* Animated grid floor */}
      <div className="cyber-grid absolute inset-0" />

      {/* Neon glow orbs */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(29,107,107,0.15)_0%,transparent_70%)] animate-float-slow" />
      <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(57,255,20,0.06)_0%,transparent_70%)] animate-float-slow-reverse" />
      <div className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.05)_0%,transparent_70%)] animate-float-drift" />

      {/* Horizontal scan line */}
      <div className="cyber-scanline absolute inset-0" />

      {/* Vertical neon accent lines */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#1d6b6b]/20 to-transparent" />
      <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-[#39ff14]/10 to-transparent" />

      {/* Top and bottom vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#080d12_0%,transparent_15%,transparent_85%,#080d12_100%)]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjMiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]" />
    </div>
  );
}
