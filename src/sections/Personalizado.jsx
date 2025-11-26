import React from "react";
// Imports adicionados conforme solicitado
import content from "../content/Content";
import CtaButton from "../components/buttons/CtaButton";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionWrapper from "../components/sectionElements/SectionWrapper";
import Cta from "./Cta";
import Footer from "./Footer";
import WhatsappFloatingButton from "../components/buttons/WhatsappFloatingButton";

// =============================================================================
// I. DADOS GLOBAIS
// =============================================================================

// Dados para a seção IsencaoIR (Lista de Doenças) - Reconstruídos da primeira imagem
const diseasesData = [
  {
    name: "Neoplasia maligna (câncer)",
    desc: "Direito assegurado mesmo quando a doença está em remissão.",
  },
  {
    name: "Cardiopatia grave",
    desc: "Alterações cardíacas com comprometimento funcional relevante.",
  },
  {
    name: "AIDS (HIV)",
    desc: "Condição imunológica com previsão expressa na legislação.",
  },
  {
    name: "Esclerose Múltipla",
    desc: "Doença autoimune que garante o direito à isenção.",
  },
  {
    name: "Hepatopatia grave",
    desc: "Doenças do fígado com impacto severo na saúde.",
  },
  {
    name: "Cegueira (inclusive monocular)",
    desc: "Parcial ou total, mediante laudo médico válido.",
  },
  {
    name: "Paralisia irreversível",
    desc: "Condições permanentes que comprometem a mobilidade.",
  },
  {
    name: "Espondiloartrose Deformante",
    desc: "Degeneração articular que compromete a função e causa limitações.",
  },
  {
    name: "Contaminação por radiação",
    desc: "Exposição a material radioativo com efeitos graves reconhecidos.",
  },
  { name: "Tuberculose ativa", desc: "Infecção respiratória em fase ativa." },
  { name: "Hanseníase", desc: "Doença crônica com direito previsto em lei." },
  {
    name: "Alienação mental",
    desc: "Transtornos psíquicos que afetam a capacidade cognitiva.",
  },
  {
    name: "Nefropatia grave",
    desc: "Insuficiência renal severa, podendo exigir diálise ou transplante.",
  },
  {
    name: "Doença de Paget",
    desc: "Alteração óssea crônica que causa deformidades e dor — também chamada de osteíte deformante.",
  },
  {
    name: "Doença de Parkinson",
    desc: "Distúrbio neurodegenerativo que provoca tremores e dificuldades motoras progressivas.",
  },
  {
    name: "Fibrose Cística",
    desc: "Doença genética que produz muco espesso e afeta pulmões e sistema digestivo.",
  },
  {
    name: "Acidente de Serviço",
    desc: "Quando a aposentadoria ou reforma resulta diretamente de acidente de serviço.",
  },
  {
    name: "Moléstia Profissional",
    desc: "Isenção garantida quando a aposentadoria decorre de doença causada pela atividade profissional.",
  },
];

// Dados para a seção ComoPedir (Documentos)
const requiredDocuments = [
  "Documento de identificação com foto (RG ou CNH)",
  "Laudo médico com CID e data do diagnóstico (inclusive de médico particular)",
  "Comprovante de recebimento de aposentadoria ou pensão",
  "Contracheques recentes que mostrem o desconto de IR",
  "Comprovante de residência",
];

// Dados para a seção Graficos (Tabela Salarial)
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

// Dados para a seção Steps (Fluxo de Processo)
const processSteps = [
  {
    step: "1º Passo",
    title: "Consulta Inicial",
    description: (
      <>
        Você clica no botão <i>“Falar com um Advogado”</i> ou{" "}
        <i>“Consulte um Advogado”</i> e envia uma breve descrição do seu caso.
      </>
    ),
    marker: "ATENDIMENTO",
    markerPosition: "right",
  },
  {
    step: "2º Passo",
    title: "Análise e Contato",
    description:
      "Minha equipe e eu recebemos sua mensagem e retornamos o mais rápido possível para dar continuidade ao atendimento.",
    marker: "REUNIÃO",
    markerPosition: "left",
  },
  {
    step: "3º Passo",
    title: "Proposta e Honorários",
    description:
      "Após analisar sua situação, apresentamos a solução ideal e, somente então, enviamos a proposta de honorários.",
    marker: "SOLUÇÃO",
    markerPosition: "right",
  },
];

// Placeholders de Imagem
const advocateImageUrl =
  "https://placehold.co/300x400/08548c/ffffff?text=Advogada+Especialista";

// =============================================================================
// II. COMPONENTES DE UTILIDADE (ICONS & BOXES)
// =============================================================================

// Ícone de Fita (para seção de Doenças)
const RibbonIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="0.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-ribbon-icon lucide-ribbon"
  >
    <path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" />
    <path d="m12 18 2.57-3.5" />
    <path d="M6.243 9.016a7 7 0 0 1 11.507-.009" />
    <path d="M9.35 14.53 12 11.22" />
    <path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" />
  </svg>
);

// Ícone de Checkmark (para lista de documentos)
const CheckListItem = ({ text }) => (
  <div className="flex items-start mb-2 font-secondFont">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-lighter font-secondFont"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span className="text-gray-700 font-secondFont">{text}</span>
  </div>
);

// Ícones para FeatureBox
const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 font-secondFont"
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
    className="w-8 h-8 font-secondFont"
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
    className="w-8 h-8 font-secondFont"
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

// Componente para um Ícone de Feature (Caixa de Destaque)
const FeatureBox = ({ title, description, icon }) => (
  <div className="flex flex-col items-center p-4 text-center font-secondFont">
    <div className="mb-3 text-lighter">{icon}</div>
    <h1 className="mb-1 text-lg font-bold text-gray-800 font-secondFont">
      {title}
    </h1>
    <p className="text-sm text-gray-600 font-secondFont">{description}</p>
  </div>
);

// Componente do Gráfico de Barras SVG (para seção Graficos)
const FinancialChart = () => (
  <div className="w-full max-w-lg p-4 mx-auto bg-white border border-gray-100 shadow-lg sm:p-6 rounded-xl font-secondFont">
    <svg
      viewBox="0 0 500 450" // Aumentei o viewBox para acomodar o eixo X
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

      {/* Legenda (dentro do SVG para garantir que apareça) */}
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

// Componente da Timeline (para seção Steps) - Versão estável
const ProcessTimeline = () => (
  <div className="relative max-w-lg pt-6 mx-auto font-secondFont">
    {/* Linha Vertical Central */}
    <div className="absolute top-0 left-1/2 w-0.5 bg-red-200 h-full transform -translate-x-1/2"></div>

    {processSteps.map((item, index) => {
      const isLeft = item.markerPosition === "left";

      return (
        <div key={index} className="relative w-full mb-12">
          {/* Bloco de Conteúdo (Card) */}
          <div className="w-full p-4 border-l-4 border-red-400 shadow-md bg-white rounded-xl">
            <p className="mb-1 text-sm font-bold text-lighter">{item.step}</p>
            <p className="mb-2 text-lg font-semibold text-lighter">
              {item.title}
            </p>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>

          {/* Ponto de Conexão na Linha Vertical */}
          <div className="absolute top-0 z-10 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full bg-lighter left-1/2"></div>
        </div>
      );
    })}
  </div>
);

// =============================================================================
// III. COMPONENTES DE SEÇÃO
// =============================================================================

// 1. SEÇÃO ISENCAOIR (Lista de Doenças - Reconstruída) - Cor de fundo: bg-neutral-100
const IsencaoIR = () => (
  <SectionArea>
    <SectionWrapper>
      <section className="bg-neutral-100 font-secondFont" id="isencao-ir">
        <div className="mx-auto text-center max-w-7xl">
          <header className="mb-12">
            <p className="mb-1 text-sm font-semibold uppercase text-lighter font-secondFont">
              Quem tem direito?
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 uppercase sm:text-4xl font-mainFont">
              Doenças graves listadas no art. 6º da Lei nº 7.713/88
            </h1>
            <p className="max-w-4xl mx-auto mt-4 text-base text-gray-600 font-secondFont">
              A lei brasileira garante isenção de Imposto de Renda a aposentados
              e pensionistas diagnosticados com doenças graves. É uma proteção
              legal que reduz o impacto financeiro do tratamento e assegura mais
              tranquilidade e dignidade ao beneficiário.
            </p>
          </header>

          {/* Grid de Doenças */}
          <div className="grid grid-cols-1 phone2:grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {diseasesData.map((d, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 text-center bg-gray-50 border border-red-200 rounded-xl shadow-sm transition transform hover:scale-[1.02] hover:shadow-md"
              >
                <div className="mb-4 text-darker">
                  <RibbonIcon />
                </div>
                <h1 className="mb-4 text-base font-bold text-lighter font-secondFont">
                  {d.name}
                </h1>
                <p className="text-xs text-gray-600 font-secondFont">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bloco Importante */}
          <div className="max-w-4xl p-6 mx-auto mt-12 text-left border border-red-200 shadow-md bg-red-0 rounded-xl font-secondFont">
            <p className="mb-2 text-sm font-bold text-red-800">
              ⚠️ Importante:
            </p>
            <p className="text-sm text-gray-700">
              Além das enfermidades listadas diretamente na Lei nº 7.713/88, há
              situações em que outras condições graves também obtiveram
              reconhecimento judicial, especialmente quando relacionadas ao
              trabalho ou quando geram incapacidade permanente. <br />
              <br />
              Nesses casos, a avaliação é individual, baseada em laudos médicos
              consistentes e no entendimento consolidado pelos tribunais.
            </p>
            <p className="mt-3 text-sm text-gray-700">
              Nosso escritório é especializado em pedidos de isenção de Imposto
              de Renda por doença grave. Atuamos de forma técnica e estratégica,
              interpretando a legislação e fundamentando cada requerimento em
              decisões atualizadas dos tribunais — inclusive em casos não
              listados expressamente na lei, mas amparados pela jurisprudência.
            </p>
          </div>

          {/* CTA Final da Seção (substituído) */}
          <div className="flex justify-center mt-10">
            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label="Solicitar Minha Isenção" // Mantendo o texto original para clareza
              colorMode="light"
            />
          </div>
        </div>
      </section>
    </SectionWrapper>
  </SectionArea>
);

// 2. SEÇÃO COMOPEDIR (Documentos e Explicação) - Cor de fundo: bg-white
const ComoPedir = () => (
  <section className="bg-white font-secondFont" id="como-pedir">
    <SectionArea>
      <SectionWrapper>
        <div className="flex flex-col items-center justify-center mx-auto text-center">
          <header className="mb-8">
            <p className="mb-1 text-sm font-semibold uppercase text-lighter font-secondFont">
              Documentos Necessários
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 uppercase sm:text-4xl font-mainFont">
              COMO FAZER O PEDIDO DE ISENÇÃO
            </h1>
          </header>

          <p className="max-w-4xl mb-8 text-base text-gray-700 font-secondFont">
            Para iniciar o{" "}
            <span className="font-bold text-lighter">processo judicial</span>,
            não exigimos perícias demoradas nem laudos emitidos exclusivamente
            por peritos do INSS ou do órgão de origem.
            <br />
            <br />O essencial é possuir documentação médica adequada e os
            comprovantes que confirmam seu vínculo como aposentado ou
            pensionista.
          </p>

          {/* Bloco da Lista de Documentos */}
          <div className="max-w-4xl p-6 mb-12 bg-white border border-gray-200 shadow-lg text-start sm:p-8 rounded-xl">
            {requiredDocuments.map((doc, index) => (
              <CheckListItem key={index} text={doc} />
            ))}
          </div>

          {/* Conteúdo Explicativo e Imagem */}
          <div className="items-start gap-8">
            {/* Coluna de Texto */}
            <div className="space-y-5 text-gray-700 lg:col-span-2 font-secondFont">
              <p>
                À primeira vista, o procedimento pode parecer simples — e é
                comum que algumas pessoas tentem resolver sozinhas pela via
                administrativa. Mas, na prática, o cenário é bem diferente.
              </p>
              <p>
                O pedido de isenção envolve requisitos técnicos, detalhes legais
                e fundamentos específicos que, quando apresentados de forma
                incorreta, resultam quase sempre em negativa — mesmo quando o
                direito é legítimo e claro.
              </p>
              <p>
                Aqui no escritório, atuamos com experiência real, conhecimento
                aprofundado da jurisprudência e domínio das objeções normalmente
                usadas para recusar pedidos. Sabemos exatamente o que será
                exigido, o que costuma ser questionado e como construir um
                requerimento forte desde o início.
              </p>
              <p>
                Muitos que tentam por conta própria acabam perdendo tempo —
                tempo que poderia estar sendo convertido em economia mensal e no
                reconhecimento de um direito que já deveria estar sendo
                aplicado.
                <span className="font-bold ml-1">
                  É por isso que a condução profissional faz toda a diferença.{" "}
                </span>
              </p>
              <CtaButton
                icon={content.util.svgWhatsapp}
                link={content.util.ctaWhatsapp}
                label="Fale Com o Escritório"
                colorMode="light"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>{" "}
    </SectionArea>
  </section>
);

// 3. SEÇÃO GRAFICOS (Alívio Financeiro e Restituição) - Cor de fundo: bg-neutral-100
const Graficos = () => (
  <section className=" bg-neutral-100 font-secondFont" id="graficos">
    <div className="mx-auto ">
      <SectionArea>
        <SectionWrapper>
          <header className="max-w-4xl mx-auto mb-8 text-center">
            <p className="mb-1 text-sm font-semibold uppercase text-lighter font-secondFont">
              Alívio Financeiro para Quem Enfrenta Doenças Graves
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 uppercase sm:text-4xl font-mainFont">
              Como a Isenção de Imposto de Renda Impacta o Seu Orçamento
            </h1>
          </header>

          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Coluna do Gráfico */}
            <div className="font-secondFont">
              <FinancialChart />
            </div>

            {/* Coluna do Texto Explicativo */}
            <div className="space-y-4 text-gray-700 font-secondFont">
              <p>
                A isenção do Imposto de Renda gera um impacto imediato e
                concreto na vida financeira de aposentados e pensionistas com
                diagnóstico de doença grave. <br />
                Com a suspensão do desconto, seu benefício passa a render mais
                todos os meses,
                <span className="font-bold text-lighter ml-1">
                  aumentando de forma real a renda disponível.
                </span>
                .
              </p>
              <p>
                O valor que antes era retido pode ser direcionado para
                tratamentos, medicamentos, alimentação, moradia ou para trazer
                mais conforto e estabilidade ao seu dia a dia. Em um momento em
                que cada centavo importa, esse alívio no orçamento faz
                diferença.
              </p>
              <p>
                Além do ganho financeiro direto, a isenção oferece mais
                autonomia, segurança e tranquilidade para quem já enfrenta
                desafios de saúde.
                <span className="font-bold text-lighter ml-1">
                  Menos imposto, mais dignidade.
                </span>
              </p>

              {/* Bloco de Destaque */}
              <div className="p-4 mt-6 border border-red-200 shadow-inner bg-red-0 rounded-xl">
                <p className="text-sm font-medium text-lighter">
                  <span role="img" aria-label="Lâmpada Mágica">
                    💡
                  </span>{" "}
                  Já pensou quanto do que hoje é descontado do seu benefício
                  poderia estar ajudando você? <br />
                  Com a isenção, esse dinheiro deixa de ir para o governo e
                  volta para o seu bolso.
                </p>
              </div>

              {/* Botão CTA da Seção 1 (substituído) */}
              <div className="pt-4">
                <CtaButton
                  icon={content.util.svgWhatsapp}
                  link={content.util.ctaWhatsapp}
                  label="Falar com um Advogado"
                  colorMode="light"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>{" "}
      </SectionArea>

      {/* 3.2. SEÇÃO: RESTITUIÇÃO DOS ÚLTIMOS 5 ANOS */}

      <SectionArea className="bg-white">
        <SectionWrapper>
          <div className="">
            <header className="mb-8">
              <p className="mb-1 text-sm font-semibold uppercase text-lighter font-secondFont flex justify-center text-center">
                Além de suspender o desconto, também buscamos recuperar o que já
                foi pago{" "}
              </p>
              <h1 className="text-3xl font-extrabold text-center text-gray-900 uppercase sm:text-4xl font-mainFont">
                Informação jurídica de forma simples e acessível
              </h1>
              <h1 className="mt-2 text-xl font-bold text-center text-gray-700 sm:text-2xl font-secondFont">
                É{" "}
                <span className="text-lighter">
                  possível requerer a restituição do imposto pago nos últimos 5
                  anos
                </span>
              </h1>
            </header>

            <div className="flex flex-col items-center justify-center gap-10 text-center ">
              {/* Coluna de Texto Explicativo */}
              <div className="space-y-5 text-gray-700 font-secondFont">
                <p>
                  Quando ingressamos com a ação, nosso objetivo não é apenas
                  interromper o desconto mensal do Imposto de Renda. Também
                  solicitamos a restituição de todos os valores cobrados
                  indevidamente nos últimos cinco anos — desde que haja
                  documentação completa e que a condição de saúde já estivesse
                  presente nesse período.
                </p>
                <p>
                  Essa devolução pode representar um valor significativo, muitas
                  vezes superior ao próprio custo da ação, e funciona como forma
                  de compensar o prejuízo causado pelos descontos irregulares.
                </p>

                {/* Bloco de Destaque Inferior */}
              </div>
              <div className="p-3 mt-6 rounded-md shadow-md w-fit">
                <p className="text-sm font-medium text-center text-black">
                  Cada mês de desconto indevido aumenta o valor total a ser
                  restituído.
                </p>
              </div>

              {/* Coluna do Destaque de 5 Anos */}
              <div className="flex flex-col items-center space-y-4 text-center font-secondFont">
                <p className="font-black leading-none text-lighter text-7xl sm:text-8xl">
                  5 anos
                </p>
                <p className="text-lg font-semibold text-gray-600">
                  que podem ser devolvidos
                </p>

                {/* Característica 1 */}
                <div className="flex items-center justify-center mt-4 lg:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2 text-lighter"
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
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      {/* 3.3. SEÇÃO: EXCLUSIVIDADE E TABELA SALARIAL */}
      <SectionArea>
        <SectionWrapper>
          <header className="max-w-4xl  mb-8 text-center">
            <p className="mb-1 text-sm font-semibold uppercase text-lighter font-secondFont">
              Para quem paga mais Imposto de Renda, a isenção faz ainda mais
              diferença{" "}
            </p>
            <h1 className="text-[28px] leading-8 font-extrabold text-gray-900 uppercase sm:text-4xl font-mainFont">
              Atendemos pessoas que recebem a partir de
              <span className="text-lighter"> 1 salário mínimo</span>,
              independente do valor máximo de renda
            </h1>
          </header>

          <p className="max-w-4xl mx-auto mb-10 text-base text-center text-gray-700 font-secondFont">
            A isenção do Imposto de Renda traz um impacto financeiro muito maior
            para aposentados e pensionistas com rendimentos mais altos, onde o
            desconto costuma ser significativo e recorrente. Nosso atendimento é
            voltado exclusivamente a esse perfil, garantindo um resultado
            relevante — tanto no aumento imediato da renda mensal quanto na
            possibilidade de recuperar valores pagos nos últimos anos.
          </p>

          {/* Tabela de Comparação Salarial */}
          <div className="w-full mx-auto overflow-x-auto border border-gray-200 shadow-xl md:w-fit rounded-xl">
            <table className="divide-y divide-gray-200 font-secondFont">
              <thead className="bg-gray-0">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-600 uppercase"
                  >
                    Salário Bruto
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold tracking-wider text-left text-red-700 uppercase"
                  >
                    IR (antes da isenção)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold tracking-wider text-left text-pink-800 uppercase"
                  >
                    Salário Líquido <br className="sm:hidden" /> com desconto
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold tracking-wider text-left text-green-700 uppercase"
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
                    <td className="px-6 py-4 text-sm text-red-700 whitespace-nowrap">
                      {row.ir}
                    </td>
                    <td className="px-6 py-4 text-sm text-pink-800 whitespace-nowrap">
                      {row.liquidWithDiscount}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-green-700 whitespace-nowrap">
                      {row.liquidWithExemption}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nota da Tabela */}
          <div className="max-w-5xl mx-auto mt-4 text-center font-secondFont">
            <p className="text-xs text-gray-600">
              <span className="mr-1 font-bold text-red-700">📌</span> Os valores
              de IR apresentados são estimados, calculados com base na tabela
              progressiva atual e sem considerar deduções adicionais
              (dependentes, saúde, etc.).
            </p>
          </div>

          {/* VANTAGENS (Cards Inferiores) */}
          <div className="max-w-6xl pt-16 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <FeatureBox
                title="Aumento imediato na sua renda mensal"
                description="Seu salário líquido sobe no próximo mês, assim que o pedido de isenção for concedido."
                icon={
                  <div className="p-3 bg-red-100 text-lighter rounded-xl">
                    {checkIcon}
                  </div>
                }
              />
              <FeatureBox
                title="Suspensão dos descontos indevidos"
                description="Você para de pagar o IR de forma permanente, garantindo alívio mensal contínuo."
                icon={
                  <div className="p-3 bg-red-100 text-lighter rounded-xl">
                    {syncIcon}
                  </div>
                }
              />
              <FeatureBox
                title="Chance de recuperar valores pagos nos últimos anos"
                description="Recupere o imposto que foi pago indevidamente nos últimos 5 anos."
                icon={
                  <div className="p-3 bg-red-100 text-lighter rounded-xl">
                    {historyIcon}
                  </div>
                }
              />
            </div>
            <div className="pt-4 flex justify-center">
              <CtaButton
                icon={content.util.svgWhatsapp}
                link={content.util.ctaWhatsapp}
                label="Entre em Contato"
                colorMode="light"
              />
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  </section>
);

// 4. SEÇÃO STEPS (Como Funciona - Timeline) - Cor de fundo: bg-white
const Steps = () => (
  <section className="bg-white font-secondFont" id="steps">
    <SectionArea>
      <SectionWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center ">
            <header className="mb-12">
              <p className="mb-1 text-sm font-semibold uppercase text-lighter font-secondFont">
                COMO FUNCIONA
              </p>
              <h1 className="text-3xl font-extrabold text-gray-900 uppercase sm:text-4xl font-mainFont">
                Depois que Você Envia Sua Consulta
              </h1>
            </header>

            <ProcessTimeline />

            {/* Botão CTA Centralizado (substituído) */}
            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label="CONSULTE UM ADVOGADO" // Mantendo o texto original para clareza
              colorMode="light"
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  </section>
);

const Faq = () => (
  <SectionArea>
    <SectionWrapper>
      <div className="">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="mb-1 text-sm font-semibold uppercase text-lighter font-secondFont">
            TIRE SUAS DÚVIDAS
          </p>
          <h1 className="text-3xl font-extrabold text-gray-900 uppercase sm:text-4xl font-mainFont">
            Perguntas Frequentes
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Confira as perguntas abaixo para esclarecer suas dúvidas.
          </p>
        </div>

        {/* Lista do Acordeão */}
        <div className="max-w-3xl mx-auto space-y-4">
          {/* ITEM 1 */}
          <details
            open
            className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group"
          >
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                Já me aposentei há anos. Ainda posso pedir a isenção?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="px-6 pb-6 text-base text-gray-600">
              <p>
                Sim. Desde que haja diagnóstico da doença prevista e o desconto
                de IR esteja ocorrendo; também pode pedir restituição dos
                últimos 5 anos.
              </p>
            </div>
          </details>
          {/* ITEM 2 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                A doença já está controlada. Ainda tenho direito?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Sim. O direito persiste mesmo com controle da doença.
            </div>
          </details>

          {/* ITEM 3 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                Preciso passar por perícia médica oficial?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Não. A assessoria é judicial e baseada em laudos médicos de
              profissionais habilitados, sem exigir perícia do INSS.
            </div>
          </details>

          {/* ITEM 4 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                O pedido pode ser negado mesmo com todos os documentos?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Pode, se a apresentação estiver incorreta ou incompleta; por isso
              a atuação técnica do escritório é importante.
            </div>
          </details>

          {/* ITEM 5 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                Quanto tempo leva para parar o desconto ou receber a devolução?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Alguns casos têm liminar em poucas semanas; a restituição varia
              conforme análise judicial e documentos.
            </div>
          </details>

          {/* ITEM 6 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                Sou servidor público. Tenho os mesmos direitos que quem se
                aposenta pelo INSS?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Sim. O direito à isenção se aplica para aposentados ou
              pensionistas, independentemente se é INSS ou regime próprio.
            </div>
          </details>

          {/* ITEM 7 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                Já estou isento, mas nunca recebi valores de volta. Ainda posso
                pedir?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Sim. Se nunca pediu retroativo, pode ingressar com ação para
              restituição desde que esteja no prazo legal.
            </div>
          </details>

          {/* ITEM 8 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                Quanto tempo leva para começar a valer a isenção após o ingresso
                da ação?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Depende, mas muitos processos têm decisão liminar em poucas
              semanas. A restituição retroativa pode demorar mais, conforme
              trâmite judicial.
            </div>
          </details>

          {/* ITEM 9 */}
          {/* <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                A isenção vale apenas para aposentadoria por invalidez?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Não. Qualquer aposentado ou pensionista com diagnóstico de doença
              grave tem direito, mesmo que não seja aposentadoria por invalidez.
            </div>
          </details> */}

          {/* ITEM 10 */}
          {/* <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                A isenção é automática após o diagnóstico?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Não. É preciso solicitar formalmente ao órgão pagador ou via ação
              judicial. Só após deferimento a isenção passa a valer.
            </div>
          </details> */}

          {/* ITEM 11 */}
          {/* <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                A isenção vale para todas as fontes de renda?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-base text-gray-600">
              Não. Ela vale apenas para aposentadoria, pensão ou reforma. Outras
              rendas continuam tributadas.
            </div>
          </details> */}

          {/* ITEM 12 */}
          {/* <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                O valor retroativo vira precatório?
              </span>
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 space-y-4 text-base text-gray-600">
              <p>
                Normalmente, não. O trabalho começa pela via administrativa,
                reunindo documentos para que o valor seja liberado diretamente
                na conta, evitando precatório.
              </p>
              <p>
                Em casos mais complexos, pode ser preciso recorrer ao
                Judiciário, mas mesmo assim a estratégia é garantir efeito
                retroativo e depois protocolar administrativamente, reduzindo
                muito o risco de virar precatório.
              </p>
            </div>
          </details> */}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <CtaButton
            icon={content.util.svgWhatsapp}
            link={content.util.ctaWhatsapp}
            label="Clique aqui caso tenha mais dúvidas" // Mantendo o texto original para clareza
            colorMode="light"
          />
        </div>
      </div>
    </SectionWrapper>
  </SectionArea>
);

// =============================================================================
// IV. COMPONENTE PRINCIPAL (EXPORT)
// =============================================================================

export default function Personalizado() {
  return (
    <div className="min-h-screen font-secondFont bg-neutral-100">
      <IsencaoIR />
      <ComoPedir />
      <Graficos />
      <Steps />
      <Cta colorMode="default" />
      <Faq />
      <Footer colorMode="default" />
      <WhatsappFloatingButton />
    </div>
  );
}
