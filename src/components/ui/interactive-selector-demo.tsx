"use client";

import React from "react";
import InteractiveSelector from "@/components/ui/interactive-selector";

export default function InteractiveSelectorDemo() {
  return (
    <div className="w-full h-min-screen">
      <InteractiveSelector />
    </div>
  );
}

export { InteractiveSelectorDemo as DemoOne };
