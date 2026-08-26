import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/events", "/portfolio", "/why-aarambh", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!baseUrl) return [];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 }));
}
