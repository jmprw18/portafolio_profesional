"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LanguagesSection() {
  const { content } = useLanguage();

  return (
    <RevealOnScroll id="languages" className="section-block">
      <div className="section-inner">
        <SectionHeader icon="globe" title={content.sections.languages} />
        <ul className="border border-outline">
          {content.languages.map((lang, index) => (
            <li
              key={lang.id}
              className={`flex flex-col gap-2 px-4 py-4 transition-colors hover:bg-surface-variant sm:flex-row sm:items-center sm:justify-between ${
                index < content.languages.length - 1
                  ? "border-b border-outline"
                  : ""
              }`}
            >
              <span className="text-body-lg font-medium text-primary">
                {lang.name}
              </span>
              <span className="text-body-sm shrink-0 text-secondary sm:text-right">
                {lang.level}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </RevealOnScroll>
  );
}
