'use client';

import React from "react";
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { imagekitImageUrl } from "@/lib/imagekit";

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

export function LaptopMockSlider() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div data-no-cascade>
        <InfiniteSlider gap={40} reverse={false} duration={35}>
          {mockups.map((mockup, index) => (
            <div key={index} className="relative h-[250px] md:h-[400px] aspect-[16/10] shrink-0">
              <Image
                src={mockup.src}
                alt={mockup.alt}
                fill
                className="object-contain pointer-events-none select-none"
                sizes="(max-width: 768px) 400px, 640px"
                unoptimized
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
