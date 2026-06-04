export const es = {
  siteMeta: {
    title: "José Miguel Morales Piña | Ingeniero de Software",
    description:
      "Portafolio profesional de José Miguel Morales Piña — Ingeniero de Software. Experiencia, proyectos y contacto.",
    brand: "PORTAFOLIO.DEV",
    name: "José Miguel Morales Piña",
    role: "Desarrollador Full Stack",
    typewriterText: "José Miguel Morales Piña",
    footer: "© 2026 JOSÉ MIGUEL MORALES PIÑA. TODOS LOS DERECHOS RESERVADOS.",
    contactId: "ID: 1048576",
    status: "ACEPTANDO CONSULTAS",
    avatar: "/images/86423656_imagen_profile.jpeg",
    avatarAlt: "José Miguel Morales Piña",
    discordUrl: "https://discord.gg/miguelmorales7521",
  },
  ui: {
    heroSysInit: "// SYS_INIT",
    heroCta: "Iniciar contacto",
    navTitle: "NAVEGACIÓN",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú",
    themeLight: "Activar tema claro",
    themeDark: "Activar tema oscuro",
    langSwitch: "Cambiar idioma",
    contactRole: "ROL",
    contactStatus: "ESTADO",
  },
  sections: {
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    languages: "Idiomas",
    certifications: "Certificaciones",
    education: "Educación",
    contact: "Contacto",
  },
  navigation: [
    { id: "experience", icon: "work" },
    { id: "projects", icon: "code" },
    { id: "skills", icon: "bolt" },
    { id: "languages", icon: "globe" },
    { id: "certifications", icon: "verified" },
    { id: "education", icon: "school" },
    { id: "contact", icon: "mail" },
  ],
  experience: [
    {
      period: "Febrero 2026 — ACTUAL",
      location: "Ciudad de México",
      title: "Desarrollador Full Stack",
      company: "Dark Box",
      description:
        "Desarrollo e implementación de aplicación web para la administración de proyectos audiovisuales (belowdline.com), usando Next.js 15, React 19, TypeScript, Tailwind CSS y shadcn/ui. Añadí funciones con GPT-4o para reuniones y planificación de actividades mensuales. Implementación del servidor en Firebase: Firebase Hosting, diseño y creación de bases de datos NoSQL (Firestore), reglas de seguridad en Firebase Storage, Firebase Authentication (Google) y lógica serverless con Cloud Functions. En el flujo de desarrollo trabajo con Cursor, agentes configurados (Rules/Skills) y MCPs para diferentes softwares. Diseño de interfaces con Figma y Google Stich."
    },
    {
      period: "Mayo 2025 — Febrero 2025",
      location: "Toluca, Estado de México",
      title: "Programador WEB",
      company: "ESTUFAS DOMÉSTICAS S.A.P.I.",
      description:
        "Desarrollo e implementación de una aplicación ecommerce para la venta de estufas domésticas (www.fragaestufas.com.mx), utilizando herramientas como PHP, MYSQL, JavaScript, HTML y CSS. Integración de pasarelas de pago Mercado Pago (Checkout Bricks) mediante consumo de APIs REST, garantizando transacciones seguras y confiables. Implementación de API de lógistica  EnviaYa, permitiendo la cotización automática de envíos con diferentes paqqueterías, optimizando la experiencia de compra y facilitando la gestión de envíos. Configuración de SEO On-Page, análisis de tráfico y optimización del posicionamiento en motores de búsqueda mediante Google Analytics y Google Tag Manager. Implementación de capas de seguridad y optimización del rendimiento, asegurando una experiencia de usuario fluida y segura.",
      description2:
        "Planeación en el desarrollo de un sistema interno tipo CRM, orientado a la optimización de procesos administrativos. Desarrollo de módulos para la gestión de tickets, solicitudes de requisición de personal, solicitudes de vacaciones y registro de entradas y salidas del personal a la empresa. Integración de API de whatsapp Business como canal de notificación automática para mejorar la comunicación interna y la eficiencia operativa."
    },
  ],
  projects: [
    {
      title: "Sistema ERP simulando un flujo de Proveedores y Facturación",
      description:
        "Este proyecto es una prueba técnica de un módulo funcional de un ERP, enfocado en la simulación de un proceso empresarial real. El flujo comienza con la gestión de proveedores, seguido de la creación de estimaciones, requisiciones, órdenes de compra, facturación y tesorería.",
      tags: ["JavaScript", "HTML5", "NoSQL", "Tailwind CSS"],
      href: "https://jmprw18.github.io/ERP_proveedores_facturacion/",
    },
    {
      title: "Ecommerce de FRAGA",
      description:
        "Portal web para la compra de productos, carrito de compras con integración de pasarelas de pago Mercado Pago (Checkout Bricks) y API de lógistica EnviaYa.",
      tags: ["PHP", "MYSQL", "JavaScript", "HTML5", "CSS3", "Mercado Pago", "API REST"],
      href: "https://www.fragaestufas.com.mx/",
    },
  ],
  skills: [
    "JavaScript / TypeScript",
    "PHP",
    "JAVA",
    "Python",
    "React y Vue.js",
    "Next.js",
    "Node.js",
    "MySQL",
    "Firestore NoSQL",
    "C / C++",
    "Figma",
    "HTML / CSS",
    "Tailwind CSS",
    "Google Cloud",
    "Google Firebase",
    "API REST",
    "Excel",
  ],
  certifications: [
    { name: "Desarrollo Web Completo", institution: "Udemy", year: "oct 2024", href: "https://www.udemy.com/certificate/UC-b0745df7-9851-4a29-bd0d-a3bca5bc8252/"},
    { name: "Programnación en C de Cero a Experto con estructura de datos", institution: "Udemy", year: "oct 2024", href: "https://www.udemy.com/certificate/UC-6d48ab83-af43-4609-a138-00226bca7a6f/"},
    { name: "Introducción al Desarrollo WEB", institution: "Instituto Politécnico Nacional", year: "may 2023", href: "#"},
  ],
  education: {
    degree: "Escuela Superior de Cómputo - ESCOM",
    school: "Instituto Politécnico Nacional",
    period: "2020 - 2025",
    tesis: "Desarrollo de un sistema de análisis financiero con datos en tiempo real, para medir el desempeño de empresas que cotizan en NASDAQ",
  },
  languages: [
    { id: "es", name: "Español", level: "Nativo" },
    { id: "en", name: "Inglés", level: "B2" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/jmprw18", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/josé-miguel-morales-piña-68b74123a?utm_source=share_via&utm_content=profile&utm_medium=member_ios", icon: "link" },
    { label: "Google Skills", href: "https://www.skills.google/public_profiles/11f84ffd-01b2-4190-9144-36f415795dd6", icon: "work" },
    { label: "Discord", href: "https://discord.gg/miguelmorales7521", icon: "discord" },
  ],
  footerLinks: [
    { label: "GITHUB", href: "https://github.com/jmprw18" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/josé-miguel-morales-piña-68b74123a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
    { label: "Google Skills", href: "https://www.skills.google/public_profiles/11f84ffd-01b2-4190-9144-36f415795dd6" },
    { label: "DISCORD", href: "https://discord.gg/miguelmorales7521" },
  ],
};
