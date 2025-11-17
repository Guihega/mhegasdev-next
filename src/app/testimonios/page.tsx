import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import StructuredData from "../components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios | MhegasDev",
  description:
    "Opiniones reales de nuestros clientes. Descubre por qué empresas confían en MhegasDev para sus proyectos digitales.",
  alternates: { canonical: "https://mhegasdev.com.mx/testimonios" },
};

export default function TestimoniosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
      <StructuredData type="breadcrumb" currentPath="servicios" title="Servicios" />
    </>
  );
}
