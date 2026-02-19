export interface Skill {
  name: string;
  level: "expert" | "advanced" | "learning";
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "ASP.NET Core (C#)", level: "advanced" },
      { name: "Clean Architecture", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "Python", level: "advanced" },
      { name: "REST APIs / JWT", level: "advanced" },
    ],
  },
  {
    category: "Frontend & Mobile",
    icon: "monitor",
    skills: [
      { name: "Next.js", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "React Native", level: "learning" },
    ],
  },
  {
    category: "Infraestructura",
    icon: "layers",
    skills: [
      { name: "Docker", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "Vercel / CI-CD", level: "advanced" },
      { name: "SQLite", level: "advanced" },
    ],
  },
  {
    category: "Game Dev",
    icon: "gamepad2",
    skills: [
      { name: "Godot Engine", level: "learning" },
      { name: "C# (Game)", level: "learning" },
      { name: "GDScript", level: "learning" },
    ],
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  status: "published" | "draft" | "wip";
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "multitenancy-gymvo",
    title: "Cómo implementé multitenancy en Gymvo",
    excerpt: "El desafío de aislar datos de múltiples clientes en una sola base PostgreSQL usando schemas por tenant y Entity Framework Core.",
    category: "Architecture",
    status: "wip",
    date: "2025",
  },
  {
    id: "clean-arch-dotnet",
    title: "Clean Architecture en .NET: mi enfoque práctico",
    excerpt: "Cómo organizo los proyectos .NET separando Domain, Application e Infrastructure sin caer en over-engineering.",
    category: "Backend",
    status: "wip",
    date: "2025",
  },
  {
    id: "reverse-engineering-serial",
    title: "Reverse engineering de protocolos seriales industriales",
    excerpt: "Herramientas y metodología para capturar e interpretar tráfico serial de equipos sin documentación técnica pública.",
    category: "Engineering",
    status: "draft",
    date: "2025",
  },
  {
    id: "pwa-service-workers",
    title: "PWAs con Service Workers: más allá del cache básico",
    excerpt: "Sincronización en background, notificaciones push y estrategias de cache para aplicaciones web que funcionan offline.",
    category: "Frontend",
    status: "wip",
    date: "2025",
  },
];
