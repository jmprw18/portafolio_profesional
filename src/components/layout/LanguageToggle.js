"use client";

import { localeLabels, locales } from "@/i18n/config";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale, content } = useLanguage();

  return (
    <div
      className="flex items-center border-2 border-primary bg-surface"
      role="group"
      aria-label={content.ui.langSwitch}
    >
      {locales.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`min-w-[2.75rem] px-3 py-2 text-label-caps transition-colors ${
              active
                ? "bg-primary text-surface"
                : "text-secondary hover:bg-surface-variant hover:text-primary"
            }`}
            aria-pressed={active}
            aria-label={`${content.ui.langSwitch}: ${localeLabels[code]}`}
          >
            {localeLabels[code]}
          </button>
        );
      })}
    </div>
  );
}
