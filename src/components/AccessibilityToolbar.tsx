"use client";

import { useEffect, useRef, useState } from "react";

type Prefs = {
  hc: boolean;
  xl: boolean;
  dys: boolean;
};

export default function AccessibilityToolbar() {
  const [prefs, setPrefs] = useState<Prefs>({ hc: false, xl: false, dys: false });
  const speakingRef = useRef(false);

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

  return (
    <div className="w-full bg-[var(--surface)] border-b">
      <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap gap-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <span aria-hidden="true">♿</span>
          <span className="text-sm">Accessibility</span>
        </div>
        <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Accessibility tools">
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
        </div>
      </div>
    </div>
  );
}