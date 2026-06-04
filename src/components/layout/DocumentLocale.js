"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

/** Sincroniza lang del documento y title con el idioma activo */
export function DocumentLocale() {
  const { locale, content } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.siteMeta.title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", content.siteMeta.description);
    }
  }, [locale, content]);

  return null;
}
