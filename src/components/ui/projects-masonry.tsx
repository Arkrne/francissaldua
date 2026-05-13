"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { imagekitImageUrl } from "@/lib/imagekit";

const projects = [
  {
    name: "MS2 Builder & Supply",
    description: "Construction inventory & logistics management system.",
    image: imagekitImageUrl("/MS2BuilderSupply.png", { width: 1400 }),
    link: "https://m-s-2-builder-supplies.vercel.app/",
    tag: "Inventory System",
  },
  {
    name: "Cebu PRP Travel & Tours",
    description: "Premium booking platform for regional tours.",
    image: imagekitImageUrl("/CebuTravelTours.png", { width: 1400 }),
    link: "https://cebu-prp-travel-tours.vercel.app/",
    tag: "Booking Platform",
  },
  {
    name: "Orvia Builders",
    description: "Portfolio showcase for luxury custom homes.",
    image: imagekitImageUrl("/OrviaBuilders.png", { width: 1400 }),
    link: "https://orvia-builders.vercel.app/",
    tag: "Portfolio",
  },
  {
    name: "Musni Urian",
    description: "Secure data platform for operational audits.",
    image: imagekitImageUrl("/MusniUrian.png", { width: 1400 }),
    link: "https://client-theta-mauve.vercel.app/",
    tag: "Data Platform",
  },
  {
    name: "POS System",
    description: "Real-time inventory for local retail businesses.",
    image: imagekitImageUrl("/POSSystem.png", { width: 1400 }),
    link: "https://abuab-inventory-gkp5.vercel.app/",
    tag: "POS & Retail",
  },
  {
    name: "Raffy's Reef",
    description: "Ecommerce hub for high-end reef keeping.",
    image: imagekitImageUrl("/RaffysReef.png", { width: 1400 }),
    link: "https://raffy-s-reef.vercel.app/",
    tag: "Ecommerce",
  },
  {
    name: "K&A Sign Maker",
    description: "Production tracking for custom large-scale signage.",
    image: imagekitImageUrl("/KASignMaker.png", { width: 1400, version: "3" }),
    link: "https://k-a-sign-maker.vercel.app/",
    tag: "Production Tracker",
  },
  {
    name: "Tandoc & Tandoc",
    description: "Professional legal services platform & client portal.",
    image: imagekitImageUrl("/TandocTandoc.png", { width: 1400 }),
    link: "https://tandoc-tandoc.vercel.app/",
    tag: "Legal Platform",
  },
  {
    name: "Vanilla 3000",
    description: "Modern analytics dashboard and workflow insights.",
    image: imagekitImageUrl("/Vanilla3000.png", { width: 1400 }),
    link: "https://vanilla3000-dashboard.vercel.app/",
    tag: "Analytics Dashboard",
  },
];

function TiltCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tapped, setTapped] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateX: (0.5 - y) * 12,
      rotateY: (x - 0.5) * 12,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);

  const handleTap = useCallback(() => {
    if (tapped) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    } else {
      setTapped(true);
    }
  }, [tapped, project.link]);

  useEffect(() => {
    if (tapped) {
      const timeout = setTimeout(() => setTapped(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [tapped]);

  const showOverlay = isHovered || tapped;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        ref={cardRef}
        className="relative group cursor-pointer"
        style={{ perspective: "800px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleTap}
      >
        <motion.div
          className="relative overflow-hidden rounded-xl border border-[#1d6b6b]/20 bg-[#0c1218]"
          animate={{
            rotateX: tilt.rotateX,
            rotateY: tilt.rotateY,
            scale: showOverlay ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: showOverlay ? "scale(1.05)" : "scale(1)" }}
              loading="lazy"
            />

            {/* Neon border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              animate={{
                boxShadow: showOverlay
                  ? "inset 0 0 30px rgba(57,255,20,0.08), 0 0 25px rgba(29,107,107,0.25), 0 0 50px rgba(29,107,107,0.1)"
                  : "inset 0 0 0px rgba(57,255,20,0), 0 0 0px rgba(29,107,107,0), 0 0 0px rgba(29,107,107,0)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* HUD corner brackets */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#39ff14]/0 group-hover:border-[#39ff14]/70 transition-all duration-300" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#39ff14]/0 group-hover:border-[#39ff14]/70 transition-all duration-300" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#39ff14]/0 group-hover:border-[#39ff14]/70 transition-all duration-300" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#39ff14]/0 group-hover:border-[#39ff14]/70 transition-all duration-300" />

            {/* Tag badge - always visible */}
            <div className="absolute top-3 left-3 mt-6 ml-0">
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#39ff14]/90 bg-[#080d12]/70 backdrop-blur-sm border border-[#39ff14]/20 px-2 py-0.5 rounded">
                {project.tag}
              </span>
            </div>

            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }}
            />

            {/* HUD info overlay - slides up on hover/tap */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              animate={{
                opacity: showOverlay ? 1 : 0,
                y: showOverlay ? 0 : 20,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="bg-[#080d12]/85 backdrop-blur-lg border border-[#1d6b6b]/40 rounded-lg p-3 md:p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#39ff14]/80">
                      Live
                    </span>
                  </div>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-[#c9c9c9]/60 hidden md:block">
                    {String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm md:text-base leading-tight mb-1">
                  {project.name}
                </h4>
                <p className="text-[#8a9ba8] text-xs md:text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-[#00FFFF] text-xs font-mono uppercase tracking-wider">
                  <span>Visit Site</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-y-[0.5px]">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Dark gradient - base state */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#080d12]/70 via-transparent to-transparent pointer-events-none"
              animate={{ opacity: showOverlay ? 0.3 : 0.6 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const ProjectsMasonry = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="w-full py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          className="mb-12 md:mb-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="border border-[#1d6b6b]/50 py-1 px-3 md:py-1.5 md:px-4 rounded-full text-[10px] md:text-sm font-medium tracking-widest uppercase text-[#39ff14]/80 shadow-[0_0_10px_rgba(57,255,20,0.08)] mb-6">
            Client Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#f2f2f2] tracking-tight">
            Website Mockups for Past Clients
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-[#c9c9c9] max-w-2xl">
            Real builds delivered to real businesses. Each system engineered for their specific operational needs.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMasonry;
