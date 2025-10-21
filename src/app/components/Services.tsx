"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Code,
  Layers,
  Cloud,
  Database,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    desc: "Creamos aplicaciones rápidas, seguras y escalables adaptadas a las necesidades de tu empresa.",
  },
  {
    icon: Database,
    title: "Sistemas Empresariales",
    desc: "Automatizamos procesos y optimizamos la gestión con sistemas hechos a la medida.",
  },
  {
    icon: Cloud,
    title: "Integraciones y APIs",
    desc: "Conectamos tus plataformas y servicios para mejorar la productividad y el flujo de datos.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    desc: "Diseñamos apps multiplataforma con interfaces modernas y gran rendimiento.",
  },
  {
    icon: Layers,
    title: "Consultoría y Soporte",
    desc: "Te acompañamos en la evolución tecnológica de tu negocio con asesoría experta y mantenimiento continuo.",
  },
  {
    icon: TrendingUp,
    title: "SEO y Optimización Web",
    desc: "Mejoramos la velocidad, posicionamiento y experiencia de tus plataformas digitales para maximizar resultados en línea.",
  },
];

export default function Services() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detección responsiva
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: isMobile ? 0.05 : 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [0, -5, 0],
          transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
        },
  };

  return (
    <section
      id="services"
      aria-label="Nuestros servicios"
      className="relative py-24 border-t border-border overflow-hidden 
                 bg-background transition-colors duration-700"
    >
      {/* 🌌 Fondo decorativo sutil coherente con AboutOverlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0
                   bg-gradient-to-b from-backgroundSecondary/30 via-background/50 to-background/80 
                   transition-colors duration-700"
      />

      {/* 🏷️ Título */}
      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-16 text-text transition-colors duration-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nuestros <span className="text-primary">Servicios</span>
      </motion.h2>

      {/* 🧱 Tarjetas */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`relative z-10 grid gap-10 ${
          isMobile
            ? "grid-cols-1 max-w-sm"
            : "md:grid-cols-2 lg:grid-cols-3 max-w-6xl"
        } mx-auto px-6 place-items-center`}
      >
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={i}
              role="group"
              aria-label={s.title}
              variants={cardVariants}
              className="group relative backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-between 
                         text-center transition-all duration-500 min-h-[260px] lg:min-h-[280px] xl:min-h-[300px]
                         border border-border bg-backgroundSecondary/70 hover:bg-backgroundSecondary/90
                         hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:scale-[1.03]"
            >
              {/* Ícono animado */}
              <motion.div
                variants={iconVariants}
                animate="animate"
                className="mb-5 flex items-center justify-center w-16 h-16 rounded-2xl 
                           bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-transform duration-300 group-hover:scale-110" />
              </motion.div>

              {/* Título */}
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-text transition-colors duration-500">
                {s.title}
              </h3>

              {/* Descripción */}
              <p className="text-muted text-sm leading-relaxed max-w-xs transition-colors duration-500">
                {s.desc}
              </p>

              {/* Línea inferior reactiva */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-accent/70 rounded-full 
                           group-hover:w-2/3 transition-all duration-500"
              />
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
