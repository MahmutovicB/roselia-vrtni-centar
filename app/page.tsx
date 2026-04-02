import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ONama from "./components/sections/ONama";
import Usluge from "./components/sections/Usluge";
import Galerija from "./components/sections/Galerija";
import Kontakt from "./components/sections/Kontakt";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ONama />
        <Usluge />
        <Galerija />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
