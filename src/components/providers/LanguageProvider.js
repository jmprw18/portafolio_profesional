"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { defaultLocale, locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

const STORAGE_KEY = "portfolio-locale";

const LanguageContext = createContext(null);

function subscribeLocale(onStoreChange) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("portfolio-locale-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("portfolio-locale-change", onStoreChange);
  };
}

function getLocaleSnapshot() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && locales.includes(stored)) return stored;
  return defaultLocale;
}

function getServerLocaleSnapshot() {
  return defaultLocale;
}

export function LanguageProvider({ children }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  const setLocale = useCallback((next) => {
    if (!locales.includes(next)) return;
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
    window.dispatchEvent(new Event("portfolio-locale-change"));
  }, []);

  const content = useMemo(() => getMessages(locale), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, content }),
    [locale, setLocale, content],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return ctx;
}

/** Etiqueta de navegación por id de sección */
export function useNavLabel(sectionId) {
  const { content } = useLanguage();
  return content.sections[sectionId]?.toUpperCase() ?? sectionId;
}
