import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contents from "@/components/Contents";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div className="section-divider"></div>
      <Contents />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}
