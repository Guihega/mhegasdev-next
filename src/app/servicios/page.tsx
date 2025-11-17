import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import StructuredData from "../components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | MhegasDev",
  description:
    "Descubre los servicios de MhegasDev: desarrollo web, aplicaciones personalizadas, dashboards y soluciones empresariales a medida.",
  alternates: { canonical: "https://mhegasdev.com.mx/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
      <StructuredData type="breadcrumb" currentPath="servicios" title="Servicios" />
    </>
  );
}
