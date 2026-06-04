/**
 * Rutas de assets para GitHub Pages (subcarpeta /nombre-repo).
 * - Con NEXT_PUBLIC_BASE_PATH: ruta absoluta prefijada.
 * - Sin prefijo: ruta relativa (icons/...) para que resuelva bien en /portafolio_profesional/
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function withBasePath(path) {
  const relative = path.startsWith("/") ? path.slice(1) : path;
  if (basePath) return `${basePath}/${relative}`;
  return relative;
}
