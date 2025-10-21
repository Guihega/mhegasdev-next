import { motion } from "framer-motion";

const studies = [
  {
    title: "QRBox",
    problem: "Las empresas necesitaban un generador de QR flexible y con diseño personalizado.",
    solution: "Se desarrolló una plataforma en Blazor con previsualización dinámica, exportación SVG y backend optimizado.",
    result: "Aumento del 40% en velocidad de generación y soporte completo de branding.",
  },
  {
    title: "GallardosTV",
    problem: "Plataforma de apuestas poco automatizada.",
    solution: "Sistema Laravel-Orchid para administración, control de apuestas y créditos dinámicos.",
    result: "Optimización del flujo operativo y reducción de errores de cálculo en un 80%.",
  },
];

export default function CaseStudies() {
  return (
    <section id="casestudies" className="bg-background text-text py-20 transition-colors duration-500 px-8 md:px-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Casos de éxito
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {studies.map((s) => (
          <motion.div
            key={s.title}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {s.title}
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              <strong>Problema:</strong> {s.problem}
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong>Solución:</strong> {s.solution}
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Resultado:</strong> {s.result}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
