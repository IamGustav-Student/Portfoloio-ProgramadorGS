"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const WHATSAPP_MSG = encodeURIComponent(
  "Hola Gustavo, vi tu portfolio 'Programador GS' y me interesa tu perfil para un proyecto/entrevista. ¿Tenés disponibilidad para hablar?"
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.571a.5.5 0 0 0 .614.614l5.726-1.471A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.513-5.236-1.41l-.374-.217-3.878.997.997-3.878-.217-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/gustavo-olivera",
    icon: <Linkedin className="w-5 h-5" />,
    color: "border-blue-500/30 hover:border-blue-400 text-blue-400 hover:bg-blue-400/5",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/5492473468486?text=${WHATSAPP_MSG}`,
    icon: <WhatsAppIcon />,
    color: "border-emerald-500/30 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-400/5",
  },
  {
    label: "iamgustav.olivera@gmail.com",
    href: `mailto:iamgustav.olivera@gmail.com?subject=Contacto desde Portfolio ProgramadorGS&body=${encodeURIComponent("Hola Gustavo, vi tu portfolio 'Programador GS' y me interesa tu perfil para un proyecto/entrevista. ¿Tenés disponibilidad para hablar?")}`,
    icon: <Mail className="w-5 h-5" />,
    color: "border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:bg-zinc-800/60",
  },
];

export function CTASection() {
  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(16,185,129,0.08),transparent)]" />

          <p className="text-sm font-medium text-emerald-400 mb-4">// Contacto</p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            ¿Buscás a alguien que entienda el{" "}
            <span className="text-emerald-400">"por qué"</span> detrás del código?
          </h2>

          <p className="mt-5 text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Como estudiante del <span className="text-zinc-200">ISFDyT N°124</span> y desarrollador activo en
            proyectos como <span className="text-emerald-400">Gymvo</span>, aporto una mezcla única de rigor
            académico y ejecución emprendedora. Si tu equipo necesita proactividad,{" "}
            <span className="text-zinc-200">Clean Architecture</span> y compromiso, hablemos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-medium transition-all ${link.color}`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-zinc-600 text-sm italic"
          >
            "El próximo gran despliegue empieza con un <span className="text-zinc-500">'Hola'</span>."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
