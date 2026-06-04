"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { DotGrid } from "@/components/layout/DotGrid";

const DOT_COLORS = {
  light: {
    base: "#E6DBD3",
    active: "#7e766d",
  },
  dark: {
    base: "#3a3836",
    active: "#988f86",
  },
};

function subscribeReducedMotion(onStoreChange) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeClient(onStoreChange) {
  return () => {};
}

function getClient() {
  return true;
}

function StaticGrid() {
  return (
    <div
      className="bg-grid pointer-events-none fixed inset-0 z-0 opacity-30 dark:opacity-15"
      aria-hidden="true"
    />
  );
}

export function BackgroundGrid() {
  const { resolvedTheme } = useTheme();
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
  const isClient = useSyncExternalStore(
    subscribeClient,
    getClient,
    () => false,
  );

  if (!isClient || reducedMotion) {
    return <StaticGrid />;
  }

  const palette =
    resolvedTheme === "dark" ? DOT_COLORS.dark : DOT_COLORS.light;

  return (
    <DotGrid
      dotSize={3}
      gap={22}
      baseColor={palette.base}
      activeColor={palette.active}
      proximity={110}
      speedTrigger={70}
      shockRadius={180}
      shockStrength={3.5}
      returnDuration={1.1}
      className="opacity-90 dark:opacity-70"
      enabled
    />
  );
}
