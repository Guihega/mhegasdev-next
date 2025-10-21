"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center 
                 bg-background text-text overflow-hidden px-6 transition-colors duration-700"
    >
      {/* 🌌 Fondo dinámico con gradiente adaptable */}
      <div
        className="absolute inset-0 z-0 transition-colors duration-700 
                   bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.08),transparent_70%)]
                   dark:bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.12),transparent_80%)]"
      />

      {/* 🌗 Gradiente principal del hero */}
      <div
        className="absolute inset-0 z-0 transition-colors duration-700 
                   bg-gradient-to-b from-background via-backgroundSecondary to-background"
      />

      {/* ✨ Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight z-10"
      >
        Impulsamos tu negocio con <br />
        <span className="text-primary">Soluciones Tecnológicas Inteligentes</span>
      </motion.h1>

      {/* 💬 Descripción */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl text-lg md:text-xl text-text/80 mt-6 z-10 transition-colors duration-700"
      >
        En <span className="text-accent font-semibold">MhegasDev Tech Solutions</span>{" "}
        diseñamos y optimizamos plataformas digitales de alto rendimiento.
      </motion.p>

      {/* ⚡ Botones CTA */}
      <motion.div
        className="flex flex-wrap gap-6 mt-10 justify-center z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a
          href="#services"
          className="bg-primary text-background px-8 py-3 rounded-full font-semibold flex items-center gap-2 
                     hover:bg-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] 
                     transition-all duration-300"
        >
          Conoce nuestros servicios <ArrowRight size={18} />
        </a>
        <a
          href="#projects"
          className="border border-primary text-primary px-8 py-3 rounded-full font-semibold 
                     hover:bg-primary/10 transition-all duration-300"
        >
          Ver proyectos
        </a>
      </motion.div>

      {/* 🧭 Indicador de desplazamiento */}
      <motion.div
        className="absolute bottom-10 animate-bounce text-primary/80 text-sm z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        ↓ Desliza para conocer más
      </motion.div>
    </section>
  );
}
