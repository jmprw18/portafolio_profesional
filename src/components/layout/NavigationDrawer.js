"use client";

import { useEffect } from "react";
import {
  useLanguage,
  useNavLabel,
} from "@/components/providers/LanguageProvider";
import { MacIcon } from "@/components/ui/MacIcon";

function NavItem({ item, isActive, onClose }) {
  const label = useNavLabel(item.id);

  return (
    <a
      href={`#${item.id}`}
      onClick={onClose}
      className={`flex items-center gap-4 border-l-4 px-4 py-3 text-body-lg transition-transform hover:translate-x-1 ${
        isActive
          ? "border-primary bg-surface text-primary"
          : "border-transparent text-secondary hover:border-outline-hover hover:bg-surface-variant"
      }`}
    >
      <MacIcon name={item.icon} size={22} />
      {label}
    </a>
  );
}

export function NavigationDrawer({ open, onClose, activeSection }) {
  const { content } = useLanguage();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      <div
        role="presentation"
        className={`fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <nav
        id="navigation-drawer"
        className={`fixed right-0 top-0 z-[60] flex h-full w-[min(20rem,85vw)] flex-col gap-1 overflow-y-auto border-l-2 border-primary bg-surface-elevated p-4 transition-transform duration-300 ease-in-out md:p-8 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        aria-label={content.ui.navTitle}
      >
        <div className="mb-8 flex items-center justify-between border-b border-outline pb-4">
          <span className="text-headline-lg text-primary">
            {content.ui.navTitle}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-2 text-primary transition-colors hover:bg-surface-variant"
            aria-label={content.ui.closeMenu}
          >
            <MacIcon name="close" size={22} />
          </button>
        </div>
        {content.navigation.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={activeSection === item.id}
            onClose={onClose}
          />
        ))}
      </nav>
    </>
  );
}
