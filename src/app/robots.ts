import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://mhegasdev.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/admin/",
          "/_next/static/",
          "/_next/image/",
          "/favicon.ico",
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/admin", "/api"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
