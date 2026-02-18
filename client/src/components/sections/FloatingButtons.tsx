import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import whatsappIcon from "@assets/social_1771444604998.png";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <a
        href="https://wa.me/5586998617153?text=Olá! Gostaria de um orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group rounded-full overflow-hidden"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-full h-full object-contain"
        />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Fale Conosco
        </span>
      </a>
    </div>
  );
}
