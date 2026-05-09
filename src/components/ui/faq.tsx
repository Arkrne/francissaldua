"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does per-change maintenance work?",
    answer: "Each request is scoped with a fixed price before work begins, so you only pay for changes you approve. There are no hidden retainers or surprise hourly bills."
  },
  {
    question: "Do you handle hosting and databases?",
    answer: "Yes. Architecture planning, deployment, secure database provisioning, and ongoing monitoring are included for all full-stack projects."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Turnaround depends on the complexity of the project. A standard landing page can take 1-2 weeks, while a full-stack web application with custom databases might take 4-8 weeks. A strict timeline is provided before we start."
  },
  {
    question: "Do you provide custom designs or templates?",
    answer: "Everything is fully custom-coded and designed from scratch to fit your brand's unique identity. I don't use generic templates, ensuring your site stands out."
  },
  {
    question: "How do we communicate during the project?",
    answer: "We'll set up a dedicated communication channel (Slack, Discord, or Email) where I provide regular milestone updates and gather your feedback at every critical stage."
  },
  {
    question: "Can you integrate third-party APIs?",
    answer: "Absolutely. I specialize in integrating secure external APIs like Stripe for payments, SendGrid for emails, or custom CRM solutions tailored to your operational needs."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="border border-[#5a7e7e]/60 bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg shadow-[#1d6b6b]/5"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors hover:bg-[#5a7e7e]/5"
          >
            <span className="text-lg md:text-2xl font-semibold text-[#f2f2f2]">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 ml-4 text-[#1d6b6b]"
            >
              <ChevronDown size={24} className="md:size-7" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 text-base md:text-lg leading-relaxed text-[#c9c9c9]">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
