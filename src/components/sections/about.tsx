"use client";

import { motion } from "framer-motion";
import { BookOpen, MapPin, Rocket, Quote } from "lucide-react";

const strengths = [
  {
    title: "Mentalidad de Producto",
    body: "No solo desarrollo funcionalidades; entiendo el ecosistema SaaS y las estructuras Multitenant. Sé que el código debe ser mantenible y rentable.",
  },
  {
    title: "Stack Robusto",
    body: "Domino el ecosistema moderno de Next.js y Tailwind CSS en el front, con una base sólida en PostgreSQL y Docker para infraestructuras estables.",
  },
  {
    title: "Versatilidad Técnica",
    body: "Desde optimizar el software de un banco de pruebas de amortiguadores hasta implementar mecánicas de físicas en Godot (C#). Si hay un desafío lógico, encuentro la solución.",
  },
  {
    title: "Formación Continua",
    body: "Mi paso por el Instituto Superior me brinda la base teórica para aplicar patrones de diseño correctos, mientras que mis emprendimientos me dieron la \"calle\" técnica que solo se obtiene lanzando productos a producción.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-16 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-emerald-400 mb-2">// Sobre mí</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            De la Academia a la Arquitectura
          </h2>
          <p className="mt-2 text-zinc-500 text-sm">Construyendo el software del mañana</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <p className="text-zinc-400 leading-relaxed">
              Soy <span className="text-white font-semibold">Gustavo Sebastian Olivera</span>, estudiante de
              Computación/IT en el{" "}
              <span className="text-emerald-400 font-medium">ISFDyT N°124</span> (Colón, Bs. As.) y
              desarrollador Full Stack con una obsesión: la{" "}
              <span className="text-zinc-200">arquitectura limpia y la escalabilidad</span>. Mi enfoque no es solo
              "picar código", sino diseñar sistemas que resuelvan problemas de negocio reales.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Como Co-fundador de <span className="text-blue-400 font-medium">ZENDEV</span> y arquitecto detrás
              de <span className="text-emerald-400 font-medium">Gymvo</span>, he transformado conceptos complejos
              en plataformas funcionales. Mi día a día transcurre entre el tipado fuerte de{" "}
              <span className="text-zinc-200">ASP.NET (C#)</span>, la agilidad de{" "}
              <span className="text-zinc-200">Node.js</span> y la eficiencia de{" "}
              <span className="text-zinc-200">Python</span>, siempre bajo el estándar de Clean Architecture.
            </p>

            <blockquote className="relative mt-6 p-5 bg-zinc-900 border border-zinc-700 rounded-xl">
              <Quote size={18} className="text-emerald-400/40 mb-2" />
              <p className="text-zinc-300 text-sm leading-relaxed italic">
                "El código prolijo no es un lujo, es una inversión. Mi objetivo es que cada línea que escribo
                sea una base sólida para el crecimiento del proyecto."
              </p>
            </blockquote>

            <p className="text-zinc-500 text-sm leading-relaxed pt-2">
              Actualmente busco sumarme a equipos que valoren la calidad técnica, la proactividad y la visión de
              crecimiento. Si buscás a alguien que no solo ejecute, sino que proponga y entienda el{" "}
              <span className="text-zinc-400">"por qué"</span> de cada decisión tecnológica,{" "}
              <a
                href="mailto:gsolivera.dev@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2"
              >
                hablemos
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">¿Qué aporto a tu equipo?</p>

            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-colors"
              >
                <h3 className="text-sm font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                <BookOpen size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">ISFDyT N°124</p>
                  <p className="text-xs text-zinc-500">Tecnicatura en IT</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                <MapPin size={16} className="text-orange-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">Colón, Bs. As.</p>
                  <p className="text-xs text-zinc-500">Remoto disponible</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
