import AboutHyperspeed from "@/components/ui/about-hyperspeed";

export default function AboutPage() {
  return (
    <section className="w-full py-24 reveal relative overflow-hidden" data-reveal>
      <AboutHyperspeed />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d12] via-transparent to-[#080d12] z-[1]" />
      <div className="relative z-10 mx-auto w-[95vw] max-w-7xl px-6 grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
        <div className="relative group md:order-2 flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#1d6b6b]/10 to-transparent rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700 blur-2xl -z-10"></div>
          <img
            src="/Untitled design (1).png"
            alt="Developer portrait"
            className="w-full max-w-lg object-contain drop-shadow-[0_0_15px_rgba(29,107,107,0.3)] hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="md:order-1">
          <div className="border border-[#1d6b6b]/50 py-1.5 px-4 rounded-full text-sm font-medium tracking-widest uppercase text-[#39ff14]/80 shadow-[0_0_10px_rgba(57,255,20,0.08)] inline-block mb-6">
            About Me
          </div>
          <h2 className="text-4xl font-bold mb-6 lg:text-5xl text-[#f2f2f2]">The Developer</h2>
          <p className="text-lg leading-relaxed text-[#c9c9c9]">
            I am a dedicated freelancer helping local businesses digitize
            workflows, streamline operations, and deliver premium, fully
            custom-coded platforms with secure back-end architecture.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#c9c9c9]">
            From discovery to deployment, each build is engineered for
            measurable results: faster quoting, cleaner data, and a
            high-trust customer experience that feels far beyond templates.
          </p>

          <div className="mt-10 grid gap-8 border-t border-[#39ff14]/10 pt-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#00FFFF] mb-3 font-mono">
                // What clients get
              </h3>
              <ul className="list-none space-y-3 text-[#f2f2f2]">
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
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#00FFFF] mb-3 font-mono">
                // Maintenance model
              </h3>
              <p className="text-[#c9c9c9] leading-relaxed">
                The per-change system keeps budgets flexible: every update
                is scoped, priced, and approved before work begins, so you
                never pay for idle retainers or unused hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
