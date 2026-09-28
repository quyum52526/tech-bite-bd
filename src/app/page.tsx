import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
