import { motion } from "framer-motion";
import { Timer, Leaf, ShieldCheck, Ruler, DollarSign, Thermometer } from "lucide-react";
import { cn } from "@/lib/utils";

const advantages = [
  {
    icon: Timer,
    title: "Rapidez na Execução",
    description: "Redução de até 60% no tempo de obra comparado à alvenaria convencional.",
  },
  {
    icon: Ruler,
    title: "Precisão Milimétrica",
    description: "Estrutura industrializada com tolerância zero para erros e improvisos.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Obra limpa, com geração mínima de resíduos e baixo consumo de água.",
  },
  {
    icon: Thermometer,
    title: "Conforto Térmico",
    description: "Desempenho superior em isolamento térmico e acústico para ambientes internos.",
  },
  {
    icon: DollarSign,
    title: "Orçamento Definido",
    description: "Sem surpresas no custo final. O que é orçado é exatamente o que é executado.",
  },
  {
    icon: ShieldCheck,
    title: "Durabilidade",
    description: "Aço galvanizado de alta resistência com garantia estrutural prolongada.",
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-24 bg-secondary/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Vantagens</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Por que escolher <br />
            <span className="text-primary">Light Steel Frame?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O sistema construtivo mais moderno do mundo, agora disponível para o seu projeto no Piauí.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
