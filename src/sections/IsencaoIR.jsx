import React from "react";

const diseasesData = [
  {
    title: "Neoplasia maligna (câncer)",
    description: "Isenção garantida mesmo em caso de remissão de doença.",
  },
  {
    title: "Cardiopatia grave",
    description: "Doença do coração com impacto funcional grave.",
  },
  {
    title: "AIDS (HIV)",
    description: "Síndrome imunológica prevista legalmente.",
  },
  {
    title: "Esclerose Múltipla",
    description: "Doença autoimune que assegura direito à isenção.",
  },
  {
    title: "Hepatopatia grave",
    description: "Enfermidades hepáticas com prejuízo severo à saúde.",
  },
  {
    title: "Cegueira (inclusive monocular)",
    description: "Parcial (monocular) ou total, com laudo médico válido.",
  },

  {
    title: "Paralisia irreversível",
    description: "Condições que causam incapacidade permanente.",
  },
  {
    title: "Espondiloartrose Deformante",
    description: "Transtorno psíquicos que afetam a lucidez.",
  },
  {
    title: "Contaminação por radiação",
    description: "Exposição radioativa com efeitos graves.",
  },
  {
    title: "Tuberculose ativa",
    description: "Doença infecciosa respiratória ativa.",
  },
  {
    title: "Hanseníase",
    description: "Doença crônica com previsão legal de isenção.",
  },
  {
    title: "Alienação mental",
    description: "Transtornos psíquicos que afetam a lucidez.",
  },

  {
    title: "Nefropatia grave",
    description:
      "Insuficiência renal severa que pode exigir diálise ou transplante.",
  },
  {
    title: "Doença de Paget",
    description:
      "Alteração óssea crônica que causa deformidades e dor. Em estágios avançados é chamada OSTEOSE DEFORMANTE.",
  },
  {
    title: "Doença de Parkinson",
    description:
      "Distúrbio neurodegenerativo associado a tremores, rigidez e dificuldades motoras progressivas.",
  },
  {
    title: "Fibrose Cística",
    description:
      "Doença genética que provoca produção de muco denso, afetando pulmões e sistema digestivo. (Mucoviscidose).",
  },
  {
    title: "Acidente de Serviço",
    description:
      "Quando a Aposentadoria ou Reforma foi decorrente de Acidente de Serviço.",
  },
  {
    title: "Moléstia Profissional",
    description:
      "Quando a Aposentadoria ou Reforma é decorrente de moléstia profissional comprovada.",
  },
];

// SVG para o ícone de Fita/Laço (Ribbon) usado em cada card de doença
const RibbonIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11 2h2v4h-2V2zM12 24l-3-6h6l-3 6zM15 6a3 3 0 01-6 0h2a1 1 0 102 0h2zM7 6v10.15c-1.25.68-2 1.62-2 2.85h14c0-1.23-.75-2.17-2-2.85V6H7z" />
  </svg>
);

// Componente para o Card de Doença
const DiseaseCard = ({ title, description }) => (
  <div className="flex flex-col items-center h-full p-4 text-center transition duration-300 bg-white border border-blue-100 shadow-lg sm:p-6 rounded-xl hover:shadow-xl">
    <div className="p-3 mb-4 text-blue-600 bg-blue-100 rounded-full">
      <RibbonIcon className="w-8 h-8" />
    </div>
    <h3 className="mb-2 text-lg font-bold text-blue-800">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

// Componente principal
export default function IsencaoIR() {
  return (
    <div className="min-h-screen px-4 py-10 font-sans bg-gray-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho Principal */}
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Quem tem direito à isenção de IR por doença grave?
          </h1>
          <p className="mb-6 text-lg font-medium text-blue-700 sm:text-xl">
            Doenças graves previstas no artigo 6º da Lei nº 7.713/88
          </p>
          <p className="max-w-3xl pt-4 mx-auto text-sm text-gray-600 border-t border-gray-200">
            A legislação brasileira assegura o direito à isenção do Imposto de
            Renda para aposentados e pensionistas diagnosticados com doenças
            graves. Trata-se de uma proteção legal que busca reduzir o impacto
            financeiro dessas condições de saúde, garantindo mais tranquilidade
            e respeito à dignidade do beneficiário.
          </p>
        </header>

        {/* Grid de Doenças */}
        <div className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 sm:gap-6">
          {diseasesData.map((disease, index) => (
            <DiseaseCard
              key={index}
              title={disease.title}
              description={disease.description}
            />
          ))}
        </div>

        {/* Bloco de Nota Importante */}
        <div className="max-w-4xl p-6 mx-auto mb-12 border border-blue-200 shadow-inner sm:p-8 rounded-xl bg-blue-50">
          <div className="flex items-start mb-4">
            {/* Ícone de Cruz Vermelha para a nota importante */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-red-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <p className="text-sm text-gray-800">
              <span className="mr-1 font-bold text-red-600">Importante:</span>
              Além das doenças expressamente listadas na Lei nº 7.713/88, há
              casos em que outras condições graves também foram reconhecidas
              judicialmente, quando{" "}
              <span className="font-bold">
                comprovadamente decorrentes de trabalho ou geradoras de
                incapacidade permanente
              </span>
              . Estas situações exigem{" "}
              <span className="font-bold">análise individualizada</span>, com
              base em laudos médicos e precedentes judiciais.
            </p>
          </div>

          <p className="pt-4 text-sm text-gray-800 border-t border-blue-200">
            No escritório, somos especialistas em pedidos de isenção de imposto
            de renda por doença grave, atuando na{" "}
            <span className="font-bold">
              interpretação jurídica e na elaboração de requerimentos
              fundamentados em decisões reconhecidas pelos tribunais
            </span>
            , inclusive em casos não expressamente previstos na lei, mas
            amparados pela jurisprudência.
          </p>
        </div>

        {/* Botão de Call to Action (CTA) */}
        <div className="text-center">
          <button
            type="button"
            className="px-8 py-3 font-bold text-white transition duration-300 transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Quero Pedir Minha Isenção
          </button>
        </div>
      </div>
    </div>
  );
}
