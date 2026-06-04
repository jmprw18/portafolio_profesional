"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motion as motionTokens } from "@/lib/design-tokens";

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.revealDuration,
      ease: motionTokens.revealEase,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.cardRevealDuration,
      ease: motionTokens.revealEase,
    },
  },
};

/**
 * Animación al scroll alineada con Stitch:
 * - reveal: slide-up + fade
 * - card: scale + fade
 * Re-anima al volver a entrar en viewport (como el HTML de referencia).
 */
export function RevealOnScroll({
  children,
  className = "",
  variant = "reveal",
  id,
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: motionTokens.scrollThreshold,
        rootMargin: motionTokens.scrollRootMargin,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  const variants = variant === "card" ? cardVariants : revealVariants;
  const MotionTag = variant === "card" ? motion.div : motion.section;

  return (
    <MotionTag
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
