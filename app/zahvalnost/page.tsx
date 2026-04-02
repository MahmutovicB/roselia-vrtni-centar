import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvala vam! – Roselia Vrtni Centar",
  description: "Vaša poruka je uspješno primljena. Uskoro ćemo vas kontaktirati.",
  robots: { index: false, follow: false },
};

export default function ZahvalnostPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] px-5"
      style={{ fontFamily: "var(--font-crimson)" }}
    >
      {/* Decorative circle */}
      <div className="w-24 h-24 rounded-full bg-[#2D5016]/10 flex items-center justify-center mb-8">
        <div className="w-16 h-16 rounded-full bg-[#2D5016]/20 flex items-center justify-center">
          <CheckIcon />
        </div>
      </div>

      <h1
        className="text-3xl sm:text-4xl font-800 text-[#1A1A1A] text-center mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Hvala vam!
      </h1>

      <p className="text-[#5C4033] text-lg text-center max-w-md mb-3 leading-relaxed">
        Vaša poruka je uspješno primljena. Javit ćemo vam se u najkraćem
        mogućem roku.
      </p>

      <p className="text-[#8B6355] text-base text-center mb-10">
        Ili nas odmah nazovite:{" "}
        <a
          href="tel:+38761559593"
          className="text-[#8B1A1A] font-semibold hover:text-[#6B1414] transition-colors"
        >
          061 559 593
        </a>
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#6B1414] text-white font-semibold text-base px-7 py-3.5 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md"
      >
        <ArrowLeftIcon />
        Povratak na početnu
      </Link>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
