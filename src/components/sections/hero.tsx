"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Disponible para proyectos freelance
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Gustavo
            <br />
            <span className="text-emerald-400">Sebastian</span>
            <br />
            Olivera
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Estudiante de IT & Desarrollador Full Stack.{" "}
            <span className="text-zinc-200">
              Construyendo soluciones escalables
            </span>{" "}
            desde Colón, Buenos Aires.
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            ISFDyT N°124 · .NET / Next.js / Docker · SaaS, Ingeniería y Game Dev
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl transition-colors"
            >
              Ver proyectos
            </a>
            <a
              href="mailto:gsolivera.dev@gmail.com"
              className="px-6 py-3 text-sm font-semibold border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-xl transition-colors"
            >
              Contactarme
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2">
            <a
              href="https://github.com/programadorgs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-zinc-500 hover:text-emerald-400 transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/gustavo-olivera"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-zinc-500 hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:gsolivera.dev@gmail.com"
              className="w-11 h-11 flex items-center justify-center text-zinc-500 hover:text-emerald-400 transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-emerald-400 animate-bounce transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
