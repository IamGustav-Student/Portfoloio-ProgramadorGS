import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import JsonLd from "@/components/json-ld";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://programadorgs.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gustavo Sebastian Olivera | Desarrollador Full Stack – Programador GS",
    template: "%s | Programador GS",
  },
  description:
    "Desarrollador Full Stack especializado en ASP.NET Core, C#, Clean Architecture, Next.js y Docker. Arquitecto de SaaS multitenant, soluciones de software industrial y digitalización de PyMEs. Disponible para proyectos freelance y posiciones remotas desde Colón, Buenos Aires, Argentina.",
  keywords: [
    "desarrollador full stack Argentina",
    "programador freelance Argentina",
    "desarrollador .NET C# Argentina",
    "ASP.NET Core developer",
    "Next.js developer Argentina",
    "Clean Architecture .NET",
    "SaaS multitenant developer",
    "software factory Argentina",
    "desarrollador web Colón Buenos Aires",
    "contratar programador Argentina",
    "programador freelance remoto",
    "desarrollo de software a medida",
    "arquitecto de software",
    "Docker PostgreSQL developer",
    "React Next.js Tailwind",
    "digitalización PyMEs Argentina",
    "Gustavo Olivera programador",
    "ProgramadorGS",
    "ZENDEV",
    "Gymvo SaaS",
  ],
  authors: [{ name: "Gustavo Sebastian Olivera", url: BASE_URL }],
  creator: "Gustavo Sebastian Olivera",
  publisher: "Gustavo Sebastian Olivera",
  category: "technology",
  classification: "Software Development",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BASE_URL,
    siteName: "Programador GS – Gustavo Sebastian Olivera",
    title: "Gustavo Sebastian Olivera | Desarrollador Full Stack",
    description:
      "Arquitecto de software y desarrollador Full Stack. ASP.NET Core · Clean Architecture · Next.js · Docker · SaaS. Disponible para proyectos freelance desde Argentina.",
    images: [
      {
        url: "/avatar.png",
        width: 1080,
        height: 1080,
        alt: "Gustavo Sebastian Olivera – Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Sebastian Olivera | Desarrollador Full Stack",
    description:
      "ASP.NET Core · Clean Architecture · Next.js · Docker · SaaS desde Argentina. Disponible para proyectos freelance.",
    images: ["/avatar.png"],
    creator: "@programadorgs",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "es-AR": BASE_URL,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
