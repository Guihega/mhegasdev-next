"use client";
import Script from "next/script";

interface StructuredDataProps {
  type: "organization" | "website" | "breadcrumb";
  currentPath?: string;
  title?: string;
}

export default function StructuredData({ type, currentPath, title }: StructuredDataProps) {
  const baseUrl = "https://mhegasdev.com.mx";

  // 🔹 ORGANIZATION SCHEMA
  if (type === "organization") {
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MhegasDev",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description:
        "Desarrollo web y software profesional con tecnologías modernas: Next.js, Laravel, .NET y Blazor.",
      foundingDate: "2023",
      founder: {
        "@type": "Person",
        name: "Guillermo Herrera García",
        url: baseUrl,
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
      <Script
        id="schema-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    );
  }

  // 🔹 WEBSITE SCHEMA
  if (type === "website") {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "MhegasDev",
      url: baseUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };

    return (
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    );
  }

  // 🔹 BREADCRUMB SCHEMA
  if (type === "breadcrumb") {
    const segments = currentPath
      ? currentPath
          .split("/")
          .filter(Boolean)
          .map((seg, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: title ?? seg.charAt(0).toUpperCase() + seg.slice(1),
            item: `${baseUrl}/${seg}`,
          }))
      : [];

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${baseUrl}/` },
        ...segments,
      ],
    };

    return (
      <Script
        id={`schema-breadcrumb-${currentPath}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    );
  }

  return null;
}
