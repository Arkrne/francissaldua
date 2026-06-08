"use client";

import React, { useEffect, useRef, useState } from "react";

export function MagneticCursor() {
  const crosshairRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      // Move main crosshair INSTANTLY — no lag, matches native pointer speed
      if (crosshairRef.current) {
        crosshairRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-magnetic], input, textarea, select")) {
        setIsHovering(true);
      }
    };

    const onOut = () => setIsHovering(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    // Trailing ring uses lerp in rAF for smooth follow
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const crosshairSize = isHovering ? 40 : isClicking ? 16 : 24;
  const ringSize = isHovering ? 56 : 36;

  return (
    <>
      <style>{`
        .cursor-crosshair {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
        }
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 99998;
          will-change: transform;
        }
        .cursor-inner {
          position: absolute;
          top: 0;
          left: 0;
          transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
        }
        .ring-inner {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          border: 1px solid rgba(57, 255, 20, 0.25);
          transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
        }
        .ring-inner.hovering {
          border-color: rgba(0, 255, 255, 0.5);
        }
        @media (pointer: coarse), (max-width: 767px) {
          .cursor-crosshair, .cursor-ring { display: none; }
        }
      `}</style>

      {/* Main crosshair — moves instantly with mouse */}
      <div ref={crosshairRef} className="cursor-crosshair">
        <div
          className="cursor-inner"
          style={{
            width: crosshairSize,
            height: crosshairSize,
            marginLeft: -crosshairSize / 2,
            marginTop: -crosshairSize / 2,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width={crosshairSize}
            height={crosshairSize}
            style={{ overflow: "visible" }}
          >
            {/* Center dot */}
            <circle cx="12" cy="12" r={isClicking ? 3 : 1.5} fill="#39ff14" opacity={isClicking ? 1 : 0.9} />

            {/* Cross lines */}
            <line x1="12" y1="0" x2="12" y2={isHovering ? "6" : "8"} stroke="#39ff14" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="12" y1={isHovering ? "18" : "16"} x2="12" y2="24" stroke="#39ff14" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="0" y1="12" x2={isHovering ? "6" : "8"} y2="12" stroke="#39ff14" strokeWidth="1.2" strokeLinecap="round" />
            <line x1={isHovering ? "18" : "16"} y1="12" x2="24" y2="12" stroke="#39ff14" strokeWidth="1.2" strokeLinecap="round" />

            {/* Corner accents on hover */}
            {isHovering && (
              <>
                <path d="M3 6 L3 3 L6 3" stroke="#00FFFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                <path d="M18 3 L21 3 L21 6" stroke="#00FFFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                <path d="M21 18 L21 21 L18 21" stroke="#00FFFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                <path d="M6 21 L3 21 L3 18" stroke="#00FFFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Trailing ring — smooth lerp follow */}
      <div ref={ringRef} className="cursor-ring">
        <div
          className={`ring-inner ${isHovering ? "hovering" : ""}`}
          style={{
            width: ringSize,
            height: ringSize,
            marginLeft: -ringSize / 2,
            marginTop: -ringSize / 2,
          }}
        />
      </div>
    </>
  );
}
