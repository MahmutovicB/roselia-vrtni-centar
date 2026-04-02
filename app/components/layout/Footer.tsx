import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF7F2]">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#8B1A1A] via-[#A52020] to-[#2D5016]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3
              className="text-2xl font-700 text-white mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Roselia
            </h3>
            <p
              className="text-[#8B6355] text-base italic mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vrtni Centar
            </p>
            <p
              className="text-[#FAF7F2]/70 text-base leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Vaš zeleni partner u srcu Podlugova. Sve za vaš vrt — sadnice,
              cvijeće, alat i stručni savjet.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/vrtroselia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @vrtroselia"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#FAF7F2]/60 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/roseliavrt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Vrt Roselia"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#FAF7F2]/60 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm uppercase tracking-widest text-[#8B1A1A] font-semibold mb-5"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Navigacija
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "O nama", href: "#o-nama" },
                { label: "Šta nudimo", href: "#usluge" },
                { label: "Galerija", href: "#galerija" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#FAF7F2]/60 hover:text-[#FAF7F2] text-base transition-colors duration-150"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm uppercase tracking-widest text-[#8B1A1A] font-semibold mb-5"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Kontakt
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+38761559593"
                  className="flex items-start gap-2.5 text-[#FAF7F2]/60 hover:text-[#FAF7F2] text-base transition-colors duration-150"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  <PhoneIcon className="mt-0.5 shrink-0 text-[#8B1A1A]" />
                  061 559 593
                </a>
              </li>
              <li>
                <a
                  href="mailto:vrt.roselia@gmail.com"
                  className="flex items-start gap-2.5 text-[#FAF7F2]/60 hover:text-[#FAF7F2] text-base transition-colors duration-150 break-all"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  <EmailIcon className="mt-0.5 shrink-0 text-[#8B1A1A]" />
                  vrt.roselia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#FAF7F2]/60 text-base" style={{ fontFamily: "var(--font-crimson)" }}>
                <LocationIcon className="mt-0.5 shrink-0 text-[#8B1A1A]" />
                <span>Moševićka bb,<br />Podlugovi 71380</span>
              </li>
              <li className="flex items-start gap-2.5 text-[#FAF7F2]/60 text-base" style={{ fontFamily: "var(--font-crimson)" }}>
                <ClockIcon className="mt-0.5 shrink-0 text-[#8B1A1A]" />
                <span>Pon – Sub: 08:00–17:00<br />Nedjelja: Zatvoreno</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[#FAF7F2]/40 text-sm"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            © {currentYear} Roselia Vrtni Centar. Sva prava pridržana.
          </p>
          <p
            className="text-[#FAF7F2]/30 text-sm"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Podlugovi, Općina Ilijaš
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
