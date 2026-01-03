import { FileText, Layers, Box, Zap, Paintbrush, Key } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Projeto",
      description: "Análise do terreno e desenvolvimento do projeto estrutural personalizado"
    },
    {
      number: "02",
      icon: Layers,
      title: "Fundação",
      description: "Execução do radier ou sapatas — fundação simplificada e econômica"
    },
    {
      number: "03",
      icon: Box,
      title: "Estrutura LSF",
      description: "Montagem dos painéis de aço galvanizado conforme projeto"
    },
    {
      number: "04",
      icon: Zap,
      title: "Instalações",
      description: "Execução das instalações elétricas e hidráulicas embutidas"
    },
    {
      number: "05",
      icon: Paintbrush,
      title: "Acabamentos",
      description: "Revestimentos, pintura e acabamentos finais premium"
    },
    {
      number: "06",
      icon: Key,
      title: "Entrega",
      description: "Vistoria final e entrega das chaves do seu imóvel"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-8 w-1 bg-primary rounded-full" />
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Processo Construtivo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Como Funciona a Construção</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do projeto à entrega das chaves em tempo recorde
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10" />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-background md:bg-transparent pt-4 md:pt-0">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 shadow-lg flex flex-col items-center justify-center mb-6 relative group">
                  <span className="text-xs font-bold text-gray-400 absolute top-2">{step.number}</span>
                  <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
