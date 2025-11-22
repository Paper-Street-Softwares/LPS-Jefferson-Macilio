import React from "react";

// Lista de documentos necessários
const requiredDocuments = [
  "Documento de identidade com foto (RG ou CNH)",
  "Laudo médico com CID e data do diagnóstico (pode ser de médico particular)",
  "Comprovante de recebimento de aposentadoria ou pensão",
  "Contracheques recentes com desconto de IR",
  "Comprovante de residência",
];

// URLs para imagens devem ser placeholders, pois não podemos carregar arquivos locais.
const advocateImageUrl =
  "https://placehold.co/300x400/08548c/ffffff?text=Advogada+Especialista";

// Componente para um Item da Lista de Documentos
const CheckListItem = ({ text }) => (
  <div className="flex items-start mb-2">
    {/* Ícone de Checkmark do Lucide-React (simulado) */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-blue-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span className="text-gray-700">{text}</span>
  </div>
);

// Componente principal
export default function ComoPedir() {
  return (
    <div className="min-h-screen px-4 py-10 font-sans bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título e Subtítulo */}
        <header className="mb-8">
          <p className="mb-1 text-sm font-semibold text-blue-600 uppercase">
            Documentos Necessários
          </p>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            COMO FAZER O PEDIDO DE ISENÇÃO
          </h1>
        </header>

        {/* Introdução e Requisitos */}
        <p className="max-w-4xl mb-8 text-base text-gray-700">
          Para ingressar com a{" "}
          <span className="font-bold text-blue-800">ação judicial</span>, não
          exigimos perícias demoradas nem laudos emitidos exclusivamente por
          perito oficial do INSS ou do seu órgão de origem. O que realmente
          importa é a documentação médica adequada e os comprovantes que atestam
          seu vínculo como aposentado ou pensionista. Esses são os elementos
          essenciais para fundamentar o pedido com segurança jurídica.
        </p>

        {/* Bloco da Lista de Documentos */}
        <div className="max-w-4xl p-6 mb-12 bg-white border border-gray-200 shadow-lg sm:p-8 rounded-xl">
          {requiredDocuments.map((doc, index) => (
            <CheckListItem key={index} text={doc} />
          ))}
        </div>

        {/* Conteúdo Explicativo e Imagem */}
        <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Coluna de Texto */}
          <div className="space-y-5 text-gray-700 lg:col-span-2">
            <p>
              Pode parecer simples à primeira vista, e é natural que algumas
              pessoas pensem em tentar resolver por conta própria, pela via
              administrativa. Mas a realidade é outra.
            </p>
            <p>
              O processo de isenção envolve detalhes técnicos, exigências
              específicas e argumentos jurídicos que, quando mal apresentados,
              levam quase sempre à negativa — mesmo nos casos em que o direito é
              evidente.
            </p>
            <p>
              Aqui no escritório, atuamos com base em experiência prática,
              conhecimento da jurisprudência e o domínio dos objeções que
              normalmente são usadas para indeferir pedidos. Sabemos exatamente
              o que será exigido, o que será contestado e como estruturar um
              pedido juridicamente sólido desde o início.
            </p>
            <p>
              Muitos que tentam sozinhos acabam perdendo tempo precioso — tempo
              esse que poderia estar sendo revertido em alívio financeiro mensal
              e no reconhecimento de um direito que já poderia estar sendo
              aplicado.{" "}
              <span className="font-bold">
                É por isso que a condução profissional faz toda a diferença.
              </span>
            </p>
          </div>

          {/* Coluna de Imagem e CTA */}
          <div className="flex flex-col items-center lg:col-span-1">
            {/* Imagem da Advogada */}
            <img
              src={advocateImageUrl}
              alt="Advogada Especialista em Direito Previdenciário"
              className="w-full h-auto object-cover rounded-xl shadow-2xl mb-6 max-h-[400px]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/300x400/08548c/ffffff?text=Imagem+indisponível";
              }}
            />

            {/* Botão de Call to Action (CTA) */}
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
