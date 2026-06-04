/**
 * Design tokens — Stitch project 5950687497862370115
 * Importar desde componentes cuando haga falta lógica JS (charts, etc.)
 */

export const colors = {
  light: {
    surface: "#fef8f6",
    surfaceElevated: "#f2edea",
    surfaceVariant: "#e7e1df",
    canvasParchment: "#e8e7e3",
    primary: "#000000",
    inkJot: "#050200",
    secondary: "#5e5e5d",
    onSurfaceVariant: "#4c463e",
    outline: "#7e766d",
    outlineVariant: "#cfc5bb",
    outlineHover: "#747472",
    surfaceTint: "#685c4f",
    contactBg: "#000000",
    error: "#ba1a1a",
  },
  dark: {
    surface: "#141312",
    surfaceElevated: "#1d1b1a",
    surfaceVariant: "#363433",
    primary: "#e7e1df",
    secondary: "#c7c6c3",
    onSurfaceVariant: "#cfc5bb",
    outline: "#4c463e",
    outlineVariant: "#4c463e",
    outlineHover: "#988f86",
    surfaceTint: "#d4c4b3",
    contactBg: "#0f0e0d",
    error: "#ba1a1a",
  },
};

export const spacing = {
  unit: 4,
  gutter: 16,
  gutterMd: 24,
  marginMobile: 16,
  marginDesktop: 32,
  sectionGap: 80,
  containerMax: 1200,
};

export const motion = {
  revealDuration: 0.6,
  cardRevealDuration: 0.8,
  revealEase: [0.16, 1, 0.3, 1],
  drawerDuration: 0.3,
  typeSpeed: 150,
  deleteSpeed: 50,
  scrollThreshold: 0.15,
  scrollRootMargin: "0px 0px -50px 0px",
};

export const typography = {
  headlineXl: { size: "3rem", sizeMobile: "2rem", weight: 700 },
  headlineLg: { size: "2rem", sizeMobile: "1.5rem", weight: 700 },
  headlineMd: { size: "1.25rem", weight: 700 },
  bodyLg: { size: "1rem", lineHeight: 1.5 },
  bodySm: { size: "0.875rem", lineHeight: 1.43 },
  labelCaps: { size: "0.75rem", letterSpacing: "0.1em", weight: 700 },
};
