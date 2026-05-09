'use client';

import React from "react";
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

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
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
