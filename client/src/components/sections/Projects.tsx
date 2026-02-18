import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, ArrowRight, MapPin, Clock, Ruler, ShieldCheck } from "lucide-react";

// Import project images from attached_assets
import ibiapina1 from "@assets/image_1767451374592.png";
import ibiapina2 from "@assets/image_1767451013444.png";
import ibiapina3 from "@assets/image_1767451673635.png";
import vilar1 from "@assets/image_1767452155688.png";
import alphaville1 from "@assets/image_1767451482073.png";
import casacor1 from "@assets/image_1767453018909.png";
import burger45 from "@assets/image_1767453813377.png";
import aldebaranGaragem from "@assets/image_1767453832386.png";
import aldebaranResidencia from "@assets/Gemini_Generated_Image_3pmpxk3pmpxk3pmp_(1)_1767453839531.png";

const projects = [
  {
    id: 1,
    image: ibiapina1,
    gallery: [ibiapina2, ibiapina3],
    title: "Parede Corta-Fogo – Grupo Ibiapina",
    location: "Teresina, PI",
    category: "Comercial",
    area: "1000m²",
    year: "2024",
    description: "Parede corta-fogo em LSF com TRRF de 120 min, executada em galpão em operação. A solução evitou escavações, reduziu o custo frente à alvenaria e acelerou a regularização junto ao Corpo de Bombeiros.",
    details: [
      "Divisória corta-fogo em galpão comercial",
      "TRRF: 120 minutos",
      "Altura: 16,5m",
      "Consumo de aço leve: 12.000kg",
      "Revestimentos: Glasroc X e Drywall RF 15mm duplo"
    ]
  },
  {
    id: 2,
    image: vilar1,
    title: "Fachada Hospitalar – Vilar Hospital de Olhos",
    location: "Teresina, PI",
    category: "Institucional",
    area: "Fachada Externa",
    year: "2024",
    description: "Fachada executada em LSF com placas Glasroc X para minimizar impacto na operação hospitalar. A solução evitou andaimes e resíduos, garantindo isolamento térmico com obra limpa.",
    details: [
      "Execução sem interferência na operação da unidade",
      "Revestimentos: Glasroc X e Drywall ST 12.5",
      "Volume mínimo de resíduos (obra seca)",
      "Isolamento térmico superior"
    ]
  },
  {
    id: 3,
    image: alphaville1,
    title: "Ampliação Residencial – Alphaville",
    location: "Teresina, PI",
    category: "Residencial",
    area: "Novo Quarto",
    year: "2024",
    description: "Ampliação de quarto executada com LSF em residência já habitada. Com laje seca, isolamento duplo em lã de vidro e telha termoacústica, entregou conforto térmico superior e obra silenciosa.",
    details: [
      "Sem necessidade de reforço estrutural ou demolições",
      "Revestimentos: Glasroc X e Drywall Performa 12.5mm duplo",
      "Isolamento: Lã de vidro 100 mm",
      "Obra rápida, limpa e silenciosa"
    ]
  },
  {
    id: 4,
    image: casacor1,
    title: "Estande CASACOR|PI 2024",
    location: "Teresina, PI",
    category: "Comercial",
    area: "Estande de Evento",
    year: "2024",
    description: "Executado em Light Steel Framing em apenas 20 dias. A solução seca permitiu montagem organizada com mínimo entulho. A placa cimentícia aparente valorizou o conceito estético industrial.",
    details: [
      "Tempo de execução: ~20 dias",
      "Logística compacta (obra seca)",
      "Acabamento: Placa cimentícia aparente",
      "Projeto premiado de alto padrão"
    ]
  },
  {
    id: 5,
    image: burger45,
    title: "Mezanino – 45 Burguer",
    location: "Teresina, PI",
    category: "Comercial",
    area: "Mezanino Comercial",
    year: "2024",
    description: "Mezanino em LSF com perfis de 90 mm e laje seca em OSB. Estrutura leve permitiu montagem rápida em espaço reduzido, com escada integrada ao sistema metálico.",
    details: [
      "Execução rápida em espaço reduzido",
      "Estrutura 100% em Light Steel Framing",
      "Impacto mínimo na operação do restaurante",
      "Laje seca em OSB"
    ]
  },
  {
    id: 6,
    image: aldebaranGaragem,
    title: "Garagem Residencial – Aldebaran Leste",
    location: "Teresina, PI",
    category: "Residencial",
    area: "Garagem Anexa",
    year: "A Iniciar",
    description: "Execução de garagem em LSF com perfis de 90 e 140 mm. Painéis pré-fabricados fora do canteiro para evitar sujeira. Estrutura com balanço arquitetônico e vedação em Glasroc X.",
    details: [
      "Balanço estrutural moderno",
      "Montagem rápida e obra limpa",
      "Painéis pré-fabricados",
      "Mínimo impacto à rotina da família"
    ]
  },
  {
    id: 7,
    image: aldebaranResidencia,
    title: "Residência Alto Padrão – Aldebaran Ville",
    location: "Teresina, PI",
    category: "Residencial",
    area: "341,38m²",
    year: "A Iniciar",
    description: "Residência de alto padrão com 341,38m² em LSF. Escolhido pela agilidade, limpeza e eficiência. Estrutura industrializada com alto desempenho térmico e sustentabilidade.",
    details: [
      "Consumo de aço: ~11.000 kg",
      "Alto desempenho térmico",
      "Redução significativa de tempo de obra",
      "Precisão e sustentabilidade"
    ]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const categories = ["Todos", "Residencial", "Comercial", "Institucional"];

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-8 w-1 bg-primary rounded-full" />
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Portfólio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Obras de Excelência</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos projetos executados com a tecnologia Light Steel Frame no Piauí
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
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#1A1A2E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary font-bold text-xs uppercase mb-2">{project.category}</span>
                    <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">{project.title}</h3>
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
                    <div className="h-72 md:h-auto bg-muted">
                      <div className="grid grid-cols-2 gap-2 h-full p-2">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover rounded-lg col-span-2"
                        />
                        {project.gallery && project.gallery.map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`${project.title} - ${idx + 2}`} 
                            className="w-full h-40 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-8 space-y-6 max-h-[90vh] overflow-y-auto">
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
                        <div className="flex items-center gap-2">
                          <Ruler className="w-4 h-4 text-primary" />
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Dimensão</p>
                            <p className="text-sm font-semibold">{project.area}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Ano / Status</p>
                            <p className="text-sm font-semibold">{project.year}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-primary" /> Destaques Técnicos
                        </h4>
                        <ul className="grid gap-2">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-sm text-foreground/80 leading-relaxed italic border-l-2 border-primary/30 pl-4">
                        {project.description}
                      </p>

                      <Button className="w-full group" asChild>
                        <a href="#contato">
                          Quero um projeto como este
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
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
