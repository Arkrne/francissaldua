"use client";

import React from "react";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVercel,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiStripe,
  SiFigma,
} from "react-icons/si";

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#FFFFFF" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiPostgresql, color: "#4169E1" },
  { Icon: SiPrisma, color: "#FFFFFF" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: SiVercel, color: "#FFFFFF" },
  { Icon: SiStripe, color: "#008CDD" },
  { Icon: FaGithub, color: "#FFFFFF" },
  { Icon: SiFigma, color: "#F24E1E" },
  { Icon: FaDocker, color: "#2496ED" },
];

export default function TestimonialsOrbit() {
  const orbitCount = 3;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);
  const orbitSizes = ["28rem", "42rem", "58rem"];
  const orbitDurations = [30, 40, 55];

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15" data-no-cascade>
      {orbitSizes.map((size, orbitIdx) => {
        const angleStep = (2 * Math.PI) / iconsPerOrbit;
        const icons = iconConfigs.slice(
          orbitIdx * iconsPerOrbit,
          orbitIdx * iconsPerOrbit + iconsPerOrbit
        );

        return (
          <div
            key={orbitIdx}
            className="absolute rounded-full border border-dotted border-[#1d6b6b]/30"
            style={{
              width: size,
              height: size,
              animation: `testimonial-orbit-spin ${orbitDurations[orbitIdx]}s linear infinite${orbitIdx % 2 === 1 ? " reverse" : ""}`,
            }}
          >
            {icons.map((cfg, iconIdx) => {
              const angle = iconIdx * angleStep;
              const x = 50 + 50 * Math.cos(angle);
              const y = 50 + 50 * Math.sin(angle);

              return (
                <div
                  key={iconIdx}
                  className="absolute rounded-full bg-[#0a1018]/80 p-2.5 border border-[#1d6b6b]/20"
                  style={{
                    left: `${x.toFixed(4)}%`,
                    top: `${y.toFixed(4)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <cfg.Icon className="h-5 w-5" style={{ color: cfg.color, opacity: 0.7 }} />
                </div>
              );
            })}
          </div>
        );
      })}

      <style>{`
        @keyframes testimonial-orbit-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
