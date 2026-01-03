import wallImage from "@assets/generated_images/realistic_exploded_view_of_steel_frame_wall_layers.png";

export default function WallComposition() {
  const layers = [
    "Gesso acartonado (drywall)",
    "Isolante termoacústico",
    "Estrutura de aço galvanizado",
    "OSB (Oriented Strand Board)",
    "Manta hidrófuga",
    "EPS ou placa cimentícia",
    "Tela de reforço",
    "Argamassa",
    "Acabamento externo"
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                 <img 
                  src={wallImage} 
                  alt="Camadas Parede Steel Frame" 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
                <p className="text-xs text-muted-foreground mt-4 italic text-center">
                  * A composição da parede varia de acordo com o custo e exigências do projeto.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-xl mb-6">Camadas do Sistema</h3>
                <div className="space-y-0">
                  {layers.map((layer, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100 last:border-0">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-sm">
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
