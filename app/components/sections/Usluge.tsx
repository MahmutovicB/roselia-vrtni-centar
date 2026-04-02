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
      "Kvalitetno sjeme povrća, trave i cvijeća. Organska i mineralna gnojiva za zdrav rast biljaka.",
    accent: "#4A7A25",
  },
  {
    emoji: "🔧",
    title: "Vrtni alat i oprema",
    description:
      "Profesionalni i hobi alati za sve vrtne radove — kopanje, sadnju, zalijevanje i njegu.",
    accent: "#5C4033",
  },
  {
    emoji: "🚜",
    title: "Radne mašine",
    description:
      "Motokultivatori, kosilice, trimeri i ostala mehanizacija za efikasan rad u vrtu i na parceli.",
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
  return (
    <div className="group bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E8E0D5] hover:border-[#8B1A1A]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Emoji icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${accent}15` }}
      >
        {emoji}
      </div>

      {/* Bottom accent line */}
      <div
        className="h-0.5 w-8 rounded-full mb-4 transition-all duration-300 group-hover:w-14"
        style={{ backgroundColor: accent }}
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
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}
