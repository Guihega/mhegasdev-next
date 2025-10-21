"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MissionOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  /* ======================================================
     🌌 PARTÍCULAS ANIMADAS SINCRONIZADAS CON EL TEMA GLOBAL
  ====================================================== */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // 🧩 Utilidad para leer variables del tema
    const getCssVar = (v: string, fallback: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(v).trim() || fallback;

    const hexToRgba = (hex: string, alpha = 1) => {
      const h = hex.replace("#", "");
      const bigint = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // 🎨 Colores dinámicos del tema
    let bgColor = getCssVar("--color-bg", "#0b1120");
    let accent = getCssVar("--color-accent", "#3b82f6");
    let textColor = getCssVar("--color-text", "#e5e7eb");

    // 🔹 Partículas con profundidad
    const particles = Array.from({ length: 90 }, () => {
      const depth = Math.random();
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        baseR: 0.6 + depth * 3,
        r: 0,
        dx: (Math.random() - 0.5) * (0.08 + depth * 0.25),
        dy: (Math.random() - 0.5) * (0.08 + depth * 0.25),
        drift: (Math.random() - 0.5) * 0.03,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.1 + depth * 0.4,
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = hexToRgba(bgColor, 1);
      ctx.fillRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains("dark");

      for (const p of particles) {
        p.x += p.dx + Math.sin(p.phase) * p.drift;
        p.y += p.dy + Math.cos(p.phase) * p.drift;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        p.phase += 0.012;
        p.r = p.baseR + Math.sin(p.phase) * 0.6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.r, 0.4), 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? hexToRgba(accent, p.opacity) // Brillo azul en oscuro
          : hexToRgba(textColor, p.opacity * 0.4); // Suavizado en claro
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // 🔁 Observa cambios de tema en tiempo real
    const mo = new MutationObserver(() => {
      bgColor = getCssVar("--color-bg", "#0b1120");
      accent = getCssVar("--color-accent", "#3b82f6");
      textColor = getCssVar("--color-text", "#e5e7eb");
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("resize", onResize);
      mo.disconnect();
    };
  }, []);

  /* ======================================================
     🧠 BLOQUE PRINCIPAL
  ====================================================== */
  return (
    <section
      className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden 
                 border-t border-border bg-background transition-colors duration-700"
    >
      {/* ✨ Canvas de partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* 🌫️ Capa suavizadora coherente con el tema */}
      <div className="absolute inset-0 z-10 transition-colors duration-700 
                      bg-gradient-to-b from-backgroundSecondary/40 via-background/70 to-background/90" />

      {/* 🧠 Contenido */}
      <div className="relative z-20 text-center max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary transition-colors duration-700"
        >
          Tecnología, Innovación y Desarrollo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="text-base md:text-lg lg:text-xl text-text leading-relaxed transition-colors duration-700"
        >
          En <span className="text-accent font-semibold">MhegasDev</span> transformamos ideas
          en soluciones digitales avanzadas que potencian la innovación empresarial.
        </motion.p>
      </div>
    </section>
  );
}
