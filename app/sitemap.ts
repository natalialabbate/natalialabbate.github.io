import type { MetadataRoute } from "next";
import { CASES } from "./cases";

export const dynamic = "force-static";

const SITE_URL = "https://natalialabbate.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...CASES.map((c) => ({
      url: `${SITE_URL}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
