import { motion } from "framer-motion";

const posts = [
  {
    title: "Cómo optimizar tu API REST con Laravel",
    date: "Agosto 2025",
    link: "#",
  },
  {
    title: "Integrando Blazor y Docker para entornos escalables",
    date: "Julio 2025",
    link: "#",
  },
  {
    title: "Buenas prácticas en DevOps para despliegues continuos",
    date: "Junio 2025",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-background text-text py-20 transition-colors duration-500 px-8 md:px-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">Blog Técnico</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <motion.a
            href={p.link}
            key={p.title}
            target="_blank"
            className="bg-[#1e293b] p-6 rounded-xl border border-slate-700 hover:shadow-glow transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-lg font-semibold text-blue-400">{p.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{p.date}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
