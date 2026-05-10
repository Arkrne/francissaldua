"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; name: string; role: string; initials: string; }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        data-no-cascade
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, initials }, i) => (
                <div className="p-10 rounded-3xl border border-[#5a7e7e]/60 shadow-lg shadow-[#1d6b6b]/20 max-w-sm w-full bg-[#1f1f1f]" key={i}>
                  <div className="text-lg leading-relaxed text-[#f2f2f2]">{text}</div>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="h-12 w-12 rounded-full bg-[#333333] border border-[#1d6b6b]/30 flex items-center justify-center shrink-0">
                      <span className="text-[#39ff14] font-mono font-bold text-sm">{initials}</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-6 text-lg text-[#f2f2f2]">{name}</div>
                      <div className="leading-6 opacity-70 tracking-tight text-lg text-[#c9c9c9]">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "The custom booking platform handles our high-season traffic perfectly. Lightning-fast performance with zero retainer fees.",
    name: "Cebu Travel & Tours",
    role: "Operations Manager",
    initials: "CT",
  },
  {
    text: "Custom architecture solved our complex dynamic quoting needs. Our client response time is now 10x faster.",
    name: "K&A Sign Maker",
    role: "Operations Head",
    initials: "KA",
  },
  {
    text: "Moving our massive inventory to a custom digital catalog was seamless. The robust back-end drastically boosted inquiries.",
    name: "MS2 Builder & Supply",
    role: "Store Manager",
    initials: "MS",
  },
  {
    text: "Clean code and strict security gave us a highly professional platform that reflects our firm's true credibility.",
    name: "Musni Urian",
    role: "Managing Partner",
    initials: "MU",
  },
  {
    text: "No generic templates. The premium, high-performance design perfectly showcases our high-end construction portfolio to the right clients.",
    name: "Orvia Builders",
    role: "Project Director",
    initials: "OB",
  },
  {
    text: "Flawless API and back-end integration. The resilient, scalable system made our internal operations much smoother.",
    name: "POS System",
    role: "IT Head",
    initials: "PS",
  },
  {
    text: "The mobile-responsive design is flawless. This sleek, conversion-focused UI directly increased our online reservations.",
    name: "Raffy's Reef",
    role: "Proprietor",
    initials: "RR",
  },
  {
    text: "This fully custom-coded infrastructure streamlined our document handoffs and securely wiped out our operational bottlenecks.",
    name: "Tandoc & Tandoc",
    role: "Admin Head",
    initials: "TT",
  },
  {
    text: "Ditching our slow site for a custom Next.js build was brilliant. Incredible load times and flexible pay-per-change pricing.",
    name: "Vanilla3000",
    role: "Owner",
    initials: "V3",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[720px] mx-auto text-center"
        >
          <div className="border border-[#5a7e7e]/70 py-1.5 px-4 rounded-full text-sm font-medium tracking-widest uppercase text-[#f2f2f2] inline-block mb-6">
            Testimonials
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#f2f2f2]">
            What our users say
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#c9c9c9]">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 md:mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[500px] md:max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;