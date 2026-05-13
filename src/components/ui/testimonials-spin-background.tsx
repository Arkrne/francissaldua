"use client";

import React from "react";
import { imagekitImageUrl } from "@/lib/imagekit";

export function TestimonialsSpinBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      data-no-cascade
    >
      <style>{`
        @keyframes testimonial-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .testimonial-spin-cw {
          animation: testimonial-spin-slow 60s linear infinite;
        }
        @keyframes testimonial-spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .testimonial-spin-ccw {
          animation: testimonial-spin-slow-reverse 60s linear infinite;
        }
      `}</style>

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          perspective: "1200px",
          transform: "perspective(1200px) rotateX(15deg)",
          transformOrigin: "center center",
          opacity: 1,
        }}
      >
        {/* Layer 3 (Back) - spins clockwise */}
        <div className="absolute inset-0 testimonial-spin-cw">
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: "1600px",
              height: "1600px",
              transform: "translate(-50%, -50%) rotate(279deg)",
            }}
          >
            <img
              src={imagekitImageUrl("https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to=2048")}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        </div>

        {/* Layer 2 (Middle) - spins counter-clockwise */}
        <div className="absolute inset-0 testimonial-spin-ccw">
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: "900px",
              height: "900px",
              transform: "translate(-50%, -50%) rotate(304deg)",
            }}
          >
            <img
              src={imagekitImageUrl("https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024")}
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        </div>

      </div>

      {/* Gradient overlay to blend into section */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(8, 13, 18, 0.85) 70%)",
        }}
      />
    </div>
  );
}
