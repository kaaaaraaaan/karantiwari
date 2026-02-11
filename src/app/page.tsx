import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Education } from "@/components/Education";
import { Portfolio } from "@/components/Portfolio";
import { Publications } from "@/components/Publications";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Education />
      <Portfolio />
      <Publications />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
