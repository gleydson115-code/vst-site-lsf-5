import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@assets/vst-logo-2x-bco_1767448844183.png";
import logoDark from "@assets/vst-logo-dark-horiz_1771445183074.png";

import vst_logo_grey_horiz from "@assets/vst-logo-grey-horiz.png";

import VST___HORIZONTAL_2x from "@assets/VST - HORIZONTAL@2x.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src={VST___HORIZONTAL_2x} 
            alt="Versato Steel Frame" 
            className="h-8 md:h-10 w-auto transition-all duration-300" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Sobre", "Vantagens", "Como Funciona", "Projetos", "Contato", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold">
            Solicite Orçamento
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-4 flex flex-col space-y-4 shadow-lg animate-in slide-in-from-top-5">
          {["Home", "Sobre", "Vantagens", "Como Funciona", "Projetos", "Contato", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground font-medium py-2 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full bg-primary text-white font-bold">
            Solicite Orçamento
          </Button>
        </div>
      )}
    </nav>
  );
}
