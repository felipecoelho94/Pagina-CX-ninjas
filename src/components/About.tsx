import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const videos = [
    {
      id: "VIDEO_ID_1",
      title: "Como o CX pode alavancar seus negócios",
      description: "Descubra as estratégias que transformam a experiência do cliente em resultados reais."
    },
    {
      id: "VIDEO_ID_2",
      title: "Atendimento ao cliente de alta performance",
      description: "Técnicas e ferramentas para criar uma equipe de atendimento que encanta e fideliza."
    },
    {
      id: "VIDEO_ID_3",
      title: "Métricas de CX que realmente importam",
      description: "Foque nos indicadores certos para medir e otimizar a satisfação do seu cliente."
    }
  ];

  return (
    <section id="about" className="py-24 bg-ninja-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Conteúdo que Transforma
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Explore nosso canal no YouTube e aprenda a dominar a experiência do cliente com dicas práticas e análises de especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="bg-background/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;