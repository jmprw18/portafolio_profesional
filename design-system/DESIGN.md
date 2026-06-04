# Design Kit — Portafolio Javi A. Torres

**Origen:** Google Stitch · Proyecto `5950687497862370115` · Pantalla *Portafolio Dinámico Pro - Javi A. Torres*

**Dirección visual:** Retro Macintosh moderno — minimalista, wireframe, rejilla de plano técnico, bordes rectos.

---

## Paleta (tokens semánticos)

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `surface` | `#fef8f6` | `#141312` | Fondo principal |
| `surface-elevated` | `#f2edea` | `#1d1b1a` | Drawer, paneles |
| `surface-variant` | `#e7e1df` | `#363433` | Hover filas/cards |
| `canvas-parchment` | `#e8e7e3` | — | Referencia fondo papel |
| `ink` / `primary` | `#000000` | `#e7e1df` | Texto y bordes fuertes |
| `ink-jot` | `#050200` | — | Acento máximo contraste |
| `secondary` | `#5e5e5d` | `#c7c6c3` | Subtítulos, fechas |
| `on-surface-variant` | `#4c463e` | `#cfc5bb` | Párrafos secundarios |
| `outline` | `#7e766d` | `#4c463e` | Bordes secciones |
| `outline-variant` | `#cfc5bb` | `#4c463e` | Bordes suaves |
| `outline-hover` | `#747472` | `#988f86` | Hover bordes |
| `surface-tint` | `#685c4f` | `#d4c4b3` | Hover títulos |
| `inverse-surface` | `#32302f` | — | Contraste inverso |
| `contact-bg` | `#000000` | `#0f0e0d` | Tarjeta contacto |
| `error` | `#ba1a1a` | `#ba1a1a` | Errores inputs |

---

## Tipografía

| Rol | Familia | Tamaño | Peso | Line-height |
|-----|---------|--------|------|-------------|
| `headline-xl` | Space Mono | 48px → 32px móvil | 700 | 1 |
| `headline-lg` | Space Mono | 32px → 24px móvil | 700 | 1.25 |
| `headline-md` | Space Mono | 20px | 700 | 1.4 |
| `body-lg` | Public Sans | 16px | 400 | 1.5 |
| `body-sm` | JetBrains Mono | 14px | 400 | 1.43 |
| `label-caps` | Courier Prime | 12px | 700 | 1.33, tracking 0.1em |

---

## Espaciado

| Token | Valor |
|-------|-------|
| `unit` | 4px |
| `gutter` | 16px (móvil) / 24px (md+) |
| `margin-mobile` | 16px |
| `margin-desktop` | 32px |
| `section-gap` | 80px |
| `container-max` | 1200px |

---

## Formas

- **Border radius:** 0–4px (técnico); botones sin redondeo excesivo (`rounded` = 4px máx).
- **Bordes:** 1px secciones; 2px drawer y tarjeta contacto.

---

## Animaciones

| Nombre | Comportamiento | Duración / easing |
|--------|----------------|-------------------|
| `reveal-on-scroll` | opacity 0 → 1, translateY(20px) → 0 | 0.6s `cubic-bezier(0.16, 1, 0.3, 1)` |
| `card-reveal` | opacity 0 → 1, scale(0.95) → 1 | 0.8s mismo easing |
| `terminal-flicker` | opacity 0.8–1 alternado | 2s infinite |
| `cursor-blink` | opacity toggle | 1s step-end |
| `typewriter` | carácter a carácter | 150ms escribir / 50ms borrar |
| `drawer` | translateX + overlay opacity | 300ms ease-in-out |
| `theme-toggle` | sombra offset 4px → 0 al active | instant |

**Scroll:** Intersection Observer, `threshold: 0.15`, `rootMargin: 0px 0px -50px 0px`. Respetar `prefers-reduced-motion`.

---

## Iconografía (Macintosh)

SVG locales en `public/icons/mac/` — reproducciones 1-bit de [classic-mac-elements](https://github.com/danmorgandesigns/classic-mac-elements).

| Uso | Archivo |
|-----|---------|
| Logo / terminal | `mac-system.svg` |
| Menú | `menu.svg` (pixel) |
| Carpetas / trabajo | `folder.svg` |
| Código / paint | `macpaint.svg` |
| Mail | `mail.svg` |
| Skills | `sound.svg` |
| Certificaciones | `help.svg` |
| Educación | `scrapbook.svg` |
| Tema oscuro (luna) | `moon.svg` |
| Tema claro (sol) | `sun.svg` |

Componente: `MacIcon` + mapa en `src/lib/mac-icons.js`.

## Componentes UI

- **Button primary:** borde `primary`, hover invierte fondo/borde.
- **Retro key (`.retro-key`):** sombra 4px, active translate — skills y FAB tema.
- **Button ghost:** hover `surface-variant`.
- **Tag / skill chip:** borde primary, hover fill primary.
- **Input (futuro):** borde outline, focus borde 2px primary.
- **Section:** `py-section-gap`, `border-b outline`, `max-w-container-max`.

---

## Responsividad

- Mobile-first; drawer ancho `min(20rem, 85vw)`.
- Grids experiencia: 1 col → 4 cols (fecha | contenido).
- Proyectos: 1 → 2 columnas.
- Contacto: botones stack → fila en `sm+`.
- Hero: `py-24` → `py-40` en `md+`.

---

## Tema claro / oscuro

- Estrategia: clase `.dark` en `<html>` vía `next-themes`.
- Persistencia: `localStorage` key `portfolio-theme`.
- Toggle: botón fijo inferior derecho, iconos sol/luna.
