import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full overflow-hidden bg-background" id="hero">
      {/* Asymmetric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url(/path-to-your-background-image.jpg)",
          }}
        />
      </div>

      <div className="container relative z-10 grid gap-12 pt-32 lg:grid-cols-2 lg:pt-40">
        {/* Left side */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="inline-block rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
            Conteúdo Exclusivo sobre CX
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Explore o Universo do CX em Nosso Canal
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Convidamos você a conhecer nosso canal no YouTube, onde compartilhamos dicas, entrevistas e as últimas novidades sobre o mundo do Customer Experience.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
            >
              Fale com um Especialista
            </a>
            <a
              href="https://www.youtube.com/@caioserrate" target="_blank"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              <Youtube className="w-5 h-5 mr-2" />
              Assista no YouTube
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <img
              src="/lovable-uploads/a60216fb-d9dc-4bf9-82cc-d6fef4223ae6.png"
              alt="Ninja de CX"
              className="mx-auto w-full max-w-xs rounded-full object-cover sm:max-w-sm md:max-w-md"
              style={{
                filter:
                  "drop-shadow(0 0 2rem rgba(var(--primary-rgb), 0.3))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;