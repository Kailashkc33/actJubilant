"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when open
  useEffect(() => {
    const root = document.documentElement;
    if (!open) return;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = prevOverflow;
    };
  }, [open]);

  // Auto-close when viewport is wide enough for the full desktop nav.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = () => setOpen(false);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Focus first element when opened, return focus to trigger when closed
  useEffect(() => {
    if (open) {
      panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  // Simple focus trap
  useEffect(() => {
    if (!open) return;
    const dialog = panelRef.current;
    if (!dialog) return;

    const getFocusables = () =>
      dialog.querySelectorAll<HTMLElement>(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = getFocusables();
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="mobile-nav-trigger"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <span>Close</span>
        ) : (
          <>
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Menu</span>
          </>
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          className="fixed inset-0 z-50"
        >
          {/* Backdrop (hidden from a11y tree) */}
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Full-screen drawer: full height, scrollable, safe-area aware */}
          <div
            ref={panelRef}
            className="mobile-nav-panel absolute inset-0 h-[100dvh] w-full
                       outline-none overflow-y-auto overscroll-contain
                       pt-[calc(env(safe-area-inset-top,0px)+1rem)] pb-[calc(env(safe-area-inset-bottom,0px)+1rem)]
                       motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out translate-x-0"
          >
            <div className="px-6">
              <div className="mb-5 flex items-center justify-between">
                <span id="mobile-menu-title" className="mobile-nav-panel__title text-lg font-semibold">
                  Menu
                </span>
                <button
                  type="button"
                  className="mobile-nav-panel__close rounded-full p-2 transition-colors"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {[
                  { href: "/programs", label: "Programs" },
                  { href: "/about", label: "About" },
                  { href: "/reviews", label: "Reviews" },
                  { href: "/consultation", label: "Book a Consultation" },
                  { href: "/accessibility", label: "Accessibility" },
                  { href: "/faq", label: "FAQ" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="mobile-nav-panel__link block rounded-lg px-4 py-3"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/referral"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-4 w-full"
                >
                  Make a Referral
                </Link>
                <a
                  href="tel:+61424488439"
                  onClick={() => setOpen(false)}
                  className="btn-secondary mt-2 w-full"
                  aria-label="Call us on +61 424 488 439"
                >
                  Call +61 424 488 439
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
