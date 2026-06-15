"use client";

import { useEffect, useRef, useState } from "react";

type Prefs = {
  hc: boolean;
  xl: boolean;
  dys: boolean;
};

export default function AccessibilityToolbar() {
  const [prefs, setPrefs] = useState<Prefs>({ hc: false, xl: false, dys: false });
  const [expanded, setExpanded] = useState(false);
  const speakingRef = useRef(false);
  const hasActivePrefs = prefs.hc || prefs.xl || prefs.dys;

  // Load saved preferences
  useEffect(() => {
    const saved = localStorage.getItem("aj_a11y");
    if (saved) setPrefs(JSON.parse(saved));
  }, []);

  // Apply & persist
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("hc", prefs.hc);
    html.classList.toggle("xl-text", prefs.xl);
    html.classList.toggle("dyslexia", prefs.dys);
    localStorage.setItem("aj_a11y", JSON.stringify(prefs));
  }, [prefs]);

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
    utter.rate = 1;
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

  const toolButtons = (
    <>
      <button
        type="button"
        className="btn-chip"
        onClick={() => setPrefs((p) => ({ ...p, hc: !p.hc }))}
        aria-pressed={prefs.hc}
      >
        {prefs.hc ? "Standard Contrast" : "High Contrast"}
      </button>
      <button
        type="button"
        className="btn-chip"
        onClick={() => setPrefs((p) => ({ ...p, xl: !p.xl }))}
        aria-pressed={prefs.xl}
      >
        {prefs.xl ? "Normal Text" : "Large Text"}
      </button>
      <button
        type="button"
        className="btn-chip"
        onClick={() => setPrefs((p) => ({ ...p, dys: !p.dys }))}
        aria-pressed={prefs.dys}
      >
        {prefs.dys ? "Standard Font" : "Dyslexia-friendly"}
      </button>
      <button type="button" className="btn-chip" onClick={speak} aria-label="Read this page">
        Read Aloud
      </button>
      <button type="button" className="btn-chip" onClick={stop} aria-label="Stop reading">
        Stop
      </button>
    </>
  );

  return (
    <div className="w-full bg-[var(--surface)] border-b">
      <div className="content-shell content-shell--home py-2">
        <div className="flex items-center justify-between gap-2 md:hidden">
          <div className="flex items-center gap-2 min-w-0">
            <span aria-hidden="true">♿</span>
            <span className="text-sm">Accessibility</span>
            {hasActivePrefs && (
              <span className="text-sm font-medium text-[var(--primary-600)]">On</span>
            )}
          </div>
          <button
            type="button"
            className="btn-chip shrink-0"
            aria-expanded={expanded}
            aria-controls="a11y-tools"
            onClick={() => setExpanded((open) => !open)}
          >
            {expanded ? "Hide tools" : "Show tools"}
          </button>
        </div>

        <div
          id="a11y-tools"
          className={`${expanded ? "mt-2 flex" : "hidden"} md:flex flex-wrap items-center justify-between gap-2`}
          role="toolbar"
          aria-label="Accessibility tools"
        >
          <div className="hidden md:flex items-center gap-2">
            <span aria-hidden="true">♿</span>
            <span className="text-sm">Accessibility</span>
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto md:justify-end">
            {toolButtons}
          </div>
        </div>
      </div>
    </div>
  );
}
