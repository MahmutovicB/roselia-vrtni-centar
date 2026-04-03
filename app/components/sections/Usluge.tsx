"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const services = [
  {
    emoji: "🌹",
    title: "Sadnice i cvijeće",
    description:
      "Bogat izbor sezonskog i trajnog cvijeća, ukrasnih sadnica i sobnih biljaka za svaki dom i vrt.",
    accent: "#8B1A1A",
  },
  {
    emoji: "🌳",
    title: "Ukrasno bilje i drveće",
    description:
      "Četinari, listopadne vrste, živice i ukrasno grmlje za uređenje dvorišta i parcela.",
    accent: "#2D5016",
  },
  {
    emoji: "🌱",
    title: "Sjeme i gnojiva",
    description:
      "Sjemenski krompir, sadnice paradajza, paprike, krastavaca i jagoda. Sjeme povrća, trave i cvijeća. Organska i mineralna gnojiva.",
    accent: "#4A7A25",
  },
  {
    emoji: "🔧",
    title: "Vrtni alat i oprema",
    description:
      "Profesionalni i hobi alati za sve vrtne radove — kopanje, sadnju, zalijevanje i njegu. Uključujući Scheppach opremu i rezervne dijelove.",
    accent: "#5C4033",
  },
  {
    emoji: "🚜",
    title: "Radne mašine",
    description:
      "Ovlašteni prodavač Scheppach mašina — motokultivatori, kosilice, trimeri, lančane pile i drobilice za efikasan rad u vrtu i na parceli.",
    accent: "#8B6355",
  },
  {
    emoji: "🪴",
    title: "Lončanice i tegle",
    description:
      "Dekorativne posude, tegle i žardinjere svih veličina za unutarnje i vanjsko uređenje.",
    accent: "#A52020",
  },
];

// Leaves positioned at card edges — stems touch the card, tips grow outward
const CARD_LEAVES = [
  // top-right corner, fan of two
  { right: 12,  top: -36, rotate:  30, delay: 0    },
  { right: 34,  top: -30, rotate:   5, delay: 0.08 },
  // bottom-left corner
  { left:  14, bottom: -34, rotate: 165, delay: 0.05 },
];

export default function Usluge() {
  return (
    <section id="usluge" className="bg-[#F0EBE1] py-20 sm:py-28 relative overflow-hidden">
      {/* Top wave from hero */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-10"
        >
          <path
            d="M0 0L48 6.7C96 13.3 192 26.7 288 29.3C384 32 480 24 576 18.7C672 13.3 768 10.7 864 13.3C960 16 1056 24 1152 26.7C1248 29.3 1344 26.7 1392 25.3L1440 24V40H0Z"
            fill="#F0EBE1"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-14 sm:mb-16">
            <span
              className="text-sm uppercase tracking-widest text-[#8B1A1A] font-semibold block mb-3"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Naša ponuda
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-800 text-[#1A1A1A] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Šta nudimo
            </h2>
            <p
              className="text-[#5C4033] text-lg max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Sve što vaš vrt treba — na jednom mjestu u Podlugovima.
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08} direction="up">
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>

        {/* CTA row */}
        <FadeIn delay={0.5}>
          <div className="mt-14 text-center">
            <p
              className="text-[#5C4033] text-base mb-5"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Imate pitanje o nekoj ponudi? Slobodno nas nazovite.
            </p>
            <a
              href="tel:+38761559593"
              className="inline-flex items-center gap-2.5 bg-[#8B1A1A] hover:bg-[#6B1414] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              <PhoneIcon />
              Pozovite: 061 559 593
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ServiceCard({
  emoji,
  title,
  description,
  accent,
}: {
  emoji: string;
  title: string;
  description: string;
  accent: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    // Outer wrapper — tracks hover, overflow visible so leaves peek out
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Leaves — behind the card (z-0), growing from edges */}
      {CARD_LEAVES.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-0"
          style={{
            right:  "right"  in leaf ? leaf.right  : undefined,
            left:   "left"   in leaf ? leaf.left   : undefined,
            top:    "top"    in leaf ? leaf.top     : undefined,
            bottom: "bottom" in leaf ? leaf.bottom  : undefined,
            rotate: leaf.rotate,
            transformOrigin: "50% 100%", // stem = base of leaf
          }}
          animate={hovered ? "hover" : "rest"}
          variants={{
            rest:  { scale: 0, opacity: 0 },
            hover: { scale: 1, opacity: 1 },
          }}
          transition={{
            duration: 0.45,
            delay: leaf.delay,
            ease: [0.34, 1.56, 0.64, 1], // spring overshoot
          }}
        >
          <LeafSVG color={accent} />
        </motion.div>
      ))}

      {/* Card — sits above leaves (z-10) */}
      <motion.div
        className="relative z-10 bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E8E0D5] transition-colors duration-300 cursor-default"
        animate={hovered ? "hover" : "rest"}
        variants={{
          rest:  { y: 0,  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",  borderColor: "#E8E0D5" },
          hover: { y: -4, boxShadow: "0 12px 28px rgba(0,0,0,0.10)", borderColor: `${accent}55` },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 select-none"
          style={{ backgroundColor: `${accent}18` }}
          animate={hovered ? "hover" : "rest"}
          variants={{
            rest:  { scale: 1,    rotate: 0  },
            hover: { scale: 1.15, rotate: -5 },
          }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {emoji}
        </motion.div>

        {/* Accent line */}
        <motion.div
          className="h-0.5 rounded-full mb-4"
          style={{ backgroundColor: accent }}
          animate={hovered ? "hover" : "rest"}
          variants={{
            rest:  { width: "2rem"   },
            hover: { width: "3.5rem" },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        <h3
          className="text-lg sm:text-xl font-700 text-[#1A1A1A] mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h3>
        <p
          className="text-[#5C4033] text-base leading-relaxed"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          {description}
        </p>
      </motion.div>
    </div>
  );
}

function LeafSVG({ color }: { color: string }) {
  return (
    <svg
      width={28}
      height={44}
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 21 C7 21 0 14 0 7 C0 3.13 3.13 0 7 0 C10.87 0 14 3.13 14 7 C14 14 7 21 7 21Z"
        fill={color}
        fillOpacity={0.55}
      />
      <line
        x1="7" y1="21"
        x2="7" y2="1"
        stroke="white"
        strokeOpacity={0.4}
        strokeWidth={1}
        strokeLinecap="round"
      />
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
