import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/our-work", "/our-work/bharatbin", "/team", "/affiliations", "/contact"];
  return pages.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : .7 }));
}
