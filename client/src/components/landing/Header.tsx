import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoWhite from "@assets/vst-logo-2x-bco_1767450100387.png";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Sobre", href: "#sobre" },
  { name: "Vantagens", href: "#vantagens" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-dark-blue/90 backdrop-blur-md border-white/10 py-3 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-10 block w-40 md:w-48">
            <img 
              src={logoWhite} 
              alt="Versato Steel Frame" 
              className="w-full h-auto object-contain"
            />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="bg-primary hover:bg-primary-hover text-white font-bold rounded-md px-6 shadow-[0_4px_14px_rgba(0,102,204,0.25)] hover:shadow-[0_6px_20px_rgba(0,102,204,0.35)] transition-all transform hover:-translate-y-0.5"
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
          >
            Solicite Orçamento
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-dark-blue border-l border-white/10 text-white w-[300px]">
            <div className="flex flex-col gap-8 mt-10">
              <div className="w-32 mx-auto mb-4">
                <img 
                  src={logoWhite} 
                  alt="Versato Steel Frame" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary-hover mt-4"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                Solicite Orçamento
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
