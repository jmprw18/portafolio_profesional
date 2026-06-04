"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MacIcon } from "@/components/ui/MacIcon";

export function Header({ onMenuOpen }) {
  const { content } = useLanguage();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline bg-surface transition-colors duration-300">
      <div className="mx-auto flex max-w-[var(--spacing-container-max)] items-center justify-between gap-3 px-4 py-4 md:px-6">
        <a
          href="#"
          className="flex min-w-0 items-center gap-2 rounded p-2 transition-colors hover:bg-surface-variant active:translate-y-0.5"
        >
          <MacIcon name="terminal" size={22} />
          <span className="text-headline-md truncate tracking-tighter text-primary">
            {content.siteMeta.brand}
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <LanguageToggle />
          <button
            type="button"
            onClick={onMenuOpen}
            className="flex items-center justify-center rounded p-2 transition-colors hover:bg-surface-variant active:translate-y-0.5"
            aria-label={content.ui.openMenu}
          >
            <MacIcon name="menu" size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
