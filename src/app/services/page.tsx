import ServicesFeatureGrid from "@/components/ui/services-feature-grid";

export const metadata = {
  title: "Services",
  description:
    "Front-end, back-end, database, and maintenance services engineered for high-trust local brands.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="reveal" data-reveal>
      <ServicesFeatureGrid />
    </div>
  );
}
