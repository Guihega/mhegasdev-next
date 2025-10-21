"use client";

import { COMPANY_INFO, FOOTER_LINKS, SOCIAL_LINKS } from "../constants";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const iconMap: Record<string, React.ElementType> = {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
  };

  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-background text-text border-t border-border py-16 px-6 md:px-12 lg:px-20 
                 transition-colors duration-700 overflow-hidden"
    >
      {/* 🌌 Fondo animado sutil */}
      <div
        className="absolute inset-0 z-0 
                   bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.04),transparent_70%)] 
                   dark:bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.08),transparent_70%)] 
                   pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* 🧭 Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">{COMPANY_INFO.name}</h2>
          <p className="text-text/70 text-sm leading-relaxed transition-colors duration-700">
            {COMPANY_INFO.slogan}
          </p>

          {/* 🌐 Redes sociales */}
          <div className="flex gap-3 mt-6">
            {SOCIAL_LINKS.map(({ name, url, icon, color }) => {
              const Icon = iconMap[icon];
              return (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${name}`}
                  className="p-3 rounded-full border border-border hover:border-primary 
                             hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all 
                             hover:-translate-y-1 duration-300"
                  style={{ color }}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* 📚 Enlaces dinámicos */}
        {FOOTER_LINKS.map((section) => (
          <div key={section.category}>
            <h4 className="text-lg font-semibold text-text mb-4 transition-colors duration-700">
              {section.category}
            </h4>
            <ul className="space-y-2 text-text/70">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 💫 Línea inferior */}
      <div className="relative mt-12 pt-8 border-t border-border text-center text-sm text-text/60 transition-colors duration-700">
        © {year} {COMPANY_INFO.name}. Todos los derechos reservados.
        <br />
        Desarrollado con 💙 por{" "}
        <span className="text-primary font-semibold">MhegasDev</span>
      </div>
    </footer>
  );
}
