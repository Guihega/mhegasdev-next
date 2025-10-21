"use client";

import { motion } from "framer-motion";

// 🔹 Importación de componentes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import FutureProjects from "./components/FutureProjects";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import MissionOverlay from "./components/MissionOverlay";
import AboutOverlay from "./components/AboutOverlay";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="font-inter bg-background text-text transition-colors duration-500 scroll-smooth">
      {/* 🔝 Navbar fijo + botón de tema */}
      <Navbar />
      <ThemeToggle />

      {/* 🎯 HERO SECTION */}
      <section id="hero" className="bg-background text-text dark:text-white">
        <Hero />
      </section>

      {/* 🌟 Sobre nosotros / overlay */}
      <AboutOverlay />

      {/* ⚙️ SERVICES */}
      <section id="services" className="bg-background py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Services />
        </motion.div>
      </section>

      {/* 🚀 PROJECTS */}
      <section id="projects" className="bg-background py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Projects />
        </motion.div>
      </section>

      {/* 💡 TECHNOLOGIES */}
      <section id="technologies" className="bg-bg-background py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Technologies />
        </motion.div>
      </section>

      {/* 👥 TEAM */}
{/*       <section id="team" className="bg-background py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Team />
        </motion.div>
      </section> */}

      {/* 🌌 NUEVA SECCIÓN INTERMEDIA */}
      <MissionOverlay />

      {/* 💬 TESTIMONIALS */}
      <section id="testimonials" className="bg-bg-background py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <Testimonials />
        </motion.div>
      </section>

      {/* 🤝 CLIENTS */}
      <section id="clients" className="bg-background py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Clients />
        </motion.div>
      </section>

      {/* 🌟 CTA FINAL */}
      <section id="cta" className="bg-bg-background py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CTA />
        </motion.div>
      </section>

      {/* 📞 CONTACT */}
      <section id="contact" className="bg-bg-background py-24 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Contact />
        </motion.div>
      </section>

      {/* 🧾 FOOTER */}
      <footer className="bg-background border-t border-border py-10">
        <Footer />
      </footer>
    </div>
  );
}
