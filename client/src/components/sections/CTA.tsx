import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pattern from "@assets/bg_versato_dark_01_1767448857044.png";

export default function CTA() {
  return (
    <section className="py-24 bg-[#1A1A2E] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${pattern})`, backgroundSize: 'cover' }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para construir com tecnologia?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Solicite um orçamento sem compromisso e descubra como o Steel Frame pode transformar seu projeto
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-gray-300 font-medium">
          <span className="flex items-center gap-2"><span className="text-primary">✓</span> Orçamento gratuito</span>
          <span className="flex items-center gap-2"><span className="text-primary">✓</span> Resposta em 24h</span>
          <span className="flex items-center gap-2"><span className="text-primary">✓</span> Atendimento personalizado</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="h-16 px-10 text-lg font-bold bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30">
            Solicite Orçamento Agora <ArrowRight className="ml-2" />
          </Button>
          <span className="text-gray-500 text-sm">ou ligue para (98) 98118-2870</span>
        </div>
      </div>
    </section>
  );
}
