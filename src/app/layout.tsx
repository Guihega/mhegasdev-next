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

/// ===========================
// 🌐 METADATOS SEO COMPLETOS
// ===========================
export const metadata: Metadata = {
  metadataBase: new URL("https://mhegasdev.com.mx"),
  title: {
    default: "MhegasDev – Soluciones Tecnológicas Inteligentes",
    template: "%s | MhegasDev",
  },
  description:
    "MhegasDev Tech Solutions impulsa tu negocio con desarrollo web, APIs y software profesional basado en tecnologías modernas como Next.js, .NET y Laravel.",
  keywords: [
    "MhegasDev",
    "desarrollo web",
    "software a medida",
    "Next.js",
    "Laravel",
    ".NET",
    "Blazor",
    "API",
    "sistemas empresariales",
    "Guillermo Herrera García",
    "Tehuacán",
  ],
  authors: [{ name: "Guillermo Herrera García", url: "https://mhegasdev.com.mx" }],
  creator: "MhegasDev",
  publisher: "MhegasDev",
  alternates: { canonical: "https://mhegasdev.com.mx" },
  openGraph: {
    type: "website",
    url: "https://mhegasdev.com.mx",
    title: "MhegasDev – Desarrollo Web, Software y Soluciones Digitales",
    description:
      "Creamos plataformas digitales modernas, seguras y escalables con tecnologías de última generación.",
    images: [
      {
        url: "/img/logo/redes.png",
        width: 1200,
        height: 630,
        alt: "MhegasDev Logo - Soluciones Tecnológicas Inteligentes",
      },
    ],
    siteName: "MhegasDev",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mhegasdev",
    creator: "@mhegasdev",
    title: "MhegasDev – Soluciones Tecnológicas Inteligentes",
    description:
      "Desarrollo web, APIs y software profesional para empresas modernas.",
    images: ["/img/logo/redes.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
  },
  verification: {
    google: "TU_CODIGO_VERIFICACION_GSC", // 🔹 Agrega aquí tu código de Search Console
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
            {/* 📊 Datos estructurados JSON-LD */}
            <StructuredData type="organization" />
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
