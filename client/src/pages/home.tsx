import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import About from "@/components/sections/About";
import Advantages from "@/components/sections/Advantages";
import WhyChoose from "@/components/sections/WhyChoose";
import HowItWorks from "@/components/sections/HowItWorks";
import WallComposition from "@/components/sections/WallComposition";
import Projects from "@/components/sections/Projects";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/sections/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Advantages />
        <WhyChoose />
        <HowItWorks />
        <WallComposition />
        <Projects />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
