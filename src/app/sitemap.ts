import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/our-work", "/our-work/bharatbin", "/team", "/affiliations", "/contact"];
  return pages.map((path) => ({ url: `https://helpindiafoundation.org${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : .7 }));
}
