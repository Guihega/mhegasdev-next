"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "GallardosTV",
    desc: "Plataforma web de apuestas deportivas y entretenimiento digital. Desarrollada con Laravel + Orchid, integra transmisión en vivo, gestión de usuarios y sistema de apuestas en tiempo real.",
    tech: ["Laravel", "PHP", "MySQL", "Orchid"],
    image: "/img/projects/gallardostv.webp",
    link: "https://gallardostv.tv",
  },
  {
    title: "Barzilai Institute",
    desc: "Sitio institucional y sistema educativo digital para una academia de idiomas. Optimizado para visibilidad SEO y estructura modular escalable.",
    tech: ["HTML", "CSS", "JavaScript", "SEO"],
    image: "/img/projects/barzilai.webp",
    link: "https://barzilaiinstitute.com.mx/",
  },
  {
    title: "QRBox",
    desc: "Aplicación avanzada para la generación y personalización de códigos QR con logotipos, gradientes y estilos SVG únicos.",
    tech: ["Blazor", "C#", "TailwindCSS", ".NET 9"],
    image: "/img/projects/qrbox.webp",
    link: "https://qrbox.com.mx",
  },
  {
    title: "Deseo Talleres",
    desc: "Plataforma cultural enfocada en la promoción de talleres, espectáculos y actividades artísticas. Diseño visual centrado en la experiencia del usuario.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/img/projects/deseotalleres.webp",
    link: "https://www.deseotalleres.com/",
  },
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      aria-label="Proyectos destacados"
      className="relative py-24 border-t border-border text-center px-4 md:px-6 overflow-hidden 
                 bg-background transition-colors duration-700"
    >
      {/* 🌌 Fondo decorativo coherente con el tema */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-colors duration-700 
                   bg-gradient-to-b from-backgroundSecondary/30 via-background/60 to-background/90"
      />

      {/* ✨ Luz superior sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[160px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      {/* 🏷️ Título */}
      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-extrabold mb-14 text-text transition-colors duration-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proyectos <span className="text-primary">Destacados</span>
      </motion.h2>

      {/* 🧱 Grid responsivo */}
      <div
        className={`grid gap-10 mx-auto relative z-10 ${
          isMobile
            ? "grid-cols-1 max-w-sm"
            : "sm:grid-cols-2 lg:grid-cols-4 max-w-7xl"
        }`}
      >
        {projects.map((p, i) => (
          <motion.article
            key={i}
            aria-label={p.title}
            className={`overflow-hidden rounded-2xl border border-border 
                        bg-backgroundSecondary/70 backdrop-blur-sm
                        transition-all duration-500 hover:bg-backgroundSecondary/90 ${
                          isMobile
                            ? "hover:scale-[1.02]"
                            : i % 2 === 0
                            ? "hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:-translate-y-2"
                            : "hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:scale-[1.03]"
                        }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Imagen de vista previa */}
            <figure className="overflow-hidden">
              <Image
                src={p.image}
                alt={`Vista previa del proyecto ${p.title}`}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <figcaption className="sr-only">{p.title}</figcaption>
            </figure>

            {/* Contenido */}
            <div className="p-6 text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-text transition-colors duration-700">
                {p.title}
              </h3>
              <p className="text-sm mb-4 leading-relaxed line-clamp-4 text-muted transition-colors duration-700">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs border border-border rounded-full bg-primary/10 text-accent transition-colors duration-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent font-medium hover:text-primary transition-colors duration-300"
                >
                  Ver proyecto →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
