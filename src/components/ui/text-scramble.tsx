"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function TextScramble({ text, className = "", delay = 0, speed = 30 }: TextScrambleProps) {
  const [displayed, setDisplayed] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const totalIterations = text.length * 2;

    setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration / 2) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration++;
        if (iteration >= totalIterations) {
          setDisplayed(text);
          clearInterval(interval);
        }
      }, speed);
    }, delay);
  }, [text, speed, delay]);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          scramble();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [hasAnimated, scramble]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
