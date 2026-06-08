import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageShell from "@/components/site/page-shell";
import SiteHeader from "@/components/site/header";
import SiteFooter from "@/components/site/footer";
import GlobalCyberBackground from "@/components/ui/GlobalCyberBackground";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://francissaldua.vercel.app";
const siteDescription =
  "Francis T. Saldua builds custom, high-performance websites for local businesses — from secure database architecture to trust-first front-end design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Francis T. Saldua — Full-Stack Web Developer & Designer",
    template: "%s | Francis T. Saldua",
  },
  description: siteDescription,
  applicationName: "Francis T. Saldua Portfolio",
  authors: [{ name: "Francis T. Saldua" }],
  creator: "Francis T. Saldua",
  keywords: [
    "Francis Saldua",
    "Francis T. Saldua",
    "full-stack web developer",
    "web designer",
    "Next.js developer",
    "React developer",
    "custom websites",
    "local business websites",
    "Virac",
    "Catanduanes",
    "Philippines web developer",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Francis T. Saldua",
    title: "Francis T. Saldua — Full-Stack Web Developer & Designer",
    description: siteDescription,
    images: [
      {
        url: "/MainLogo.png",
        alt: "Francis T. Saldua — Full-Stack Web Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francis T. Saldua — Full-Stack Web Developer & Designer",
    description: siteDescription,
    images: ["/MainLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#080d12]">
        <ScrollProgress />
        <GlobalCyberBackground />
        <PageShell>
          <SiteHeader />
          <main className="pt-16 md:pt-20 relative z-10">{children}</main>
          <SiteFooter />
        </PageShell>
        <MagneticCursor />
      </body>
    </html>
  );
}
