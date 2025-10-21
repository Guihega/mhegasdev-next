"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaDocker } from "react-icons/fa";
import { SiBlazor, SiTypescript, SiTailwindcss, SiDotnet } from "react-icons/si";

type Tech = {
  icon: any;
  color: string;
  baseAngle: number;
  speed: number;
  delay: number;
  wobbleX: number;
  wobbleY: number;
};

export default function AboutOverlay({ margin = 150 }: { margin?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  /* ======================================================
     🎨 FONDO CON PARTÍCULAS (sincronizado con tema global)
  ====================================================== */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

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

    let bgColor = getCssVar("--color-bg", "#0b1120");
    let accent = getCssVar("--color-accent", "#3b82f6");
    let textColor = getCssVar("--color-text", "#e5e7eb");

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = hexToRgba(bgColor, 1);
      ctx.fillRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains("dark");
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? hexToRgba(accent, 0.25)
          : hexToRgba(textColor, 0.15);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const mo = new MutationObserver(() => {
      bgColor = getCssVar("--color-bg", "#0b1120");
      accent = getCssVar("--color-accent", "#3b82f6");
      textColor = getCssVar("--color-text", "#e5e7eb");
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      mo.disconnect();
    };
  }, []);

  /* ======================================================
     📏 OBSERVADOR DE TEXTO
  ====================================================== */
  useEffect(() => {
    if (!textRef.current) return;
    const el = textRef.current;

    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect();
      setBox({ w: rect.width, h: rect.height });
    });
    ro.observe(el);
    const rect = el.getBoundingClientRect();
    setBox({ w: rect.width, h: rect.height });

    return () => ro.disconnect();
  }, []);

  /* ======================================================
     ⚙️ ÍCONOS ANIMADOS
  ====================================================== */
  const stack: Tech[] = useMemo(() => {
    const icons = [FaLaravel, SiBlazor, SiDotnet, FaDocker, FaReact, SiTailwindcss, SiTypescript];
    const colors = ["#f55247", "#512bd4", "#9b59b6", "#2496ed", "#61dafb", "#38bdf8", "#3178c6"];

    return icons.map((icon, i) => ({
      icon,
      color: colors[i],
      baseAngle: (i / icons.length) * Math.PI * 2 + Math.random(),
      speed: 26 + Math.random() * 12,
      delay: Math.random() * 6,
      wobbleX: 12 + Math.random() * 12,
      wobbleY: 8 + Math.random() * 10,
    }));
  }, []);

  const radius = Math.hypot(box.w / 2, box.h / 2) + margin;

  /* ======================================================
     🧩 RENDER PRINCIPAL (con tema unificado)
  ====================================================== */
  return (
    <section
      className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden 
                 bg-background border-t border-border transition-colors duration-700"
    >
      {/* 🎆 Fondo de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      {/* 🎨 Gradiente suave coherente con el resto del sitio */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-colors duration-700
                   bg-gradient-to-b from-backgroundSecondary/25 via-background/60 to-background/90"
      />

      {/* 🌐 Íconos orbitando */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {stack.map(({ icon: Icon, color, baseAngle, speed, delay, wobbleX, wobbleY }, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                x: [
                  Math.cos(baseAngle) * radius + wobbleX,
                  Math.cos(baseAngle + Math.PI / 2) * radius - wobbleX,
                  Math.cos(baseAngle + Math.PI) * radius + wobbleX,
                  Math.cos(baseAngle + (3 * Math.PI) / 2) * radius - wobbleX,
                  Math.cos(baseAngle) * radius + wobbleX,
                ],
                y: [
                  Math.sin(baseAngle) * radius + wobbleY,
                  Math.sin(baseAngle + Math.PI / 2) * radius - wobbleY,
                  Math.sin(baseAngle + Math.PI) * radius + wobbleY,
                  Math.sin(baseAngle + (3 * Math.PI) / 2) * radius - wobbleY,
                  Math.sin(baseAngle) * radius + wobbleY,
                ],
                rotate: [0, 20, -20, 0],
                scale: [1, 1.15, 1, 0.9, 1],
                filter: [
                  `drop-shadow(0 0 6px ${color}55)`,
                  `drop-shadow(0 0 20px ${color}aa)`,
                  `drop-shadow(0 0 10px ${color}77)`,
                  `drop-shadow(0 0 6px ${color}44)`,
                  `drop-shadow(0 0 5px ${color}55)`,
                ],
              }}
              transition={{
                duration: speed,
                ease: "easeInOut",
                repeat: Infinity,
                delay,
              }}
            >
              <div
                className="p-4 rounded-full border-2 shadow-lg backdrop-blur-md"
                style={{ borderColor: color }}
              >
                <Icon className="text-4xl md:text-6xl opacity-90" style={{ color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🧠 Texto central */}
      <motion.div
        ref={textRef}
        className="relative z-40 text-center max-w-3xl px-6 transition-colors duration-700"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 transition-colors duration-700">
          Desarrollamos Tecnología a Tu Medida
        </h2>
        <p className="text-lg md:text-xl text-text leading-relaxed transition-colors duration-700">
          En <span className="font-semibold text-accent">MhegasDev</span> convertimos ideas
          en soluciones digitales diseñadas para hacer crecer tu negocio. Somos un equipo
          apasionado por la tecnología, especializado en{" "}
          <span className="text-accent">.NET, Blazor, Docker y Laravel</span>, combinando
          diseño, innovación y eficiencia para crear experiencias digitales que potencian la
          productividad y la conexión entre marcas y personas.
        </p>
      </motion.div>
    </section>
  );
}
