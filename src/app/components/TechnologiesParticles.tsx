"use client";

import { motion } from "framer-motion";

export default function TechnologiesParticles() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => {
        const size = 6 + (i % 4);
        const top = `${(i * 13) % 100}%`;
        const left = `${(i * 23) % 100}%`;
        const dur = 6 + (i % 4);

        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute bg-sky-400/10 rounded-full blur-md"
            style={{ width: size, height: size, top, left }}
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </>
  );
}
