/** Subruta fija de GitHub Pages para este repositorio */
const GITHUB_PAGES_BASE = "/portafolio_profesional";

/**
 * Rutas de assets en public/ (iconos SVG, etc.)
 */
export function withBasePath(path) {
  const relative = path.startsWith("/") ? path.slice(1) : path;

  if (process.env.NODE_ENV === "production") {
    return `${GITHUB_PAGES_BASE}/${relative}`;
  }

  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  if (base) return `${base}/${relative}`;
  return relative;
}
