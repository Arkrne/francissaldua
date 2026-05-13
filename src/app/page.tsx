import ServicesFeatureGrid from "@/components/ui/services-feature-grid";
import ProjectsMasonry from "@/components/ui/projects-masonry";
import Testimonials from "@/components/ui/testimonials-columns-1";
import { LogoCloud } from "@/components/ui/logo-cloud-4";
import { FAQ } from "@/components/ui/faq";
import { ContactSection } from "@/components/ui/contact";
import ExpandableGallery from "@/components/ui/gallery-animation";
import StackOrbitBackground from "@/components/ui/stack-orbit-background";
import { WaitlistHeroBackground } from "@/components/ui/waitlist-hero-background";
import AboutHyperspeed from "@/components/ui/about-hyperspeed";
import HeroEntrance, { HeroText, HeroImage } from "@/components/ui/hero-entrance";
import { TestimonialsSpinBackground } from "@/components/ui/testimonials-spin-background";
import { RadialLaptopGallery } from "@/components/ui/radial-laptop-gallery";
import { TextScramble } from "@/components/ui/text-scramble";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ScrollVelocityText } from "@/components/ui/scroll-velocity-text";
import { ParticleField } from "@/components/ui/particle-field";
import { GlitchDivider } from "@/components/ui/glitch-divider";
import { FloatingBadges } from "@/components/ui/floating-badges";
import { MorphingGradient } from "@/components/ui/morphing-gradient";
import { StatsRow } from "@/components/ui/counter-animation";
import { imagekitImageUrl } from "@/lib/imagekit";

const techLogos = [
  { src: imagekitImageUrl("https://cdn.simpleicons.org/nextdotjs/white"), alt: "Next.js" },
  { src: imagekitImageUrl("https://cdn.simpleicons.org/react/61DAFB"), alt: "React" },
  { src: imagekitImageUrl("https://cdn.simpleicons.org/typescript/3178C6"), alt: "TypeScript" },
  { src: imagekitImageUrl("https://cdn.simpleicons.org/tailwindcss/06B6D4"), alt: "Tailwind CSS" },
  { src: imagekitImageUrl("https://cdn.simpleicons.org/figma/F24E1E"), alt: "Figma" },
  { src: imagekitImageUrl("https://cdn.simpleicons.org/postgresql/4169E1"), alt: "PostgreSQL" },
  { src: imagekitImageUrl("https://cdn.simpleicons.org/prisma/white"), alt: "Prisma" },
  { src: imagekitImageUrl("https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg"), alt: "AWS" },
  { src: imagekitImageUrl("https://cdn.simpleicons.org/vercel/white"), alt: "Vercel" },
  { src: imagekitImageUrl("https://cdn.simpleicons.org/stripe/008CDD"), alt: "Stripe" },
  { src: imagekitImageUrl("https://cdn.simpleicons.org/github/white"), alt: "GitHub" },
];

const showcaseProjects = [
  {
    src: imagekitImageUrl("https://images.unsplash.com/photo-1643750522920-4a40dd222291?w=1200&q=80&fit=crop"),
    alt: "Strategy & Research",
    name: "Strategy",
    description: "Research, positioning, and go-to-market planning.",
    link: "/services",
  },
  {
    src: imagekitImageUrl("https://images.unsplash.com/photo-1639322537138-5e513100b36e?w=1200&q=80&fit=crop"),
    alt: "Information Architecture",
    name: "Information Architecture",
    description: "Sitemaps, content models, and user flows.",
    link: "/services",
  },
  {
    src: imagekitImageUrl("https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80&fit=crop"),
    alt: "Front-End Systems",
    name: "Front-End Systems",
    description: "Component libraries, build tooling, and UI performance.",
    link: "/services",
  },
  {
    src: imagekitImageUrl("https://images.unsplash.com/photo-1680992046626-418f7e910589?w=1200&q=80&fit=crop"),
    alt: "Back-End Engineering",
    name: "Back-End Engineering",
    description: "APIs, data models, and operational reliability.",
    link: "/services",
  },
  {
    src: imagekitImageUrl("https://images.unsplash.com/photo-1683447551794-1c287cd42675?w=1200&q=80&fit=crop"),
    alt: "API & Integrations",
    name: "API & Integrations",
    description: "Third-party services, payment routing, and CRM syncing.",
    link: "/services",
  },
  {
    src: imagekitImageUrl("https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80&fit=crop"),
    alt: "Deployment & Security",
    name: "Deployment & Security",
    description: "Cloud hosting, SSL encryption, and performance auditing.",
    link: "/services",
  },
];

export default function Home() {
  return (
      <HeroEntrance>
      <div id="home">
        {/* HERO SECTION */}
        <section className="w-full relative overflow-hidden" data-no-cascade>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <img
              src={imagekitImageUrl("/AnoBG.png", { width: 2200 })}
              alt="Arkrne brand seal"
              className="w-[800px] md:w-[4000px] lg:w-[6800px] opacity-10 max-w-none"
            />
          </div>
          <StackOrbitBackground />
          <ParticleField className="z-[1]" particleCount={40} color="57, 255, 20" speed={0.2} connectionDistance={100} />
          <FloatingBadges />
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-4 pb-12 md:px-8 md:pt-2 md:pb-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:pt-5 lg:pb-16 relative z-10">
            <div className="space-y-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-1">
              <HeroText delay={0}>
                <div className="inline-block border border-[#1d6b6b]/50 py-1 px-3 md:py-1.5 md:px-4 rounded-full text-[10px] md:text-sm font-medium tracking-widest uppercase text-[#39ff14]/80 shadow-[0_0_10px_rgba(57,255,20,0.08)] w-max">
                  Available for Work
                </div>
              </HeroText>
              <HeroText delay={0.1}>
                <p className="text-[10px] md:text-sm uppercase tracking-[0.35em] text-[#c9c9c9]">Francis T. Saldua</p>
              </HeroText>
              <HeroText delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-[#f2f2f2]">
                  Full-Stack Web Developer &amp; Designer.
                </h1>
              </HeroText>
              <HeroText delay={0.35}>
                <div className="space-y-4">
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#f2f2f2] font-medium">
                    Building custom, high-performance websites for local businesses -
                    from database architecture to sharp, trust-first front-end design.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-[#c9c9c9]">
                    Every build is engineered for measurable performance: fast first paint, resilient API layers, and database-level validation. I deliver secure workflows and conversion-first UI systems built to earn trust on every page.
                  </p>
                </div>
              </HeroText>

              <HeroText delay={0.5}>
                <div className="grid gap-6 text-[10px] md:text-sm uppercase tracking-[0.15em] text-[#c9c9c9] grid-cols-1 sm:grid-cols-2 pt-2 text-left w-full">
                  <div className="border-l-2 border-[#39ff14]/50 pl-4">
                    <p className="text-[#f2f2f2] font-bold mb-1">Technical Scope</p>
                    <p>Database design, API security, system automation</p>
                  </div>
                  <div className="border-l-2 border-[#39ff14]/50 pl-4">
                    <p className="text-[#f2f2f2] font-bold mb-1">Delivery Focus</p>
                    <p>Fast iteration, clear documentation, stability</p>
                  </div>
                </div>
              </HeroText>

              <HeroText delay={0.6}>
                <div className="flex gap-3 md:gap-4 pt-4 justify-center lg:justify-start w-full">
                  <a
                    href="/projects"
                    className="flex-1 sm:flex-none rounded-full bg-[#1d6b6b] px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg font-bold text-white shadow-[0_0_30px_rgba(29,107,107,0.4),0_0_60px_rgba(29,107,107,0.15)] hover:shadow-[0_0_40px_rgba(57,255,20,0.3),0_0_80px_rgba(57,255,20,0.1)] hover:bg-[#1d8b6b] transition-all duration-300 text-center whitespace-nowrap"
                  >
                    View Work
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 sm:flex-none rounded-full border border-[#1d6b6b]/50 px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg font-bold text-[#f2f2f2] hover:border-[#39ff14]/50 hover:text-[#39ff14] hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300 text-center whitespace-nowrap"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </HeroText>
            </div>
            <HeroImage className="relative group flex justify-center items-center order-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1d6b6b]/10 to-transparent rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700 blur-2xl -z-10"></div>
              <img
                src={imagekitImageUrl("/851e814e-c298-44db-b056-7797abf6e4bf.png", { width: 1200 })}
                alt="Developer working on a laptop"
                className="w-full max-w-[280px] md:max-w-md lg:max-w-lg object-contain drop-shadow-[0_0_15px_rgba(29,107,107,0.3)] hover:scale-105 transition-transform duration-700"
              />
            </HeroImage>
          </div>
        </section>

        <RadialLaptopGallery />

        {/* SCROLL VELOCITY MARQUEE */}
        <ScrollVelocityText texts={["Design", "Develop"]} />

        <GlitchDivider />

        {/* SERVICES SECTION */}
        <section className="relative mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24 reveal" data-reveal>
          <AuroraBackground />
          <div className="relative z-10">
            <ServicesFeatureGrid />
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="mx-auto w-full px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24 reveal" data-reveal>
          <div className="mb-12 md:mb-16 flex flex-col items-center text-center max-w-7xl mx-auto">
            <div className="border border-[#1d6b6b]/50 py-1 px-3 md:py-1.5 md:px-4 rounded-full text-[10px] md:text-sm font-medium tracking-widest uppercase text-[#39ff14]/80 shadow-[0_0_10px_rgba(57,255,20,0.08)] mb-6">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#f2f2f2]">Project Showcase</h2>
            <p className="text-base md:text-lg leading-relaxed text-[#c9c9c9] max-w-3xl">
              Each project focuses on operational clarity, from lead capture to
              payment handoff. The emphasis is always on secure data handling,
              performance under load, and a premium front-end that looks fully
              custom coded.
            </p>
          </div>
          <div className="mt-8 md:mt-12 max-w-[1400px] mx-auto">
            <ExpandableGallery
              projects={showcaseProjects}
              className="w-full"
            />
          </div>
        </section>

        <ProjectsMasonry />

        <GlitchDivider />

        {/* STATS SECTION */}
        <section className="relative mx-auto w-full max-w-7xl px-4 reveal overflow-hidden" data-reveal>
          <MorphingGradient />
          <div className="relative z-10">
            <StatsRow />
          </div>
        </section>

        <GlitchDivider />

        {/* TECH STACK SECTION */}
        <section className="relative mx-auto w-full py-12 md:py-16 lg:py-24 reveal overflow-hidden" data-reveal>
          <ParticleField particleCount={30} color="29, 107, 107" speed={0.15} connectionDistance={150} />
          <div className="relative z-10 mb-10 md:mb-12 flex flex-col items-center text-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#f2f2f2]">
              <TextScramble text="Built With Precision" delay={200} speed={25} />
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#c9c9c9] max-w-2xl">
              Secure tooling built for speed, resilience, and clean handoffs.
              Every system is versioned, documented, and shipped with
              operational guardrails for future scaling.
            </p>
          </div>
          <div className="relative z-10 mt-6 md:mt-8">
            <LogoCloud logos={techLogos} />
          </div>
        </section>

        {/* VELOCITY TEXT - ABOUT TRANSITION */}
        <ScrollVelocityText texts={["Build", "Ship"]} className="opacity-50" />

        {/* ABOUT SECTION */}
        <section className="w-full py-16 md:py-24 reveal relative overflow-hidden" data-reveal>
          <AboutHyperspeed />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080d12] via-transparent to-[#080d12] z-[1]" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16 grid grid-cols-1 gap-12 md:gap-16 md:grid-cols-2 items-center">
            <div className="relative group md:order-2 flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#1d6b6b]/10 to-transparent rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700 blur-2xl -z-10"></div>
              <img
                src={imagekitImageUrl("/Untitled_design__1_.png", { width: 1200 })}
                alt="Developer portrait"
                className="w-full max-w-[280px] md:max-w-md lg:max-w-lg object-contain drop-shadow-[0_0_20px_rgba(29,107,107,0.4)] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:order-1 text-center md:text-left">
              <div className="border border-[#1d6b6b]/50 py-1 px-3 md:py-1.5 md:px-4 rounded-full text-[10px] md:text-sm font-medium tracking-widest uppercase text-[#39ff14]/80 shadow-[0_0_10px_rgba(57,255,20,0.08)] inline-block mb-6">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#f2f2f2]">
                The Developer
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[#c9c9c9]">
                I am a dedicated freelancer helping local businesses digitize
                workflows, streamline operations, and deliver premium, fully
                custom-coded platforms with secure back-end architecture.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-[#c9c9c9]">
                From discovery to deployment, each build is engineered for
                measurable results: faster quoting, cleaner data, and a
                high-trust customer experience that feels far beyond templates.
              </p>

              <div className="mt-10 grid gap-8 border-t border-[#39ff14]/10 pt-8 text-left">
                <div>
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#00FFFF] mb-3 font-mono">
                    {"// What clients get"}
                  </h3>
                  <ul className="list-none space-y-3 text-[#f2f2f2] text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-[#39ff14] mt-1 text-xs">&#9656;</span>
                      <span>Clear scope and delivery checkpoints with no hidden retainers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#39ff14] mt-1 text-xs">&#9656;</span>
                      <span>Secure data flows, role-based access, and audit-ready logs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#39ff14] mt-1 text-xs">&#9656;</span>
                      <span>Interface systems optimized for conversion and trust.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#00FFFF] mb-3 font-mono">
                    {"// Maintenance model"}
                  </h3>
                  <p className="text-[#c9c9c9] text-sm md:text-base leading-relaxed">
                    The per-change system keeps budgets flexible: every update
                    is scoped, priced, and approved before work begins, so you
                    never pay for idle retainers or unused hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GlitchDivider />

        {/* TESTIMONIALS SECTION */}
        <section className="relative overflow-hidden py-12 md:py-16 lg:py-24 reveal" data-reveal>
          <WaitlistHeroBackground />
          <TestimonialsSpinBackground />
          <div className="relative z-10">
            <Testimonials />
          </div>
        </section>

        <GlitchDivider />

        {/* FAQ SECTION */}
        <section className="relative mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-16 lg:py-24 reveal overflow-hidden" data-reveal>
          <MorphingGradient />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="order-1">
              <div className="mb-12 text-center lg:text-left">
                <div className="border border-[#1d6b6b]/50 py-1 px-3 md:py-1.5 md:px-4 rounded-full text-[10px] md:text-sm font-medium tracking-widest uppercase text-[#39ff14]/80 shadow-[0_0_10px_rgba(57,255,20,0.08)] inline-block mb-6">
                  Answers
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f2f2f2]">Frequently Asked Questions</h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-[#c9c9c9]">
                  Everything you need to know about the process, pricing, and what it&apos;s like to work together.
                </p>
              </div>
              <FAQ />
            </div>
            <div className="relative order-2">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#1d6b6b]/20 via-transparent to-[#5a7e7e]/20 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-[#5a7e7e]/40 bg-[#1f1f1f]/60 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                <img
                  src={imagekitImageUrl("/faq-portrait.png", { width: 1200 })}
                  alt="Francis T. Saldua"
                  className="h-full w-full rounded-[2rem] object-cover"
                />
                <div className="absolute bottom-6 left-6 rounded-full border border-[#5a7e7e]/40 bg-[#1f1f1f]/80 px-4 py-2 text-[10px] md:text-sm uppercase tracking-[0.3em] text-[#c9c9c9]">
                  FAQ Insights
                </div>
              </div>
            </div>
          </div>
        </section>

        <GlitchDivider />

        {/* CONTACT SECTION */}
        <section id="contact" className="reveal" data-reveal>
          <ContactSection />
        </section>
      </div>
      </HeroEntrance>
  );
}
