import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Sebastian Olivera | Programador GS",
  description:
    "Estudiante de IT & Desarrollador Full Stack. Construyendo soluciones escalables con .NET, Next.js y Docker desde Colón, Buenos Aires.",
  keywords: [
    "desarrollador full stack",
    "programador",
    "ASP.NET",
    "Next.js",
    "C#",
    "SaaS",
    "Clean Architecture",
    "Argentina",
  ],
  authors: [{ name: "Gustavo Sebastian Olivera" }],
  openGraph: {
    title: "Gustavo Sebastian Olivera | Programador GS",
    description: "Desarrollador Full Stack. .NET · Next.js · Docker · Colón, Bs. As.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
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
