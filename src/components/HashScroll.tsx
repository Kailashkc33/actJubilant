"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    let timeoutId: number | undefined;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const rawId = hash.slice(1);
      let target = document.getElementById(rawId);
      try {
        target ||= document.getElementById(decodeURIComponent(rawId));
      } catch {
        return;
      }
      if (!target) return;

      window.requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start" });
      });
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        target.scrollIntoView({ block: "start" });
      }, 500);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}
