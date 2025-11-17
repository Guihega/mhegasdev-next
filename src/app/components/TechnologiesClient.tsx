"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useState } from "react";
import TechnologiesParticles from "./TechnologiesParticles";

const techStack = [
  { name: "React / Next.js", icon: "Boxes", desc: "Frameworks modernos para crear interfaces dinámicas y SSR eficiente." },
  { name: "Laravel / PHP", icon: "Server", desc: "Backend robusto con alta productividad y seguridad." },
  { name: ".NET / Blazor", icon: "Cpu", desc: "Aplicaciones interactivas y rápidas con tecnología Microsoft." },
  { name: "JavaScript / TypeScript", icon: "Code2", desc: "Lenguajes esenciales del desarrollo web moderno." },
  { name: "HTML5 / CSS3", icon: "Globe", desc: "Base del desarrollo frontend con estilos adaptativos." },
  { name: "Docker / Nginx / Linux", icon: "Settings", desc: "Infraestructura contenedorizada y escalable." },
  { name: "MySQL / PostgreSQL", icon: "Database", desc: "Bases de datos SQL de alto rendimiento." },
  { name: "AWS / Cloudflare", icon: "Cloud", desc: "Infraestructura en la nube y optimización global." },
  { name: "Python / IA / ML", icon: "BrainCircuit", desc: "Automatización inteligente y análisis de datos." },
  { name: "API REST", icon: "Share2", desc: "Comunicación entre sistemas mediante endpoints seguros." },
];

export default function TechnologiesClient() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // ✅ Corregido: tipo HTMLLIElement
  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 12;
    const y = ((e.clientY - top) / height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative max-w-7xl mx-auto px-6">
      {/* ✨ Fondo de partículas coherente */}
      <TechnologiesParticles />

      {/* 🧩 Grid de tecnologías */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 place-items-center relative z-10">
        {techStack.map((tech, i) => {
          const Icon = (Icons as any)[tech.icon] ?? Icons.Circle;
          const bounceDuration = 2.8 + (i % 5) * 0.35;

          return (
            <motion.li
              key={tech.name}
              aria-label={tech.name}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                willChange: "transform",
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(56,189,248,0.3)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative w-44 h-44 rounded-full border border-border 
                         bg-backgroundSecondary/70 hover:bg-backgroundSecondary/90 
                         backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.12)]
                         transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Halo luminoso */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ scale: 0.9, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              />

              {/* Ícono + nombre */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center transition-opacity duration-300 group-hover:opacity-0 px-4 z-10">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: bounceDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-10 h-10 text-accent transition-colors duration-700" />
                </motion.div>
                <p className="text-text text-sm font-medium leading-tight transition-colors duration-700">
                  {tech.name}
                </p>
              </div>

              {/* Descripción en hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
                whileHover={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="w-full h-full flex items-center justify-center rounded-full border border-border 
                                bg-gradient-to-b from-backgroundSecondary/60 to-background/40 
                                backdrop-blur-md text-[12px] text-muted text-center px-6 leading-snug 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {tech.desc}
                </div>
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
