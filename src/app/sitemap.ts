import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mhegasdev.com.mx"; // usa el dominio final .mx

  const routes = [
    "",
    "servicios",
    "proyectos",
    "tecnologias",
    "testimonios",
    "clientes",
    "contacto",
  ];

  const date = new Date().toISOString();

  return routes.map((path) => ({
    url: `${base}/${path}`,
    lastModified: date,
    changeFrequency: "monthly",
    priority:
      path === ""
        ? 1.0
        : path === "servicios" || path === "proyectos"
        ? 0.8
        : path === "tecnologias"
        ? 0.7
        : path === "testimonios"
        ? 0.6
        : path === "clientes"
        ? 0.5
        : 0.4,
  }));
}
