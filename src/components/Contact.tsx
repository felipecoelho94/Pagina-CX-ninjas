import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      toast.error("Por favor, preencha os campos obrigatórios.");
      return;
    }

    // Here you would typically send the form data to a server
    console.log({ name, email, company, phone, message });

    toast.success("Sua solicitação foi enviada com sucesso!");

    // Clear form fields
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Fale com nossa equipe
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos elevar a experiência 
            do cliente no seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contato@tecnasistemas.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-ninja-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-muted-foreground">+55 (31) 3181-1515</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Localização</h3>
                    <p className="text-muted-foreground">Belo horizonte, MG</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ninja mascot */}
            <div className="flex justify-center pt-8">
              <img 
                src="/lovable-uploads/a60216fb-d9dc-4bf9-82cc-d6fef4223ae6.png" 
                alt="CX Ninjas Mascot" 
                className="w-28 h-24 animate-float object-contain"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Solicite uma Consultoria Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-background border-border"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu.email@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background border-border"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        placeholder="Nome da sua empresa"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        placeholder="(11) 99999-9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Como podemos ajudar?
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos sobre seus desafios de Customer Experience..."
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-background border-border"
                      required
                    />
                  </div>

                  <Button type="submit" variant="ninja" size="lg" className="w-full">
                    Enviar Solicitação
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;