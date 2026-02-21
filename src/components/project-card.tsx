"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Box, Wrench, Gamepad2, Smartphone, User, ChevronRight } from "lucide-react";
import type { Project, ProjectCategory, ProjectStatus } from "@/data/projects";
import { ProjectModal } from "./project-modal";

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
  const [open, setOpen] = useState(false);
  const cat = categoryMeta[project.category];
  const status = statusMeta[project.status];

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex flex-col bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl overflow-hidden transition-colors"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.06),transparent_60%)]" />

        <div className="relative p-6 flex flex-col flex-1 gap-4">
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

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md">
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-auto flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-zinc-400 hover:text-zinc-200 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-lg transition-colors"
          >
            <span>Ver caso de estudio</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </motion.article>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}
