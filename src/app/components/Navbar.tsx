"use client";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Solo leemos el scroll para blur/sombra (no ocultamos el navbar)
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Sección activa
  useEffect(() => {
    const ids = ["hero","services","projects","technologies","testimonials","clients","contact"];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.4 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen((p) => !p);
  if (!mounted) return null;

  // Fondo sincronizado con variables globales
  const style = {
    backgroundColor: "var(--navbar-bg)",
    borderBottom: "1px solid var(--navbar-border)",
    backdropFilter: scrollY > 50 ? "blur(12px)" : "none",
    WebkitBackdropFilter: scrollY > 50 ? "blur(12px)" : "none",
    boxShadow: scrollY > 80 ? "0 2px 20px var(--navbar-glow)" : "none",
    transition: "all 0.4s ease",
  } as const;

  const links = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#services" },
    { name: "Proyectos", href: "#projects" },
    { name: "Tecnologías", href: "#technologies" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Clientes", href: "#clients" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      <motion.header
        key={resolvedTheme}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-[100]"
        style={style}
      >
        <nav className="max-w-[1300px] mx-auto flex items-center justify-between py-4 px-6 lg:px-10">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-extrabold tracking-tight select-none">
            <span className="text-[var(--color-text-strong)]">Mhegas</span>
            <span className="text-primary">Dev</span>
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ name, href }) => {
              const isActive = activeSection === href.substring(1);
              return (
                <li key={href} className="relative">
                  <a
                    href={href}
                    className={`font-medium px-1 transition-colors duration-300 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-[var(--color-text-base)] hover:text-primary"
                    }`}
                  >
                    {name}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-[-4px] h-[2px] w-full rounded-full bg-primary"
                      transition={{
                        duration: 0.4,
                        ease: [0.25, 1.25, 0.5, 1],
                        type: "spring",
                        stiffness: 250,
                        damping: 20,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-primary text-white font-semibold px-5 py-2.5 rounded-full 
                       hover:bg-accent hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] 
                       transition-all duration-300"
          >
            Cotizar ahora
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--color-text-base)] hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Menú móvil */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]"
            >
              <div className="flex flex-col items-center py-4 space-y-3">
                {links.map(({ name, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-[var(--color-text-base)] hover:text-primary font-medium transition-colors"
                  >
                    {name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 bg-primary text-white px-6 py-2 rounded-full font-semibold hover:shadow-[0_0_12px_rgba(56,189,248,0.4)] transition-all"
                >
                  Cotizar ahora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
