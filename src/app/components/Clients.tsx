"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const clients = [
  "/img/clientes/client1.webp",
  "/img/clientes/client2.webp",
  "/img/clientes/client3.webp",
  "/img/clientes/client4.webp",
  "/img/clientes/client5.webp",
  "/img/clientes/client6.webp",
];

export default function Clients() {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  /* ======================================================
     ♾️ Movimiento continuo fluido
  ====================================================== */
  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    let rafId: number;
    let x = 0;
    const baseSpeed = 25;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        x -= baseSpeed * dt;
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(x) >= halfWidth) x += halfWidth;
        controls.set({ x });
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [paused, controls]);

  /* ======================================================
     🧩 Render principal
  ====================================================== */
  return (
    <section
      id="clients"
      aria-label="Clientes y aliados estratégicos"
      className="relative overflow-hidden py-24 border-t border-border bg-background transition-colors duration-700"
    >
      {/* 🌌 Fondo animado sutil */}
      <motion.div
        className="absolute inset-0 z-0 transition-colors duration-700 
                   bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.04),transparent_70%)]
                   dark:bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.07),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      />

      {/* 🏷️ Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-text mb-16 relative z-10 tracking-tight transition-colors duration-700"
      >
        Clientes y <span className="text-primary">aliados estratégicos</span>
      </motion.h2>

      {/* 🎠 Carrusel infinito */}
      <div
        className="relative z-10 w-[94%] mx-auto overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gradientes laterales con colores del tema */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20 transition-colors duration-700" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20 transition-colors duration-700" />

        {/* Track animado */}
        <motion.div
          ref={trackRef}
          animate={controls}
          className="flex gap-16 items-center justify-center"
          style={{
            width: "max-content",
            willChange: "transform",
          }}
        >
          {[...clients, ...clients].map((logo, i) => (
            <motion.figure
              key={i}
              aria-label={`Logo del cliente ${i + 1}`}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative flex flex-col items-center justify-center select-none"
            >
              <div className="relative group">
                <Image
                  src={logo}
                  alt={`Cliente ${i + 1}`}
                  width={140}
                  height={60}
                  className="object-contain grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                  loading="lazy"
                />

                {/* ✨ Brillo animado coherente con el tema */}
                <motion.div
                  className="absolute inset-0 rounded-md bg-gradient-to-t 
                             from-transparent via-primary/10 to-transparent 
                             opacity-0 group-hover:opacity-100"
                  animate={{
                    backgroundPosition: ["0% 120%", "0% -120%"],
                  }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  style={{
                    backgroundSize: "100% 200%",
                    pointerEvents: "none",
                    willChange: "background-position",
                  }}
                />
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
