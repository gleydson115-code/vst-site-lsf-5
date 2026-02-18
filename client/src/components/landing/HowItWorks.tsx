import { motion } from "framer-motion";
import { ClipboardList, PenTool, Hammer, Key } from "lucide-react";
import patternBg from "@assets/bg_versato_dark_01_1767450100386.png";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Planejamento",
    description: "Análise detalhada das necessidades e viabilidade do seu projeto.",
  },
  {
    icon: PenTool,
    title: "2. Projeto Estrutural",
    description: "Desenvolvimento do projeto de engenharia em 3D com precisão milimétrica.",
  },
  {
    icon: Hammer,
    title: "3. Execução e Montagem",
    description: "Fabricação e montagem rápida da estrutura e fechamentos.",
  },
  {
    icon: Key,
    title: "4. Entrega",
    description: "Obra finalizada, limpa e pronta para uso em tempo recorde.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-dark-blue relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: `url(${patternBg})`,
          backgroundSize: '400px',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Metodologia</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Como <br />Funciona
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Nosso processo é otimizado para garantir eficiência máxima do início ao fim. 
                Transformamos o complexo em simples através da tecnologia.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className="text-primary mb-4">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
