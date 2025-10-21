"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      id="cta"
      aria-label="Llamado a la acción para contactar a MhegasDev"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-28 border-t border-border bg-background text-center w-full transition-colors duration-700"
    >
      {/* 🌌 Fondo con respiración adaptativo */}
      <motion.div
        className="absolute inset-0 z-0 transition-colors duration-700 
                   bg-gradient-to-b from-background via-backgroundSecondary to-background"
        animate={{ opacity: [0.95, 1, 0.95] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 💫 Capa difusa animada */}
      <motion.div
        className="absolute inset-0 z-0 
                   bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)] 
                   dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)]"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      />

      {/* 📣 Contenido */}
      <div className="relative z-10 w-full px-6 md:px-10 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-text transition-colors duration-700"
            aria-label="Título de llamado a la acción"
          >
            ¿Listo para{" "}
            <span className="text-primary">transformar tu negocio</span> con tecnología?
          </h2>

          <p className="text-text/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto transition-colors duration-700">
            En{" "}
            <span className="font-semibold text-accent">MhegasDev</span>{" "}
            desarrollamos soluciones digitales personalizadas para impulsar tu empresa al siguiente nivel.
          </p>

          {/* ✨ Botón principal */}
          <motion.a
            href="#contact"
            aria-label="Ir a la sección de contacto"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 30px rgba(56,189,248,0.7)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="inline-block bg-primary text-background font-semibold px-10 py-4 rounded-full
                       hover:bg-accent transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.25)]
                       focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Contáctanos ahora
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
