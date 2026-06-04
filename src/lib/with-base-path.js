/**
 * Prefijo para assets estáticos en subruta (p. ej. GitHub Pages /portafolio_profesional).
 * Debe coincidir con basePath en next.config.mjs
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function withBasePath(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
