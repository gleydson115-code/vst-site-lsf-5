import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@assets/vst-logo-2x-bco_1767448844183.png";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1A] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <img src={logo} alt="Versato Steel Frame" className="h-10 w-auto opacity-90" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Construindo o futuro com tecnologia e precisão. Líderes em construção a seco no Piauí.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:bg-white/5 p-2 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:bg-white/5 p-2 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:bg-white/5 p-2 rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:bg-white/5 p-2 rounded-full">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Home</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors block py-1">Sobre Nós</a></li>
              <li><a href="#vantagens" className="hover:text-primary transition-colors block py-1">Vantagens</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors block py-1">Como Funciona</a></li>
              <li><a href="#projetos" className="hover:text-primary transition-colors block py-1">Projetos</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors block py-1">FAQ</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors block py-1">Contato</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Av. Jóquei Clube, 2150 - Sala 04 - Jóquei,<br />Teresina - PI, 64049-240</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(86) 99861-7153</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contato@versato.com.br" className="hover:text-white transition-colors">contato@versato.com.br</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors block py-1">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Versato Construtora. Todos os direitos reservados.</p>
          <div className="text-center md:text-right">
            <p>CNPJ: 50.514.699/0001-86</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
