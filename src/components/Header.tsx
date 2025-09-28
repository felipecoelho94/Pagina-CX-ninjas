import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (section: string) => {
    // Fecha o menu mobile ao navegar
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      // Se já estamos na página principal, apenas faz scroll para a seção
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estamos em outra página, navega para a página principal e depois para a seção
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const handleMobileNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button onClick={handleLogoClick} className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="CX Ninjas Logo" 
            className="w-64 h-32 object-contain"
          />
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavigation('services')} 
            className="text-foreground hover:text-ninja-purple transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => handleNavigation('about')} 
            className="text-foreground hover:text-ninja-purple transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => navigate('/health-check')} 
            className="text-foreground hover:text-ninja-purple transition-colors"
          >
            Health Check
          </button>
          <button 
            onClick={() => navigate('/calculadora-custo')} 
            className="text-foreground hover:text-ninja-purple transition-colors"
          >
            Calculadora de Custo
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ninja-outline" 
            size="sm" 
            className="hidden md:inline-flex"
            onClick={() => handleNavigation('contact')}
          >
            Fale com nossa equipe
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden transition-all duration-200 touch-manipulation active:scale-95 active:bg-white/20"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[88px] z-40 bg-background border-t border-border shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-200">
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              <button 
                 onClick={() => handleNavigation('services')} 
                 className="text-left text-lg font-semibold text-foreground hover:text-ninja-purple hover:bg-ninja-purple/5 transition-colors py-4 border-b border-border active:bg-ninja-purple/10 active:scale-95 transition-all duration-200 touch-manipulation rounded-md px-3"
               >
                 Serviços
               </button>
               <button 
                 onClick={() => handleNavigation('about')} 
                 className="text-left text-lg font-semibold text-foreground hover:text-ninja-purple hover:bg-ninja-purple/5 transition-colors py-4 border-b border-border active:bg-ninja-purple/10 active:scale-95 transition-all duration-200 touch-manipulation rounded-md px-3"
               >
                 Sobre
               </button>
               <button 
                 onClick={() => handleMobileNavigation('/health-check')} 
                 className="text-left text-lg font-semibold text-foreground hover:text-ninja-purple hover:bg-ninja-purple/5 transition-colors py-4 border-b border-border active:bg-ninja-purple/10 active:scale-95 transition-all duration-200 touch-manipulation rounded-md px-3"
               >
                 Health Check
               </button>
               <button 
                 onClick={() => handleMobileNavigation('/calculadora-custo')} 
                 className="text-left text-lg font-semibold text-foreground hover:text-ninja-purple hover:bg-ninja-purple/5 transition-colors py-4 border-b border-border active:bg-ninja-purple/10 active:scale-95 transition-all duration-200 touch-manipulation rounded-md px-3"
               >
                 Calculadora de Custo
               </button>
              <div className="pt-4">
                <Button 
                  variant="ninja-outline" 
                  size="lg" 
                  className="w-full text-lg active:bg-ninja-purple/10 active:scale-95 transition-all duration-200 touch-manipulation"
                  onClick={() => handleNavigation('contact')}
                >
                  Fale com nossa equipe
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;