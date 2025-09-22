import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ninja-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/a60216fb-d9dc-4bf9-82cc-d6fef4223ae6.png" 
                alt="CX Ninjas Logo" 
                className="w-14 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CX Ninjas
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformamos a experiência do cliente através de estratégias ninja de 
              engajamento e consultoria especializada.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-ninja-purple transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-ninja-purple transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-ninja-purple transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-ninja-purple" />
                <span className="text-muted-foreground text-sm">contato@tecnasistemas.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-ninja-purple" />
                <span className="text-muted-foreground text-sm">+55 (31) 3181-1515</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CX Ninjas. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-muted-foreground hover:text-ninja-purple text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-ninja-purple text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;