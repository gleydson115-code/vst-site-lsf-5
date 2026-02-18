import logoWhite from "@assets/vst-logo-2x-bco_1767450100387.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darker-blue text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img src={logoWhite} alt="Versato" className="w-40 mb-6" />
            <p className="text-white/60 mb-6 leading-relaxed">
              A primeira construtora especializada em Light Steel Frame do Piauí. 
              Qualidade, precisão e compromisso com o seu sonho.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#vantagens" className="hover:text-primary transition-colors">Vantagens Steel Frame</a></li>
              <li><a href="#projetos" className="hover:text-primary transition-colors">Nossos Projetos</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Projetos Residenciais</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Obras Comerciais</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reformas e Ampliações</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoria em LSF</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Horário de Atendimento</h4>
            <ul className="space-y-3 text-white/60">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
              <li className="pt-4">
                <span className="block text-white font-medium mb-1">Dúvidas?</span>
                contato@versatolsf.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Versato Steel Frame. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
