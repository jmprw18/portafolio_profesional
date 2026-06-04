"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="footer-bar w-full border-t border-outline bg-surface">
      <div className="mx-auto flex min-h-[7rem] max-w-[var(--spacing-container-max)] flex-col items-center justify-center gap-6 px-4 md:flex-row md:justify-between md:px-6">
        <span className="text-body-sm max-w-prose text-center text-primary md:text-left">
          {content.siteMeta.footer}
        </span>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {content.footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body-sm text-secondary transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
