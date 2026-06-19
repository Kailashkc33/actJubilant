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
  /** Set true when title/description are rendered outside the component. */
  minimalChrome?: boolean;
  /** Optional wrapper classes (e.g. max-width for portrait videos). */
  className?: string;
}

/**
 * SelfHostedVideo
 * - Poster is a native button (keyboard: Tab, Enter, Space)
 * - After play, focus moves to the <video controls> element
 * - When playback ends, focus returns to the play button
 * - Supports WebVTT captions
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const startPlayback = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay may fail; native controls remain available.
    });
    video.focus();
  }, [isPlaying]);

  const onPlayKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      startPlayback();
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsLoading(false);
    requestAnimationFrame(() => playButtonRef.current?.focus());
  };

  const captionBlock = !minimalChrome ? (
    <div className="mb-3">
      <h3 className="font-semibold leading-tight">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-[var(--text-muted)]">{description}</p>
      )}
    </div>
  ) : null;

  const playButtonClassName =
    "relative block w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer group " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
    "focus-visible:outline-[var(--primary-600)]";

  return (
    <div className={className ? `w-full ${className}` : "w-full"}>
      {captionBlock}
      {!isPlaying ? (
        <button
          ref={playButtonRef}
          type="button"
          onClick={startPlayback}
          onKeyDown={onPlayKeyDown}
          aria-label={`Play video: ${title}`}
          className={playButtonClassName}
          style={{ aspectRatio: aspect }}
        >
          <img
            src={poster || "/images/video-fallback.jpg"}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full ${fitClass}`}
            loading="lazy"
            decoding="async"
          />

          <div
            className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
              <svg
                className="ml-1 h-8 w-8 text-[var(--primary-600)] sm:h-9 sm:w-9"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <span className="sr-only">Play</span>
        </button>
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
            aria-label={title}
            onLoadedData={() => setIsLoading(false)}
            onEnded={handleEnded}
          >
            {srcWebm && <source src={srcWebm} type="video/webm" />}
            <source src={srcMp4} type="video/mp4" />

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

            Your browser doesn&apos;t support HTML5 video.
          </video>

          {isLoading && (
            <div
              className="absolute inset-0 grid place-items-center bg-black/50"
              role="status"
              aria-live="polite"
            >
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
