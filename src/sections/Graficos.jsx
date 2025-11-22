import React from "react";

// Dados para a seção de Restituição
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

// Componente do Gráfico de Barras SVG para a simulação financeira
const FinancialChart = () => (
  <div className="w-full max-w-lg p-4 mx-auto bg-white border border-gray-100 shadow-lg sm:p-6 rounded-xl">
    <svg
      viewBox="0 0 500 400"
      className="w-full h-auto"
      role="img"
      aria-labelledby="chartTitle"
    >
      <title id="chartTitle">
        Comparativo de Salário Líquido Antes e Depois da Isenção
      </title>

      {/* Eixo Y (Valores) */}
      {[0, 1000, 2000, 3000, 4000, 5000, 5500].map((val) => (
        <g key={val}>
          <line
            x1="50"
            y1={400 - (val / 5500) * 300}
            x2="450"
            y2={400 - (val / 5500) * 300}
            stroke="#e5e7eb"
            strokeDasharray="5 5"
          />
          <text
            x="40"
            y={400 - (val / 5500) * 300 + 5}
            fontSize="20"
            fill="#6b7280"
            textAnchor="end"
          >
            {val}
          </text>
        </g>
      ))}

      {/* Eixo X (Categorias) */}
      <line
        x1="50"
        y1="400"
        x2="450"
        y2="400"
        stroke="#1f2937"
        strokeWidth="2"
      />
      <text x="150" y="430" fontSize="20" fill="#4b5563" textAnchor="middle">
        Antes da Isenção
      </text>
      <text x="350" y="430" fontSize="20" fill="#4b5563" textAnchor="middle">
        Depois da Isenção
      </text>

      {/* Barras "IR" (Antes: 500, Depois: 0) */}
      <rect
        x="110"
        y={400 - (500 / 5500) * 300}
        width="80"
        height={(500 / 5500) * 300}
        fill="#f87171"
        rx="5"
        ry="5"
      />
      {/* O IR Depois da Isenção é zero, mas a legenda aparece */}

      {/* Barras "Salário Líquido" (Antes: 4000, Depois: 4500) */}
      <rect
        x="110"
        y={400 - (4000 / 5500) * 300 - (500 / 5500) * 300}
        width="80"
        height={(4000 / 5500) * 300}
        fill="#60a5fa"
        rx="5"
        ry="5"
      />
      <rect
        x="310"
        y={400 - (4500 / 5500) * 300}
        width="80"
        height={(4500 / 5500) * 300}
        fill="#60a5fa"
        rx="5"
        ry="5"
      />

      {/* Legenda */}
      <div className="absolute top-0 right-0 p-4">
        <div className="flex items-center mb-2">
          <span className="w-4 h-4 mr-2 bg-red-400 rounded-full"></span>
          <span className="text-sm font-medium text-gray-700">IR</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 mr-2 bg-blue-400 rounded-full"></span>
          <span className="text-sm font-medium text-gray-700">
            Salário Líquido
          </span>
        </div>
      </div>
      <g>
        <rect x="190" y="20" width="20" height="20" fill="#f87171" />
        <text x="220" y="35" fontSize="20" fill="#6b7280">
          IR
        </text>
        <rect x="280" y="20" width="20" height="20" fill="#60a5fa" />
        <text x="310" y="35" fontSize="20" fill="#6b7280">
          Salário Líquido
        </text>
      </g>
    </svg>
  </div>
);

// Componente principal
export default function Graficos() {
  return (
    <div className="min-h-screen px-4 py-10 font-sans bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 1. SEÇÃO: ALÍVIO FINANCEIRO */}
        <div className="mb-16">
          <header className="max-w-4xl mx-auto mb-8 text-center">
            <p className="mb-1 text-sm font-semibold text-gray-500 uppercase">
              Alívio Financeiro para Quem Enfrenta Doenças Graves
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              O Que <span className="text-blue-600">Muda no Seu Orçamento</span>{" "}
              com a Isenção de Imposto de Renda
            </h1>
          </header>

          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Coluna do Gráfico */}
            <div>
              <FinancialChart />
            </div>

            {/* Coluna do Texto Explicativo */}
            <div className="space-y-4 text-gray-700">
              <p>
                A isenção do imposto de renda representa uma mudança real e
                imediata na vida financeira de aposentados e pensionistas
                diagnosticados com doenças graves. Esse direito legal reduz
                significativamente os descontos no seu benefício, resultando em{" "}
                <span className="font-bold text-blue-800">
                  mais renda disponível todos os meses
                </span>
                .
              </p>
              <p>
                O valor que antes era retido pode ser redirecionado para
                despesas com saúde, medicamentos, alimentação, moradia ou
                simplesmente para trazer mais conforto à sua rotina. Em momentos
                em que cada recurso importa, esse alívio no orçamento faz
                diferença.
              </p>
              <p>
                Além de representar um ganho financeiro direto, a isenção também
                significa mais autonomia e tranquilidade para quem já enfrenta
                desafios com saúde.{" "}
                <span className="font-bold text-blue-800">
                  Menos impostos, mais dignidade.
                </span>
              </p>

              {/* Bloco de Destaque */}
              <div className="p-4 mt-6 border border-blue-200 shadow-inner bg-blue-50 rounded-xl">
                <p className="text-sm font-medium text-blue-800">
                  <span role="img" aria-label="Lâmpada Mágica">
                    💡
                  </span>{" "}
                  Você já imaginou o quanto esse valor que sai todo mês poderia
                  estar ajudando você agora? Com a isenção, o dinheiro que antes
                  ia para o governo volta para o seu orçamento.
                </p>
              </div>

              {/* Botão CTA da Seção 1 */}
              <div className="pt-4">
                <button
                  type="button"
                  className="px-8 py-3 font-bold text-white transition duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Falar com um Advogado
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Separador Visual (Opcional, mas ajuda a delimitar) */}
        <div className="max-w-4xl mx-auto my-10 border-t border-gray-200"></div>

        {/* 2. SEÇÃO: RESTITUIÇÃO DOS ÚLTIMOS 5 ANOS */}
        <div className="mb-16">
          <header className="max-w-4xl mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Além de suspender o desconto atual, também{" "}
              <span className="text-blue-600">
                pedimos a devolução do que já foi cobrado
              </span>
            </h2>
            <h3 className="mt-2 text-xl font-bold text-gray-700 sm:text-2xl">
              É{" "}
              <span className="text-blue-800">
                possível requerer a restituição do imposto pago nos últimos 5
                anos
              </span>
            </h3>
          </header>

          <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Coluna de Texto Explicativo */}
            <div className="space-y-5 text-gray-700">
              <p>
                Ao ingressar com a ação judicial, não buscamos apenas a
                suspensão dos descontos mensais de IR. Também incluímos o pedido
                de devolução de tudo o que foi cobrado indevidamente nos últimos
                cinco anos — desde que os documentos estejam completos e a
                condição de saúde já estivesse presente nesse período.
              </p>
              <p>
                Esse valor pode representar uma quantia expressiva, muitas vezes
                superior ao próprio custo da ação, e ajuda a reparar parte do
                prejuízo causado pelo desconto indevido.
              </p>

              {/* Bloco de Destaque Inferior */}
              <div className="p-3 mt-6 bg-blue-600 rounded-md shadow-md">
                <p className="text-sm font-medium text-center text-white">
                  Cada mês de desconto indevido aumenta o valor acumulado a ser
                  restituído
                </p>
              </div>
            </div>

            {/* Coluna do Destaque de 5 Anos */}
            <div className="flex flex-col items-center space-y-4 text-center lg:items-end lg:text-right">
              <p className="font-black leading-none text-blue-600 text-7xl sm:text-8xl">
                5 anos
              </p>
              <p className="text-lg font-semibold text-gray-600">
                que podem ser devolvidos
              </p>

              {/* Característica 1 */}
              <div className="flex items-center justify-center mt-4 lg:justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="font-bold text-gray-700">
                  Rapidez e Confiabilidade
                </span>
              </div>
              {/* Você pode adicionar mais características aqui, se houver na imagem original, mas parece ser só uma. */}
            </div>
          </div>
        </div>

        {/* O bloco da seção anterior pode ser adicionado aqui para integrar as três seções, mas por enquanto mantenho apenas as duas novas/modificadas. */}
      </div>
    </div>
  );
}
