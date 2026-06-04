"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RetroKey } from "@/components/ui/RetroKey";

export function SkillsSection() {
  const { content } = useLanguage();

  return (
    <RevealOnScroll id="skills" className="section-block">
      <div className="section-inner">
        <SectionHeader icon="bolt" title={content.sections.skills} />
        <ul className="flex flex-wrap gap-4">
          {content.skills.map((skill) => (
            <li key={skill}>
              <RetroKey>{skill}</RetroKey>
            </li>
          ))}
        </ul>
      </div>
    </RevealOnScroll>
  );
}
