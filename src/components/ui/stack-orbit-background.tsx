"use client";

import React from "react";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGoogle,
  FaApple,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVercel,
  SiRedux,
  SiTypescript,
  SiFacebook,
} from "react-icons/si";
import { imagekitImageUrl } from "@/lib/imagekit";

const fallbackUrls = [
  "https://cdn.simpleicons.org/figma/F24E1E",
  "https://cdn.simpleicons.org/prisma/white",
];

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#FFFFFF" },
  { Icon: SiVercel, color: "#FFFFFF" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#FFFFFF" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#FFFFFF" },
  { Icon: SiFacebook, color: "#1877F2" },
  { Icon: null, img: fallbackUrls[0] },
  { Icon: null, img: fallbackUrls[1] },
];

export default function StackOrbitBackground() {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);
  const toPercent = (value: number) => `${value.toFixed(4)}%`;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-end" data-no-cascade>
      <div className="relative h-[38rem] w-[38rem] translate-x-[50%] sm:h-[46rem] sm:w-[46rem] lg:h-[56rem] lg:w-[56rem]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1d6b6b]/10 via-transparent to-[#5a7e7e]/10 blur-3xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-20 rounded-full bg-[#1f1f1f]/70 shadow-[0_12px_40px_rgba(0,0,0,0.35)] flex items-center justify-center">
            <FaReact className="h-10 w-10 text-[#61DAFB]" />
          </div>
        </div>

        {[...Array(orbitCount)].map((_, orbitIdx) => {
          const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
          const angleStep = (2 * Math.PI) / iconsPerOrbit;

          return (
            <div
              key={orbitIdx}
              className="absolute left-1/2 top-1/2 rounded-full border border-dotted border-[#5a7e7e]/50"
              style={{
                width: size,
                height: size,
                transform: "translate(-50%, -50%)",
                animation: `orbit-spin ${12 + orbitIdx * 6}s linear infinite`,
              }}
            >
              {iconConfigs
                .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                .map((cfg, iconIdx) => {
                  const angle = iconIdx * angleStep;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);

                  return (
                    <div
                      key={iconIdx}
                      className="absolute rounded-full bg-[#1f1f1f]/90 p-2 shadow-[0_6px_18px_rgba(0,0,0,0.3)]"
                      style={{
                        left: toPercent(x),
                        top: toPercent(y),
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {cfg.Icon ? (
                        <cfg.Icon className="h-6 w-6" style={{ color: cfg.color }} />
                      ) : (
                        <img
                          src={imagekitImageUrl(cfg.img ?? "", { width: 64 })}
                          alt="icon"
                          className="h-6 w-6 object-contain"
                        />
                      )}
                    </div>
                  );
                })}
            </div>
          );
        })}

        <style>{`
          @keyframes orbit-spin {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
