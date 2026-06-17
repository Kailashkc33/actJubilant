"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const liveRegionRef = useRef<HTMLDivElement>(null);

  const shouldAutoPlay = autoPlay && !prefersReducedMotion && !isPaused && images.length > 1;

  const announceSlide = useCallback(
    (index: number) => {
      const slide = images[index];
      if (!liveRegionRef.current || !slide) return;
      const parts = [slide.title, slide.description].filter(Boolean);
      liveRegionRef.current.textContent =
        parts.length > 0
          ? `Slide ${index + 1} of ${images.length}: ${parts.join(". ")}`
          : `Slide ${index + 1} of ${images.length}`;
    },
    [images]
  );

  useEffect(() => {
    announceSlide(currentIndex);
  }, [currentIndex, announceSlide]);

  useEffect(() => {
    if (!shouldAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [shouldAutoPlay, autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  const slide = images[currentIndex];

  return (
    <div
      className="carousel group relative h-[17.5rem] w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--sage-mid)] shadow-[var(--shadow-card)] md:h-[30rem]"
      aria-roledescription="carousel"
      aria-label="Gallery highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        ref={liveRegionRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      <div className="relative h-full w-full">
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-[1.02]"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="carousel__scrim" aria-hidden="true" />

        <div className="carousel__caption">
          <div className="carousel__caption-panel">
            {slide.title && (
              <p className="carousel__caption-title">{slide.title}</p>
            )}
            {slide.description && (
              <p className="carousel__caption-desc">{slide.description}</p>
            )}
          </div>
        </div>
      </div>

      {showArrows && images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="carousel-arrow absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60 md:left-4 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
            aria-label="Previous image"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="carousel-arrow absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60 md:right-4 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
            aria-label="Next image"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showDots && images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center justify-center gap-0.5 md:bottom-4">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className="flex h-11 w-11 items-center justify-center rounded-full"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            >
              <span
                aria-hidden="true"
                className={`block rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "h-3 w-3 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
                    : "h-2 w-2 bg-white/60 hover:bg-white/90"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {autoPlay && images.length > 1 && !prefersReducedMotion && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/25" aria-hidden="true">
          <div
            className="h-full bg-[var(--warm)] transition-all duration-100 ease-linear"
            style={{
              width: `${((currentIndex + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}
