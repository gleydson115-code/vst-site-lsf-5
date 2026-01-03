import wallImage from "@assets/image_1767454442595.png";

export default function WallComposition() {
  const layers = [
    "Elevação dos painéis de aço galvanizado",
    "OSB Externo (Oriented Strand Board)",
    "Manta Hidrófuga",
    "EPS ou Chapa Cimentícia",
    "Argamassa",
    "Tela de Reforço",
    "Argamassa",
    "Revestimento (Textura/Pintura/Porcelanato)",
    "Isolante Termoacústico (Lã de rocha/vidro/PET)",
    "OSB (Oriented Strand Board)",
    "Gesso Acartonado"
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Composição</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Anatomia de uma Parede Steel Frame</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            <div className="flex flex-col gap-10">
              <div className="relative w-full max-w-4xl mx-auto">
                 <img 
                  src={wallImage} 
                  alt="Camadas Parede Steel Frame" 
                  className="w-full h-auto rounded-lg mix-blend-multiply"
                />
                <p className="text-xs text-muted-foreground mt-4 italic text-center">
                  * A composição da parede varia de acordo com o custo e exigências do projeto.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="font-bold text-xl text-center md:text-left border-b pb-4">Camadas do Sistema</h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
                  {layers.map((layer, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100 last:border-0 md:border-b">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </span>
                      <span className="font-medium text-foreground/80">{layer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
