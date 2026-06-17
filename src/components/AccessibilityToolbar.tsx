"use client";

import { useEffect, useRef, useState } from "react";

type Prefs = {
  hc: boolean;
  xl: boolean;
  dys: boolean;
};

export default function AccessibilityToolbar() {
  const [prefs, setPrefs] = useState<Prefs>({ hc: false, xl: false, dys: false });
  const [isOpen, setIsOpen] = useState(false);
  const speakingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load saved preferences
  useEffect(() => {
    const saved = localStorage.getItem("aj_a11y");
    if (saved) {
      try {
        setPrefs(JSON.parse(saved));
      } catch {
        localStorage.removeItem("aj_a11y");
      }
    }
  }, []);

  // Apply & persist
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("hc", prefs.hc);
    html.classList.toggle("xl-text", prefs.xl);
    html.classList.toggle("dyslexia", prefs.dys);
    localStorage.setItem("aj_a11y", JSON.stringify(prefs));
  }, [prefs]);

  // Close panel when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  // Read aloud
  function speak() {
    if (typeof window === "undefined") return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (speakingRef.current) return;

    const main = document.getElementById("main");
    if (!main) return;
    const text = main.textContent?.trim();
    if (!text) return;

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-AU";
    utter.rate = 1; // keep natural
    utter.onend = () => (speakingRef.current = false);
    utter.onerror = () => (speakingRef.current = false);
    speakingRef.current = true;
    synth.cancel();
    synth.speak(utter);
  }

  function stop() {
    if (typeof window === "undefined") return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    speakingRef.current = false;
    synth.cancel();
  }

  function resetAll() {
    stop();
    setPrefs({ hc: false, xl: false, dys: false });
  }

  return (
    <div
      ref={containerRef}
      className="fixed left-0 z-50"
      style={{ top: "calc(env(safe-area-inset-top, 0px) + 104px)" }}
    >
      <button
        type="button"
        className={`touch-target flex h-14 w-14 items-center justify-center border border-[var(--primary-700)] bg-[var(--primary-600)] text-white shadow-lg transition hover:opacity-95 ${
          isOpen ? "rounded-r-none" : "rounded-r-xl"
        }`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="accessibility-tools-panel"
        aria-label={isOpen ? "Close accessibility tools" : "Open accessibility tools"}
      >
        <span aria-hidden="true" className="text-3xl leading-none">♿</span>
      </button>

      {isOpen && (
        <div
          id="accessibility-tools-panel"
          role="dialog"
          aria-label="Accessibility tools"
          className="absolute left-14 top-0 w-[min(19rem,calc(100vw-2.5rem))] rounded-r-xl rounded-bl-xl border border-gray-300 bg-white shadow-2xl"
        >
          <div className="border-b px-4 py-3">
            <h2 className="text-lg font-semibold">Accessibility Tools</h2>
          </div>
          <div className="max-h-[70vh] space-y-2 overflow-y-auto p-3" role="toolbar" aria-label="Accessibility tools">
            <button
              type="button"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-left text-sm hover:bg-gray-100"
              onClick={() => setPrefs((p) => ({ ...p, xl: true }))}
              aria-pressed={prefs.xl}
            >
              Increase Text
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-left text-sm hover:bg-gray-100"
              onClick={() => setPrefs((p) => ({ ...p, xl: false }))}
              aria-pressed={!prefs.xl}
            >
              Decrease Text
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-left text-sm hover:bg-gray-100"
              onClick={() => setPrefs((p) => ({ ...p, hc: !p.hc }))}
              aria-pressed={prefs.hc}
            >
              {prefs.hc ? "Standard Contrast" : "High Contrast"}
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-left text-sm hover:bg-gray-100"
              onClick={() => setPrefs((p) => ({ ...p, dys: !p.dys }))}
              aria-pressed={prefs.dys}
            >
              {prefs.dys ? "Standard Font" : "Readable Font"}
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-left text-sm hover:bg-gray-100"
              onClick={speak}
              aria-label="Read this page"
            >
              Read Aloud
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-left text-sm hover:bg-gray-100"
              onClick={stop}
              aria-label="Stop reading"
            >
              Stop Reading
            </button>
            <button
              type="button"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-left text-sm hover:bg-gray-100"
              onClick={resetAll}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}