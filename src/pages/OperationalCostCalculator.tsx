import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, TrendingDown, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  monthlyVolume: string;
  averageTime: string;
  teamSize: string;
  costPerPerson: string;
}

interface CalculationResult {
  costPerCall: number;
  monthlyCost: number;
  potentialSavings: number;
}

const OperationalCostCalculator = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    monthlyVolume: "",
    averageTime: "",
    teamSize: "",
    costPerPerson: ""
  });
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [contactData, setContactData] = useState({
    phone: "",
    company: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para formatar valor monetário
  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = (parseInt(numericValue) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    return formattedValue;
  };

  // Função para obter valor numérico do campo monetário
  const getCurrencyValue = (formattedValue: string) => {
    return formattedValue.replace(/[^\d]/g, '');
  };

  // Função para formatar números com separador de milhares
  const formatNumber = (value: string): string => {
    // Remove tudo que não é número
    const numericValue = value.replace(/\D/g, '');
    
    if (!numericValue) return '';
    
    // Converte para número e formata com separador de milhares
    const number = parseInt(numericValue);
    return new Intl.NumberFormat('pt-BR').format(number);
  };

  // Função para extrair valor numérico do número formatado
  const getNumericValue = (formattedValue: string): string => {
    return formattedValue.replace(/\D/g, '');
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === 'costPerPerson') {
      // Para o campo de custo, aplicar formatação monetária
      const numericValue = value.replace(/\D/g, '');
      if (numericValue) {
        const formattedValue = formatCurrency(numericValue);
        setFormData(prev => ({
          ...prev,
          [field]: formattedValue
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [field]: ''
        }));
      }
    } else if (field === 'monthlyVolume' || field === 'teamSize') {
      // Aplica formatação numérica para campos de quantidade
      const formattedValue = formatNumber(value);
      setFormData(prev => ({ ...prev, [field]: formattedValue }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const calculateCost = () => {
    // Extrai valores numéricos dos campos formatados
    const volume = parseInt(getNumericValue(formData.monthlyVolume));
    const team = parseInt(getNumericValue(formData.teamSize));
    const avgTime = parseInt(formData.averageTime);
    // Extrair valor numérico do campo formatado
    const costPerPersonNumeric = getCurrencyValue(formData.costPerPerson);
    const costPerPerson = parseFloat(costPerPersonNumeric) / 100;

    if (!volume || !avgTime || !team || !costPerPerson) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Cálculo baseado no custo total informado pelo usuário
    const workingHoursPerMonth = 160; // 8h x 20 dias úteis
    const costPerHour = costPerPerson / workingHoursPerMonth;
    const costPerMinute = costPerHour / 60;

    // Custo total mensal da operação
    const totalMonthlyCost = team * costPerPerson;
    
    // Custo por atendimento baseado no tempo e custo por minuto
    const costPerCall = avgTime * costPerMinute;
    
    // Custo mensal total em atendimentos
    const monthlyOperationalCost = volume * costPerCall;
    
    // Potencial de economia (30% de redução)
    const potentialSavings = monthlyOperationalCost * 0.30;

    setResult({
      costPerCall: Math.round(costPerCall * 100) / 100,
      monthlyCost: Math.round(monthlyOperationalCost),
      potentialSavings: Math.round(potentialSavings)
    });

    setStep(5);
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else if (step === 4) {
      calculateCost();
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const resetCalculator = () => {
    setStep(0);
    setFormData({
      name: "",
      email: "",
      monthlyVolume: "",
      averageTime: "",
      teamSize: "",
      costPerPerson: ""
    });
    setResult(null);
    setShowModal(false);
    setContactData({ phone: "", company: "" });
    setIsSubmitted(false);
  };

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleContactDataChange = (field: string, value: string) => {
    setContactData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitContact = () => {
    // Aqui você pode implementar o envio dos dados para um backend
    console.log("Dados coletados:", {
      ...formData,
      ...contactData,
      result
    });
    
    setIsSubmitted(true);
    
    // Fechar modal após 3 segundos
    setTimeout(() => {
      setShowModal(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ninja-dark via-ninja-dark/95 to-ninja-purple/20">
      <Header />
      
      <main className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header da Calculadora */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ninja-purple/20 rounded-full mb-6">
              <Calculator className="w-8 h-8 text-ninja-purple" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Calculadora de Custo Operacional
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Descubra quanto sua empresa gasta em cada atendimento e identifique oportunidades de economia
            </p>
          </div>

          {step < 5 ? (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
                  <CardTitle className="text-white text-lg sm:text-xl md:text-2xl">
                    {step === 0 ? "Dados Pessoais" : `Pergunta ${step} de 4`}
                  </CardTitle>
                  <div className="flex space-x-2 justify-center sm:justify-end">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                          i <= step ? 'bg-ninja-purple' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {step === 0 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label htmlFor="name" className="text-white text-lg">
                        Qual é o seu nome?
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Digite seu nome completo"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg py-3"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <Label htmlFor="email" className="text-white text-lg">
                        Qual é o seu e-mail?
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg py-3"
                      />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <Label htmlFor="monthlyVolume" className="text-white text-lg">
                      Quantos atendimentos sua empresa realiza por mês?
                    </Label>
                    <Input
                      id="monthlyVolume"
                      type="text"
                      placeholder="Ex: 1.000"
                      value={formData.monthlyVolume}
                      onChange={(e) => handleInputChange("monthlyVolume", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <Label htmlFor="costPerPerson" className="text-white text-lg">
                      Qual o custo mensal por pessoa da equipe?
                      <span className="block text-sm text-gray-400 mt-1">
                        Inclua salário, benefícios, encargos e custos operacionais
                      </span>
                    </Label>
                    <Input
                       id="costPerPerson"
                       type="text"
                       placeholder="Ex: R$ 5.000,00"
                       value={formData.costPerPerson}
                       onChange={(e) => handleInputChange("costPerPerson", e.target.value)}
                       className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                     />
                  </div>
                )}

                {step === 2 && (
                   <div className="space-y-4">
                     <Label htmlFor="averageTime" className="text-white text-lg">
                       Qual o tempo médio de cada atendimento?
                     </Label>
                     <Select value={formData.averageTime} onValueChange={(value) => handleInputChange("averageTime", value)}>
                       <SelectTrigger className="bg-white/10 border-white/20 text-white">
                         <SelectValue placeholder="Selecione o tempo médio" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="5">Até 5 minutos</SelectItem>
                         <SelectItem value="10">5 - 10 minutos</SelectItem>
                         <SelectItem value="15">10 - 15 minutos</SelectItem>
                         <SelectItem value="20">15 - 20 minutos</SelectItem>
                         <SelectItem value="30">20 - 30 minutos</SelectItem>
                         <SelectItem value="45">Mais de 30 minutos</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 )}

                {step === 3 && (
                  <div className="space-y-4">
                    <Label htmlFor="teamSize" className="text-white text-lg">
                      Quantas pessoas trabalham no atendimento?
                    </Label>
                    <Input
                      id="teamSize"
                      type="text"
                      placeholder="Ex: 10"
                      value={formData.teamSize}
                      onChange={(e) => handleInputChange("teamSize", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-6">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={step === 0}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-12 sm:h-10 text-base sm:text-sm order-2 sm:order-1"
                  >
                    Anterior
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={
                      (step === 0 && (!formData.name || !formData.email)) ||
                      (step === 1 && !formData.monthlyVolume) ||
                      (step === 2 && !formData.averageTime) ||
                      (step === 3 && !formData.teamSize) ||
                      (step === 4 && !formData.costPerPerson)
                    }
                    className="bg-ninja-purple hover:bg-ninja-purple/80 h-12 sm:h-10 text-base sm:text-sm order-1 sm:order-2"
                  >
                    {step === 4 ? 'Calcular' : 'Próximo'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            // Tela de Resultado
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl sm:text-2xl lg:text-3xl mb-2">
                    Resultado da Análise
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm sm:text-base lg:text-lg">
                    Baseado nas informações fornecidas, aqui está o diagnóstico da sua operação
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Métricas Principais */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center p-4 sm:p-6 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl sm:text-3xl font-bold text-ninja-purple mb-2">
                        R$ {result?.costPerCall.toFixed(2)}
                      </div>
                      <div className="text-white font-medium text-sm sm:text-base">Custo por Atendimento</div>
                    </div>
                    
                    <div className="text-center p-4 sm:p-6 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">
                        R$ {result?.monthlyCost.toLocaleString('pt-BR')}
                      </div>
                      <div className="text-white font-medium text-sm sm:text-base">Custo Mensal Total</div>
                    </div>
                    
                    <div className="text-center p-4 sm:p-6 bg-white/5 rounded-lg border border-white/10 sm:col-span-2 lg:col-span-1">
                      <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                        R$ {result?.potentialSavings.toLocaleString('pt-BR')}
                      </div>
                      <div className="text-white font-medium text-sm sm:text-base">Economia Possível</div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-ninja-purple/20 to-ninja-purple/10 p-4 sm:p-6 lg:p-8 rounded-lg border border-ninja-purple/30">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                      <div className="flex-shrink-0 mx-auto sm:mx-0">
                        <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                          Você pode economizar até R$ {result?.potentialSavings.toLocaleString('pt-BR')} por mês!
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm sm:text-base">
                          Com base na nossa análise, identificamos que sua operação pode reduzir custos significativamente através 
                          de otimizações estratégicas e implementação de tecnologias inteligentes.
                        </p>
                        <p className="text-gray-300 mb-6 text-sm sm:text-base">
                          Nossa equipe especializada pode ajudar você a implementar soluções que reduzem o tempo de atendimento, 
                          automatizam processos repetitivos e melhoram a eficiência operacional.
                        </p>
                        
                        <div className="flex flex-col gap-3 sm:gap-4">
                          <Button 
                            onClick={handleContactClick}
                            className="bg-ninja-purple hover:bg-ninja-purple/80 text-white h-12 sm:h-10 text-base sm:text-sm"
                            size="lg"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Falar com Especialista
                          </Button>
                          <Button 
                            onClick={resetCalculator}
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-12 sm:h-10 text-base sm:text-sm"
                            size="lg"
                          >
                            Nova Simulação
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="text-center text-sm text-gray-400 border-t border-white/10 pt-6">
                    * Os valores apresentados são estimativas baseadas em médias de mercado e podem variar conforme 
                    a complexidade e especificidades de cada operação.
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Modal de Contato */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-white text-xl text-center">
                {isSubmitted ? "Dados Enviados!" : "Falar com Especialista"}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              {isSubmitted ? (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white">
                    Seus dados foram enviados com sucesso!
                  </p>
                  <p className="text-gray-300 text-sm">
                    Aguarde o contato de um de nossos especialistas em breve.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Dados já coletados */}
                  <div className="space-y-2 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="text-white font-medium">Dados coletados:</h3>
                    <p className="text-gray-300 text-sm">Nome: {formData.name}</p>
                    <p className="text-gray-300 text-sm">E-mail: {formData.email}</p>
                    <p className="text-gray-300 text-sm">
                      Custo por atendimento: R$ {result?.costPerCall.toFixed(2)}
                    </p>
                    <p className="text-gray-300 text-sm">
                      Economia potencial: R$ {result?.potentialSavings.toLocaleString('pt-BR')}
                    </p>
                  </div>

                  {/* Campos adicionais */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={contactData.phone}
                        onChange={(e) => handleContactDataChange("phone", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-white">
                        Empresa
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Nome da sua empresa"
                        value={contactData.company}
                        onChange={(e) => handleContactDataChange("company", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowModal(false)}
                      className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      Cancelar
                    </Button>
                    <Button
                      onClick={handleSubmitContact}
                      disabled={!contactData.phone || !contactData.company}
                      className="flex-1 bg-ninja-purple hover:bg-ninja-purple/80"
                    >
                      Enviar
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default OperationalCostCalculator;