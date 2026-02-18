import { Clock, PiggyBank, Thermometer, Volume2, Maximize, Calculator, Leaf, Target } from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      icon: Clock,
      title: "Obra até 6x Mais Rápida",
      description: "Construção industrializada reduz drasticamente o tempo de obra. Canteiro limpo e organizado, sem desperdício."
    },
    {
      icon: PiggyBank,
      title: "Economia Real",
      description: "Estrutura leve = fundação mais simples e econômica. Zero desperdício de materiais. Economia com climatização."
    },
    {
      icon: Thermometer,
      title: "Conforto Térmico Superior",
      description: "Excelente isolamento térmico mantém a temperatura interna estável. Ideal para o clima quente de Teresina."
    },
    {
      icon: Volume2,
      title: "Isolamento Acústico",
      description: "Redução significativa de ruídos externos. Ambientes mais tranquilos e confortáveis."
    },
    {
      icon: Maximize,
      title: "Mais Área Útil",
      description: "Paredes mais finas que alvenaria convencional aumentam o espaço interno aproveitável."
    },
    {
      icon: Calculator,
      title: "Orçamento Previsível",
      description: "Orçamento preciso do início ao fim da obra. Sem surpresas ou custos extras inesperados."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Construção a seco, sem desperdício. Uso mínimo de água. Materiais 100% recicláveis."
    },
    {
      icon: Target,
      title: "Precisão Construtiva",
      description: "Estrutura industrializada fabricada sob medida. Acabamento perfeito garantido pela tecnologia."
    }
  ];

  return (
    <section id="vantagens" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-8 w-1 bg-primary rounded-full" />
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Vantagens</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Por que construir em Steel Frame?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia que une velocidade, economia e qualidade superior
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
