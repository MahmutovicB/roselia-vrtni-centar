"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import FadeIn from "../ui/FadeIn";

const schema = z.object({
  ime: z.string().min(2, "Unesite vaše ime (min. 2 znaka)"),
  kontakt: z
    .string()
    .min(5, "Unesite e-mail ili broj telefona")
    .max(100, "Predugo"),
  poruka: z
    .string()
    .min(10, "Poruka treba imati najmanje 10 znakova")
    .max(1000, "Poruka je preduga (max. 1000 znakova)"),
});

type FormData = z.infer<typeof schema>;

export default function Kontakt() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        window.location.href = "/zahvalnost";
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.message || "Slanje nije uspjelo. Pokušajte ponovo.");
      }
    } catch {
      setError("Greška u mreži. Pokušajte ponovo ili nas nazovite.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="bg-[#F0EBE1] py-20 sm:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B1A1A 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2D5016 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <span
              className="text-sm uppercase tracking-widest text-[#8B1A1A] font-semibold block mb-3"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Stupite u kontakt
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-800 text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pronađite nas
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Form */}
          <FadeIn direction="left">
            <div className="bg-[#FAF7F2] rounded-2xl p-7 sm:p-9 shadow-sm border border-[#E8E0D5]">
              <h3
                className="text-xl font-700 text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Pošaljite nam poruku
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

                {/* Ime */}
                <div>
                  <label
                    htmlFor="ime"
                    className="block text-sm font-semibold text-[#5C4033] mb-1.5"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    Ime i prezime <span className="text-[#8B1A1A]">*</span>
                  </label>
                  <input
                    id="ime"
                    type="text"
                    autoComplete="name"
                    placeholder="Npr. Amina Hodžić"
                    {...register("ime")}
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-[#1A1A1A] text-base placeholder-[#8B6355]/50 outline-none transition-all duration-150 focus:ring-2 focus:ring-[#8B1A1A]/25 focus:border-[#8B1A1A] ${
                      errors.ime
                        ? "border-[#8B1A1A] bg-[#FFF5F5]"
                        : "border-[#E8E0D5] hover:border-[#8B6355]"
                    }`}
                    style={{ fontFamily: "var(--font-crimson)" }}
                  />
                  {errors.ime && (
                    <p className="mt-1.5 text-sm text-[#8B1A1A]" style={{ fontFamily: "var(--font-crimson)" }}>
                      {errors.ime.message}
                    </p>
                  )}
                </div>

                {/* Kontakt */}
                <div>
                  <label
                    htmlFor="kontakt"
                    className="block text-sm font-semibold text-[#5C4033] mb-1.5"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    E-mail ili telefon <span className="text-[#8B1A1A]">*</span>
                  </label>
                  <input
                    id="kontakt"
                    type="text"
                    autoComplete="email tel"
                    placeholder="Npr. 061 123 456 ili ime@email.com"
                    {...register("kontakt")}
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-[#1A1A1A] text-base placeholder-[#8B6355]/50 outline-none transition-all duration-150 focus:ring-2 focus:ring-[#8B1A1A]/25 focus:border-[#8B1A1A] ${
                      errors.kontakt
                        ? "border-[#8B1A1A] bg-[#FFF5F5]"
                        : "border-[#E8E0D5] hover:border-[#8B6355]"
                    }`}
                    style={{ fontFamily: "var(--font-crimson)" }}
                  />
                  {errors.kontakt && (
                    <p className="mt-1.5 text-sm text-[#8B1A1A]" style={{ fontFamily: "var(--font-crimson)" }}>
                      {errors.kontakt.message}
                    </p>
                  )}
                </div>

                {/* Poruka */}
                <div>
                  <label
                    htmlFor="poruka"
                    className="block text-sm font-semibold text-[#5C4033] mb-1.5"
                    style={{ fontFamily: "var(--font-crimson)" }}
                  >
                    Poruka <span className="text-[#8B1A1A]">*</span>
                  </label>
                  <textarea
                    id="poruka"
                    rows={5}
                    placeholder="Vaša poruka, upit o ponudi, dostupnosti..."
                    {...register("poruka")}
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-[#1A1A1A] text-base placeholder-[#8B6355]/50 outline-none transition-all duration-150 focus:ring-2 focus:ring-[#8B1A1A]/25 focus:border-[#8B1A1A] resize-none ${
                      errors.poruka
                        ? "border-[#8B1A1A] bg-[#FFF5F5]"
                        : "border-[#E8E0D5] hover:border-[#8B6355]"
                    }`}
                    style={{ fontFamily: "var(--font-crimson)" }}
                  />
                  {errors.poruka && (
                    <p className="mt-1.5 text-sm text-[#8B1A1A]" style={{ fontFamily: "var(--font-crimson)" }}>
                      {errors.poruka.message}
                    </p>
                  )}
                </div>

                {/* Server error */}
                {error && (
                  <div className="bg-[#FFF5F5] border border-[#8B1A1A]/30 rounded-xl px-4 py-3">
                    <p className="text-[#8B1A1A] text-sm" style={{ fontFamily: "var(--font-crimson)" }}>
                      {error}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#8B1A1A] hover:bg-[#6B1414] disabled:bg-[#8B6355] text-white font-semibold text-base px-6 py-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  {submitting ? (
                    <>
                      <SpinnerIcon />
                      Slanje...
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      Pošaljite poruku
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Info + Map */}
          <FadeIn direction="right" delay={0.1}>
            <div className="flex flex-col gap-6">

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard
                  icon={<PhoneIcon />}
                  label="Telefon"
                  value="061 559 593"
                  href="tel:+38761559593"
                />
                <InfoCard
                  icon={<EmailIcon />}
                  label="E-mail"
                  value="vrt.roselia@gmail.com"
                  href="mailto:vrt.roselia@gmail.com"
                  small
                />
                <InfoCard
                  icon={<LocationIcon />}
                  label="Adresa"
                  value="Moševićka bb, Podlugovi 71380"
                />
                <InfoCard
                  icon={<ClockIcon />}
                  label="Radno vrijeme"
                  value="Pon–Sub: 08–17h"
                  subtitle="Nedjelja: Zatvoreno"
                />
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/vrtroselia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#FAF7F2] border border-[#E8E0D5] hover:border-[#8B1A1A]/40 hover:bg-white text-[#5C4033] hover:text-[#8B1A1A] font-semibold text-sm py-3 rounded-xl transition-all duration-200"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  <InstagramIcon />
                  @vrtroselia
                </a>
                <a
                  href="https://www.facebook.com/roseliavrt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#FAF7F2] border border-[#E8E0D5] hover:border-[#8B1A1A]/40 hover:bg-white text-[#5C4033] hover:text-[#8B1A1A] font-semibold text-sm py-3 rounded-xl transition-all duration-200"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  <FacebookIcon />
                  Vrt Roselia
                </a>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-[#E8E0D5] shadow-sm" style={{ height: "280px" }}>
                <iframe
                  title="Roselia Vrtni Centar – lokacija Podlugovi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.0!2d18.2853!3d43.9747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDU4JzI4LjkiTiAxOMKwMTcnMDcuMSJF!5e0!3m2!1sbs!2sba!4v1680000000000!5m2!1sbs!2sba"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
  subtitle,
  small,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  subtitle?: string;
  small?: boolean;
}) {
  const content = (
    <div className="bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl p-4 flex items-start gap-3 h-full hover:border-[#8B1A1A]/30 transition-colors duration-150">
      <div className="w-8 h-8 rounded-lg bg-[#8B1A1A]/10 flex items-center justify-center text-[#8B1A1A] shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p
          className="text-xs uppercase tracking-wide text-[#8B6355] mb-0.5"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          {label}
        </p>
        <p
          className={`text-[#1A1A1A] font-semibold ${small ? "text-sm" : "text-base"}`}
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          {value}
        </p>
        {subtitle && (
          <p
            className="text-sm text-[#8B6355] mt-0.5"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}

function PhoneIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      className="animate-spin"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
