import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/modern_steel_frame_house_exterior.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#1A1A2E]">
      {/* Background Gradient & Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#1A1A2E]/90 to-transparent z-10 w-full md:w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent z-10 opacity-80" />
        <img
          src={heroImage}
          alt="Modern Steel Frame House"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            O Futuro da Construção <span className="text-primary">Chegou ao Piauí</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Somos a primeira construtora especializada em Light Steel Frame no Piauí. 
            Projetos residenciais de alto padrão e obras municipais entregues com 
            precisão, sustentabilidade e garantia de 20 anos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 hover:-translate-y-1 transition-all shadow-lg shadow-primary/25">
              Solicite Orçamento Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 hover:border-white transition-all">
              Conheça Nossos Projetos
            </Button>
          </div>
        </div>

        {/* Right side is intentionally empty to show the background image through, 
            but on mobile/tablet we might want to show something or just let the text take over */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
