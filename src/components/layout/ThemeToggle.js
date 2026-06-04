"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { MacIcon } from "@/components/ui/MacIcon";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { content } = useLanguage();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="retro-key retro-key-fab fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center md:bottom-8 md:right-8"
      aria-label={isDark ? content.ui.themeLight : content.ui.themeDark}
      suppressHydrationWarning
    >
      <span className="dark:hidden" aria-hidden="true">
        <MacIcon name="dark_mode" size={28} />
      </span>
      <span className="hidden dark:inline" aria-hidden="true">
        <MacIcon name="light_mode" size={28} />
      </span>
    </button>
  );
}
