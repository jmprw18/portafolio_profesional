"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  const { content } = useLanguage();

  return (
    <RevealOnScroll id="experience" className="section-block">
      <div className="section-inner">
        <SectionHeader
          icon="work"
          title={content.sections.experience}
        />
        <div className="flex flex-col gap-8">
          {content.experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="group grid grid-cols-1 gap-4 border-b border-outline-variant pb-8 md:grid-cols-4 md:gap-6"
            >
              <div className="md:col-span-1 md:pt-1">
                <time className="text-body-sm text-secondary md:text-right">
                  {job.period}
                </time>
                <p className="text-body-sm font-medium text-secondary">
                  {job.location}
                </p>
              </div>

              <div className="min-w-0 md:col-span-3">
                <h3 className="text-headline-md mb-2 text-primary transition-colors group-hover:text-surface-tint">
                  {job.title}
                </h3>
                <p className="text-body-lg mb-4 font-bold text-secondary">
                  {job.company}
                </p>
                <ul className="list-disc list-inside mb-4">
                  {job.description?.split(". ").map((point, index) => (
                    <li
                      key={index}
                      className="text-body-lg text-on-surface-variant text-justify"
                    >
                      {point}
                    </li>
                  ))}
                  {job.description2?.split(". ").map((point, index) => (
                    <li
                      key={index}
                      className="text-body-lg text-on-surface-variant text-justify"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
