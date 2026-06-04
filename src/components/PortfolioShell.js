"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { BackgroundGrid } from "@/components/layout/BackgroundGrid";
import { DocumentLocale } from "@/components/layout/DocumentLocale";
import { Header } from "@/components/layout/Header";
import { NavigationDrawer } from "@/components/layout/NavigationDrawer";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";

export function PortfolioShell() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { content } = useLanguage();
  const sectionIds = content.navigation.map((n) => n.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <DocumentLocale />
      <BackgroundGrid />
      <Header onMenuOpen={() => setDrawerOpen(true)} />
      <NavigationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeSection={activeSection}
      />
      <main className="page-bottom-safe relative z-10 mx-auto max-w-[var(--spacing-container-max)] px-4 pt-20 md:px-6 md:pt-24">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LanguagesSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  );
}
