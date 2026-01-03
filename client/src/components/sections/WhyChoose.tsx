import { Award, BadgeCheck, GraduationCap, Shield } from "lucide-react";
import detailImage from "@assets/generated_images/steel_frame_connection_detail.png";

export default function WhyChoose() {
  const differentials = [
    {
      icon: Award,
      title: "Pioneirismo Regional",
      text: "Primeira e principal construtora especializada em LSF no Piauí"
    },
    {
      icon: BadgeCheck,
      title: "Experiência Comprovada",
      text: "Projetos comerciais e residenciais de alto padrão entregues com sucesso"
    },
    {
      icon: GraduationCap,
      title: "Equipe Técnica Qualificada",
      text: "Engenheiro responsável com CREA ativo e formação especializada"
    },
    {
      icon: Shield,
      title: "Garantia de 20 Anos",
      text: "Garantia estrutural de duas décadas na estrutura metálica"
    }
  ];

  return (
    <section className="py-20 bg-[#1A1A2E] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative group order-2 md:order-1">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-lg group-hover:bg-primary/30 transition-colors" />
            <img 
              src={detailImage} 
              alt="Detalhe estrutural Steel Frame" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border border-white/10"
            />
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <span className="text-white/80 font-bold tracking-widest text-sm uppercase">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Por que escolher a Versato?</h2>
            </div>

            <div className="grid gap-4">
              {differentials.map((item, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
