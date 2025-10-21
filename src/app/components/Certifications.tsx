import { motion } from "framer-motion";

const certifications = [
  { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft", year: 2024 },
  { name: "Google Cloud Fundamentals", issuer: "Google", year: 2023 },
  { name: "Scrum Master Certified", issuer: "Scrum Alliance", year: 2022 },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-background text-text py-20 transition-colors duration-500 px-8 md:px-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">Certificaciones</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {certifications.map((c) => (
          <motion.div
            key={c.name}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1e293b] p-6 rounded-xl border border-slate-700 text-center"
          >
            <h3 className="text-lg font-semibold text-blue-400">{c.name}</h3>
            <p className="text-gray-400 text-sm">{c.issuer}</p>
            <p className="text-gray-500 text-xs mt-2">{c.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
