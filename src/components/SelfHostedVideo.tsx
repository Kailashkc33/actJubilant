"use client";

import { useEffect, useRef, useState } from "react";

interface TrackDef {
  src: string;
  srclang: string;
  label: string;
  kind?: "subtitles" | "captions";
  default?: boolean;
}

interface SelfHostedVideoProps {
  /** Required MP4 source. Make sure it's Fast Start / Web Optimized. */
  srcMp4: string;
  /** Optional WebM source for Chrome/Firefox if you have it. */
  srcWebm?: string;
  /** Optional VTT tracks for captions/subtitles. */
  tracks?: TrackDef[];
  title: string;
  description?: string;
  /** Shown before play; prefer a lightweight JPG (<=200 KB). */
  poster?: string;
  /** 16/9 by default. Pass like "9/16", "4/3", "1/1" if needed. */
  aspect?: string;
  /** How video fills the frame when playing. */
  objectFit?: "contain" | "cover";
  /** Set true to hide the dark overlay label block. */
  minimalChrome?: boolean;
  /** Optional wrapper classes (e.g. max-width for portrait videos). */
  className?: string;
}

/**
 * SelfHostedVideo
 * - Lazy mounts the <video> only after the user interacts (click/Enter/Space)
 * - Optional IntersectionObserver to enable keyboard focus once in view
 * - Supports WebVTT captions
 * - Adds a11y + keyboard controls
 *
 * TIP: Export your MP4 with "Web Optimized / Fast Start" so playback starts instantly.
 */
export default function SelfHostedVideo({
  srcMp4,
  srcWebm,
  tracks,
  title,
  description,
  poster,
  aspect = "16/9",
  objectFit = "contain",
  minimalChrome,
  className,
}: SelfHostedVideoProps) {
  const fitClass = objectFit === "cover" ? "object-cover" : "object-contain";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Basic IntersectionObserver: once visible, allow keyboard focus styles
  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setIsInView(true);
    }, { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const startPlayback = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setIsLoading(true);
    // The <video> mounts only after isPlaying=true
    // Give it a tick, then call play()
    setTimeout(() => {
      const v = videoRef.current;
      if (!v) return;
      // Some mobile browsers require user gesture; we already have it from click/keydown
      v.play().catch(() => {
        // If autoplay fails, just show controls; user will tap play
      });
    }, 0);
  };

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      startPlayback();
    }
  };

  return (
    <div className={className ? `w-full ${className}` : "w-full"}>
      {!isPlaying ? (
        <div
          ref={cardRef}
          role="button"
          tabIndex={isInView ? 0 : -1}
          aria-label={`Play video: ${title}`}
          onClick={startPlayback}
          onKeyDown={onKey}
          className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          style={{ aspectRatio: aspect }}
        >
          {/* Poster */}
          <img
            src={poster || "/images/video-fallback.jpg"}
            alt={title}
            className={`absolute inset-0 h-full w-full ${fitClass}`}
            loading="lazy"
            decoding="async"
          />

          {/* Overlay + Play button */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-9 h-9 text-[var(--primary-600)] ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="sr-only">Play</span>
            </div>
          </div>

          {/* Caption block */}
          {!minimalChrome && (
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-black/60 text-white p-3 rounded-xl">
                <h3 className="font-semibold leading-tight">{title}</h3>
                {description && (
                  <p className="text-sm opacity-90 mt-1 line-clamp-2">{description}</p>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg bg-black"
          style={{ aspectRatio: aspect }}
        >
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full ${fitClass}`}
            controls
            playsInline
            preload="metadata"
            poster={poster}
            onLoadedData={() => setIsLoading(false)}
            onEnded={() => setIsPlaying(false)}
          >
            {/* Sources */}
            {srcWebm && <source src={srcWebm} type="video/webm" />}
            <source src={srcMp4} type="video/mp4" />

            {/* Subtitles / Captions */}
            {tracks?.map((t, i) => (
              <track
                key={i}
                src={t.src}
                kind={t.kind || "subtitles"}
                srcLang={t.srclang}
                label={t.label}
                default={t.default}
              />
            ))}

            Your browser doesn't support HTML5 video.
          </video>

          {isLoading && (
            <div className="absolute inset-0 grid place-items-center bg-black/50">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" />
                <p>Loading video…</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
