"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Typewriter } from "@/components/ui/Typewriter";
import { MacIcon } from "@/components/ui/MacIcon";

export function HeroSection() {
  const { content } = useLanguage();
  const { siteMeta, ui } = content;

  return (
    <RevealOnScroll className="section-block border-b border-outline py-20 md:py-32 lg:py-40">
      <div className="section-inner flex flex-col items-start">
        <div className="mb-6 inline-block border border-primary bg-surface px-4 py-1">
          <span className="text-label-caps text-primary">{ui.heroSysInit}</span>
        </div>
        <Typewriter text={siteMeta.typewriterText} />
        <p className="text-headline-md text-secondary">{siteMeta.role}</p>
        <div className="mt-8 flex flex-wrap gap-4">
        </div>
      </div>
    </RevealOnScroll>
  );
}
