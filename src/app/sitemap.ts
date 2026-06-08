import type { MetadataRoute } from "next";

const siteUrl = "https://francissaldua.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.8 },
    { path: "/projects", priority: 0.8 },
    { path: "/tech", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/testimonials", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
