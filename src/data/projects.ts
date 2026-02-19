export type ProjectStatus = "production" | "wip" | "prototype";
export type ProjectCategory = "saas" | "local" | "engineering" | "gamedev" | "pwa";

export interface Project {
  id: string;
  title: string;
  role: string;
  tagline: string;
  problem: string;
  solution: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  architecturePoints: string[];
  highlights: string[];
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "gymvo",
    title: "Gymvo",
    role: "Arquitecto de Software y Desarrollador Full Stack",
    tagline: "SaaS de gestión fitness multitenant",
    problem:
      "Diseñar una arquitectura que permitiera a cientos de gimnasios operar de forma independiente sobre la misma infraestructura, garantizando la seguridad de los datos y la escalabilidad del sistema.",
    solution:
      "Plataforma robusta diseñada para centralizar la administración de gimnasios —desde el control de membresías hasta el seguimiento de rutinas— bajo un modelo de suscripción escalable.",
    category: "saas",
    status: "wip",
    stack: ["ASP.NET Core", "C#", "Clean Architecture", "PostgreSQL", "Entity Framework Core", "Docker", "Next.js", "Tailwind CSS"],
    architecturePoints: [
      "Multitenancy: aislamiento de datos por tenant para privacidad y seguridad garantizada",
      "Clean Architecture: separación estricta Domain / Application / Infrastructure / WebAPI",
      "PostgreSQL + EF Core: consultas optimizadas para asistencia y pagos",
      "Docker: entornos de desarrollo y producción idénticos mediante contenedores",
    ],
    highlights: [
      "Arquitectura pensada para escalar a cientos de gimnasios sobre una sola infraestructura",
      "Separación de responsabilidades que facilita testing unitario y mantenimiento",
      "Modelo de suscripción SaaS listo para monetización",
    ],
  },
  {
    id: "zendev",
    title: "ZENDEV",
    role: "Co-Fundador y Lead Developer",
    tagline: "Digitalización de comercio local en Colón, Bs. As.",
    problem:
      "Muchos comercios locales carecen de herramientas digitales accesibles. El objetivo era crear una plataforma fácil de usar para el comerciante pero técnicamente potente en el backend.",
    solution:
      "Iniciativa tecnológica nacida en Colón, Bs. As., orientada a reducir la brecha digital de los negocios locales mediante la creación de una presencia web sólida y funcional.",
    category: "local",
    status: "production",
    stack: ["Node.js", "Next.js", "Tailwind CSS", "PostgreSQL", "Vercel"],
    architecturePoints: [
      "Backend eficiente con Node.js para comunicación fluida entre servidor y clientes",
      "Frontend moderno con interfaces reactivas para gestión de inventario en tiempo real",
      "Bases de datos relacionales para integridad de catálogos de productos por cliente",
      "Estrategia de despliegue centrada en usabilidad para comerciantes sin experiencia técnica",
    ],
    highlights: [
      "Impacto directo en la economía local de Colón, Buenos Aires",
      "Negocios sin experiencia técnica pueden autogestionarse desde el primer día",
      "Ciclos de entrega cortos con foco en ROI medible para el cliente",
    ],
  },
  {
    id: "banco-pruebas",
    title: "Banco de Pruebas de Amortiguadores",
    role: "Desarrollador de Software Industrial",
    tagline: "Ingeniería de software aplicada a hardware industrial",
    problem:
      "Los bancos de prueba industriales generan datos en formatos propietarios sin API pública ni documentación oficial, imposibilitando el análisis y visualización modernos.",
    solution:
      "Software de adquisición de datos con reverse engineering del protocolo serial, procesamiento de señales y visualización en tiempo real para testeo industrial de amortiguadores.",
    category: "engineering",
    status: "wip",
    stack: ["Python", "C#", "WPF", "Serial Protocol", "SQLite"],
    architecturePoints: [
      "Reverse engineering del protocolo propietario a partir de tráfico serial capturado",
      "Lógica de procesamiento de señales para datos de fuerza, desplazamiento y velocidad",
      "Visualización de curvas en tiempo real: torque, amortiguación y ciclos de compresión",
      "Sin documentación oficial: toda la lógica inferida del análisis de tráfico",
    ],
    highlights: [
      "Intersección única entre software e ingeniería mecánica industrial",
      "Permite modernizar equipos legacy sin reemplazarlos",
      "Exportación de resultados para análisis posterior en laboratorio",
    ],
  },
  {
    id: "chatbot-pwa",
    title: "Chatbot PWA – Guía Comercial",
    role: "Desarrollador Full Stack",
    tagline: "Asistente conversacional offline para comercios locales",
    problem:
      "Los comerciantes locales necesitan una forma de ser descubiertos digitalmente sin depender de conexión constante por parte del usuario.",
    solution:
      "Aplicación web progresiva que funciona offline, con un motor de búsqueda lógica para recomendar negocios locales mediante una interfaz de chat intuitiva e instalable como app nativa.",
    category: "pwa",
    status: "prototype",
    stack: ["Next.js", "React", "Tailwind CSS", "Service Workers", "Web Push API", "Node.js"],
    architecturePoints: [
      "Service Worker con estrategia de cache para funcionamiento 100% offline",
      "Motor de búsqueda lógica para recomendación contextual de negocios",
      "Interfaz de chat diseñada para máxima accesibilidad y UX intuitiva",
      "Instalable en Android, iOS y Desktop como PWA nativa",
    ],
    highlights: [
      "Funciona sin conexión: experiencia completa con datos en cache",
      "Score Lighthouse 95+ en performance, accesibilidad y PWA",
      "Base para futuros productos de asistencia comercial local",
    ],
  },
  {
    id: "godot-prototypes",
    title: "Game Dev – Godot + C#",
    role: "Desarrollador Independiente",
    tagline: "Mecánicas de juego, físicas y máquinas de estado en Godot Engine",
    problem:
      "Explorar el desarrollo de videojuegos requiere iterar rápido sobre mecánicas y sistemas sin infraestructura compleja.",
    solution:
      "Prototipos funcionales en Godot Engine aprovechando C# para lógica de gameplay de alto rendimiento, con foco en arquitectura de sistemas de juego robustos.",
    category: "gamedev",
    status: "prototype",
    stack: ["Godot Engine", "C#", "GDScript"],
    architecturePoints: [
      "Mecánicas de movimiento con física personalizada y control de personaje",
      "Sistemas de combate con detección de colisiones y hitboxes dinámicas",
      "Máquinas de estado (State Machine) para IA de enemigos y comportamientos complejos",
      "Reutilización del ecosistema .NET y C# en contexto de game dev",
    ],
    highlights: [
      "Transferencia directa de conocimientos de C# del ecosistema .NET",
      "Foco en arquitectura de sistemas antes que en assets visuales",
      "Base técnica para proyectos indie a futuro",
    ],
  },
];
