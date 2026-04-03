import Image from "next/image";
import FadeIn from "../ui/FadeIn";

// Add your partners here.
// - logo: place the logo file in /public/images/partneri/ (PNG or SVG, ideally transparent bg)
// - name: shown as alt text and tooltip
// - href: optional — links to their website (opens in new tab)
const partners = [
  {
    name: "Partner 1",
    logo: "/images/partneri/dewalt.png",
    href: "",
  },
  {
    name: "Partner 3",
    logo: "/images/partneri/scheppach.png",
    href: "",
  },
  {
    name: "Partner 4",
    logo: "/images/partneri/makita-logo.jpg",
    href: "",
  },
  {
    name: "Partner 5",
    logo: "/images/partneri/milwaukee.jpeg",
    href: "",
  },
  {
    name: "Partner 6",
    logo: "/images/partneri/stihl.svg",
    href: "",
  }
];

export default function Partneri() {
  return (
    <section className="bg-[#FAF7F2] py-14 sm:py-18 border-t border-[#F0EBE1]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <p
            className="text-center text-sm uppercase tracking-widest text-[#8B6355] mb-10"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Naši partneri i prijatelji
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {partners.map((partner) => {
              const inner = (
                <div
                  key={partner.name}
                  className="relative h-10 w-32 sm:h-12 sm:w-36 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="144px"
                  />
                </div>
              );

              return partner.href ? (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                >
                  {inner}
                </a>
              ) : (
                <div key={partner.name}>{inner}</div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
