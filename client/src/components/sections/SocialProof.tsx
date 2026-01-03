import { ShieldCheck, Building2, Ruler, MapPin } from "lucide-react";

export default function SocialProof() {
  const stats = [
    {
      icon: ShieldCheck,
      text: "Parceiro Certificado Open Finance",
    },
    {
      icon: Building2,
      text: "10+ Projetos Entregues",
    },
    {
      icon: Ruler,
      text: "500+ m² Construídos",
    },
    {
      icon: MapPin,
      text: "Atuação PI, MA e Nordeste",
    },
  ];

  return (
    <section className="py-10 bg-secondary border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left group cursor-default"
            >
              <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm md:text-base font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
