import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-white">
              <span className="text-emerald-400">&lt;</span>
              ProgramadorGS
              <span className="text-emerald-400">/&gt;</span>
            </p>
            <p className="mt-1 text-sm text-zinc-500 flex items-center gap-1.5">
              <MapPin size={13} />
              Colón, Buenos Aires, Argentina
            </p>
          </div>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/programadorgs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/gustavo-olivera"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:gsolivera.dev@gmail.com"
              className="w-11 h-11 flex items-center justify-center text-zinc-500 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800/50 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Gustavo Sebastian Olivera · Construido con Next.js y Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
