import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Advantages from "@/components/landing/Advantages";
import HowItWorks from "@/components/landing/HowItWorks";
import Projects from "@/components/landing/Projects";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Advantages />
        <HowItWorks />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
