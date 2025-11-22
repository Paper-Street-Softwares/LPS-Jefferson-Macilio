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
    desc: "Isenção garantida mesmo em caso de remissão de doença.",
  },
  {
    name: "Cardiopatia grave",
    desc: "Doença do coração com impacto funcional grave.",
  },
  { name: "AIDS (HIV)", desc: "Síndrome imunológica prevista legalmente." },
  {
    name: "Esclerose Múltipla",
    desc: "Doença autoimune que assegura direito à isenção.",
  },
  {
    name: "Hepatopatia grave",
    desc: "Enfermidades hepáticas com prejuízo severo à saúde.",
  },
  {
    name: "Cegueira (inclusive monocular)",
    desc: "Parcial (monocular) ou total, com laudo médico válido.",
  },
  {
    name: "Paralisia irreversível",
    desc: "Condições que causam incapacidade permanente.",
  },
  {
    name: "Espondiloartrose Deformante",
    desc: "Trantorno psíquicos que afetam a lucidez.",
  },
  {
    name: "Contaminação por radiação",
    desc: "Exposição radioativa com efeitos graves.",
  },
  { name: "Tuberculose ativa", desc: "Doença infecciosa respiratória ativa." },
  { name: "Hanseníase", desc: "Doença crônica com previsão legal de isenção." },
  {
    name: "Alienação mental",
    desc: "Trantornos psíquicos que afetam a lucidez.",
  },
  {
    name: "Nefropatia grave",
    desc: "Insuficiência renal severa que pode exigir diálise ou transplante",
  },
  {
    name: "Doença de Paget",
    desc: "Alteração óssea crônica que causa deformidades e dor. Em estados avançados é chamada OSTEÍTE DEFORMANTE.",
  },
  {
    name: "Doença de Parkinson",
    desc: "Distúrbio neurodegenerativo associado a tremores, rigidez e dificuldades motoras progressivas.",
  },
  {
    name: "Fibrose Cística",
    desc: "Doença genética que provoca produção de muco denso, afetando pulmões e sistema digestivo (Mucoviscidose)",
  },
  {
    name: "Acidente de Serviço",
    desc: "Quando a Aposentadoria ou Reforma foi decorrente de Acidente de Serviço",
  },
  {
    name: "Moléstia Profissional",
    desc: "Quando a Aposentadoria ou Reforma é decorrente de moléstia profissional comprovada.",
  },
];

// Dados para a seção ComoPedir (Documentos)
const requiredDocuments = [
  "Documento de identidade com foto (RG ou CNH)",
  "Laudo médico com CID e data do diagnóstico (pode ser de médico particular)",
  "Comprovante de recebimento de aposentadoria ou pensão",
  "Contracheques recentes com desconto de IR",
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

// Placeholders de Imagem
const advocateImageUrl =
  "https://placehold.co/300x400/08548c/ffffff?text=Advogada+Especialista";

// =============================================================================
// II. COMPONENTES DE UTILIDADE (ICONS & BOXES)
// =============================================================================

// Ícone de Fita (para seção de Doenças)
const RibbonIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 mb-2 text-lighter font-secondFont"
  >
    <path d="M10 2a2 2 0 0 0-2 2v18h4v-18a2 2 0 0 0-2-2zM14 2a2 2 0 0 0-2 2v18h4v-18a2 2 0 0 0-2-2zM6 2a2 2 0 0 0-2 2v18h4v-18a2 2 0 0 0-2-2zM18 2a2 2 0 0 0-2 2v18h4v-18a2 2 0 0 0-2-2z" />
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
    <h3 className="mb-1 text-lg font-bold text-gray-800 font-secondFont">
      {title}
    </h3>
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
          <div className="w-full p-4 border-l-4 border-red-400 shadow-md bg-red-50 rounded-xl">
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
            <h2 className="text-xl font-bold text-gray-700 font-secondFont">
              Quem tem direito à isenção de IR por doença grave?
            </h2>
            <h1 className="mt-1 text-3xl font-extrabold text-lighter sm:text-4xl font-mainFont">
              Doenças graves previstas no artigo 6º da Lei nº 7.713/88
            </h1>
            <p className="max-w-4xl mx-auto mt-4 text-base text-gray-600 font-secondFont">
              A legislação brasileira assegura o direito à isenção do Imposto de
              Renda para aposentados e pensionistas diagnosticados com doenças
              graves. Trata-se de uma proteção legal que busca reduzir o impacto
              financeiro dessas condições de saúde, garantindo mais
              tranquilidade e respeito à dignidade do beneficiário.
            </p>
          </header>

          {/* Grid de Doenças */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {diseasesData.map((d, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 text-center bg-gray-50 border border-red-200 rounded-xl shadow-sm transition transform hover:scale-[1.02] hover:shadow-md"
              >
                <RibbonIcon />
                <h3 className="mb-1 text-base font-bold text-lighter font-secondFont">
                  {d.name}
                </h3>
                <p className="text-xs text-gray-600 font-secondFont">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bloco Importante */}
          <div className="max-w-4xl p-6 mx-auto mt-12 text-left border border-red-200 shadow-md bg-red-50 rounded-xl font-secondFont">
            <p className="mb-2 text-sm font-bold text-red-600">
              ⚠️ Importante:
            </p>
            <p className="text-sm text-gray-700">
              Além das doenças expressamente listadas na Lei nº 7.713/88, há
              casos em que outras condições graves também foram reconhecidas
              judicialmente, quando **comprovadamente decorrentes de trabalho ou
              geradoras de incapacidade permanente**. Estas situações exigem
              **análise individualizada**, com base em laudos médicos e
              precedentes judiciais.
            </p>
            <p className="mt-3 text-sm text-gray-700">
              No escritório, somos especialistas em pedidos de isenção de
              imposto de renda por doença grave, atuando na **interpretação
              jurídica e na elaboração de requerimentos fundamentados em
              decisões reconhecidas pelos tribunais**, inclusive em casos não
              expressamente previstos na lei, mas amparados pela jurisprudência.
            </p>
          </div>

          {/* CTA Final da Seção (substituído) */}
          <div className="flex justify-center mt-10">
            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label="Quero Pedir Minha Isenção" // Mantendo o texto original para clareza
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
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <p className="mb-1 text-sm font-semibold uppercase text-lighter font-secondFont">
              Documentos Necessários
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-mainFont">
              COMO FAZER O PEDIDO DE ISENÇÃO
            </h1>
          </header>

          <p className="max-w-4xl mb-8 text-base text-gray-700 font-secondFont">
            Para ingressar com a{" "}
            <span className="font-bold text-lighter">ação judicial</span>, não
            exigimos perícias demoradas nem laudos emitidos exclusivamente por
            perito oficial do INSS ou do seu órgão de origem. O que realmente
            importa é a documentação médica adequada e os comprovantes que
            atestam seu vínculo como aposentado ou pensionista. Esses são os
            elementos essenciais para fundamentar o pedido com segurança
            jurídica.
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
            <div className="space-y-5 text-gray-700 lg:col-span-2 font-secondFont">
              <p>
                Pode parecer simples à primeira vista, e é natural que algumas
                pessoas pensem em tentar resolver por conta própria, pela via
                administrativa. Mas a realidade é outra.
              </p>
              <p>
                O processo de isenção envolve detalhes técnicos, exigências
                específicas e argumentos jurídicos que, quando mal apresentados,
                levam quase sempre à negativa — mesmo nos casos em que o direito
                é evidente.
              </p>
              <p>
                Aqui no escritório, atuamos com base em experiência prática,
                conhecimento da jurisprudência e o domínio dos objeções que
                normalmente são usadas para indeferir pedidos. Sabemos
                exatamente o que será exigido, o que será contestado e como
                estruturar um pedido juridicamente sólido desde o início.
              </p>
              <p>
                Muitos que tentam sozinhos acabam perdendo tempo precioso —
                tempo esse que poderia estar sendo revertido em alívio
                financeiro mensal e no reconhecimento de um direito que já
                poderia estar sendo aplicado.{" "}
                <span className="font-bold">
                  É por isso que a condução profissional faz toda a diferença.
                </span>
              </p>
              <CtaButton
                icon={content.util.svgWhatsapp}
                link={content.util.ctaWhatsapp}
                label="Entrar em contato"
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
            <p className="mb-1 text-sm font-semibold text-gray-500 uppercase font-secondFont">
              Alívio Financeiro para Quem Enfrenta Doenças Graves
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-mainFont">
              O Que <span className="text-lighter">Muda no Seu Orçamento</span>{" "}
              com a Isenção de Imposto de Renda
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
                A isenção do imposto de renda representa uma mudança real e
                imediata na vida financeira de aposentados e pensionistas
                diagnosticados com doenças graves. Esse direito legal reduz
                significativamente os descontos no seu benefício, resultando em{" "}
                <span className="font-bold text-lighter">
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
                <span className="font-bold text-lighter">
                  Menos impostos, mais dignidade.
                </span>
              </p>

              {/* Bloco de Destaque */}
              <div className="p-4 mt-6 border border-red-200 shadow-inner bg-red-50 rounded-xl">
                <p className="text-sm font-medium text-lighter">
                  <span role="img" aria-label="Lâmpada Mágica">
                    💡
                  </span>{" "}
                  Você já imaginou o quanto esse valor que sai todo mês poderia
                  estar ajudando você agora? Com a isenção, o dinheiro que antes
                  ia para o governo volta para o seu orçamento.
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
              <h2 className="text-2xl font-extrabold text-center text-gray-900 sm:text-3xl font-mainFont">
                Além de suspender o desconto atual, também{" "}
                <span className="text-lighter">
                  pedimos a devolução do que já foi cobrado
                </span>
              </h2>
              <h3 className="mt-2 text-xl font-bold text-center text-gray-700 sm:text-2xl font-secondFont">
                É{" "}
                <span className="text-lighter">
                  possível requerer a restituição do imposto pago nos últimos 5
                  anos
                </span>
              </h3>
            </header>

            <div className="flex flex-col items-center justify-center gap-10 text-center ">
              {/* Coluna de Texto Explicativo */}
              <div className="space-y-5 text-gray-700 font-secondFont">
                <p>
                  Ao ingressar com a ação judicial, não buscamos apenas a
                  suspensão dos descontos mensais de IR. Também incluímos o
                  pedido de devolução de tudo o que foi cobrado indevidamente
                  nos últimos cinco anos — desde que os documentos estejam
                  completos e a condição de saúde já estivesse presente nesse
                  período.
                </p>
                <p>
                  Esse valor pode representar uma quantia expressiva, muitas
                  vezes superior ao próprio custo da ação, e ajuda a reparar
                  parte do prejuízo causado pelo desconto indevido.
                </p>

                {/* Bloco de Destaque Inferior */}
              </div>
              <div className="p-3 mt-6 rounded-md shadow-md w-fit">
                <p className="text-sm font-medium text-center text-black">
                  Cada mês de desconto indevido aumenta o valor acumulado a ser
                  restituído
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
          <header className="max-w-4xl mx-auto mb-8 text-center">
            <p className="mb-1 text-sm font-semibold text-gray-500 uppercase font-secondFont">
              Para quem paga mais imposto, o direito à isenção vale ainda mais
            </p>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl font-mainFont">
              Atendemos exclusivamente quem recebe acima de{" "}
              <span className="text-lighter">R$ 4.000,00 por mês</span>
            </h2>
          </header>

          <p className="max-w-4xl mx-auto mb-10 text-base text-center text-gray-700 font-secondFont">
            A isenção do imposto de renda gera maior impacto para aposentados e
            pensionistas com rendimentos mensais mais elevados, onde os
            descontos costumam ser altos e constantes. Atuamos exclusivamente
            para esse perfil de beneficiário, garantindo que o trabalho jurídico
            entregue um resultado financeiro relevante — tanto na renda mensal
            quanto na possibilidade de restituição dos últimos anos.
          </p>

          {/* Tabela de Comparação Salarial */}
          <div className="w-full mx-auto overflow-x-auto border border-gray-200 shadow-xl md:w-fit rounded-xl">
            <table className="divide-y divide-gray-200 font-secondFont">
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
          <div className="max-w-5xl mx-auto mt-4 text-center font-secondFont">
            <p className="text-xs text-gray-600">
              <span className="mr-1 font-bold text-red-500">*</span> Os valores
              de IR são aproximados, baseados na tabela progressiva vigente e
              sem outras deduções (como dependentes ou plano de saúde).
            </p>
          </div>

          {/* VANTAGENS (Cards Inferiores) */}
          <div className="max-w-6xl pt-16 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <FeatureBox
                title="Renda aumenta imediatamente"
                description="Seu salário líquido sobe no próximo mês, assim que o pedido de isenção for concedido."
                icon={
                  <div className="p-3 bg-red-100 text-lighter rounded-xl">
                    {checkIcon}
                  </div>
                }
              />
              <FeatureBox
                title="Descontos indevidos são suspensos"
                description="Você para de pagar o IR de forma permanente, garantindo alívio mensal contínuo."
                icon={
                  <div className="p-3 bg-red-100 text-lighter rounded-xl">
                    {syncIcon}
                  </div>
                }
              />
              <FeatureBox
                title="Possibilidade de restituição retroativa"
                description="Recupere o imposto que foi pago indevidamente nos últimos 5 anos."
                icon={
                  <div className="p-3 bg-red-100 text-lighter rounded-xl">
                    {historyIcon}
                  </div>
                }
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
              <p className="mb-1 text-sm font-semibold text-gray-500 uppercase font-secondFont">
                COMO FUNCIONA
              </p>
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-mainFont">
                Após Você Enviar Sua Consulta Aqui
              </h1>
            </header>

            <ProcessTimeline />

            {/* Botão CTA Centralizado (substituído) */}
            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label="Consulte um advogado" // Mantendo o texto original para clareza
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl font-mainFont">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tire suas dúvidas sobre isenção de imposto de renda para aposentados
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
                Sim. A isenção pode ser solicitada a qualquer momento, desde que
                haja diagnóstico de uma das doenças previstas em lei e o
                desconto de IR esteja acontecendo. Inclusive, é possível pedir a
                restituição dos valores pagos nos últimos 5 anos.
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
              Sim. A isenção pode ser solicitada mesmo com a doença controlada,
              desde que exista diagnóstico formal e o desconto de IR esteja
              acontecendo. E é possível solicitar a devolução dos últimos 5
              anos.
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
              Não. A atuação é judicial e baseada em laudos emitidos por médicos
              habilitados. Não é exigida perícia oficial do INSS.
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
              Sim, se for feito de maneira incorreta ou incompleta. Por isso a
              atuação jurídica técnica evita indeferimentos por detalhes
              formais.
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
              Alguns casos recebem liminar em poucas semanas. Já a restituição
              depende do histórico e análise judicial — quanto antes iniciar,
              melhor.
            </div>
          </details>

          {/* ITEM 6 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                Sou servidor público. Tenho os mesmos direitos?
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
              Sim. O direito vale para aposentados e pensionistas do INSS e
              também para servidores federais, estaduais e municipais.
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
              Sim. É possível ingressar com ação judicial para pedir a
              restituição dos últimos 5 anos.
            </div>
          </details>

          {/* ITEM 8 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
            <summary className="flex items-center justify-between p-6 list-none cursor-pointer">
              <span className="text-lg font-medium text-gray-900">
                Quanto tempo leva para a isenção começar a valer?
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
              Muitos processos recebem liminar em poucas semanas, suspendendo o
              desconto de imediato. Já a restituição pode levar mais tempo por
              envolver análise detalhada.
            </div>
          </details>

          {/* ITEM 9 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
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
          </details>

          {/* ITEM 10 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
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
          </details>

          {/* ITEM 11 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
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
          </details>

          {/* ITEM 12 */}
          <details className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl group">
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
          </details>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <CtaButton
            icon={content.util.svgWhatsapp}
            link={content.util.ctaWhatsapp}
            label="Consulte um advogado" // Mantendo o texto original para clareza
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
