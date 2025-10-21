"use client";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MhegasDev",
    url: "https://mhegasdev.com",
    logo: "https://mhegasdev.com/logo.png",
    description:
      "Desarrollo web y software profesional con tecnologías modernas: Next.js, Laravel, .NET y Blazor.",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "Guillermo Herrera García",
      url: "https://mhegasdev.com",
    },
    sameAs: [
      "https://twitter.com/mhegasdev",
      "https://github.com/mhegasdev",
      "https://www.linkedin.com/in/guillermo-herrera",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contacto@mhegasdev.com",
      availableLanguage: ["Spanish", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
