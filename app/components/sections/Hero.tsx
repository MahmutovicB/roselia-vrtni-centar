"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg3.png"
          alt="Roselia Vrtni Centar – sadnice i cvijeće"
          fill
          priority
          className="object-cover warm-filter"
          sizes="100vw"
          quality={85}
        />
        {/* Multi-layer dark + warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/75 via-[#2D5016]/40 to-[#8B1A1A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
      </div>

      {/* Botanical SVG accent — top right */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-10 pointer-events-none z-10">
        <BotanicalSvg />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-32 sm:pt-28 sm:pb-24 text-white">
        <div className="max-w-2xl">
          {/* Pre-heading badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-1.5 rounded-full mb-6"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A7A25] inline-block" />
              Otvoreni od 2020. godine · Podlugovi, Ilijaš
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-900 leading-tight mb-6 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vaš zeleni kutak
            <br />
            <span className="italic text-[#F0EBE1]">u srcu Podlugova</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-lg leading-relaxed"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Sadnice, cvijeće, alat i sve za vaš vrt — na jednom mjestu u
            Podlugovima.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+38761559593"
              className="inline-flex items-center justify-center gap-2.5 bg-[#8B1A1A] hover:bg-[#6B1414] text-white font-semibold text-base px-7 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              <PhoneIcon />
              Pozovite nas
            </a>
            <button
              onClick={() => scrollToSection("#usluge")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white font-semibold text-base px-7 py-4 rounded-full transition-all duration-200"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Pogledajte ponudu
              <ArrowDownRightIcon />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span
          className="text-white/50 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          Skroluj
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDownIcon />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14"
        >
          <path
            d="M0 60L48 51.3C96 42.7 192 25.3 288 22.7C384 20 480 31.3 576 38.7C672 46 768 49.3 864 46.7C960 44 1056 35.3 1152 29.3C1248 23.3 1344 20 1392 18.7L1440 17.3V60H0Z"
            fill="#FAF7F2"
          />
        </svg>
      </div>
    </section>
  );
}

function BotanicalSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 10 Q140 50 130 100 Q120 150 100 190" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M100 60 Q130 40 160 60" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M100 80 Q70 60 50 80" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M105 100 Q145 80 165 100" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M103 120 Q75 100 60 120" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M160 20 Q180 40 170 70 Q160 100 150 120" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M170 40 Q190 35 195 55" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
      <circle cx="100" cy="10" r="3" fill="white" opacity="0.5"/>
      <circle cx="130" cy="100" r="2" fill="white" opacity="0.4"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function ArrowDownRightIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17 7 17 17 7 17" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.6}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
