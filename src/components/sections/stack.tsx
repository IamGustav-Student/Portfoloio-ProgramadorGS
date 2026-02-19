"use client";

import { motion } from "framer-motion";
import { Server, Monitor, Layers, Gamepad2 } from "lucide-react";
import { skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  server: <Server size={20} />,
  monitor: <Monitor size={20} />,
  layers: <Layers size={20} />,
  gamepad2: <Gamepad2 size={20} />,
};

const levelConfig = {
  expert: { label: "Expert", width: "w-full", color: "bg-emerald-400" },
  advanced: { label: "Advanced", width: "w-4/5", color: "bg-emerald-500" },
  learning: { label: "Learning", width: "w-2/5", color: "bg-zinc-500" },
};

function SkillCategoryCard({ cat, index }: { cat: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 flex items-center justify-center bg-emerald-500/10 text-emerald-400 rounded-lg">
          {iconMap[cat.icon]}
        </div>
        <h3 className="text-base font-bold text-white">{cat.category}</h3>
      </div>

      <ul className="space-y-3">
        {cat.skills.map((skill) => {
          const lvl = levelConfig[skill.level];
          return (
            <li key={skill.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-zinc-300">{skill.name}</span>
                <span className="text-xs text-zinc-600">{lvl.label}</span>
              </div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className={`h-full ${lvl.width} ${lvl.color} rounded-full`} />
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export function StackSection() {
  return (
    <section id="stack" className="py-24 scroll-mt-16 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-emerald-400 mb-2">// Stack Técnico</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Herramientas y tecnologías
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            Mi stack principal cubre desde APIs en .NET hasta frontends en Next.js, con infraestructura en Docker y PostgreSQL.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCategoryCard key={cat.category} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
