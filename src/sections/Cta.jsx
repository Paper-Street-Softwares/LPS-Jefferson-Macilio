import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";

export default function Cta() {
  return (
    <>
      <div className="relative ">
        <div class="absolute inset-0 z-0">
          <img
            src={content.cta.imagem.background}
            alt="Imagem ilustrativa"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/90"></div>
        </div>

        <SectionArea>
          <div className="relative z-10 mx-auto text-center max-w-7xl">
            <MotionDivDownToUp>
              <span className="inline-flex items-center rounded-full bg-darker text-fontLighter font-semibold text-xs px-4 py-1.5 uppercase tracking-wider ring-1 ring-inset ring-white/10">
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
              <h2 className="max-w-3xl mx-auto mt-6 text-3xl text-fontLighter font-mainFont lg:text-4xl">
                {content.cta.texts.titulo}
              </h2>
            </MotionDivDownToUp>

            <div className="max-w-3xl mx-auto mt-10 shadow-lg rounded-2xl deskt">
              <MotionDivDownToUp>
                <div className="inline-block mb-16 text-left desktop1:max-w-[400px]">
                  <ul className="space-y-5">
                    {content.cta.pontos
                      .filter((ponto) => ponto.index !== 0)
                      .map((ponto) => (
                        <li key={ponto.index} className="flex items-center">
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-lighter"
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

                          <span className="ml-3 text-lg text-fontLighter">
                            {ponto.texto}
                          </span>
                        </li>
                      ))}
                  </ul>
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
