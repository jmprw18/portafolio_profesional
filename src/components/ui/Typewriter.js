"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { motion } from "@/lib/design-tokens";

export function Typewriter({ text, className = "" }) {
  const displayRef = useRef(null);
  const indexRef = useRef(0);
  const deletingRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !displayRef.current) return undefined;

    let timeoutId;

    const tick = () => {
      const deleting = deletingRef.current;
      const i = indexRef.current;

      if (!deleting && i <= text.length) {
        displayRef.current.textContent = text.substring(0, i);
        if (i < text.length) {
          indexRef.current = i + 1;
          timeoutId = setTimeout(tick, motion.typeSpeed);
        } else {
          timeoutId = setTimeout(() => {
            deletingRef.current = true;
            tick();
          }, 2000);
        }
      } else if (deleting && i >= 0) {
        displayRef.current.textContent = text.substring(0, i);
        if (i > 0) {
          indexRef.current = i - 1;
          timeoutId = setTimeout(tick, motion.deleteSpeed);
        } else {
          deletingRef.current = false;
          timeoutId = setTimeout(tick, 500);
        }
      } else {
        deletingRef.current = !deleting;
        timeoutId = setTimeout(tick, 200);
      }
    };

    indexRef.current = 0;
    deletingRef.current = false;
    timeoutId = setTimeout(tick, 500);

    return () => clearTimeout(timeoutId);
  }, [text, prefersReducedMotion]);

  return (
    <h1
      className={`text-headline-xl text-primary mb-4 min-h-[3rem] md:min-h-[3.5rem] ${className}`}
    >
      <span ref={displayRef}>{prefersReducedMotion ? text : ""}</span>
      <span className="cursor-blink" aria-hidden="true">
        |
      </span>
    </h1>
  );
}
