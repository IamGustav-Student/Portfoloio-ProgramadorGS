"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, User } from "lucide-react";
import type { Project, ProjectCategory, ProjectStatus } from "@/data/projects";

const categoryMeta: Record<ProjectCategory, { label: string; color: string }> = {
  saas: { label: "SaaS", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  local: { label: "PyMEs Locales", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
  engineering: { label: "Ingeniería", color: "text-orange-400 bg-orange-400/10 border-orange-400/20" },
  gamedev: { label: "Game Dev", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
  pwa: { label: "PWA", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
};

const statusMeta: Record<ProjectStatus, { label: string; dot: string }> = {
  production: { label: "En producción", dot: "bg-emerald-400" },
  wip: { label: "En desarrollo", dot: "bg-yellow-400" },
  prototype: { label: "Prototipo", dot: "bg-zinc-500" },
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const cat = categoryMeta[project.category];
  const status = statusMeta[project.status];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md" />

        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4 bg-zinc-900 border-b border-zinc-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border rounded-full ${cat.color}`}>
                  {cat.label}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                  {status.label}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
              <p className="text-sm text-zinc-400 mt-1">{project.tagline}</p>
              <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-zinc-600">
                <User size={11} />
                {project.role}
              </p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 space-y-5">
            <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">El Desafío</p>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
              <p className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-2">La Solución</p>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Stack & Arquitectura</p>
              <ul className="space-y-2">
                {project.architecturePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Highlights</p>
              <ul className="space-y-1.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-2 py-0.5 text-xs text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            {(project.link || project.repo) && (
              <div className="flex gap-2 pt-2 border-t border-zinc-800">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-lg transition-colors">
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg transition-colors">
                    <Github size={14} /> Repositorio
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
