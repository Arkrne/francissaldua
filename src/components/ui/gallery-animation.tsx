"use client";

import React, { useState, useCallback } from "react";
import { motion } from "motion/react";
import { Crosshair, GitBranch, Monitor, Server, Plug, ShieldCheck } from "lucide-react";
import { imagekitImageUrl } from "@/lib/imagekit";

interface ProjectItem {
  src: string;
  alt: string;
  name: string;
  description: string;
  link: string;
}

interface ExpandableGalleryProps {
  projects: ProjectItem[];
  className?: string;
}

const iconMap = [Crosshair, GitBranch, Monitor, Server, Plug, ShieldCheck];

const ExpandableGallery: React.FC<ExpandableGalleryProps> = ({
  projects,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTap = useCallback((index: number, link: string) => {
    if (activeIndex === index) {
      if (link.startsWith("http")) {
        window.open(link, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = link;
      }
    } else {
      setActiveIndex(index);
    }
  }, [activeIndex]);

  return (
    <div className={className}>
      {/* Desktop: horizontal panels - all show content */}
      <div className="hidden md:flex gap-2 h-[420px] lg:h-[520px] w-full">
        {projects.map((project, index) => {
          const Icon = iconMap[index] || Monitor;
          const isActive = activeIndex === index;
          const isAnyActive = activeIndex !== null;
          const isInactive = isAnyActive && !isActive;

          const flexValue = isActive ? 4 : isInactive ? 0.7 : 1;

          return (
            <motion.a
              key={index}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="relative cursor-pointer overflow-hidden rounded-xl group"
              style={{ flex: 1 }}
              animate={{ flex: flexValue }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Background image */}
              <img
                src={imagekitImageUrl(project.src, { width: 1600 })}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
              />

              {/* Darkening overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#080d12] via-[#080d12]/70 to-[#080d12]/40"
                animate={{
                  opacity: isActive ? 0.6 : 0.85,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Neon border glow */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{
                  boxShadow: isActive
                    ? "inset 0 0 30px rgba(57,255,20,0.08), 0 0 20px rgba(29,107,107,0.2)"
                    : "inset 0 0 0px rgba(57,255,20,0), 0 0 0px rgba(29,107,107,0)",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* HUD corner accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#39ff14]/0 group-hover:border-[#39ff14]/60 transition-all duration-300" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#39ff14]/0 group-hover:border-[#39ff14]/60 transition-all duration-300" />

              {/* Content: always visible, adapts to panel width */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-5">
                {/* Icon */}
                <motion.div
                  className="mb-auto mt-4 flex justify-center"
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    opacity: isInactive ? 0.6 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="relative">
                    <Icon
                      className="text-[#39ff14]"
                      size={isActive ? 32 : 24}
                      strokeWidth={1.5}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: isActive
                          ? "0 0 20px rgba(57,255,20,0.3), 0 0 40px rgba(57,255,20,0.1)"
                          : "0 0 8px rgba(57,255,20,0.15)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Text content */}
                <div className="space-y-2">
                  {/* Title - always visible */}
                  <h4 className="text-white font-bold text-sm lg:text-base leading-tight text-center truncate">
                    {project.name}
                  </h4>

                  {/* Description - visible when active or default (no hover) */}
                  <motion.p
                    className="text-[#8a9ba8] text-xs lg:text-sm leading-relaxed text-center"
                    animate={{
                      opacity: isInactive ? 0 : 1,
                      height: isInactive ? 0 : "auto",
                    }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Visit indicator - only when active */}
                  <motion.div
                    className="flex items-center justify-center gap-2 pt-1"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 8,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FFFF]">
                      Visit Site
                    </span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#00FFFF]">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Scanline texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                }}
              />
            </motion.a>
          );
        })}
      </div>

      {/* Mobile: tap-to-expand vertical cards with full info */}
      <div className="flex md:hidden flex-col gap-3 w-full">
        {projects.map((project, index) => {
          const Icon = iconMap[index] || Monitor;
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer"
              animate={{ height: isActive ? 300 : 100 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => handleTap(index, project.link)}
            >
              <img
                src={imagekitImageUrl(project.src, { width: 1200 })}
                alt={project.alt}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#080d12] via-[#080d12]/60 to-[#080d12]/30"
                animate={{ opacity: isActive ? 0.7 : 0.85 }}
                transition={{ duration: 0.25 }}
              />

              {/* Neon glow */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{
                  boxShadow: isActive
                    ? "inset 0 0 20px rgba(57,255,20,0.06), 0 0 12px rgba(29,107,107,0.15)"
                    : "inset 0 0 0px rgba(57,255,20,0), 0 0 0px rgba(29,107,107,0)",
                }}
                transition={{ duration: 0.25 }}
              />

              {/* Collapsed: icon + title + description in one row */}
              <motion.div
                className="absolute inset-0 flex items-center px-4 gap-3"
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#080d12]/60 border border-[#1d6b6b]/30 flex items-center justify-center">
                  <Icon className="text-[#39ff14]" size={18} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white/90 text-sm font-bold leading-tight truncate">
                    {project.name}
                  </h4>
                  <p className="text-[#8a9ba8] text-xs leading-snug line-clamp-2 mt-0.5">
                    {project.description}
                  </p>
                </div>
              </motion.div>

              {/* Expanded: full info card */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4"
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 12,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="bg-[#080d12]/80 backdrop-blur-md border border-[#1d6b6b]/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0c1218] border border-[#39ff14]/20 flex items-center justify-center">
                      <Icon className="text-[#39ff14]" size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#39ff14]/80">
                          Tap again to visit
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-base leading-tight">
                        {project.name}
                      </h4>
                    </div>
                  </div>
                  <p className="text-[#8a9ba8] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandableGallery;
