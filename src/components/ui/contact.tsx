import { Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    title: "Email",
    value: "francissaldua99@gmail.com",
    href: "mailto:francissaldua99@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "09514342858",
    href: "tel:09514342858",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Virac, Catanduanes",
    href: "https://maps.google.com/?q=Virac,+Catanduanes",
    icon: MapPin,
  },
];

export function ContactSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20 lg:px-16 lg:py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#5a7e7e]/35 bg-[#1f1f1f] p-6 shadow-[0_25px_65px_rgba(0,0,0,0.35)] md:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(29,107,107,0.22),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(90,126,126,0.2),transparent_45%)]"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5 text-center lg:text-left">
            <span className="inline-flex rounded-full border border-[#5a7e7e]/60 bg-[#2a2a2a] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#c9c9c9] md:text-sm">
              Contact
            </span>
            <h1 className="text-3xl font-bold leading-tight text-[#f2f2f2] md:text-5xl lg:text-6xl">
              Let&apos;s build your next high-trust system.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#c9c9c9] md:text-lg lg:mx-0">
              Share your workflow goals and current blockers. I will scope the work clearly, propose the cleanest technical path, and deliver a stable build with clear handoff.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="mailto:francissaldua99@gmail.com"
                className="rounded-full bg-[#1d6b6b] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#155252] md:text-base"
              >
                Email me
              </a>
              <a
                href="tel:09514342858"
                className="rounded-full border border-[#5a7e7e] px-6 py-3 text-center text-sm font-semibold text-[#f2f2f2] transition-colors hover:bg-[#5a7e7e]/10 md:text-base"
              >
                Call now
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:gap-5">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.title === "Location" ? "_blank" : undefined}
                rel={card.title === "Location" ? "noreferrer" : undefined}
                className="group rounded-2xl border border-[#5a7e7e]/30 bg-[#252525] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1d6b6b]"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#1d6b6b]/20 p-2.5 text-[#1d6b6b]">
                    <card.icon className="size-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9ba7a7]">{card.title}</p>
                    <p className="mt-1 text-sm font-medium text-[#f2f2f2] md:text-base">{card.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
