"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  const pathname = usePathname();

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("is-visible")) {
            entry.target.classList.add("is-visible");

            const animTargets = [
              entry.target as HTMLElement,
              ...Array.from(entry.target.querySelectorAll<HTMLElement>("*")),
            ].filter((element) => !element.closest("[data-no-cascade]"));

            animTargets.forEach((element, index) => {
              element.classList.add("anim-item");
              const delay = Math.min(index * 0.035, 1.2);
              element.style.setProperty("--anim-delay", `${delay}s`);
            });

            requestAnimationFrame(() => {
              animTargets.forEach((element) => {
                element.classList.add("anim-in");
              });
            });
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div className="min-h-screen bg-transparent text-[#f2f2f2] relative overflow-hidden">
      {children}
    </div>
  );
}
