import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "O Steel Frame é seguro? Aguenta ventos fortes e tempestades?",
      a: "Sim, absolutamente. A estrutura de aço galvanizado é calculada por softwares especializados para suportar cargas de vento muito superiores às exigidas pelas normas brasileiras. O sistema é amplamente utilizado em regiões de furacões nos EUA e Japão."
    },
    {
      q: "Quanto tempo demora uma construção em Steel Frame?",
      a: "Uma construção em Steel Frame pode ser até 6x mais rápida que a alvenaria convencional. Uma casa de 150m² pode ficar pronta em 90 a 120 dias, dependendo da complexidade do projeto."
    },
    {
      q: "O Steel Frame é mais caro que a construção tradicional?",
      a: "O custo final é competitivo. Embora o material estrutural possa custar mais, há economia significativa em fundação, mão de obra, desperdício zero e retorno de investimento mais rápido."
    },
    {
      q: "A estrutura de aço não enferruja?",
      a: "Não. Utilizamos aço galvanizado com tratamento anticorrosivo que garante durabilidade superior a 100 anos. O revestimento de zinco protege o aço contra oxidação."
    },
    {
      q: "Posso fazer qualquer tipo de acabamento em Steel Frame?",
      a: "Sim! Steel Frame aceita todos os tipos de acabamento: pintura, textura, porcelanato, pedras naturais, madeira."
    },
    {
      q: "O Steel Frame funciona bem no clima quente de Teresina?",
      a: "Sim, é ideal! O sistema possui excelente isolamento térmico, mantendo a temperatura interna estável e reduzindo significativamente o uso de ar-condicionado."
    },
    {
      q: "Qual a garantia oferecida pela Versato?",
      a: "Oferecemos garantia estrutural de 20 anos na estrutura metálica, além das garantias legais para outros sistemas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-8 w-1 bg-primary rounded-full" />
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Dúvidas Frequentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Perguntas sobre Steel Frame</h2>
            <p className="text-lg text-muted-foreground">
              Tire suas principais dúvidas sobre a tecnologia que está revolucionando a construção civil.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-border rounded-xl px-4">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
