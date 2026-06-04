export const es = {
  siteMeta: {
    title: "José Miguel Morales Piña | Ingeniero de Software",
    description:
      "Portafolio profesional de José Miguel Morales Piña — Ingeniero de Software. Experiencia, proyectos y contacto.",
    brand: "PORTAFOLIO.DEV",
    name: "José Miguel Morales Piña",
    role: "Ingeniero de Software",
    typewriterText: "José Miguel Morales Piña",
    footer: "© 2026 JOSÉ MIGUEL MORALES PIÑA. TODOS LOS DERECHOS RESERVADOS.",
    contactId: "ID: 1048576",
    status: "ACEPTANDO CONSULTAS",
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
      period: "Mayo 2025 — ACTUAL",
      location: "Ciudad de México",
      title: "Ingeniero de Software Senior",
      company: "TECH CORP INC.",
      description:
        "Arquitectura e implementación de infraestructura de microservicios escalable. Lideré un equipo de 4 desarrolladores en la migración de un monolito legacy a arquitectura containerizada, mejorando el tiempo de respuesta en un 40%.",
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
      title: "Nexus Core Engine",
      description:
        "Motor de procesamiento de tareas distribuido en Rust. Gestiona miles de trabajos concurrentes con overhead mínimo.",
      tags: ["Rust", "Redis"],
      href: "#",
    },
    {
      title: "Archive Protocol",
      description:
        "Interfaz de almacenamiento descentralizado que mapea IPFS a endpoints REST estándar para integración sencilla.",
      tags: ["Go", "IPFS"],
      href: "#",
    },
  ],
  skills: [
    "JavaScript / TypeScript",
    "PHP",
    "JAVA",
    "Python",
    "React y Vue.js",
    "Next.js",
    "MySQL",
    "Firestore NoSQL",
    "C / C++",
    "HTML / CSS",
    "Tailwind CSS",
    "Google Cloud",
    "Excel",
    "API REST",
    "SaSS"
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect", year: "2023" },
    { name: "CKA: Certified Kubernetes Administrator", year: "2022" },
    { name: "Google Cloud Professional Developer", year: "2021" },
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
    { label: "GitHub", href: "#", icon: "github" },
    { label: "LinkedIn", href: "#", icon: "link" },
    { label: "OCC", href: "#", icon: "work" },
  ],
  footerLinks: [
    { label: "GITHUB", href: "#" },
    { label: "LINKEDIN", href: "#" },
    { label: "TWITTER", href: "#" },
  ],
};
