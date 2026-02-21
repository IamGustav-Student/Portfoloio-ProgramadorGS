export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gustavo Sebastian Olivera",
    alternateName: "ProgramadorGS",
    url: "https://programadorgs.com.ar",
    image: "https://programadorgs.com.ar/avatar.png",
    jobTitle: "Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en ASP.NET Core, Clean Architecture, Next.js y Docker. Co-fundador de ZENDEV y arquitecto de Gymvo SaaS.",
    email: "iamgustav.olivera@gmail.com",
    telephone: "+5492473468486",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colón",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "ISFDyT N°124",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colón",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
    },
    knowsAbout: [
      "ASP.NET Core",
      "C#",
      "Clean Architecture",
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "Docker",
      "PostgreSQL",
      "SaaS",
      "Multitenancy",
      "Software Architecture",
      "Full Stack Development",
    ],
    sameAs: [
      "https://github.com/IamGustav-Student",
      "https://www.linkedin.com/in/gustavoolivera/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Programador GS – Gustavo Sebastian Olivera",
    url: "https://programadorgs.com.ar",
    description:
      "Portfolio profesional de Gustavo Sebastian Olivera, desarrollador Full Stack especializado en .NET, Next.js y soluciones SaaS.",
    author: {
      "@type": "Person",
      name: "Gustavo Sebastian Olivera",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://programadorgs.com.ar",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ProgramadorGS – Desarrollo de Software",
    url: "https://programadorgs.com.ar",
    image: "https://programadorgs.com.ar/avatar.png",
    description:
      "Servicios de desarrollo de software a medida: SaaS multitenant, aplicaciones web, APIs REST, digitalización de PyMEs y soluciones de software industrial.",
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    founder: {
      "@type": "Person",
      name: "Gustavo Sebastian Olivera",
    },
    knowsAbout: [
      "Desarrollo Web",
      "SaaS",
      "Clean Architecture",
      "APIs REST",
      "Digitalización de negocios",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "iamgustav.olivera@gmail.com",
      telephone: "+5492473468486",
      contactType: "customer support",
      availableLanguage: "Spanish",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
