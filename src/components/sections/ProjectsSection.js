"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MacIcon } from "@/components/ui/MacIcon";

export function ProjectsSection() {
  const { content } = useLanguage();

  return (
    <RevealOnScroll id="projects" className="section-block">
      <div className="section-inner">
        <SectionHeader icon="code" title={content.sections.projects} />
        <div className="grid grid-cols-1 gap-px border border-outline bg-outline p-px md:grid-cols-2">
          {content.projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group flex min-h-[280px] flex-col bg-surface p-6 transition-colors hover:bg-surface-variant md:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <MacIcon name="folder" size={24} />
                <MacIcon
                  name="arrow_outward"
                  size={22}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
              <h3 className="text-headline-md mb-4 text-primary">
                {project.title}
              </h3>
              <p className="prose-safe mb-6 flex-1 text-body-lg text-on-surface-variant">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-body-sm border border-outline-variant px-2 py-1 text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
