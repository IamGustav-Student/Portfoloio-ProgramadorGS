"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#projects", label: "Proyectos" },
  { href: "/#stack", label: "Stack" },
  { href: "/#blog", label: "Blog" },
  { href: "/#about", label: "Sobre mí" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition-colors"
        >
          <span className="text-emerald-400">&lt;</span>
          ProgramadorGS
          <span className="text-emerald-400">/&gt;</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800/60 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <a
            href="mailto:gsolivera.dev@gmail.com"
            className="ml-3 px-4 py-1.5 text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-lg transition-colors"
          >
            Contacto
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:gsolivera.dev@gmail.com"
            className="mt-2 block text-center px-4 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-lg transition-colors"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
