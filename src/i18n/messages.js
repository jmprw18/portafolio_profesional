import { en } from "./locales/en";
import { es } from "./locales/es";

export const messages = { es, en };

export function getMessages(locale) {
  return messages[locale] ?? messages.es;
}
