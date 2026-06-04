# Discord, robots.txt y Cloudflare

Plan simple: **enlace a Discord** en el portafolio + **privacidad en Discord** + **robots.txt** + **Cloudflare** (opcional) para el sitio.

---

## 1. Enlace de Discord en el portafolio

### Crear el enlace

**Opción A — Invitación a servidor** (recomendada para contacto)

1. Discord → tu servidor → canal de contacto.
2. **Invitar personas** → **Editar enlace de invitación**.
3. Expiración / límite de usos según tu comodidad.
4. Copia `https://discord.gg/xxxxx`.

**Opción B — Perfil**

1. Activa **Modo desarrollador** (Ajustes → Avanzado).
2. Clic derecho en tu usuario → **Copiar ID de usuario**.
3. URL: `https://discord.com/users/TU_ID_NUMERICO`.

### Pegar en el proyecto

En `src/i18n/locales/es.js` y `en.js`, reemplaza **`TU_INVITE`** en:

- `siteMeta.discordUrl`
- entrada **Discord** de `socialLinks`
- entrada **DISCORD** de `footerLinks`

Ejemplo:

```javascript
discordUrl: "https://discord.gg/abc123xyz",
// ...
{ label: "Discord", href: "https://discord.gg/abc123xyz", icon: "discord" },
```

La tarjeta de contacto muestra **4 botones** (GitHub, LinkedIn, tercer enlace, Discord).

---

## 2. Privacidad en Discord (tú, en la app)

El portafolio solo abre Discord; la protección la configuras ahí:

### Cuenta → Privacidad y seguridad

- **Mensajes directos**: quién puede escribirte (amigos, solicitudes, etc.).
- **Solicitudes de mensaje**: revisar antes de aceptar.
- **Solicitudes de amistad**: restringir a amigos de amigos / servidor en común.
- **Filtrar spam** en DMs si está disponible.

### Por servidor (si usas `discord.gg`)

- **Nivel de verificación** del servidor (email, teléfono, antigüedad).
- Desactivar **MD de miembros del servidor** si no quieres DMs de quien solo entró por el enlace.
- Permisos de canales: canal público de contacto vs solo lectura donde aplique.

No necesitas webhook, Worker ni formulario en el sitio.

---

## 3. `robots.txt`

Archivo: `public/robots.txt` (se publica en cada deploy).

- `Allow: /` — los buscadores pueden indexar el portafolio.
- `Disallow: /_next/` — evita ruido de assets de Next.

URL en producción:

`https://jmprw18.github.io/portafolio_profesional/robots.txt`

Los scrapers maliciosos pueden ignorarlo; sirve para Google/Bing legítimos.

---

## 4. `_headers` (cabeceras de seguridad)

Archivo: `public/_headers` (formato Cloudflare Pages / compatible con proxy Cloudflare).

| Cabecera | Función |
|----------|---------|
| `X-Frame-Options: DENY` | Evita embeber tu sitio en iframes |
| `X-Content-Type-Options: nosniff` | Reduce MIME sniffing |
| `Referrer-Policy` | Menos datos en el referrer |
| `Content-Security-Policy` | Limita scripts y conexiones |

**GitHub Pages solo** no aplica `_headers` automáticamente. Para que surtan efecto:

- Pon el dominio detrás de **Cloudflare** (paso 5), y añade las mismas cabeceras en **Rules → Transform Rules → Modify response header**, o
- Migra el deploy a **Cloudflare Pages**.

---

## 5. Cloudflare (recomendado)

### Solo GitHub Pages (sin dominio propio)

- El sitio sigue en `jmprw18.github.io/portafolio_profesional`.
- `robots.txt` funciona tras el deploy.
- `_headers` **no** se aplican hasta que uses Cloudflare delante o Cloudflare Pages.

### Con dominio propio (máximo beneficio)

1. Registra o usa un dominio (ej. `tudominio.dev`).
2. [cloudflare.com](https://www.cloudflare.com) → **Add a site** → plan **Free**.
3. Cambia nameservers en tu registrador a los de Cloudflare.
4. **DNS** → `CNAME` `@` o `www` → `jmprw18.github.io`.
5. GitHub → repo → **Settings → Pages → Custom domain**.
6. Cloudflare → **SSL/TLS** → **Full**.

### Seguridad en Cloudflare (panel)

1. **Security → Bots → Bot Fight Mode** (Free): mitiga bots básicos.
2. **Security → Settings → Security Level**: Medium.
3. **Rules → Transform Rules → Modify response header**: copia cabeceras de `public/_headers` si GitHub no las sirve.

### Checklist

- [ ] Enlace `discord.gg` o perfil actualizado en `es.js` / `en.js`
- [ ] Privacidad de Discord revisada
- [ ] Push a `main` → deploy verde → probar botón Discord
- [ ] `robots.txt` accesible en la URL del sitio
- [ ] (Opcional) Dominio + Cloudflare + cabeceras / Bot Fight Mode

---

## Enlaces útiles

- Sitio: https://jmprw18.github.io/portafolio_profesional/
- Discord — privacidad: Ajustes → Privacidad y seguridad
- Cloudflare Docs: https://developers.cloudflare.com/
