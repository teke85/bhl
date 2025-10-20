import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/news",
    "/gallery",
    "/careers",
    "/contact",
    "/regional-impact",
    "/resettlement",
    "/partners",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency:
      route === "/news" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.8,
  }));

  return routes;
}
