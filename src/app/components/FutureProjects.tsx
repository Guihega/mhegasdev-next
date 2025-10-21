import { motion } from "framer-motion";

const upcoming = [
  {
    title: "Sistema de Reservas Inteligente",
    desc: "Una plataforma con IA para gestionar citas y disponibilidad en tiempo real.",
  },
  {
    title: "Dashboard de Analítica Web",
    desc: "Un panel avanzado para monitorear tráfico, usuarios y rendimiento.",
  },
];

export default function FutureProjects() {
  return (
    <section id="future" className="bg-background text-text py-20 transition-colors duration-500 px-8 md:px-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Próximos proyectos
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {upcoming.map((u) => (
          <motion.div
            key={u.title}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1e293b] p-6 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-blue-400">{u.title}</h3>
            <p className="text-gray-300 mt-2">{u.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
