export type ProjectStatus = "production" | "wip" | "prototype";
export type ProjectCategory = "saas" | "local" | "engineering" | "gamedev" | "pwa";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  features: string[];
  highlights: string[];
  link?: string;
  repo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "gymvo",
    title: "Gymvo",
    tagline: "SaaS multitenant para gestión de gimnasios",
    problem: "Los gimnasios pierden control total de sus socios: pagos vencidos, asistencia desorganizada y cero visibilidad del negocio.",
    solution: "Gymvo es una plataforma SaaS con arquitectura multitenant que permite a múltiples gimnasios operar de forma aislada sobre una única infraestructura, con Clean Architecture en .NET.",
    category: "saas",
    status: "wip",
    stack: ["ASP.NET Core", "C#", "Clean Architecture", "PostgreSQL", "Docker", "Next.js", "Tailwind CSS"],
    features: [
      "Multitenancy por schema de base de datos",
      "Gestión de socios y membresías",
      "Control de pagos y vencimientos",
      "Dashboard analítico por gimnasio",
      "API REST con JWT Auth",
    ],
    highlights: [
      "Arquitectura limpia con separación Domain / Application / Infrastructure",
      "Cada tenant opera en un schema PostgreSQL aislado",
      "Diseño orientado a escalar como producto comercial",
    ],
  },
  {
    id: "zendev",
    title: "ZENDEV",
    tagline: "Agencia de digitalización para PyMEs locales",
    problem: "Negocios locales de Colón, Bs. As. operan sin presencia digital ni herramientas modernas, perdiendo clientes ante competidores más visibles.",
    solution: "ZENDEV ofrece desarrollo web, e-commerce y automatizaciones a medida para PyMEs de la región, reduciendo la brecha digital con soluciones accesibles.",
    category: "local",
    status: "production",
    stack: ["Next.js", "Node.js", "Tailwind CSS", "PostgreSQL", "Vercel"],
    features: [
      "Sitios web y landing pages profesionales",
      "Tiendas online para comercios locales",
      "Automatización de procesos manuales",
      "Integración con WhatsApp Business",
    ],
    highlights: [
      "Impacto directo en la economía local de Colón",
      "Soluciones entregadas en ciclos cortos",
      "Foco en ROI medible para el cliente",
    ],
  },
  {
    id: "banco-pruebas",
    title: "Software Banco de Pruebas",
    tagline: "Adquisición de datos y reverse engineering para equipos industriales",
    problem: "Los bancos de prueba industriales generan datos en formatos propietarios sin API pública, imposibilitando el análisis moderno.",
    solution: "Desarrollo de software de adquisición de datos con reverse engineering del protocolo serial, parseando telemetría en tiempo real hacia un dashboard de análisis.",
    category: "engineering",
    status: "wip",
    stack: ["Python", "C#", "Serial Protocol", "WPF", "SQLite"],
    features: [
      "Reverse engineering de protocolo propietario",
      "Adquisición de datos en tiempo real vía serial",
      "Visualización de curvas de torque / potencia",
      "Exportación a CSV y formatos de análisis",
    ],
    highlights: [
      "Intersección entre software e ingeniería mecánica",
      "Sin documentación oficial: todo inferido de tráfico capturado",
      "Permite modernizar equipos legacy sin reemplazarlos",
    ],
  },
  {
    id: "chatbot-pwa",
    title: "Chatbot PWA",
    tagline: "Asistente conversacional instalable como app nativa",
    problem: "Los chatbots web tradicionales no funcionan offline ni se integran naturalmente en el flujo de trabajo del usuario.",
    solution: "PWA con Service Worker que permite usar el chatbot sin conexión, con notificaciones push y experiencia de app nativa en cualquier dispositivo.",
    category: "pwa",
    status: "prototype",
    stack: ["Next.js", "React", "Tailwind CSS", "Service Workers", "Web Push API", "Node.js"],
    features: [
      "Instalable en Android, iOS y Desktop",
      "Modo offline con caché de conversaciones",
      "Notificaciones push",
      "Sincronización en background",
    ],
    highlights: [
      "Score Lighthouse 95+ en todas las categorías",
      "Primer experimento con PWA avanzadas",
      "Base para futuros productos de asistencia virtual",
    ],
  },
  {
    id: "godot-prototypes",
    title: "Prototipos en Godot",
    tagline: "Experimentación en game dev con Godot + C#",
    problem: "Explorar mecánicas de juego requiere iterar rápido sin infraestructura compleja.",
    solution: "Prototipos funcionales en Godot Engine usando C# para la lógica de gameplay, enfocados en aprender los fundamentos del desarrollo de videojuegos indie.",
    category: "gamedev",
    status: "prototype",
    stack: ["Godot Engine", "C#", "GDScript"],
    features: [
      "Prototipo de plataformer 2D",
      "Sistema de física personalizado",
      "State machines para IA de enemigos",
    ],
    highlights: [
      "Reutilización de conocimientos de C# del ecosistema .NET",
      "Foco en arquitectura de sistemas de juego",
      "Base para proyectos indie a futuro",
    ],
  },
];
