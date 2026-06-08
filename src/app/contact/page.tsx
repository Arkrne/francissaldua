import { ContactSection } from "@/components/ui/contact";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Francis T. Saldua. Send a project brief through the secure contact form and get a response within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <ContactSection />
  );
}