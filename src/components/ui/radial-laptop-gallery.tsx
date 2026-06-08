'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RadialScrollGallery } from "@/components/ui/portfolio-and-image-gallery";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { imagekitImageUrl } from "@/lib/imagekit";

import EvilEye from "./EvilEye";

const mockups = [
  { src: imagekitImageUrl("/laptop-CebuTravelTours.png", { width: 1200 }), alt: "Cebu Travel & Tours Mockup" },
  { src: imagekitImageUrl("/laptop-KASignMaker.png", { width: 1200 }), alt: "K&A Sign Maker Mockup" },
  { src: imagekitImageUrl("/laptop-MS2BuilderSupply.png", { width: 1200 }), alt: "MS2 Builder Supply Mockup" },
  { src: imagekitImageUrl("/laptop-MusniUrian.png", { width: 1200 }), alt: "Musni Urian Mockup" },
  { src: imagekitImageUrl("/laptop-OrviaBuilders.png", { width: 1200 }), alt: "Orvia Builders Mockup" },
  { src: imagekitImageUrl("/laptop-POSSystem.png", { width: 1200 }), alt: "POS System Mockup" },
  { src: imagekitImageUrl("/laptop-RaffysReef.png", { width: 1200 }), alt: "Raffy's Reef Mockup" },
  { src: imagekitImageUrl("/laptop-TandocTandoc.png", { width: 1200 }), alt: "Tandoc & Tandoc Mockup" },
  { src: imagekitImageUrl("/laptop-Vanilla3000.png", { width: 1200 }), alt: "Vanilla 3000 Mockup" },
];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

function LaptopMarqueeRow() {
  return (
    <>
      {mockups.map((mockup) => (
        <img
          key={mockup.alt}
          src={mockup.src}
          alt={mockup.alt}
          className="pointer-events-none h-[60px] w-auto select-none object-contain drop-shadow-[0_0_10px_rgba(29,107,107,0.35)]"
          loading="lazy"
        />
      ))}
    </>
  );
}

/**
 * Phone version: two laptop marquees over the eye — upper row drifts
 * right→left, lower row left→right — while the eye's pupil wanders
 * (`autoGaze`) so it appears to curiously watch them. Desktop keeps the
 * scroll-driven radial wheel; only one branch (and one WebGL canvas) mounts.
 */
function MobileTwoRowEye() {
  return (
    <section className="relative w-full overflow-hidden py-12" data-no-cascade>
      <div className="mb-4 flex flex-col items-center px-4 text-center">
        <div className="mb-2 inline-block rounded-full border border-[#1d6b6b]/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#39ff14]/80 shadow-[0_0_10px_rgba(57,255,20,0.08)]">
          Live Builds
        </div>
      </div>

      <div className="relative mx-auto h-[420px] w-full">
        {/* Eye, centered behind the rows, watching them */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[320px] w-[320px]">
            <EvilEye
              eyeColor="#1d6b6b"
              backgroundColor="#000000"
              scale={0.45}
              glowIntensity={0.6}
              autoGaze
            />
          </div>
        </div>

        {/* Upper row — drifts right → left */}
        <div className="absolute left-0 right-0 top-[24%] z-10 -translate-y-1/2">
          <InfiniteSlider gap={28} duration={30} reverse={false}>
            <LaptopMarqueeRow />
          </InfiniteSlider>
        </div>

        {/* Lower row — drifts left → right */}
        <div className="absolute left-0 right-0 top-[76%] z-10 -translate-y-1/2">
          <InfiniteSlider gap={28} duration={34} reverse>
            <LaptopMarqueeRow />
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}

export function RadialLaptopGallery() {
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return <MobileTwoRowEye />;
  }

  return (
    <div className="relative w-full overflow-x-clip py-10">
      <RadialScrollGallery
        className="!min-h-[500px]"
        baseRadius={500}
        mobileRadius={250}
        visiblePercentage={50}
        scrollDuration={2500}
        centerContent={
          <div className="w-[900px] h-[900px]">
            <EvilEye
              eyeColor="#1d6b6b"
              backgroundColor="#000000"
              scale={0.45}
              glowIntensity={0.6}
            />
          </div>
        }
      >
        {(hoveredIndex) =>
          mockups.map((mockup, index) => {
             const isActive = hoveredIndex === index;
             const isAnyHovered = hoveredIndex !== null;
             const shouldDim = isAnyHovered && !isActive;

             return (
              <div
                key={index}
                className="group relative w-[400px] h-[250px] bg-transparent"
              >
                <div className="absolute inset-0 overflow-visible flex items-center justify-center">
                  <Image
                    src={mockup.src}
                    alt={mockup.alt}
                    fill
                    className={`object-contain transition-all duration-700 ease-out pointer-events-none select-none drop-shadow-[0_0_15px_rgba(29,107,107,0.3)] ${
                      shouldDim ? 'scale-95 blur-[2px] opacity-40 grayscale-[30%]' : 'scale-100 blur-0 opacity-100'
                    }`}
                    sizes="400px"
                    unoptimized
                  />
                </div>
              </div>
             );
          })
        }
      </RadialScrollGallery>
    </div>
  );
}
