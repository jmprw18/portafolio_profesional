# Portafolio Profesional — Javi A. Torres

Portafolio web basado en el diseño **Portafolio Dinámico Pro** (Google Stitch, proyecto `5950687497862370115`).

## Stack

- **Next.js 16** (App Router)
- **JavaScript**
- **Tailwind CSS v4**
- **next-themes** — tema claro / oscuro
- **Framer Motion** — animaciones al scroll

## Design kit

Tokens y guía en [`design-system/DESIGN.md`](design-system/DESIGN.md) y [`design-system/tokens.js`](design-system/tokens.js).

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Idiomas (ES / EN)

- Switch en el **header** (junto al menú).
- Traducciones en [`src/i18n/locales/es.js`](src/i18n/locales/es.js) y [`src/i18n/locales/en.js`](src/i18n/locales/en.js).
- Preferencia guardada en `localStorage` (`portfolio-locale`).
- Idioma por defecto: **español**.

En componentes: `const { locale, setLocale, content } = useLanguage()`.

## Personalización

Edita el contenido en los archivos de locale (`src/i18n/locales/`), no en `portfolio.js` (solo compatibilidad).

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor producción |
| `npm run lint` | ESLint |
