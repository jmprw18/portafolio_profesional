"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MacIcon } from "@/components/ui/MacIcon";

export function ContactSection() {
  const { content } = useLanguage();
  const { siteMeta, socialLinks, sections, ui } = content;

  return (
    <RevealOnScroll id="contact" className="section-block border-b-0">
      <div className="section-inner">
        <SectionHeader icon="mail" title={sections.contact} />
        <RevealOnScroll variant="card" className="relative mx-auto max-w-2xl">
          <div
            className="pointer-events-none absolute -inset-1 translate-x-2 translate-y-2 border border-outline"
            aria-hidden="true"
          />
          <div className="relative z-10 border-2 border-primary bg-contact-bg p-6 text-contact-text terminal-flicker md:p-8">
            <div className="mb-10 flex flex-col gap-4 border-b border-outline-variant pb-4 sm:flex-row sm:items-start sm:justify-between">
              <span className="text-headline-md">
                {siteMeta.name.toUpperCase()}
              </span>
              <span className="text-label-caps text-outline-variant">
                {siteMeta.contactId}
              </span>
            </div>
            <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-label-caps mb-1 text-outline-variant">
                  {ui.contactRole}
                </p>
                <p className="text-body-lg">{siteMeta.role.toUpperCase()}</p>
              </div>
              <div>
                <p className="text-label-caps mb-1 text-outline-variant">
                  {ui.contactStatus}
                </p>
                <p className="flex items-center gap-2 text-body-lg">
                  <span className="inline-block h-2 w-2 shrink-0 bg-contact-text" />
                  {siteMeta.status}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex flex-1 items-center justify-center gap-2 border border-contact-text px-4 py-2 text-body-lg uppercase transition-colors hover:bg-contact-text hover:text-contact-bg"
                >
                  <MacIcon name={link.icon} size={20} variant="on-dark" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </RevealOnScroll>
  );
}
