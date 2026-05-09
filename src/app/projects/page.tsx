import ProjectsMasonry from "@/components/ui/projects-masonry";
import ExpandableGallery from "@/components/ui/gallery-animation";

const showcaseProjects = [
  {
    src: "https://images.unsplash.com/photo-1643750522920-4a40dd222291?w=1200&q=80&fit=crop",
    alt: "Strategy & Research",
    name: "Strategy",
    description: "Research, positioning, and go-to-market planning.",
    link: "/services",
  },
  {
    src: "https://images.unsplash.com/photo-1639322537138-5e513100b36e?w=1200&q=80&fit=crop",
    alt: "Information Architecture",
    name: "Information Architecture",
    description: "Sitemaps, content models, and user flows.",
    link: "/services",
  },
  {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80&fit=crop",
    alt: "Front-End Systems",
    name: "Front-End Systems",
    description: "Component libraries, build tooling, and UI performance.",
    link: "/services",
  },
  {
    src: "https://images.unsplash.com/photo-1680992046626-418f7e910589?w=1200&q=80&fit=crop",
    alt: "Back-End Engineering",
    name: "Back-End Engineering",
    description: "APIs, data models, and operational reliability.",
    link: "/services",
  },
  {
    src: "https://images.unsplash.com/photo-1683447551794-1c287cd42675?w=1200&q=80&fit=crop",
    alt: "API & Integrations",
    name: "API & Integrations",
    description: "Third-party services, payment routing, and CRM syncing.",
    link: "/services",
  },
  {
    src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80&fit=crop",
    alt: "Deployment & Security",
    name: "Deployment & Security",
    description: "Cloud hosting, SSL encryption, and performance auditing.",
    link: "/services",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full px-4 md:px-6 py-20 reveal" data-reveal>
      <div className="mb-16 flex flex-col items-center text-center max-w-7xl mx-auto">
        <div className="border border-[#1d6b6b]/50 py-1.5 px-4 rounded-full text-sm font-medium tracking-widest uppercase text-[#39ff14]/80 shadow-[0_0_10px_rgba(57,255,20,0.08)] mb-6">
          Portfolio
        </div>
        <h2 className="text-4xl font-bold mb-6 lg:text-5xl text-[#f2f2f2]">Project Showcase</h2>
        <p className="text-lg leading-relaxed text-[#c9c9c9] max-w-3xl">
          Each project focuses on operational clarity, from lead capture to
          payment handoff. The emphasis is always on secure data handling,
          performance under load, and a premium front-end that looks fully
          custom coded.
        </p>
      </div>
      <div className="mt-12 max-w-[1400px] mx-auto">
        <ExpandableGallery projects={showcaseProjects} className="w-full" />
      </div>
      <ProjectsMasonry />
    </section>
  );
}
