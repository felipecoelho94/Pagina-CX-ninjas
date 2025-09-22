import {
  ShieldCheck,
  Youtube,
  Podcast,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: <Youtube className="w-8 h-8 mb-4 text-primary" />,
    title: "Dicas e Entrevistas sobre CX",
    description:
      "Explore nosso canal no YouTube para obter dicas práticas, orientações de especialistas e entrevistas com líderes da indústria de CX.",
    features: [
      "Dicas práticas para o dia a dia",
      "Entrevistas com especialistas do mercado",
      "Tendências e novidades em CX",
    ],
  },
  {
    icon: <Podcast className="w-8 h-8 mb-4 text-primary" />,
    title: "Podcast CX Ninjas",
    description:
      "Ouça conversas com especialistas e líderes de mercado sobre as últimas tendências e melhores práticas em Customer Experience.",
    features: [
      "Entrevistas com especialistas",
      "Estudos de caso práticos",
      "Tendências e inovações em CX",
    ],
  },
  {
    icon: <GraduationCap className="w-8 h-8 mb-4 text-primary" />,
    title: "Consultoria Especializada",
    description:
      "Após analisar seu cenário com nosso conteúdo, conte com nossa ajuda para implementar as melhorias e transformar sua CX.",
    features: [
      "Plano de ação personalizado",
      "Implementação de ferramentas e processos",
      "Acompanhamento de resultados",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Conteúdo para Alavancar sua CX
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Utilize nosso conteúdo gratuito para diagnosticar sua operação e, em seguida, conte com nossa expertise para levar sua CX ao próximo nível.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-8 transition-transform duration-300 transform border rounded-lg shadow-lg bg-card hover:-translate-y-2"
            >
              <div className="flex-shrink-0">{service.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <ShieldCheck className="w-5 h-5 mr-3 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};