import { FAQ } from "@/components/ui/faq";
import { imagekitImageUrl } from "@/lib/imagekit";

export default function FaqPage() {
  return (
    <section className="mx-auto w-[95vw] max-w-7xl px-6 py-24 reveal" data-reveal>
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <div className="mb-12 text-center lg:text-left">
            <div className="border border-[#5a7e7e]/70 py-1.5 px-4 rounded-full text-sm font-medium tracking-widest uppercase text-[#f2f2f2] inline-block mb-6">
              Answers
            </div>
            <h2 className="text-4xl font-bold lg:text-5xl text-[#f2f2f2]">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#c9c9c9]">
              Everything you need to know about the process, pricing, and what it&apos;s like to work together.
            </p>
          </div>
          <FAQ />
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#1d6b6b]/20 via-transparent to-[#5a7e7e]/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#5a7e7e]/40 bg-[#1f1f1f]/60 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
            <img
              src={imagekitImageUrl("/faq-portrait.png", { width: 1200 })}
              alt="Francis T. Saldua"
              className="h-full w-full rounded-[2rem] object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-full border border-[#5a7e7e]/40 bg-[#1f1f1f]/80 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#c9c9c9]">
              FAQ Insights
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
