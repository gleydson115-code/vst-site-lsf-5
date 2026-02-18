import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, ArrowRight, MapPin } from "lucide-react";
import project1 from "@assets/generated_images/modern_luxury_house_project.png";
import project2 from "@assets/generated_images/modern_daycare_building_project.png";
import project3 from "@assets/generated_images/commercial_building_project.png";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Residência Família Silva",
    location: "Teresina, PI",
    category: "Residencial",
    area: "180m²",
    year: "2024",
    description: "Casa térrea com 3 suítes em Light Steel Frame. Projeto moderno com grandes vãos livres."
  },
  {
    id: 2,
    image: project2,
    title: "Creche Municipal",
    location: "Regeneração, PI",
    category: "Institucional",
    area: "320m²",
    year: "2024",
    description: "Creche modelo FNDE com estrutura LSF, entregue em 120 dias."
  },
  {
    id: 3,
    image: project3,
    title: "Centro Comercial Prime",
    location: "Teresina, PI",
    category: "Comercial",
    area: "450m²",
    year: "2024",
    description: "Edifício comercial de 2 pavimentos com fachada em vidro e estrutura mista."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const categories = ["Todos", "Residencial", "Institucional", "Comercial"];

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-8 w-1 bg-primary rounded-full" />
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Projetos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Obras entregues com excelência em Teresina e região
          </p>
        </div>

        <div className="flex justify-center gap-2 md:gap-8 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`pb-2 text-sm md:text-base font-medium transition-all ${
                filter === cat 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#1A1A2E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary font-bold text-xs uppercase mb-2">{project.category}</span>
                    <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm flex items-center gap-1 mb-4">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </p>
                    <Button variant="outline" size="sm" className="w-fit text-white border-white hover:bg-white hover:text-[#1A1A2E]">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
                 <DialogTitle className="sr-only">{project.title}</DialogTitle>
                 <DialogDescription className="sr-only">{project.description}</DialogDescription>
                 <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 space-y-6">
                      <div>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">
                          {project.category}
                        </span>
                        <h2 className="text-2xl font-bold mt-4 mb-2">{project.title}</h2>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4" /> {project.location}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
                        <div>
                          <p className="text-sm text-muted-foreground">Área Construída</p>
                          <p className="font-semibold">{project.area}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Ano de Entrega</p>
                          <p className="font-semibold">{project.year}</p>
                        </div>
                      </div>

                      <p className="text-foreground/80 leading-relaxed">
                        {project.description}
                      </p>

                      <Button className="w-full">
                        Quero um projeto como este
                      </Button>
                    </div>
                 </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
