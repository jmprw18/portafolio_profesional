"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CertificationsSection() {
  const { content } = useLanguage();
  const { certifications, education, sections } = content;

  return (
    <RevealOnScroll id="certifications" className="section-block">
      <div className="section-inner">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="min-w-0">
            <SectionHeader
              icon="verified"
              title={sections.certifications}
              size="md"
            />
            <ul className="border border-outline">
              {certifications.map((cert, index) => (
                <li
                  key={cert.name}
                  className={`flex flex-col gap-2 px-4 py-4 transition-colors hover:bg-surface-variant sm:flex-row sm:items-center sm:justify-between ${
                    index < certifications.length - 1
                      ? "border-b border-outline"
                      : ""
                  }`}
                >
                  <span className="text-body-lg text-primary">{cert.name}</span>
                  <span className="text-body-sm shrink-0 text-secondary">
                    {cert.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div id="education" className="min-w-0 scroll-mt-24">
            <SectionHeader icon="school" title={sections.education} size="md" />
            <article className="border border-outline p-6 transition-colors hover:bg-surface-variant">
              <h3 className="text-headline-md mb-2 text-primary">
                {education.degree}
              </h3>
              <p className="text-body-lg mb-4 font-bold text-secondary">
                {education.school}
              </p>
              <p className="text-body-sm text-outline-hover">
                {education.period}
              </p>
              <br />
              <p className="prose-safe text-body-lg text-on-surface-variant text-justify">
                {education.tesis}
              </p>
            </article>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
