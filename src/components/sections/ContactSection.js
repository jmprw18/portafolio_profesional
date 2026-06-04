"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MacIcon } from "@/components/ui/MacIcon";
import { useTiltCard } from "@/hooks/useTiltCard";
import { withBasePath } from "@/lib/with-base-path";

const AVATAR_PATH = "/images/86423656_imagen_profile.jpeg";

export function ContactSection() {
  const { content, locale } = useLanguage();
  const { siteMeta, socialLinks, sections, ui } = content;
  const wrapRef = useRef(null);
  const shellRef = useRef(null);
  const avatarPath = siteMeta.avatar ?? AVATAR_PATH;

  useTiltCard({ wrapRef, shellRef, enabled: true });

  return (
    <RevealOnScroll id="contact" className="section-block border-b-0">
      <div className="section-inner">
        <SectionHeader icon="mail" title={sections.contact} />
        <RevealOnScroll variant="card" className="relative mx-auto max-w-2xl">
          <div
            className="pointer-events-none absolute -inset-1 translate-x-2 translate-y-2 border border-contact-text"
            aria-hidden="true"
          />
          <div ref={wrapRef} className="contact-tilt-wrap relative z-10">
            <div
              ref={shellRef}
              className="contact-tilt-shell border-2 border-contact-text bg-contact-bg p-6 text-contact-text md:p-8"
            >
              <header className="mb-8">
                <div className="contact-photo-wrap">
                  <div className="contact-photo-shadow" aria-hidden="true" />
                  <div className="contact-photo-frame">
                    <Image
                      key={`${locale}-${avatarPath}`}
                      src={withBasePath(avatarPath)}
                      alt={siteMeta.avatarAlt ?? siteMeta.name}
                      width={128}
                      height={128}
                      className="block h-28 w-28 object-cover object-center md:h-32 md:w-32"
                      unoptimized
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-contact-text pb-4">
                  <h3 className="text-headline-md uppercase tracking-tight">
                    {siteMeta.name.toUpperCase()}
                  </h3>
                  <span className="contact-card-id text-body-sm shrink-0 opacity-80">
                    {siteMeta.contactId}
                  </span>
                </div>
              </header>

              <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-label-caps mb-1 opacity-55">
                    {ui.contactRole}
                  </p>
                  <p className="text-body-lg uppercase tracking-wide">
                    {siteMeta.role.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-label-caps mb-1 opacity-55">
                    {ui.contactStatus}
                  </p>
                  <p className="flex items-center gap-2 text-body-lg uppercase tracking-wide">
                    <span
                      className="inline-block h-2.5 w-2.5 shrink-0 bg-contact-text"
                      aria-hidden="true"
                    />
                    {siteMeta.status}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={
                      link.icon === "discord"
                        ? siteMeta.discordUrl
                        : link.href
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-contact-text px-3 py-2.5 text-label-caps transition-colors hover:bg-contact-text hover:text-contact-bg"
                  >
                    <MacIcon name={link.icon} size={18} variant="on-dark" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </RevealOnScroll>
  );
}
