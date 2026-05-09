"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function SiteHeader() {
  const [hideHeader, setHideHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isApple = /iphone|ipad|ipod|safari/.test(userAgent) && !/chrome/.test(userAgent);
    setIsAppleDevice(isApple);

    let lastScrollY = window.scrollY;
    const threshold = 100;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Stack", href: "/tech" },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-[#1d6b6b]/20 bg-[#080d12]/85 backdrop-blur-xl shadow-[0_0_30px_rgba(29,107,107,0.05)] transition-transform duration-500 ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-6 py-4 h-16 md:h-20">
          <div className="relative h-full w-[140px] md:w-[180px] shrink-0">
            <Link href="/">
              {isAppleDevice ? (
                <img
                  src="/LogoNoBg.png"
                  alt="Logo"
                  className="absolute left-0 top-1/2 h-[50px] md:h-[100px] w-auto -translate-y-1/2 object-contain"
                />
              ) : (
                <video
                  src="/YESLOGO.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ background: 'transparent' }}
                  className="absolute left-0 top-1/2 h-[50px] md:h-[100px] w-auto -translate-y-1/2 object-contain"
                />
              )}
            </Link>
          </div>
          
          <nav className="hidden flex-1 flex-wrap items-center justify-center gap-4 lg:gap-6 text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[#c9c9c9] md:flex lg:flex">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#f2f2f2] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-block rounded-full border border-[#1d6b6b]/40 bg-[#0a1a1a] px-4 md:px-6 py-2 md:py-2.5 text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#f2f2f2] shadow-[0_0_20px_rgba(29,107,107,0.1)] hover:border-[#39ff14]/60 hover:text-[#39ff14] hover:shadow-[0_0_25px_rgba(57,255,20,0.15)] transition-all"
            >
              Contact
            </Link>
            
            <button 
              className="flex items-center justify-center p-2 text-[#f2f2f2] md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[45] bg-[#080d12]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg font-bold uppercase tracking-[0.3em] text-[#c9c9c9]">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="hover:text-[#1d6b6b] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="mt-4 rounded-full bg-[#1d6b6b] px-10 py-4 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </>
  );
}
