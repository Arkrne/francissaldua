'use client';

import React from "react";
import Image from "next/image";
import { RadialScrollGallery } from "@/components/ui/portfolio-and-image-gallery";

import EvilEye from "./EvilEye";

const mockups = [
  { src: "/laptop-CebuTravelTours.png", alt: "Cebu Travel & Tours Mockup" },
  { src: "/laptop-KASignMaker.png", alt: "K&A Sign Maker Mockup" },
  { src: "/laptop-MS2BuilderSupply.png", alt: "MS2 Builder Supply Mockup" },
  { src: "/laptop-MusniUrian.png", alt: "Musni Urian Mockup" },
  { src: "/laptop-OrviaBuilders.png", alt: "Orvia Builders Mockup" },
  { src: "/laptop-POSSystem.png", alt: "POS System Mockup" },
  { src: "/laptop-RaffysReef.png", alt: "Raffy's Reef Mockup" },
  { src: "/laptop-TandocTandoc.png", alt: "Tandoc & Tandoc Mockup" },
  { src: "/laptop-Vanilla3000.png", alt: "Vanilla 3000 Mockup" },
];

export function RadialLaptopGallery() {
  return (
    <div className="relative w-full overflow-x-clip py-10">
      <RadialScrollGallery
        className="!min-h-[500px]"
        baseRadius={500}
        mobileRadius={250}
        visiblePercentage={50}
        scrollDuration={2500}
        centerContent={
          <div className="w-[700px] h-[700px] md:w-[900px] md:h-[900px]">
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
                className="group relative w-[250px] h-[156px] sm:w-[400px] sm:h-[250px] bg-transparent"
              >
                <div className="absolute inset-0 overflow-visible flex items-center justify-center">
                  <Image
                    src={mockup.src}
                    alt={mockup.alt}
                    fill
                    className={`object-contain transition-all duration-700 ease-out pointer-events-none select-none drop-shadow-[0_0_15px_rgba(29,107,107,0.3)] ${
                      shouldDim ? 'scale-95 blur-[2px] opacity-40 grayscale-[30%]' : 'scale-100 blur-0 opacity-100'
                    }`}
                    sizes="(max-width: 768px) 250px, 400px"
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
