"use client";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { resolvedTheme } = useTheme();
  const pathname = usePathname(); // Detecta si estás en "/" o en otra ruta

  useEffect(() => setMounted(true), []);

  // Scroll effect para blur/sombra
  const handleScroll = useCallback(() => setScrollY(window.scrollY), []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Detectar sección activa solo en la página principal
  useEffect(() => {
    if (pathname !== "/") return;
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
  }, [pathname]);

  if (!mounted) return null;

  const toggleMenu = () => setIsOpen((p) => !p);

  // Estilos dinámicos del fondo
  const style = {
    backgroundColor: "var(--navbar-bg)",
    borderBottom: "1px solid var(--navbar-border)",
    backdropFilter: scrollY > 50 ? "blur(12px)" : "none",
    WebkitBackdropFilter: scrollY > 50 ? "blur(12px)" : "none",
    boxShadow: scrollY > 80 ? "0 2px 20px var(--navbar-glow)" : "none",
    transition: "all 0.4s ease",
  } as const;

  // Enlaces: si no estás en "/" se usan rutas absolutas
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: pathname === "/" ? "#services" : "/servicios" },
    { name: "Proyectos", href: pathname === "/" ? "#projects" : "/proyectos" },
    { name: "Tecnologías", href: pathname === "/" ? "#technologies" : "/tecnologias" },
    { name: "Testimonios", href: pathname === "/" ? "#testimonials" : "/testimonios" },
    { name: "Clientes", href: pathname === "/" ? "#clients" : "/clientes" },
    { name: "Contacto", href: pathname === "/" ? "#contact" : "/contacto" },
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
          <Link href="/" className="text-2xl font-extrabold tracking-tight select-none">
            <span className="text-[var(--color-text-strong)]">Mhegas</span>
            <span className="text-primary">Dev</span>
          </Link>

          {/* Links Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ name, href }) => {
              const isActive = pathname === "/" 
                ? activeSection === href.substring(1)
                : pathname === href;
              return (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className={`font-medium px-1 transition-colors duration-300 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-[var(--color-text-base)] hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
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
          <Link
            href={pathname === "/" ? "#contact" : "/contacto"}
            className="hidden md:inline-block bg-primary text-white font-semibold px-5 py-2.5 rounded-full 
                       hover:bg-accent hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] 
                       transition-all duration-300"
          >
            Cotizar ahora
          </Link>

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
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-[var(--color-text-base)] hover:text-primary font-medium transition-colors"
                  >
                    {name}
                  </Link>
                ))}
                <Link
                  href={pathname === "/" ? "#contact" : "/contacto"}
                  onClick={() => setIsOpen(false)}
                  className="mt-2 bg-primary text-white px-6 py-2 rounded-full font-semibold hover:shadow-[0_0_12px_rgba(56,189,248,0.4)] transition-all"
                >
                  Cotizar ahora
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
