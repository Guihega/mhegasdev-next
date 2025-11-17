import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TechnologiesClient from "../components/TechnologiesClient"; // O tu componente "Clients" si lo tienes
import StructuredData from "../components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes | MhegasDev",
  description:
    "Empresas y profesionales que han confiado en MhegasDev para desarrollar soluciones tecnológicas de alto impacto.",
  alternates: { canonical: "https://mhegasdev.com.mx/clientes" },
};

export default function ClientesPage() {
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
