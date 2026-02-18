import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import patternBg from "@assets/bg_versato_dark_01_1767450100386.png";
import heroImage from "@assets/stock_images/luxury_modern_house__da1ef9d1.jpg"; // Using one of the stock images for overlay

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark-blue">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Pattern Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `url(${patternBg})`,
            backgroundSize: '800px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue/95 via-dark-blue/90 to-darker-blue/90 z-10" />
        
        {/* Subtle Image Overlay for depth */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay z-0"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              Inovação em Construção Civil
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            O Futuro da Construção <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
              Chegou ao Piauí
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Especialistas em Light Steel Frame. Projetos residenciais e comerciais 
            executados com precisão de engenharia, rapidez e sustentabilidade.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white text-lg font-bold px-8 py-6 h-auto shadow-[0_4px_14px_rgba(0,102,204,0.4)] hover:shadow-[0_6px_20px_rgba(0,102,204,0.5)] transition-all transform hover:-translate-y-1"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Iniciar Meu Projeto
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent text-lg font-medium px-8 py-6 h-auto backdrop-blur-sm"
              onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
