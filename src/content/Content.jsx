import { HandCoins, FileX, UserRoundSearch } from "lucide-react";
import imgLogo from "../assets/logo.webp";
import imgHero from "../assets/hero.webp";
import imgAbout from "../assets/about.webp";
import imgBackground from "../assets/background.webp";

export const infos = {
  telefone: {
    ddd: "67",
    primeiraParte: "99292",
    segundaParte: "1515",
  },
  mensagemWhatsapp:
    "Olá! Vim através do site e gostaria de tirar algumas dúvidas sobre meu caso.",
};

const content = {
  hero: {
    imagens: {
      backgroundHero: imgBackground,
      focadaHero: imgHero,
      logo: imgLogo,
    },
    texts: {
      etiqueta: "Advogado Tributarista em São Paulo - SP",
      titulo: {
        antes: "Isenção e Restituição de",
        palavraFocada: "Imposto de Renda",
        depois: "para Doenças Graves",
      },
      subtitulo:
        "Aposentados e pensionistas com doença grave podem parar de pagar IR e ainda receber os valores dos últimos 5 anos.",
      labelBotaoPrincial: "Entre em Contato",
      labelBotaoSecundario: "Agendar Horário",
    },
  },

  features: {
    texts: {
      titulo: "Imposto de Renda com orientação jurídica especializada",
      labelBotaoPrincial: "Entrar em Contato",
    },
    cards: [
      {
        index: 1,
        icone: FileX,
        titulo: "Erros na declaração",
        descricao:
          "Identificação e orientação jurídica para a correção de inconsistências na declaração, conforme a legislação vigente.",
        labelBotaoModal: "Saiba mais",
        textoModal: (
          <p>
            A_Definir
            <br />
            <br />
            A_Definir
          </p>
        ),
      },
      {
        index: 2,
        icone: UserRoundSearch,
        titulo: "Malha fina",
        descricao:
          "Análise e acompanhamento jurídico de situações relacionadas à malha fina, com esclarecimentos sobre cada etapa do procedimento.",
        labelBotaoModal: "Saiba mais",
        textoModal: (
          <p>
            A_Definir
            <br />
            <br />
            A_Definir
          </p>
        ),
      },
      {
        index: 3,
        icone: HandCoins,
        titulo: "Restituição retida",
        descricao:
          "Avaliação dos motivos da retenção e orientação sobre os ajustes necessários para a regularização junto aos órgãos competentes.",
        labelBotaoModal: "Saiba mais",
        textoModal: (
          <p>
            A_Definir
            <br />
            <br />
            A_Definir
          </p>
        ),
      },
    ],
  },

  transformacao: {
    texts: {
      titulo: "Orientação jurídica para regularização do Imposto de Renda",
      labelBotaoPrincial: "Falar com Advogado",
    },
    antes: {
      etiqueta: "ANTES",
      pontos: [
        {
          index: 1,
          texto:
            "Dúvidas sobre possíveis erros na declaração do Imposto de Renda",
        },
        {
          index: 2,
          texto:
            "Insegurança sobre a necessidade de suporte jurídico para tratar pendências fiscais",
        },
        {
          index: 3,
          texto: "Preocupação com eventuais multas ou atrasos na restituição",
        },
      ],
    },

    depois: {
      etiqueta: "DEPOIS",
      pontos: [
        {
          index: 1,
          texto:
            "Maior segurança ao contar com acompanhamento jurídico durante a regularização da declaração",
        },
        {
          index: 2,
          texto:
            "Esclarecimentos contínuos sobre cada etapa, com orientação direta e adequada ao seu caso",
        },
        {
          index: 3,
          texto:
            "Tranquilidade ao compreender o andamento do processo e as medidas necessárias segundo a legislação",
        },
      ],
    },
  },

  cta: {
    imagem: {
      background: imgBackground,
    },
    texts: {
      etiqueta: "Não deixe pra depois",

      titulo: <h2>Estamos Online Para Tirar Suas Dúvidas</h2>,
      subtitulo: (
        <p>
          Clique e fale conosco — nossa equipe está pronta para atender você.
        </p>
      ),
      labelBotaoPrincial: "Entrar em Contato",
    },
    pontos: [
      {
        index: 1,
        texto: <p>Receba atendimento imediato com apenas um clique.</p>,
      },
      {
        index: 2,
        texto: <p>Responder Formulário</p>,
      },
      {
        index: 3,
        texto: (
          <p>Envie suas informações e um especialista retornará rapidamente.</p>
        ),
      },
    ],
  },

  about: {
    imagem: {
      imgPessoa: imgAbout,
    },
    texts: {
      titulo: "Por Que Meus Clientes Confiam Em Mim",
      labelBotaoPrincial: "Entrar em Contato",
    },
    pontos: [
      {
        index: 1,
        texto: (
          <p>
            Respondo <strong> rápido </strong> porque sei que o seu tempo
            importa.
          </p>
        ),
      },
      {
        index: 2,
        texto: (
          <p>
            Estou sempre <strong> estudando </strong> todas as mudanças mudanças
            do IR para aposentados, pensionistas e servidores.
          </p>
        ),
      },
      {
        index: 3,
        texto: (
          <p>
            Atuo há<strong> mais de uma década </strong> defendendo quem sofre
            descontos indevidos no Imposto de Renda.
          </p>
        ),
      },
      {
        index: 4,
        texto: (
          <p>
            Não faço promessas falsas: Estudo seu caso e te auxilio
            <strong> sem enrolação.</strong>
          </p>
        ),
      },
      {
        index: 5,
        texto: (
          <p>
            Uso <strong> tecnologia jurídica </strong> para agilizar cálculos,
            protocolos e acompanhar sua restituição.
          </p>
        ),
      },
    ],
  },

  footer: {
    imagem: {
      background: imgBackground,
    },
    texts: {
      etiqueta: "Informações sobre sua restituição",
      titulo: (
        <h2>
          Entre em contato para uma <strong> análise jurídica </strong> da sua
          situação fiscal
        </h2>
      ),
      labelBotaoPrincial: "Falar com o Advogado",
      direitosReservados:
        "2025 - Garcia Machado - Todos os direitos reservados",
      desenvolvidoPor: "Desenvolvido com excelência por Paper Street",
      privacidade: (
        <div className="mx-auto leading-relaxed text-gray-900 phone3:max-w-3xl tablet1:px-6 font-secondFont">
          <h1 className="mb-6 text-3xl font-bold">Política de Privacidade</h1>

          <h2 className="mb-3 text-xl font-semibold">
            Informações Importantes
          </h2>

          <p className="mb-4">
            Esta Política de Privacidade descreve como coletamos, utilizamos,
            armazenamos e compartilhamos informações pessoais de usuários de
            nossos serviços, em conformidade com a Lei Geral de Proteção de
            Dados (LGPD) - Lei nº 13.709/2018.
          </p>

          <p className="mb-4">
            Nos comprometemos a proteger a privacidade e os dados pessoais de
            todos os usuários, garantindo transparência e segurança em todas as
            etapas de tratamento.
          </p>

          <div className="my-8 border-t-2 border-black"></div>

          <h2 className="mb-4 text-xl font-semibold">Definições</h2>

          <ul className="mb-6 ml-6 space-y-2 list-disc">
            <li>
              <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong>{" "}
              órgão responsável pela fiscalização e aplicação da LGPD.
            </li>

            <li>
              <strong>Base Legal:</strong> fundamento jurídico que autoriza o
              tratamento de dados pessoais (como consentimento, execução de
              contrato, obrigação legal ou legítimo interesse).
            </li>

            <li>
              <strong>Consentimento:</strong> manifestação livre e informada do
              titular que autoriza o tratamento de seus dados pessoais para uma
              finalidade específica.
            </li>

            <li>
              <strong>Dado Pessoal:</strong> qualquer informação que identifique
              ou possa identificar uma pessoa natural (ex.: nome, CPF, e-mail,
              telefone, IP, localização, etc.).
            </li>

            <li>
              <strong>Dado Pessoal Sensível:</strong> dado que revele origem
              racial, convicção religiosa, opinião política, dado referente à
              saúde, vida sexual, dado genético ou biométrico.
            </li>

            <li>
              <strong>Titular:</strong> pessoa natural a quem se referem os
              dados pessoais tratados.
            </li>

            <li>
              <strong>Tratamento:</strong> qualquer operação realizada com dados
              pessoais, como coleta, armazenamento, uso, compartilhamento ou
              exclusão.
            </li>

            <li>
              <strong>Legítimo Interesse:</strong> quando o tratamento é
              necessário para atender a interesses legítimos do controlador, sem
              ferir direitos e liberdades fundamentais do titular.
            </li>

            <li>
              <strong>Segurança:</strong> medidas técnicas e administrativas
              adotadas para proteger os dados de acessos não autorizados,
              vazamentos ou destruição acidental.
            </li>
          </ul>

          <p className="mb-4">
            <strong>Transparência:</strong> direito do titular de receber
            informações claras e acessíveis sobre o uso de seus dados.
          </p>

          <div className="my-8 border-t-2 border-black"></div>

          <h2 className="mb-4 text-xl font-semibold">Direitos dos Titulares</h2>

          <p className="mb-3">Os titulares de dados pessoais têm direito a:</p>

          <ul className="mb-6 ml-6 space-y-2 list-disc">
            <li>Confirmar se seus dados são tratados;</li>
            <li>
              Acessar, corrigir, atualizar ou solicitar a exclusão de seus
              dados;
            </li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Solicitar portabilidade ou anonimização dos dados;</li>
            <li>Opor-se ao tratamento quando considerar irregular.</li>
          </ul>

          <p className="mb-4">
            As solicitações podem ser feitas por meio dos canais de contato
            disponibilizados pela empresa.
          </p>

          <div className="my-8 border-t-2 border-black"></div>

          <h2 className="mb-4 text-xl font-semibold">
            Coleta e Uso de Dados Pessoais
          </h2>

          <p className="mb-3">Podemos coletar dados pessoais por meio de:</p>

          <ul className="mb-6 ml-6 space-y-2 list-disc">
            <li>
              Formulários de contato e cadastro (nome, e-mail, telefone,
              endereço, CPF, entre outros);
            </li>
            <li>
              Navegação no site, incluindo endereço IP, localização geográfica,
              tipo de navegador, sistema operacional e tempo de visita;
            </li>
            <li>
              Transações financeiras, quando houver compra de produtos ou
              contratação de serviços;
            </li>
            <li>
              Interações com o suporte ou atendimento, para aprimorar a
              experiência do usuário e a qualidade do serviço.
            </li>
          </ul>

          <p className="mb-3">Esses dados são utilizados para:</p>

          <ul className="mb-6 ml-6 space-y-2 list-disc">
            <li>Operar, manter e melhorar nossos serviços;</li>
            <li>Personalizar a experiência do usuário;</li>
            <li>Cumprir obrigações legais e contratuais;</li>
            <li>
              Realizar comunicações e campanhas de marketing, mediante
              consentimento;
            </li>
            <li>
              Garantir segurança, prevenção a fraudes e cumprimento de
              exigências legais.
            </li>
          </ul>

          <div className="my-8 border-t-2 border-black"></div>

          <h2 className="mb-4 text-xl font-semibold">
            Cookies e Tecnologias de Rastreamento
          </h2>

          <p className="mb-4">
            Nosso site pode utilizar cookies e tecnologias semelhantes para
            melhorar a navegação e compreender como os usuários interagem com o
            conteúdo. O uso de cookies não estritamente necessários dependerá do
            consentimento do usuário, que poderá ser configurado ou revogado a
            qualquer momento em seu navegador.
          </p>

          <div className="my-8 border-t-2 border-black"></div>

          <h2 className="mb-4 text-xl font-semibold">
            Compartilhamento e Transferência de Dados
          </h2>

          <p className="mb-3">Podemos compartilhar dados pessoais com:</p>

          <ul className="mb-6 ml-6 space-y-2 list-disc">
            <li>
              Parceiros e prestadores de serviço, que auxiliam na operação
              técnica, hospedagem, marketing ou suporte;
            </li>
            <li>Autoridades públicas, quando houver obrigação legal;</li>
            <li>Instituições financeiras, em transações de pagamento.</li>
          </ul>

          <p className="mb-4">
            Em caso de transferência internacional de dados, serão adotadas
            medidas para garantir que o tratamento esteja em conformidade com a
            LGPD e com níveis adequados de proteção.
          </p>

          <div className="my-8 border-t-2 border-black"></div>

          <h2 className="mb-4 text-xl font-semibold">
            Armazenamento e Retenção dos Dados
          </h2>

          <p className="mb-4">
            Os dados pessoais são armazenados apenas pelo tempo necessário para
            cumprir as finalidades para as quais foram coletados ou conforme
            exigido por lei. Após o período de retenção, os dados são eliminados
            de forma segura, respeitando normas técnicas e regulatórias.
          </p>

          <div className="my-8 border-t-2 border-black"></div>

          <h2 className="mb-4 text-xl font-semibold">
            Segurança da Informação
          </h2>

          <p className="mb-4">
            Adotamos medidas técnicas, físicas e administrativas adequadas para
            proteger os dados pessoais contra acesso não autorizado, perda,
            alteração, destruição ou divulgação indevida. Embora nenhuma medida
            seja totalmente infalível, buscamos constantemente aprimorar nossas
            práticas de segurança.
          </p>

          <div className="my-8 border-t-2 border-black"></div>

          <h2 className="mb-4 text-xl font-semibold">
            Alterações nesta Política
          </h2>

          <p className="mb-4">
            Esta Política de Privacidade poderá ser atualizada periodicamente,
            conforme alterações legais ou melhorias em nossos processos.
            Recomendamos que o usuário revise este documento regularmente para
            manter-se informado sobre como protegemos suas informações.
          </p>

          <div className="my-8 border-t-2 border-black"></div>

          <h2 className="mb-4 text-xl font-semibold">Contato</h2>

          <p>
            Em caso de dúvidas, solicitações ou exercício de direitos
            relacionados a dados pessoais, entre em contato pelo canal de
            comunicação indicado no site.
          </p>
        </div>
      ),
    },
  },

  util: {
    ctaWhatsapp: `https://wa.me/+55${infos.telefone.ddd}${infos.telefone.primeiraParte}${infos.telefone.segundaParte}?text=${infos.mensagemWhatsapp}`,
    svgWhatsapp: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
      </svg>
    ),
    svgCalendario: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-calendar-icon lucide-calendar"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
};

export default content;
