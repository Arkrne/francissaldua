"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Link,
  MessageCircle,
  Users,
  Briefcase,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

function HoverFooter() {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company History", href: "#" },
        { label: "Meet the Team", href: "#" },
        { label: "Employee Handbook", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
        {
          label: "Live Chat",
          href: "#",
          pulse: true,
        },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#1d6b6b]" />,
      text: "francissaldua99@gmail.com",
      href: "mailto:francissaldua99@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-[#1d6b6b]" />,
      text: "09514342858",
      href: "tel:09514342858",
    },
    {
      icon: <MapPin size={18} className="text-[#1d6b6b]" />,
      text: "Virac, Catanduanes",
    },
  ];

  const socialLinks = [
    { icon: <Link size={20} />, label: "Portfolio", href: "#" },
    { icon: <MessageCircle size={20} />, label: "Chat", href: "#" },
    { icon: <Users size={20} />, label: "Community", href: "#" },
    { icon: <Briefcase size={20} />, label: "Projects", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "#" },
  ];

  return (
    <footer className="bg-[#0a1414]/80 relative h-fit md:rounded-3xl overflow-hidden md:m-8 border-t md:border border-[#1d6b6b]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto p-6 md:p-14 z-40 relative text-[#f2f2f2]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-16 pb-12">
          <div className="flex flex-col space-y-4 items-center md:items-start text-center md:text-left">
            <div className="relative h-24 md:h-32 w-48 md:w-56 shrink-0 overflow-visible">
              <Image
                src="/AnoBG.png"
                alt="Arkrne logo"
                className="absolute left-0 top-0 h-full w-full object-contain"
                style={{ transform: "translate(var(--logo-x, 0px), var(--logo-y, -15px))" }}
                width={224}
                height={128}
              />
            </div>
            <p className="text-base md:text-lg leading-relaxed text-[#c9c9c9] -mt-8 md:-mt-15">
              Arkrne delivers premium custom-coded platforms for local businesses
              that need secure, scalable systems with precise design.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="text-center md:text-left">
              <h4 className="text-[#f2f2f2] text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                {section.title}
              </h4>
              <ul className="space-y-2 md:space-y-3 text-base md:text-lg">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#1d6b6b] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="hidden md:inline-block absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#1d6b6b] animate-pulse" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center md:text-left">
            <h4 className="text-[#f2f2f2] text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center justify-center md:justify-start space-x-3">
                  <span className="shrink-0">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#1d6b6b] transition-colors truncate"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#1d6b6b] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-[#5a7e7e] my-6 md:my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-base md:text-lg space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-[#c9c9c9]">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#1d6b6b] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-left text-xs md:text-sm text-[#c9c9c9]">
            &copy; {new Date().getFullYear()} Arkrne. All rights reserved.
          </p>
        </div>
      </div>

      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Arkrne" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
