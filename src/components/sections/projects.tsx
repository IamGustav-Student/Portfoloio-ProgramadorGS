"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import type { ProjectCategory } from "@/data/projects";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "Todos", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "PyMEs Locales", value: "local" },
  { label: "Ingeniería", value: "engineering" },
  { label: "PWA", value: "pwa" },
  { label: "Game Dev", value: "gamedev" },
];

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-emerald-400 mb-2">// Proyectos</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lo que estoy construyendo
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            Cada proyecto nació de un problema real. Acá está el contexto, la arquitectura y las decisiones técnicas detrás de cada uno.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                active === f.value
                  ? "bg-emerald-500 border-emerald-500 text-zinc-950"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
