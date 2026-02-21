"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/skills";
import { ArrowRight, Clock, FileText } from "lucide-react";

const categoryColors: Record<string, string> = {
  Architecture: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Backend: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Engineering: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Frontend: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
};

const statusLabel = {
  published: "Publicado",
  wip: "En progreso",
  draft: "Borrador",
};

export function BlogSection() {
  return (
    <section id="blog" className="py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-emerald-400 mb-2">// Work in Progress</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lo que estoy aprendiendo
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            Artículos sobre las decisiones técnicas, problemas y soluciones que encuentro mientras construyo. Proceso de pensamiento en público.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-6 transition-colors cursor-default"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border rounded-full ${categoryColors[post.category] ?? "text-zinc-400 bg-zinc-800 border-zinc-700"}`}>
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-zinc-600">
                  <Clock size={11} />
                  {statusLabel[post.status]}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{post.excerpt}</p>

              <div className="mt-4 flex items-center gap-1.5 text-xs text-zinc-600">
                <FileText size={12} />
                Próximamente
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 p-6 bg-zinc-900 border border-dashed border-zinc-700 rounded-2xl text-center"
        >
          <p className="text-sm text-zinc-500">
            El blog está en construcción. Mientras tanto, podés seguir mi proceso en{" "}
            <a
              href="https://www.twitch.tv/programador_gs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Twitch
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
