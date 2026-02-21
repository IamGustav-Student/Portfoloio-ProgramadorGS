"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Box, Wrench, Gamepad2, Smartphone, User, ChevronDown, ExternalLink, Github, X } from "lucide-react";
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
  const [expanded, setExpanded] = useState(false);
  const cat = categoryMeta[project.category];
  const status = statusMeta[project.status];

  return (
    <>
      {/* Backdrop portal — z-40, detrás de la card expandida */}
      {expanded && typeof document !== "undefined" &&
        createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950/70 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
          />,
          document.body
        )}

      {/* Card — sube a z-50 cuando está expandida */}
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`group relative flex flex-col bg-zinc-900 border rounded-2xl overflow-hidden transition-all duration-200 ${
          expanded
            ? "border-zinc-600 z-50 shadow-2xl shadow-black/60"
            : "border-zinc-800 hover:border-zinc-600 z-0"
        }`}
        style={{ position: "relative" }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.06),transparent_60%)]" />

        <div className="relative p-6 flex flex-col flex-1 gap-4">
          {/* Header siempre visible */}
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
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-600">
              <User size={11} />
              {project.role}
            </p>
          </div>

          {/* Stack siempre visible */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md">
                {tech}
              </span>
            ))}
          </div>

          {/* Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-zinc-400 hover:text-zinc-200 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-lg transition-colors"
            aria-expanded={expanded}
          >
            <span>{expanded ? "Ocultar detalles" : "Ver caso de estudio"}</span>
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} />
            </motion.span>
          </button>

          {/* Detalles expandibles — se abren hacia abajo sobre el grid */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-1">
                  <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">El Desafío</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                    <p className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-1">La Solución</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Stack & Arquitectura</p>
                    <ul className="space-y-1.5">
                      {project.architecturePoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Highlights</p>
                    <ul className="space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(project.link || project.repo) && (
                    <div className="flex gap-1 pt-2 border-t border-zinc-800">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                          <ExternalLink size={14} /> Demo
                        </a>
                      )}
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                          <Github size={14} /> Repositorio
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.article>
    </>
  );
}
