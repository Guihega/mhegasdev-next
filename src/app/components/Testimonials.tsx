"use client";

import { motion, useAnimation } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Laura Sánchez",
    company: "EduTech MX",
    text: "MhegasDev transformó nuestro sistema de control escolar en una herramienta moderna, estable y visualmente atractiva. Su atención al detalle fue sobresaliente.",
    avatar: "/img/avatars/laura.webp",
  },
  {
    name: "Carlos Gómez",
    company: "QRBox México",
    text: "El equipo logró combinar diseño y funcionalidad a la perfección. Gracias a ellos lanzamos una plataforma con identidad propia y excelente rendimiento.",
    avatar: "/img/avatars/carlos.webp",
  },
  {
    name: "Andrés Navarro",
    company: "GallardosTV",
    text: "Integraron toda nuestra operación en un sistema seguro, escalable y elegante. Cumplieron tiempos y superaron expectativas. ¡Altamente recomendados!",
    avatar: "/img/avatars/andres.webp",
  },
  {
    name: "Ana Rivas",
    company: "La Palomilla",
    text: "Nos entregaron un sistema de gestión impecable, rápido y con un diseño espectacular. Gran comunicación y soporte constante.",
    avatar: "/img/avatars/ana.webp",
  },
  {
    name: "Miguel Herrera",
    company: "MhegasDev Partner",
    text: "Excelente experiencia. Su profesionalismo y conocimiento técnico se reflejan en cada detalle del desarrollo.",
    avatar: "/img/avatars/miguel.webp",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lastTime = useRef(performance.now());
  const xRef = useRef(0);
  const currentSpeed = useRef(30);
  const targetSpeed = useRef(30);

  useEffect(() => {
    if (isMobile || !trackRef.current) return;
    const track = trackRef.current;
    let rafId: number;

    const animate = (now: number) => {
      const dt = (now - lastTime.current) / 1000;
      lastTime.current = now;

      currentSpeed.current += (targetSpeed.current - currentSpeed.current) * 0.05;
      xRef.current -= currentSpeed.current * dt;
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(xRef.current) >= halfWidth) xRef.current += halfWidth;

      controls.set({ x: xRef.current });
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile, controls]);

  const handleMouseEnter = () => {
    targetSpeed.current = 0;
    setPaused(true);
  };

  const handleMouseLeave = () => {
    lastTime.current = performance.now();
    targetSpeed.current = 30;
    setPaused(false);
  };

  return (
    <section
      id="testimonials"
      aria-label="Testimonios de clientes"
      className="relative overflow-hidden py-32 border-t border-border bg-background transition-colors duration-700"
    >
      {/* 🌌 Fondo animado adaptable */}
      <motion.div
        className="absolute inset-0 z-0 transition-colors duration-700
                   bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.08),transparent_70%)] 
                   dark:bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.12),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      />

      {/* 🏷️ Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center text-text mb-20 tracking-tight transition-colors duration-700"
      >
        Opiniones de nuestros <span className="text-primary">clientes</span>
      </motion.h2>

      {/* 💬 Carrusel infinito (desktop) */}
      <div
        className="relative z-10 overflow-hidden w-[94%] mx-auto px-4 py-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={trackRef}
          animate={controls}
          className="flex gap-8"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.article
              key={i}
              aria-label={`Testimonio de ${t.name}`}
              className="relative w-[400px] min-w-[400px] rounded-2xl border border-border 
                         bg-backgroundSecondary/70 backdrop-blur-xl p-8 pt-10 pb-10
                         shadow-[0_0_20px_rgba(56,189,248,0.15)]
                         hover:shadow-[0_0_35px_rgba(56,189,248,0.3)]
                         transition-all duration-700 group mx-2"
              whileHover={{ scale: 1.03 }}
            >
              {/* Ícono de cita */}
              <div className="absolute -top-5 left-6 bg-primary/10 rounded-full p-2 border border-border backdrop-blur-md">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Texto */}
              <p className="text-text/90 text-[15px] leading-relaxed italic mt-6 mb-8 transition-colors duration-700">
                “{t.text}”
              </p>

              {/* Datos del cliente */}
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-border shadow-[0_0_10px_rgba(56,189,248,0.25)]">
                  <Image
                    src={t.avatar || "/avatars/default.webp"}
                    alt={`Foto de ${t.name}`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-text font-semibold text-lg transition-colors duration-700">
                    {t.name}
                  </h3>
                  <span className="text-accent text-sm tracking-wide transition-colors duration-700">
                    {t.company}
                  </span>
                </div>
              </div>

              {/* Efecto halo */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* 📱 Carrusel móvil */}
      {isMobile && (
        <div className="flex overflow-x-auto gap-6 px-6 pb-8 mt-6 snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <article
              key={i}
              aria-label={`Testimonio móvil de ${t.name}`}
              className="min-w-[85%] snap-center relative rounded-2xl border border-border 
                         bg-backgroundSecondary/80 backdrop-blur-lg p-8
                         shadow-[0_0_25px_rgba(56,189,248,0.15)]
                         hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]
                         transition-all duration-500"
            >
              <Quote className="w-5 h-5 text-accent absolute -top-3 left-6" />
              <p className="text-text/90 text-[15px] leading-relaxed italic mt-6 mb-6 transition-colors duration-700">
                “{t.text}”
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-border shadow-[0_0_10px_rgba(56,189,248,0.25)]">
                  <Image
                    src={t.avatar || "/avatars/default.webp"}
                    alt={`Foto de ${t.name}`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-text font-semibold text-lg transition-colors duration-700">
                    {t.name}
                  </h3>
                  <span className="text-accent text-sm tracking-wide transition-colors duration-700">
                    {t.company}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
