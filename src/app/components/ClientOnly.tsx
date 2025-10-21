"use client";

import { useEffect, useState, ReactNode } from "react";

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Activa el cuerpo una vez montado para evitar parpadeo
    document.body.dataset.themeMounted = "true";
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <>{children}</>;
}
