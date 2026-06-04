/**
 * Compatibilidad: contenido por defecto en español.
 * En componentes nuevos usar `useLanguage()` desde LanguageProvider.
 */
import { es } from "@/i18n/locales/es";

export const siteMeta = es.siteMeta;

export const navigation = es.navigation.map((item) => ({
  ...item,
  label: es.sections[item.id].toUpperCase(),
}));

export const experience = es.experience;
export const projects = es.projects;
export const skills = es.skills;
export const certifications = es.certifications;
export const education = es.education;
export const socialLinks = es.socialLinks;
export const footerLinks = es.footerLinks;
export const languages = es.languages;
