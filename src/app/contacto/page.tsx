import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | MhegasDev",
  description:
    "Ponte en contacto con MhegasDev para solicitar una cotización o resolver dudas sobre tus proyectos de desarrollo web o software.",
  alternates: { canonical: "https://mhegasdev.com.mx/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Contáctanos</h1>
        <p className="text-muted max-w-xl mb-6">
          Envíanos un mensaje para obtener una cotización o información sobre
          nuestros servicios.
        </p>
        <a
          href="mailto:contacto@mhegasdev.com.mx"
          className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors"
        >
          contacto@mhegasdev.com.mx
        </a>
      </main>
      <Footer />
      <StructuredData type="breadcrumb" currentPath="servicios" title="Servicios" />
    </>
  );
}
