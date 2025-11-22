import React from "react";

// Dados da Tabela de Simulação Salarial
const salaryData = [
  {
    salary: "R$ 4.000,00",
    ir: "R$ 386,94",
    liquidWithDiscount: "R$ 3.613,06",
    liquidWithExemption: "R$ 4.000,00",
  },
  {
    salary: "R$ 5.000,00",
    ir: "R$ 490,94",
    liquidWithDiscount: "R$ 4.509,06",
    liquidWithExemption: "R$ 5.000,00",
  },
  {
    salary: "R$ 6.000,00",
    ir: "R$ 742,04",
    liquidWithDiscount: "R$ 5.257,96",
    liquidWithExemption: "R$ 6.000,00",
  },
  {
    salary: "R$ 7.000,00",
    ir: "R$ 994,04",
    liquidWithDiscount: "R$ 6.005,96",
    liquidWithExemption: "R$ 7.000,00",
  },
  {
    salary: "R$ 8.000,00",
    ir: "R$ 1.246,04",
    liquidWithDiscount: "R$ 6.753,96",
    liquidWithExemption: "R$ 8.000,00",
  },
  {
    salary: "R$ 10.000,00",
    ir: "R$ 1.750,04",
    liquidWithDiscount: "R$ 8.249,96",
    liquidWithExemption: "R$ 10.000,00",
  },
  {
    salary: "R$ 12.000,00",
    ir: "R$ 2.254,04",
    liquidWithDiscount: "R$ 9.745,96",
    liquidWithExemption: "R$ 12.000,00",
  },
  {
    salary: "R$ 15.000,00",
    ir: "R$ 3.004,04",
    liquidWithDiscount: "R$ 11.995,96",
    liquidWithExemption: "R$ 15.000,00",
  },
];

// Dados do Fluxo de Processo
const processSteps = [
  {
    step: "1º Passo",
    title: "Consulta Inicial",
    description:
      "Você clica no botão de “Falar com um Advogado” ou de “Consulte um Advogado” explicando o seu caso.",
    marker: "ATENDIMENTO",
    markerPosition: "right",
  },
  {
    step: "2º Passo",
    title: "Análise e Contato",
    description:
      "Minha Equipe e eu recebemos sua demanda e entraremos em contato o mais breve possível.",
    marker: "REUNIÃO",
    markerPosition: "left",
  },
  {
    step: "3º Passo",
    title: "Proposta e Honorários",
    description:
      "Após Analisado será apresentado a solução e só então contrato de honorários.",
    marker: "SOLUÇÃO",
    markerPosition: "right",
  },
];

// Componente para um Ícone de Feature (Caixa de Destaque)
const FeatureBox = ({ title, description, icon }) => (
  <div className="flex flex-col items-center p-4 text-center">
    <div className="mb-3 text-blue-600">{icon}</div>
    <h3 className="mb-1 text-lg font-bold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

// Novo Componente do Passo a Passo (Timeline) - Simplificado e Estável
const ProcessTimeline = () => (
  // Max width set to control the card width, margin auto to center the whole timeline
  <div className="relative max-w-lg pt-6 pb-20 mx-auto">
    {/* Linha Vertical Central */}
    <div className="absolute top-0 left-1/2 w-0.5 bg-blue-200 h-full transform -translate-x-1/2"></div>

    {processSteps.map((item, index) => {
      const isLeft = item.markerPosition === "left"; // Use para alternar o lado do marcador

      return (
        // Container de cada passo. Centralizado por max-w-lg mx-auto no pai.
        <div key={index} className="relative w-full mb-16">
          {/* Bloco de Conteúdo (Card) - Centralizado e com estilo destacado */}
          <div className="w-full p-4 bg-blue-100 border-l-4 border-blue-400 shadow-md rounded-xl">
            <p className="mb-1 text-sm font-bold text-blue-700">{item.step}</p>
            <p className="mb-2 text-lg font-semibold text-blue-900">
              {item.title}
            </p>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>

          {/* Ponto de Conexão na Linha Vertical */}
          <div className="absolute top-0 z-10 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 border-4 border-white rounded-full left-1/2"></div>
        </div>
      );
    })}
  </div>
);

// Componente principal
export default function Steps() {
  // Componentes e dados das seções anteriores (simulados/omitidos para brevidade)
  const requiredDocuments = []; // Simulado
  const advocateImageUrl =
    "https://placehold.co/300x400/08548c/ffffff?text=Advogada+Especialista"; // Simulado
  const CheckListItem = ({ text }) => (
    <div className="flex items-start mb-2">
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

  const checkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const syncIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
    </svg>
  );

  const historyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  return (
    <div className="min-h-screen px-4 py-10 font-sans bg-gray-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* 1. SEÇÃO: COMO FUNCIONA (FLUXO) */}
        <div className="mb-16 text-center">
          <header className="mb-12">
            <p className="mb-1 text-sm font-semibold text-gray-500 uppercase">
              COMO FUNCIONA
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Após Você Enviar Sua Consulta Aqui
            </h1>
          </header>

          <ProcessTimeline />

          {/* Botão CTA Centralizado */}
          <button
            type="button"
            className="px-8 py-3 font-bold text-white transition duration-300 transform bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            CONSULTE UM ADVOGADO
          </button>
        </div>

        {/* Separador Visual */}
        <div className="max-w-4xl mx-auto my-16 border-t border-gray-200"></div>

        {/* 2. SEÇÃO: EXCLUSIVIDADE E TABELA SALARIAL */}
        <div className="mb-16">
          <header className="max-w-4xl mx-auto mb-8 text-center">
            <p className="mb-1 text-sm font-semibold text-gray-500 uppercase">
              Para quem paga mais imposto, o direito à isenção vale ainda mais
            </p>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Atendemos exclusivamente quem recebe acima de{" "}
              <span className="text-blue-600">R$ 4.000,00 por mês</span>
            </h2>
          </header>

          <p className="max-w-4xl mx-auto mb-10 text-base text-center text-gray-700">
            A isenção do imposto de renda gera maior impacto para aposentados e
            pensionistas com rendimentos mensais mais elevados, onde os
            descontos costumam ser altos e constantes. Atuamos exclusivamente
            para esse perfil de beneficiário, garantindo que o trabalho jurídico
            entregue um resultado financeiro relevante — tanto na renda mensal
            quanto na possibilidade de restituição dos últimos anos.
          </p>

          {/* Tabela de Comparação Salarial */}
          <div className="max-w-5xl mx-auto overflow-x-auto border border-gray-200 shadow-xl rounded-xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-600 uppercase"
                  >
                    Salário Bruto
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold tracking-wider text-left text-red-500 uppercase"
                  >
                    IR (antes da isenção)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold tracking-wider text-left text-pink-500 uppercase"
                  >
                    Salário Líquido <br className="sm:hidden" /> com desconto
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold tracking-wider text-left text-green-600 uppercase"
                  >
                    Salário Líquido <br className="sm:hidden" /> com isenção
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {salaryData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {row.salary}
                    </td>
                    <td className="px-6 py-4 text-sm text-red-500 whitespace-nowrap">
                      {row.ir}
                    </td>
                    <td className="px-6 py-4 text-sm text-pink-500 whitespace-nowrap">
                      {row.liquidWithDiscount}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-green-600 whitespace-nowrap">
                      {row.liquidWithExemption}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nota da Tabela */}
          <div className="max-w-5xl mx-auto mt-4 text-center">
            <p className="text-xs text-gray-600">
              <span className="mr-1 font-bold text-red-500">*</span> Os valores
              de IR são aproximados, baseados na tabela progressiva vigente e
              sem outras deduções (como dependentes ou plano de saúde).
            </p>
          </div>
        </div>

        {/* 3. SEÇÃO: VANTAGENS (Cards Inferiores) */}
        <div className="max-w-6xl pt-16 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Vantagem 1 */}
            <FeatureBox
              title="Renda aumenta imediatamente"
              description="Seu salário líquido sobe no próximo mês, assim que o pedido de isenção for concedido."
              icon={
                <div className="p-3 text-blue-600 bg-blue-100 rounded-xl">
                  {checkIcon}
                </div>
              }
            />

            {/* Vantagem 2 */}
            <FeatureBox
              title="Descontos indevidos são suspensos"
              description="Você para de pagar o IR de forma permanente, garantindo alívio mensal contínuo."
              icon={
                <div className="p-3 text-blue-600 bg-blue-100 rounded-xl">
                  {syncIcon}
                </div>
              }
            />

            {/* Vantagem 3 */}
            <FeatureBox
              title="Possibilidade de restituição retroativa"
              description="Recupere o imposto que foi pago indevidamente nos últimos 5 anos."
              icon={
                <div className="p-3 text-blue-600 bg-blue-100 rounded-xl">
                  {historyIcon}
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
