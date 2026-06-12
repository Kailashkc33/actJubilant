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

  // Auto-close when viewport hits md and above
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
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
        className="md:hidden btn-chip touch-target"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          className="fixed inset-0 z-50 md:hidden"
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
            className="absolute inset-0 h-[100dvh] w-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)]
                       outline-none overflow-y-auto overscroll-contain
                       pt-[calc(env(safe-area-inset-top,0px)+1rem)] pb-[calc(env(safe-area-inset-bottom,0px)+1rem)]
                       motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out translate-x-0"
          >
            <div className="px-6">
              <div className="mb-4 flex items-center justify-between">
                <span id="mobile-menu-title" className="text-lg font-semibold text-gray-900">
                  Menu
                </span>
                <button
                  type="button"
                  className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav aria-label="Mobile" className="flex flex-col gap-2">
                {[
                  { href: "/programs", label: "Programs" },
                  { href: "/reviews", label: "Reviews" },
                  { href: "/referral", label: "Make a Referral" },
                  { href: "/consultation", label: "Book a Consultation" },
                  { href: "/accessibility", label: "Accessibility" },
                  { href: "/faq", label: "FAQ" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-gray-900 hover:bg-gray-100 focus:bg-gray-100
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                                     href="tel:+61434740745"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-lg bg-blue-600 px-4 py-3 text-center text-white
                             hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Call +61 434 740 745
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
