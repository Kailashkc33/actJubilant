"use client";

import { useEffect } from "react";

/**
 * Progressive, accessibility-safe scroll reveal.
 * Content is fully visible by default; the hidden/animated state is only
 * applied when JS runs AND the user has not requested reduced motion.
 */
const REVEAL_SELECTOR =
  ".home-section > .content-shell, .home-stats-band > .content-shell";

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );
    if (elements.length === 0) return;

    elements.forEach((el) => el.classList.add("reveal-init"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
