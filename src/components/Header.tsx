import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/a60216fb-d9dc-4bf9-82cc-d6fef4223ae6.png" 
            alt="CX Ninjas Logo" 
            className="w-24 h-20 object-contain"
          />
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CX Ninjas
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-ninja-purple transition-colors">
            Início
          </a>
          <a href="#services" className="text-foreground hover:text-ninja-purple transition-colors">
            Serviços
          </a>
          <a href="#about" className="text-foreground hover:text-ninja-purple transition-colors">
            Sobre
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