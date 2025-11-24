import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";
import { themes } from "../content/Themes";

export default function Cta({ colorMode }) {
  const { backgroundDiv, textColor, minitag, dots } =
    themes[colorMode] || themes.default;

  return (
    <>
      <div className="relative ">
        <div className="absolute inset-0 z-0">
          <img
            src={content.cta.imagem.background}
            alt="Imagem ilustrativa"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${backgroundDiv}`}></div>
        </div>

        <SectionArea>
          <div className="relative z-10 mx-auto text-center max-w-7xl">
            <MotionDivDownToUp>
              <span
                className={`inline-flex items-center rounded-full text-${textColor} bg-${minitag} font-semibold text-xs px-4 py-1.5 uppercase tracking-wider ${textColor}`}
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {content.cta.texts.etiqueta}
              </span>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <h2
                className={`max-w-3xl mx-auto mt-6 text-3xl text-${textColor} font-mainFont lg:text-4xl font-medium`}
              >
                {content.cta.texts.titulo}
              </h2>
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <h2
                className={`max-w-4xl mx-auto mt-4 text-base text-white font-secondFont`}
              >
                {content.cta.texts.subtitulo}
              </h2>
            </MotionDivDownToUp>

            <div className="max-w-3xl mx-auto mt-10 rounded-2xl deskt">
              <MotionDivDownToUp>
                <div className="inline-block mb-16 text-left desktop1:max-w-[400px]">
                  <ul className="space-y-5">
                    {content.cta.pontos
                      .filter((ponto) => ponto.index !== 0)
                      .map((ponto) => (
                        <li key={ponto.index} className="flex items-center">
                          <svg
                            className={`flex-shrink-0 w-6 h-6 text-${dots}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <span className={`ml-3 text-lg text-${textColor}`}>
                            {ponto.texto}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="p-4 mb-8 border border-red-200 shadow-inner bg-red-50 rounded-xl">
                  <p className="text-sm font-medium text-lighter">
                    <span role="img" aria-label="Lâmpada Mágica">
                      💡
                    </span>{" "}
                    Agende um atendimento on-line e, se desejar, venha nos
                    visitar presencialmente.
                  </p>
                </div>
              </MotionDivDownToUp>

              <CtaButton
                icon={content.util.svgWhatsapp}
                link={content.util.ctaWhatsapp}
                label={content.cta.texts.labelBotaoPrincial}
                colorMode="light"
              />
            </div>
          </div>
        </SectionArea>
      </div>
    </>
  );
}
