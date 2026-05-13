'use client';

import React from "react";
import Image from "next/image";
import { RadialScrollGallery } from "@/components/ui/portfolio-and-image-gallery";
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
