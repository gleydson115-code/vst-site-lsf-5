import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import stock images
import project1 from "@assets/stock_images/luxury_modern_house__291f579e.jpg";
import project2 from "@assets/stock_images/luxury_modern_house__4fc78902.jpg";
import project3 from "@assets/stock_images/luxury_modern_house__b749e662.jpg";

const projects = [
  {
    image: project1,
    title: "Residência Alphaville",
    category: "Residencial de Alto Padrão",
    location: "Teresina, PI"
  },
  {
    image: project2,
    title: "Centro Comercial Norte",
    category: "Comercial",
    location: "Teresina, PI"
  },
  {
    image: project3,
    title: "Casa de Campo",
    category: "Residencial",
    location: "Altos, PI"
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              Projetos em Destaque
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            Ver Todos os Projetos <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                <div className="absolute inset-0 bg-dark-blue/20 group-hover:bg-dark-blue/0 transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/80 text-sm block mb-1">{project.location}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full gap-2">
            Ver Todos os Projetos <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
