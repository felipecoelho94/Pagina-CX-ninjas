import PrivacyHeader from "@/components/PrivacyHeader";
import { FC } from 'react';

const PrivacyPolicy: FC = () => {
  return (
    <>
      <PrivacyHeader />
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
      <p className="mb-4">
        A sua privacidade é importante para nós. É política do CX Ninjas respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site CX Ninjas, e outros sites que possuímos e operamos.
      </p>
      <h2 className="text-2xl font-bold mb-2">1. Coleta de Dados</h2>
      <p className="mb-4">
        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
      </p>
      <h2 className="text-2xl font-bold mb-2">2. Uso de Dados</h2>
      <p className="mb-4">
        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
      </p>
      <h2 className="text-2xl font-bold mb-2">3. Compartilhamento de Dados</h2>
      <p className="mb-4">
        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
      </p>
      <h2 className="text-2xl font-bold mb-2">4. Links Externos</h2>
      <p className="mb-4">
        O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
      </p>
      <h2 className="text-2xl font-bold mb-2">5. Seus Direitos</h2>
      <p className="mb-4">
        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
      </p>
      <p className="mb-4">
        O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
      </p>
      <h2 className="text-2xl font-bold mb-2">6. Compromisso do Usuário</h2>
      <p className="mb-4">
        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o CX Ninjas oferece no site e com caráter enunciativo, mas não limitativo:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
        <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
        <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do CX Ninjas, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
      </ul>
      <p>
        Esta política é efetiva a partir de <strong>Setembro/2023</strong>.
      </p>
    </div>
    </>
  );
};

export default PrivacyPolicy;