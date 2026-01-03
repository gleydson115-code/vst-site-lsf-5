import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div className="space-y-4">
               <div className="flex items-center gap-2">
                <span className="h-8 w-1 bg-primary rounded-full" />
                <span className="text-primary font-bold tracking-widest text-sm uppercase">Contato</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Fale Conosco</h2>
              <p className="text-lg text-muted-foreground">
                Estamos prontos para tirar suas dúvidas e começar seu projeto
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">(98) 98118-2870</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">E-mail</h3>
                  <p className="text-muted-foreground">contato@versato.com.br</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Localização</h3>
                  <p className="text-muted-foreground">Av. Universitária, 750 - Fátima<br/>Teresina - PI</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome Completo</label>
                <Input placeholder="Digite seu nome" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-mail</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefone / WhatsApp</label>
                  <Input placeholder="(99) 99999-9999" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                  <label className="text-sm font-medium">Cidade</label>
                  <Input placeholder="Sua cidade" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo de Projeto</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residencial">Residencial</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="institucional">Institucional</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea placeholder="Conte um pouco sobre seu projeto..." className="h-32" />
              </div>

              <Button type="submit" className="w-full text-lg font-bold h-12">
                Enviar Mensagem
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Seus dados estão seguros conosco.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
