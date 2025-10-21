import { motion } from "framer-motion";

interface OverlaySectionProps {
  backgroundImage: string;
  title?: string;
  quote?: string;
  author?: string;
  role?: string;
  children?: React.ReactNode;
}

export default function OverlaySection({
  backgroundImage,
  title,
  quote,
  author,
  role,
  children,
}: OverlaySectionProps) {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔳 Overlay oscuro con degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40"></div>

      {/* 🌟 Contenido */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-primary"
          >
            {title}
          </motion.h2>
        )}

        {quote && (
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl italic text-textLight"
          >
            “{quote}”
            <footer className="mt-4 text-primary font-semibold">
              {author && author}{" "}
              {role && <span className="text-muted text-sm">— {role}</span>}
            </footer>
          </motion.blockquote>
        )}

        {/* 🎈 Espacio para elementos personalizados */}
        {children && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
