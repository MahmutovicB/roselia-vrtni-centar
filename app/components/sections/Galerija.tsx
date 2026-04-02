import Image from "next/image";
import FadeIn from "../ui/FadeIn";

// Replace these with actual client photos placed in /public/images/galerija/
// Dimensions optimized for a 3-col masonry-style grid
const photos = [
  { src: "/images/galerija/01.jpg", alt: "Sadnice cvijeća u centru", span: "row-span-2" },
  { src: "/images/galerija/02.jpg", alt: "Ukrasno grmlje i zelenilo", span: "" },
  { src: "/images/galerija/03.jpg", alt: "Vrtni alat i oprema", span: "" },
  { src: "/images/galerija/04.jpg", alt: "Sezonske sadnice proljeće", span: "" },
  { src: "/images/galerija/05.jpg", alt: "Lončanice i dekorativne tegle", span: "row-span-2" },
  { src: "/images/galerija/06.jpg", alt: "Ruže i cvijeće", span: "" },
  { src: "/images/galerija/07.jpg", alt: "Roselia vrtni centar izlog", span: "" },
  { src: "/images/galerija/08.jpg", alt: "Sjeme i gnojiva asortiman", span: "" },
];

// Placeholder gradient colors while waiting for real photos
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
  return (
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

        {/* Photo grid — CSS grid with auto rows */}
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
  );
}

function GalleryItem({
  photo,
  placeholderClass,
}: {
  photo: { src: string; alt: string; span: string };
  placeholderClass: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl group cursor-pointer h-full`}
    >
      {/* Gradient placeholder visible while image loads or if image missing */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${placeholderClass} opacity-70`}
      />

      {/* Actual image */}
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover warm-filter transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/25 transition-colors duration-300" />
    </div>
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
