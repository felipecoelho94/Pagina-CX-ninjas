import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="CX Ninjas Logo" 
            className="w-64 h-32 object-contain"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground hover:text-ninja-purple transition-colors">
            Serviços
          </a>
          <a href="#about" className="text-foreground hover:text-ninja-purple transition-colors">
            Sobre
          </a>
          <a href="/health-check" className="text-foreground hover:text-ninja-purple transition-colors">
            Health Check
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="#contact">
            <Button variant="ninja-outline" size="sm" className="hidden md:inline-flex">
               Fale com nossa equipe
             </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;