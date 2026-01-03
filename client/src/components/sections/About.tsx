import { Check } from "lucide-react";
import aboutImage from "@assets/generated_images/construction_team_working_on_steel_frame.png";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 order-2 md:order-1">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-primary rounded-full" />
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Sobre Nós</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Quem Somos
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              A Versato é uma construtora especializada em Light Steel Frame, com sede em Teresina/PI. 
              Somos pioneiros na aplicação dessa tecnologia construtiva na região, trazendo para o Nordeste 
              o que há de mais moderno em construção industrializada.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa missão é transformar a forma como se constrói no Brasil, oferecendo obras mais rápidas, 
              precisas e sustentáveis.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-6">O Que Fazemos</h3>
              <ul className="space-y-4">
                {[
                  "Projetos residenciais de alto padrão",
                  "Obras municipais (escolas, creches)",
                  "Construções comerciais e galpões",
                  "Ampliações e reformas com LSF",
                  "Consultoria técnica em Steel Frame"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative order-1 md:order-2 group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3 scale-105 group-hover:rotate-2 transition-transform duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={aboutImage} 
                alt="Equipe Versato em obra" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg p-4 rounded-lg max-w-[200px] border border-border/50">
                <p className="text-primary font-bold text-3xl mb-1">100%</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Precisão Industrial em cada detalhe
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
