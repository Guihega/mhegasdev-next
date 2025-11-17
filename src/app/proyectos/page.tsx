import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import StructuredData from "../components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | MhegasDev",
  description:
    "Explora los proyectos de MhegasDev: plataformas digitales, sistemas web y soluciones innovadoras para empresas y profesionales.",
  alternates: { canonical: "https://mhegasdev.com.mx/proyectos" },
};

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
      <StructuredData type="breadcrumb" currentPath="servicios" title="Servicios" />
    </>
  );
}
