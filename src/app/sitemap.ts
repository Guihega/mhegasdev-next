import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mhegasdev.com";

  const routes = [
    "",
    "#services",
    "#projects",
    "#technologies",
    "#testimonials",
    "#clients",
    "#contact",
  ];

  const date = new Date().toISOString();

  return routes.map((path) => ({
    url: `${base}/${path}`,
    lastModified: date,
    changeFrequency:
      path === "" ? "weekly" : path === "#contact" ? "monthly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "#services" || path === "#projects"
        ? 0.8
        : path === "#technologies"
        ? 0.7
        : path === "#testimonials"
        ? 0.6
        : path === "#clients"
        ? 0.5
        : 0.9,
  }));
}
