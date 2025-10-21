"use client";

import { COMPANY_INFO, SOCIAL_LINKS } from "../constants";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const iconMap: Record<string, React.ElementType> = {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
  };

  return (
    <section
      id="contact"
      aria-label="Sección de contacto de MhegasDev"
      className="relative py-28 px-6 md:px-12 lg:px-20 border-t border-border 
                 bg-background text-text transition-colors duration-700"
    >
      {/* 🌌 Fondo decorativo dinámico */}
      <motion.div
        className="absolute inset-0 z-0 transition-colors duration-700 
                   bg-[radial-gradient(circle_at_40%_20%,rgba(56,189,248,0.06),transparent_70%)]
                   dark:bg-[radial-gradient(circle_at_40%_20%,rgba(56,189,248,0.12),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start z-10">
        {/* 🧭 Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-primary">Contáctanos</h2>
          <p className="text-lg text-text/80 leading-relaxed max-w-md">
            Estamos listos para ayudarte a impulsar tu negocio con soluciones tecnológicas personalizadas,
            escalables y seguras.
          </p>

          {/* 📍 Datos de contacto */}
          <div className="mt-10 space-y-5 text-text/90">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary text-xl flex-shrink-0" />
              <a
                href={COMPANY_INFO.location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                {COMPANY_INFO.location.address}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-primary text-xl flex-shrink-0" />
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="hover:text-primary transition-colors duration-300"
              >
                {COMPANY_INFO.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary text-xl flex-shrink-0" />
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="hover:text-primary transition-colors duration-300"
              >
                {COMPANY_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* 🌐 Redes sociales */}
          <div className="mt-10 flex flex-wrap gap-4">
            {SOCIAL_LINKS.map(({ name, url, icon, color }) => {
              const Icon = iconMap[icon];
              return (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${name}`}
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="p-3 rounded-full border border-border 
                             hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] 
                             transition-all duration-300"
                  style={{ color }}
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* 📨 Formulario de contacto */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-backgroundSecondary/70 backdrop-blur-md p-8 rounded-2xl 
                     border border-border shadow-[0_0_25px_rgba(56,189,248,0.15)] 
                     transition-colors duration-700"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulario enviado (simulado)");
          }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            Envíanos un mensaje
          </h3>

          <div className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              required
              className="w-full p-3 rounded-lg bg-background border border-border text-text 
                         placeholder:text-text/50 focus:outline-none focus:border-primary 
                         transition-colors duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
              className="w-full p-3 rounded-lg bg-background border border-border text-text 
                         placeholder:text-text/50 focus:outline-none focus:border-primary 
                         transition-colors duration-300"
            />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              rows={5}
              required
              className="w-full p-3 rounded-lg bg-background border border-border text-text 
                         placeholder:text-text/50 focus:outline-none focus:border-primary 
                         transition-colors duration-300 resize-none"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(56,189,248,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="w-full py-3 bg-primary text-background font-semibold rounded-lg 
                         hover:bg-accent transition-all duration-300 focus:outline-none 
                         focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Enviar mensaje
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
