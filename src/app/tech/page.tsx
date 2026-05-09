import { LogoCloud } from "@/components/ui/logo-cloud-4";

const techLogos = [
  { src: "https://cdn.simpleicons.org/nextdotjs/white", alt: "Next.js" },
  { src: "https://cdn.simpleicons.org/react/61DAFB", alt: "React" },
  { src: "https://cdn.simpleicons.org/typescript/3178C6", alt: "TypeScript" },
  { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", alt: "Tailwind CSS" },
  { src: "https://cdn.simpleicons.org/figma/F24E1E", alt: "Figma" },
  { src: "https://cdn.simpleicons.org/postgresql/4169E1", alt: "PostgreSQL" },
  { src: "https://cdn.simpleicons.org/prisma/white", alt: "Prisma" },
  { src: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg", alt: "AWS" },
  { src: "https://cdn.simpleicons.org/vercel/white", alt: "Vercel" },
  { src: "https://cdn.simpleicons.org/stripe/008CDD", alt: "Stripe" },
  { src: "https://cdn.simpleicons.org/github/white", alt: "GitHub" },
];

export default function TechPage() {
  return (
    <section className="mx-auto w-full py-20 reveal" data-reveal>
      <div className="mb-12 flex flex-col items-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4 lg:text-5xl text-[#f2f2f2]">Built With Precision</h2>
        <p className="text-lg leading-relaxed text-[#c9c9c9] max-w-2xl">
          Secure tooling built for speed, resilience, and clean handoffs.
          Every system is versioned, documented, and shipped with
          operational guardrails for future scaling.
        </p>
      </div>
      <div className="mt-8">
        <LogoCloud logos={techLogos} />
      </div>
    </section>
  );
}
