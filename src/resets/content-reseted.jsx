import {} from "lucide-react";
import imgLogo from "../assets/logo.webp";
import imgHero from "../assets/hero.webp";
import imgAbout from "../assets/about.webp";
import imgBackground from "../assets/background.webp";

export const infos = {
  telefone: {
    ddd: "31",
    primeiraParte: "99176",
    segundaParte: "1967",
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
      etiqueta: "⚖️ A_Definir",
      titulo: (
        <p>
          A_Definir
          <strong> A_Definir</strong>A_Definir
        </p>
      ),
      subtitulo: "A_Definir",
      labelBotaoPrincial: "A_Definir",
      labelBotaoSecundario: "Agendar Horário",
    },
  },

  features: {
    texts: {
      titulo: "A_Definir",
      labelBotaoPrincial: "A_Definir",
    },
    cards: [
      {
        index: 1,
        icone: null,
        titulo: "A_Definir",
        descricao: "A_Definir",
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
        icone: null,
        titulo: "A_Definir",
        descricao: "A_Definir",
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
        icone: null,
        titulo: "A_Definir",
        descricao: "A_Definir",
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
        index: 4,
        icone: Tag,
        titulo: "A_Definir",
        descricao: "A_Definir",
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
      titulo: "A_Definir",
      labelBotaoPrincial: "A_Definir",
    },
    antes: {
      etiqueta: "ANTES",
      pontos: [
        {
          index: 1,
          texto: "A_Definir",
        },
        {
          index: 2,
          texto: "A_Definir",
        },
        {
          index: 3,
          texto: "A_Definir",
        },
      ],
    },

    depois: {
      etiqueta: "DEPOIS",
      pontos: [
        {
          index: 1,
          texto: "A_Definir",
        },
        {
          index: 2,
          texto: "A_Definir",
        },
        {
          index: 3,
          texto: "A_Definir",
        },
      ],
    },
  },

  cta: {
    imagem: {
      background: imgBackground,
    },
    texts: {
      etiqueta: "A_Definir",

      titulo: (
        <h2>
          A_Definir
          <strong> A_Definir</strong>
        </h2>
      ),
      labelBotaoPrincial: "A_Definir",
    },
    pontos: [
      {
        index: 1,
        texto: (
          <p>
            A_Definir<strong> A_Definir</strong>
          </p>
        ),
      },
      {
        index: 2,
        texto: (
          <p>
            A_Definir<strong> A_Definir </strong>A_Definir
          </p>
        ),
      },
      {
        index: 3,
        texto: (
          <p>
            A_Definir <strong>A_Definir </strong>A_Definir
          </p>
        ),
      },
    ],
  },

  about: {
    imagem: {
      imgPessoa: imgAbout,
    },
    texts: {
      titulo: "A_Definir",
      labelBotaoPrincial: "A_Definir",
    },
    pontos: [
      {
        index: 1,
        texto: (
          <p>
            A_Definir <strong>A_Definir</strong> A_Definir
          </p>
        ),
      },
      {
        index: 2,
        texto: (
          <p>
            A_Definir <strong>A_Definir</strong> A_Definir
          </p>
        ),
      },
      {
        index: 3,
        texto: (
          <p>
            <strong>A_Definir</strong> A_Definir A_Definir
          </p>
        ),
      },
      {
        index: 4,
        texto: (
          <p>
            A_Definir
            <strong> A_Definir</strong>
          </p>
        ),
      },
      {
        index: 5,
        texto: (
          <p>
            A_Definir <strong>A_Definir</strong> A_Definir
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
      etiqueta: "A_Definir",
      titulo: (
        <h2>
          A_Definir <strong>A_Definir</strong> A_Definir
        </h2>
      ),
      labelBotaoPrincial: "A_Definir",
      direitosReservados: "2025 • A_Definir • Todos os direitos reservados • ",
      desenvolvidoPor: "Desenvolvido com excelência por Paper Street",
      privacidade: (
        <div className="phone3:max-w-3xl mx-auto tablet1:px-6 text-gray-900 leading-relaxed font-secondFont">
          <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>

          <h2 className="text-xl font-semibold mb-3">
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

          <div className="border-t-2 border-black my-8"></div>

          <h2 className="text-xl font-semibold mb-4">Definições</h2>

          <ul className="list-disc ml-6 mb-6 space-y-2">
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

          <div className="border-t-2 border-black my-8"></div>

          <h2 className="text-xl font-semibold mb-4">Direitos dos Titulares</h2>

          <p className="mb-3">Os titulares de dados pessoais têm direito a:</p>

          <ul className="list-disc ml-6 mb-6 space-y-2">
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

          <div className="border-t-2 border-black my-8"></div>

          <h2 className="text-xl font-semibold mb-4">
            Coleta e Uso de Dados Pessoais
          </h2>

          <p className="mb-3">Podemos coletar dados pessoais por meio de:</p>

          <ul className="list-disc ml-6 mb-6 space-y-2">
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

          <ul className="list-disc ml-6 mb-6 space-y-2">
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

          <div className="border-t-2 border-black my-8"></div>

          <h2 className="text-xl font-semibold mb-4">
            Cookies e Tecnologias de Rastreamento
          </h2>

          <p className="mb-4">
            Nosso site pode utilizar cookies e tecnologias semelhantes para
            melhorar a navegação e compreender como os usuários interagem com o
            conteúdo. O uso de cookies não estritamente necessários dependerá do
            consentimento do usuário, que poderá ser configurado ou revogado a
            qualquer momento em seu navegador.
          </p>

          <div className="border-t-2 border-black my-8"></div>

          <h2 className="text-xl font-semibold mb-4">
            Compartilhamento e Transferência de Dados
          </h2>

          <p className="mb-3">Podemos compartilhar dados pessoais com:</p>

          <ul className="list-disc ml-6 mb-6 space-y-2">
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

          <div className="border-t-2 border-black my-8"></div>

          <h2 className="text-xl font-semibold mb-4">
            Armazenamento e Retenção dos Dados
          </h2>

          <p className="mb-4">
            Os dados pessoais são armazenados apenas pelo tempo necessário para
            cumprir as finalidades para as quais foram coletados ou conforme
            exigido por lei. Após o período de retenção, os dados são eliminados
            de forma segura, respeitando normas técnicas e regulatórias.
          </p>

          <div className="border-t-2 border-black my-8"></div>

          <h2 className="text-xl font-semibold mb-4">
            Segurança da Informação
          </h2>

          <p className="mb-4">
            Adotamos medidas técnicas, físicas e administrativas adequadas para
            proteger os dados pessoais contra acesso não autorizado, perda,
            alteração, destruição ou divulgação indevida. Embora nenhuma medida
            seja totalmente infalível, buscamos constantemente aprimorar nossas
            práticas de segurança.
          </p>

          <div className="border-t-2 border-black my-8"></div>

          <h2 className="text-xl font-semibold mb-4">
            Alterações nesta Política
          </h2>

          <p className="mb-4">
            Esta Política de Privacidade poderá ser atualizada periodicamente,
            conforme alterações legais ou melhorias em nossos processos.
            Recomendamos que o usuário revise este documento regularmente para
            manter-se informado sobre como protegemos suas informações.
          </p>

          <div className="border-t-2 border-black my-8"></div>

          <h2 className="text-xl font-semibold mb-4">Contato</h2>

          <p>
            Em caso de dúvidas, solicitações ou exercício de direitos
            relacionados a dados pessoais, entre em contato pelo canal de
            comunicação indicado no site.
          </p>
        </div>
      ),
    },
    pontos: {
      ponto1: "Profissionalismo",
      ponto2: "Experiência",
      ponto3: "Resultados",
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
