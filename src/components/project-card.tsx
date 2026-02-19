"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, Box, Wrench, Gamepad2, Smartphone } from "lucide-react";
import type { Project, ProjectCategory, ProjectStatus } from "@/data/projects";

const categoryMeta: Record<ProjectCategory, { label: string; icon: React.ReactNode; color: string }> = {
  saas: { label: "SaaS", icon: <Zap size={13} />, color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  local: { label: "PyMEs Locales", icon: <Box size={13} />, color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
  engineering: { label: "Ingeniería", icon: <Wrench size={13} />, color: "text-orange-400 bg-orange-400/10 border-orange-400/20" },
  gamedev: { label: "Game Dev", icon: <Gamepad2 size={13} />, color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
  pwa: { label: "PWA", icon: <Smartphone size={13} />, color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
};

const statusMeta: Record<ProjectStatus, { label: string; dot: string }> = {
  production: { label: "En producción", dot: "bg-emerald-400" },
  wip: { label: "En desarrollo", dot: "bg-yellow-400" },
  prototype: { label: "Prototipo", dot: "bg-zinc-500" },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cat = categoryMeta[project.category];
  const status = statusMeta[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl overflow-hidden transition-colors"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.06),transparent_60%)]" />

      <div className="relative p-6 flex flex-col flex-1 gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium border rounded-full ${cat.color}`}>
                {cat.icon}
                {cat.label}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                {status.label}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{project.tagline}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Problema</p>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
            <p className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-1">Solución</p>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Highlights</p>
          <ul className="space-y-1">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.link || project.repo) && (
          <div className="flex gap-1 pt-2 border-t border-zinc-800">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <ExternalLink size={14} /> Demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Github size={14} /> Repositorio
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
