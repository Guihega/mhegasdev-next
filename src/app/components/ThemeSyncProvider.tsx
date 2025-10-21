"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeSyncProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Suaviza el cambio entre temas
    const html = document.documentElement;
    html.classList.add("theme-transition");
    setTimeout(() => html.classList.remove("theme-transition"), 600);
  }, []);

  if (!mounted) return <div className="opacity-0">{children}</div>;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
