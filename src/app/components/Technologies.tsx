"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const TechnologiesClient = dynamic(() => import("./TechnologiesClient"), {
  ssr: false,
  loading: () => (
    <div className="text-center text-muted py-10">
      Cargando tecnologías...
    </div>
  ),
});

export default function Technologies() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="technologies"
      aria-label="Stack tecnológico principal"
      className="relative overflow-hidden py-24 border-t border-border 
                 bg-background transition-colors duration-700"
    >
      {/* Gradiente decorativo coherente con el resto del sitio */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-700 
                      bg-gradient-to-b from-backgroundSecondary/25 via-background/60 to-background/90" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-text mb-20 transition-colors duration-700 relative z-10">
        Nuestro <span className="text-primary">Stack Tecnológico</span>
      </h2>

      {/* Render dinámico seguro */}
      <div className="relative z-10">
        {mounted ? (
          <TechnologiesClient />
        ) : (
          <p className="text-center text-muted text-sm">
            Visualizando tecnologías...
          </p>
        )}
      </div>
    </section>
  );
}
