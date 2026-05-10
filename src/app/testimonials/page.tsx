import Testimonials from "@/components/ui/testimonials-columns-1";
import { WaitlistHeroBackground } from "@/components/ui/waitlist-hero-background";
import { TestimonialsSpinBackground } from "@/components/ui/testimonials-spin-background";

export default function TestimonialsPage() {
  return (
    <div className="relative overflow-hidden py-12 md:py-16 lg:py-24 reveal min-h-screen flex items-center" data-reveal>
      <WaitlistHeroBackground />
      <TestimonialsSpinBackground />
      <div className="relative z-10 w-full">
        <Testimonials />
      </div>
    </div>
  );
}
