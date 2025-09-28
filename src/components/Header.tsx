import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const handleMobileNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ninja-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">CX</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
              CX Ninjas
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("/")}
              className={`text-white hover:text-ninja-purple transition-colors duration-200 ${
                isActive("/") ? "text-ninja-purple" : ""
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavigation("/services")}
              className={`text-white hover:text-ninja-purple transition-colors duration-200 ${
                isActive("/services") ? "text-ninja-purple" : ""
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className={`text-white hover:text-ninja-purple transition-colors duration-200 ${
                isActive("/about") ? "text-ninja-purple" : "
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavigation("/health-check")}
              className={`text-white hover:text-ninja-purple transition-colors duration-200 ${
                isActive("/health-check") ? "text-ninja-purple" : "
              }`}
            >
              Health Check
            </button>
            <button
              onClick={() => handleNavigation("/calculadora")}
              className={`text-white hover:text-ninja-purple transition-colors duration-200 ${
                isActive("/calculadora") ? "text-ninja-purple" : "
              }`}
            >
              Calculadora de Custo
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              variant="ninja" 
              size="lg"
              onClick={() => handleNavigation("/contact")}
            >
              Fale com nossa equipe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10 active:bg-white/20 active:scale-95 transition-all duration-200"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border">
            <nav className="flex flex-col">
              <button
                onClick={() => handleMobileNavigation("/services")}
                className={`text-left px-3 py-4 text-foreground hover:bg-ninja-purple/5 active:bg-ninja-purple/10 transition-colors duration-200 font-semibold border-b border-border ${
                  isActive("/services") ? "text-ninja-purple bg-ninja-purple/5" : ""
                }`}
              >
                Serviços
              </button>
              <button
                onClick={() => handleMobileNavigation("/about")}
                className={`text-left px-3 py-4 text-foreground hover:bg-ninja-purple/5 active:bg-ninja-purple/10 transition-colors duration-200 font-semibold border-b border-border ${
                  isActive("/about") ? "text-ninja-purple bg-ninja-purple/5" : ""
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => handleMobileNavigation("/health-check")}
                className={`text-left px-3 py-4 text-foreground hover:bg-ninja-purple/5 active:bg-ninja-purple/10 transition-colors duration-200 font-semibold border-b border-border ${
                  isActive("/health-check") ? "text-ninja-purple bg-ninja-purple/5" : ""
                }`}
              >
                Health Check
              </button>
              <button
                onClick={() => handleMobileNavigation("/calculadora")}
                className={`text-left px-3 py-4 text-foreground hover:bg-ninja-purple/5 active:bg-ninja-purple/10 transition-colors duration-200 font-semibold border-b border-border ${
                  isActive("/calculadora") ? "text-ninja-purple bg-ninja-purple/5" : ""
                }`}
              >
                Calculadora de Custo
              </button>
              <div className="p-3">
                <Button 
                  variant="ninja" 
                  className="w-full"
                  onClick={() => handleMobileNavigation("/contact")}
                >
                  Fale com nossa equipe
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;