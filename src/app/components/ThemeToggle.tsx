"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/* ============================================================
   🌗 THEME TOGGLE — MhegasDev Edition
   ------------------------------------------------------------
   ✅ Sin parpadeos ni warnings de hidratación
   ✅ Persistencia automática (localStorage)
   ✅ Glow dinámico coherente con tu tema global
   ✅ Compatible con Tailwind + variables CSS personalizadas
   ============================================================ */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Detectar y aplicar el tema inicial
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored || (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  // Alternar tema
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Evitar parpadeo hasta que se monte
  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="fixed bottom-6 right-6 z-[200]
                 flex items-center justify-center w-12 h-12
                 rounded-full border border-[var(--color-border)]
                 bg-[var(--color-bg-secondary)]/80 backdrop-blur-md
                 shadow-[0_0_15px_var(--color-accent)]
                 hover:shadow-[0_0_25px_var(--color-primary)]
                 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Sun size={22} className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Moon size={22} className="text-sky-500 drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
