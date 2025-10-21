import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ClientOnly from "@/app/components/ClientOnly";
import BackToTop from "@/app/components/BackToTop";

import StructuredData from "@/app/components/StructuredData";

// ===========================
// 💎 FUENTES
// ===========================
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// ===========================
// 🌐 METADATOS SEO COMPLETOS
// ===========================
export const metadata: Metadata = {
  metadataBase: new URL("https://mhegasdev.com"),
  title: {
    default: "MhegasDev – Desarrollo web y software profesional",
    template: "%s | MhegasDev",
  },
  description:
    "MhegasDev desarrolla soluciones digitales modernas: sitios web, APIs, dashboards y sistemas personalizados con tecnologías Next.js, Laravel y .NET.",
  keywords: [
    "MhegasDev",
    "desarrollo web",
    "software a medida",
    "Next.js",
    "Laravel",
    "Blazor",
    "dashboard",
    "Tehuacán",
    "Guillermo Herrera García",
  ],
  authors: [{ name: "Guillermo Herrera García", url: "https://mhegasdev.com" }],
  creator: "Guillermo Herrera García",
  publisher: "MhegasDev",
  alternates: { canonical: "https://mhegasdev.com" },
  openGraph: {
    type: "website",
    url: "https://mhegasdev.com",
    title: "MhegasDev – Desarrollo web y software",
    description:
      "Desarrollo web moderno, APIs, dashboards y soluciones digitales con tecnologías Next.js, Laravel y .NET.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MhegasDev banner" }],
    siteName: "MhegasDev",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mhegasdev",
    creator: "@mhegasdev",
    title: "MhegasDev – Desarrollo web y software",
    description:
      "Desarrollo web moderno, APIs y software personalizado con tecnologías Next.js, Laravel y .NET.",
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    //google: "TU_CODIGO_DE_VERIFICACION_GSC", // 🔹 agrega tu código de Search Console
    //bing: "TU_CODIGO_DE_VERIFICACION_BING",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ===========================
// 🧱 LAYOUT PRINCIPAL
// ===========================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased transition-colors duration-500 bg-[#0b1627]`}
      >
        {/* 🌗 Proveedor de tema con transición suave */}
        <ClientOnly>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <StructuredData />
            <div className="theme-transition">
              {children}
              <BackToTop />
            </div>
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
