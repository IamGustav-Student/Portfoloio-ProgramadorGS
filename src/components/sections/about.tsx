"use client";

import { motion } from "framer-motion";
import { BookOpen, MapPin, Rocket } from "lucide-react";

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
            Quién soy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-zinc-400 leading-relaxed"
          >
            <p>
              Soy <span className="text-white font-semibold">Gustavo Sebastian Olivera</span>, desarrollador Full Stack y estudiante de IT en el{" "}
              <span className="text-emerald-400">ISFDyT N°124</span> de Colón, Buenos Aires.
            </p>
            <p>
              Me especializo en construir productos digitales completos: desde la arquitectura backend con{" "}
              <span className="text-zinc-200">.NET y Clean Architecture</span> hasta interfaces modernas con{" "}
              <span className="text-zinc-200">Next.js y Tailwind CSS</span>.
            </p>
            <p>
              Me interesa especialmente el cruce entre software e ingeniería real: actualmente trabajo en un software de adquisición de datos para bancos de prueba industriales, que involucra reverse engineering de protocolos seriales sin documentación oficial.
            </p>
            <p>
              También estoy desarrollando <span className="text-emerald-400">Gymvo</span>, una plataforma SaaS multitenant para gimnasios, y <span className="text-blue-400">ZENDEV</span>, una iniciativa de digitalización para PyMEs locales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 text-blue-400 rounded-lg shrink-0">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Formación Académica</h3>
                <p className="text-sm text-zinc-400 mt-1">ISFDyT N°124 · Colón, Buenos Aires</p>
                <p className="text-xs text-zinc-600 mt-0.5">Tecnicatura en IT</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0">
                <Rocket size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Enfoque Actual</h3>
                <p className="text-sm text-zinc-400 mt-1">SaaS con .NET · Digitalización local · Ingeniería inversa</p>
                <p className="text-xs text-zinc-600 mt-0.5">Construyendo productos de impacto real</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500/10 text-orange-400 rounded-lg shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Ubicación</h3>
                <p className="text-sm text-zinc-400 mt-1">Colón, Buenos Aires, Argentina</p>
                <p className="text-xs text-zinc-600 mt-0.5">Disponible para trabajo remoto global</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
