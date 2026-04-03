"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

// Replace these with actual client photos placed in /public/images/galerija/
const photos = [
  { src: "/images/gallery-sadnice.jpg", alt: "Sadnice i cvijeće", span: "row-span-2" },
  { src: "/images/gallery-drvece.jpg", alt: "Ukrasno bilje i drveće", span: "" },
  { src: "/images/gallery-sjeme.jpg", alt: "Sjeme i gnojiva", span: "" },
  { src: "/images/gallery-alat.jpg", alt: "Vrtni alat", span: "row-span-2" },
  { src: "/images/gallery-masine.jpg", alt: "Radne mašine", span: "" },
  { src: "/images/gallery-loncanice.jpg", alt: "Lončanice i tegle", span: "" },
];

const placeholderColors = [
  "from-[#2D5016] to-[#4A7A25]",
  "from-[#8B1A1A] to-[#A52020]",
  "from-[#5C4033] to-[#8B6355]",
  "from-[#2D5016] to-[#5C4033]",
  "from-[#4A7A25] to-[#2D5016]",
  "from-[#A52020] to-[#8B1A1A]",
  "from-[#8B6355] to-[#5C4033]",
  "from-[#2D5016] to-[#8B1A1A]",
];

export default function Galerija() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, prev, next]);

  return (
    <>
      <section id="galerija" className="bg-[#FAF7F2] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Heading */}
          <FadeIn>
            <div className="text-center mb-12 sm:mb-14">
              <span
                className="text-sm uppercase tracking-widest text-[#8B1A1A] font-semibold block mb-3"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                Fotogalerija
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-800 text-[#1A1A1A] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Iz našeg centra
              </h2>
              <p
                className="text-[#5C4033] text-lg max-w-lg mx-auto"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                Pogledajte šta vas čeka u Roseliji.
              </p>
            </div>
          </FadeIn>

          {/* Photo grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            style={{ gridAutoRows: "180px" }}
          >
            {photos.map((photo, i) => (
              <FadeIn
                key={photo.src}
                delay={i * 0.06}
                direction="up"
                className={photo.span || ""}
              >
                <GalleryItem
                  photo={photo}
                  placeholderClass={placeholderColors[i % placeholderColors.length]}
                  onClick={() => setLightboxIndex(i)}
                />
              </FadeIn>
            ))}
          </div>

          {/* Instagram link */}
          <FadeIn delay={0.4}>
            <div className="mt-10 sm:mt-12 text-center">
              <a
                href="https://www.instagram.com/vrtroselia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                <span className="w-px h-8 bg-[#8B1A1A]/30" />
                <span className="text-[#5C4033] group-hover:text-[#8B1A1A] text-base transition-colors duration-200">
                  Pratite nas na Instagramu
                </span>
                <span className="font-semibold text-[#8B1A1A] text-base group-hover:text-[#6B1414] transition-colors duration-200">
                  @vrtroselia
                </span>
                <InstagramIcon />
                <span className="w-px h-8 bg-[#8B1A1A]/30" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
          >
            {/* Image container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[90vh] mx-4 aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[lightboxIndex % placeholderColors.length]} opacity-40 rounded-lg`}
              />
              <Image
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                fill
                className="object-contain rounded-lg"
                sizes="100vw"
                priority
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span
                  className="text-white/80 text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  {photos[lightboxIndex].alt}
                </span>
              </div>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Zatvori"
            >
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-6 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Prethodna slika"
            >
              <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Sljedeća slika"
            >
              <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === lightboxIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
                  aria-label={`Slika ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GalleryItem({
  photo,
  placeholderClass,
  onClick,
}: {
  photo: { src: string; alt: string; span: string };
  placeholderClass: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden rounded-xl group cursor-pointer h-full w-full text-left"
      aria-label={`Otvori sliku: ${photo.alt}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${placeholderClass} opacity-70`} />
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover warm-filter transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/25 transition-colors duration-300" />

      {/* Zoom hint icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2.5">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function InstagramIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8B1A1A"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="#8B1A1A" />
    </svg>
  );
}
