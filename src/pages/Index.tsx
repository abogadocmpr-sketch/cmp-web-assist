import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.jpg";

const Index = () => (
  <main className="relative">
    {/* Watermark de fondo */}
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
    >
      <img
        src={logo}
        alt=""
        className="w-[60vw] max-w-[700px] opacity-[0.04] select-none"
      />
    </div>
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Contact />
      <Footer />
    </div>
  </main>
);

export default Index;
