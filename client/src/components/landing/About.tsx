import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import iconVst from "@assets/VST_-_icone_@2x_1767450100386.png";
import patternBg from "@assets/bg_versato_dark_01_1767450100386.png";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-dark-blue p-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="bg-dark-blue rounded-xl p-10 md:p-16 flex items-center justify-center aspect-square relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-10 bg-repeat" 
                    style={{ 
                      backgroundImage: `url(${patternBg})`,
                      backgroundSize: '400px'
                    }}
                  />
                  <img src={iconVst} alt="Versato Icon" className="w-32 md:w-48 h-auto relative z-10" />
                  
                  {/* Decorative circles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/10 rounded-full" />
               </div>
            </motion.div>
            
            {/* Background Accent */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-secondary rounded-2xl -z-10" />
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Quem Somos</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                Pioneirismo em <br />
                <span className="text-primary">Steel Frame</span> no Piauí
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Versato Steel Frame é a primeira construtora especializada em Light Steel Frame (LSF) 
                da região. Nascemos com a missão de transformar o mercado da construção civil, 
                trazendo tecnologia, sustentabilidade e eficiência para obras residenciais e comerciais.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Com uma equipe de engenheiros altamente qualificados, entregamos obras com precisão 
                milimétrica, reduzindo desperdícios e garantindo prazos recordes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Precisão de Engenharia",
                  "Obras Sustentáveis",
                  "Rapidez na Execução",
                  "Isolamento Térmico e Acústico"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
