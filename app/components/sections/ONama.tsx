import Image from "next/image";
import FadeIn from "../ui/FadeIn";

export default function ONama() {
  return (
    <section id="o-nama" className="bg-[#FAF7F2] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text side */}
          <div>
            <FadeIn direction="left">
              <span
                className="text-sm uppercase tracking-widest text-[#8B1A1A] font-semibold block mb-4"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                Naša priča
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-800 text-[#1A1A1A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Strast prema zelenilu,
                <br />
                <span className="italic text-[#8B1A1A]">ukorijenjeni u Podlugovima</span>
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <p
                className="text-[#5C4033] text-lg leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                Roselia Vrtni Centar otvoren je u decembru 2020. godine s jednom
                jasnom vizijom — biti vaš pouzdani partner za sve što vrt
                zahtijeva. Mlad tim s velikom ljubavi prema prirodi i biljkama,
                smješteni nasuprot pošte u Podlugovima.
              </p>
              <p
                className="text-[#5C4033] text-lg leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                Od sadnica i ukrasnog bilja do vrtnog alata i radnih mašina —
                nudimo širok asortiman za vrtare početnike i iskusne entuzijaste.
                Svaki kupac dobija topao doček i stručni savjet, jer nam je stalo
                da vaš vrt procvjeta.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.25}>
              {/* Trust signals */}
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { number: "2020", label: "Godišnjica otvaranja" },
                  { number: "500+", label: "Zadovoljnih kupaca" },
                  { number: "6 dana", label: "Radimo sedmično" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span
                      className="text-2xl sm:text-3xl font-800 text-[#8B1A1A]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="text-sm text-[#8B6355]"
                      style={{ fontFamily: "var(--font-crimson)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust badge */}
              <div className="inline-flex items-center gap-3 bg-[#F0EBE1] border border-[#2D5016]/20 px-5 py-3 rounded-xl">
                <span className="text-2xl">🌿</span>
                <p
                  className="text-[#2D5016] text-sm font-semibold"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  Prepoznatljivi u Podlugovima i okolici —<br />
                  Ilijaš, Breza, Visoko
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Image side */}
          <FadeIn direction="right" delay={0.1}>
            <div className="relative">
              {/* Main image */}
              <div className="relative h-80 sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/o-nama.jpg"
                  alt="Roselia Vrtni Centar – unutrašnjost prodavnice"
                  fill
                  className="object-cover warm-filter"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/30 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl px-5 py-4 border border-[#F0EBE1]">
                <p
                  className="text-[#8B1A1A] font-800 text-xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Pon – Sub
                </p>
                <p
                  className="text-[#5C4033] text-sm"
                  style={{ fontFamily: "var(--font-crimson)" }}
                >
                  08:00 – 17:00
                </p>
              </div>

              {/* Decorative dot pattern */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 opacity-30 pointer-events-none"
                aria-hidden="true"
              >
                <DotPattern />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function DotPattern() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={8 + col * 16}
            cy={8 + row * 16}
            r={2.5}
            fill="#8B1A1A"
          />
        ))
      )}
    </svg>
  );
}
