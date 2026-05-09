import Testimonials from "@/components/ui/testimonials-columns-1";
import { WaitlistHeroBackground } from "@/components/ui/waitlist-hero-background";

export default function TestimonialsPage() {
  return (
    <div className="relative overflow-hidden py-12 md:py-16 lg:py-24 reveal min-h-screen" data-reveal>
      <WaitlistHeroBackground />
      <div className="relative z-10 pt-10">
        <Testimonials />
      </div>
    </div>
  );
}
