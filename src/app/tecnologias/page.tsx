import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TechnologiesClient from "../components/TechnologiesClient";
import StructuredData from "../components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecnologías | MhegasDev",
  description:
    "Conoce las tecnologías que utilizamos en MhegasDev: Next.js, Laravel, .NET, Docker, PostgreSQL, AWS y más herramientas modernas.",
  alternates: { canonical: "https://mhegasdev.com.mx/tecnologias" },
};

export default function TecnologiasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <TechnologiesClient />
      </main>
      <Footer />
      <StructuredData type="breadcrumb" currentPath="servicios" title="Servicios" />
    </>
  );
}
