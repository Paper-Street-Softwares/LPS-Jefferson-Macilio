import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionHeader from "../components/sectionElements/SectionHeader.jsx";
import content from "../content/Content";

export default function About() {
  return (
    <>
      <div className="bg-neutral-100 ">
        <SectionArea>
          <div className="flex flex-col items-center max-w-7xl">
            <SectionHeader
              title={content.about.texts.titulo}
              marginBottom="mb-0"
            />

            <MotionDivDownToUp>
              <div className="flex flex-col max-w-6xl gap-8 p-8 bg-white border border-gray-100 shadow-2xl md:gap-16 sm:p-12 lg:flex-row">
                <MotionDivDownToUp className="">
                  <div className="flex justify-center md:items-center">
                    <img
                      src={content.about.imagem.imgPessoa}
                      alt="Imagem ilustrativa"
                      className="w-[90%] phone3:w-[295px] tablet1:w-[400px] max-w-[480px] h-auto"
                    />
                    {/* <div className="w-[90%] phone3:w-[295px] tablet1:w-[400px] max-w-[480px] h-[500px] bg-gray-300"></div> */}
                  </div>
                </MotionDivDownToUp>

                <div className="flex flex-col items-center lg:justify-center lg:items-start">
                  <MotionDivDownToUp>
                    <div className="inline-block mb-10 text-left">
                      <ul className="space-y-5">
                        {content.about.pontos
                          .filter((ponto) => ponto.index !== 0)
                          .map((ponto) => (
                            <li key={ponto.index} className="flex items-start">
                              <div className="flex-shrink-0">
                                <svg
                                  className="w-6 h-6 text-darker"
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
                              </div>

                              <span className="ml-3 text-gray-700 text-md">
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
                    label={content.about.texts.labelBotaoPrincial}
                    colorMode="light"
                  />
                </div>
              </div>
            </MotionDivDownToUp>
          </div>
        </SectionArea>
      </div>
    </>
  );
}
