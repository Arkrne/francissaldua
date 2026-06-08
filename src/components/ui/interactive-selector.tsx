"use client";

import React, { useEffect, useState } from "react";
import { FaLightbulb, FaSitemap, FaLaptopCode, FaServer } from "react-icons/fa";

type Option = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

export default function InteractiveSelector() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const options: Option[] = [
    {
      title: "Strategy",
      description: "Research, positioning, and go-to-market planning",
      image:
        "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80",
      icon: <FaLightbulb size={24} className="text-white" />,
    },
    {
      title: "Information Architecture",
      description: "Sitemaps, content models, and user flows",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      icon: <FaSitemap size={24} className="text-white" />,
    },
    {
      title: "Front-End Systems",
      description: "Component libraries, build tooling, and UI performance",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      icon: <FaLaptopCode size={24} className="text-white" />,
    },
    {
      title: "Back-End Engineering",
      description: "APIs, data models, and operational reliability",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      icon: <FaServer size={24} className="text-white" />,
    },
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center font-sans text-white w-full overflow-hidden">

      <div className="options flex w-full max-w-[900px] h-[350px] md:h-[400px] mx-0 items-stretch overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out border-[#292929] border-2 md:border-2 ${activeIndex === index ? "active border-white" : ""}`}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backfaceVisibility: "hidden",
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? "translateX(0)" : "translateX(-60px)",
              minWidth: activeIndex === index ? "140px" : "50px",
              minHeight: "100px",
              margin: 0,
              borderRadius: 0,
              cursor: "pointer",
              backgroundColor: "#18181b",
              boxShadow: activeIndex === index ? "0 20px 60px rgba(0,0,0,0.50)" : "0 10px 30px rgba(0,0,0,0.30)",
              flex: activeIndex === index ? "10 1 0%" : "1 1 0%",
              zIndex: activeIndex === index ? 10 : 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "relative",
              overflow: "hidden",
              willChange: "flex-grow, box-shadow, background-size, background-position",
            }}
            onClick={() => handleOptionClick(index)}
          >
            <div
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? "0" : "-40px",
                height: "120px",
                boxShadow: activeIndex === index ? "inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000" : "inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000",
              }}
            />

            <div className={`label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-2 md:px-4 gap-2 md:gap-3 w-full transition-opacity duration-300 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}>
              <div className="icon min-w-[36px] md:min-w-[44px] h-[36px] md:h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border border-[#444] md:border-2 flex-shrink-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative overflow-hidden">
                <div
                  className="main font-bold text-sm md:text-lg transition-all duration-700 ease-in-out truncate"
                  style={{
                    transform: activeIndex === index ? "translateX(0)" : "translateX(25px)",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="sub text-[10px] md:text-base text-gray-300 transition-all duration-700 ease-in-out truncate"
                  style={{
                    transform: activeIndex === index ? "translateX(0)" : "translateX(25px)",
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}
