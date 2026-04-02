"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "O nama", href: "#o-nama" },
  { label: "Ponuda", href: "#usluge" },
  { label: "Galerija", href: "#galerija" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-sm shadow-sm border-b border-[#F0EBE1]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Roselia Vrtni Centar – početna"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Roselia Vrtni Centar logo"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <span
            className={`font-heading font-700 text-base sm:text-lg leading-tight transition-colors duration-200 ${
              scrolled ? "text-[#8B1A1A]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Roselia
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`font-body text-sm tracking-wide transition-colors duration-200 cursor-pointer relative group ${
                  scrolled
                    ? "text-[#5C4033] hover:text-[#8B1A1A]"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#8B1A1A] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
          <li>
            <a
              href="tel:+38761559593"
              className="inline-flex items-center gap-1.5 bg-[#8B1A1A] hover:bg-[#6B1414] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              <PhoneIcon />
              061 559 593
            </a>
          </li>
        </ul>

        {/* Mobile: phone + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+38761559593"
            aria-label="Pozovite nas"
            className={`transition-colors duration-200 ${
              scrolled ? "text-[#8B1A1A]" : "text-white"
            }`}
          >
            <PhoneIcon size={20} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={isOpen}
            className={`p-1.5 transition-colors duration-200 ${
              scrolled ? "text-[#5C4033]" : "text-white"
            }`}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#FAF7F2] border-t border-[#F0EBE1] px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-3 px-2 text-[#5C4033] hover:text-[#8B1A1A] font-body text-base border-b border-[#F0EBE1] last:border-0 transition-colors duration-150 cursor-pointer"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+38761559593"
            className="mt-3 flex items-center justify-center gap-2 bg-[#8B1A1A] text-white font-semibold py-3 rounded-full transition-colors duration-200 hover:bg-[#6B1414]"
            style={{ fontFamily: "var(--font-crimson)" }}
            onClick={() => setIsOpen(false)}
          >
            <PhoneIcon />
            061 559 593
          </a>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
