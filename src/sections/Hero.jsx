import content from "../content/Content";
import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import { themes } from "../content/Themes";

export default function Hero({ imagemFocadaBackground, colorMode }) {
  const {
    backgroundDiv,
    titleColor,
    heroTitleFontWeight,
    subtitleColor,
    themeButton,
    themeButtonPrimary,
    heroTitleFocus,
  } = themes[colorMode] || themes.default;

  return (
    <>
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="background.webp"
            alt="Imagem ilustrativa"
            className="object-cover w-full h-full"
          />
          <div
            className={`absolute inset-0 ${backgroundDiv} lg:${backgroundDiv}`}
          ></div>
        </div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-12 pb-24 sm:pt-16 md:pt-28 ${
            imagemFocadaBackground && "lg:pt-10"
          } lg:pb-28 text-center text-fontLighter`}
        >
          <div>
            <div className="flex items-center justify-center w-full my-6 desktop1:my-10">
              <img
                src="/logo.webp"
                alt="Logomarca"
                className="w-[288px] lg:w-[300px] h-auto mb-6"
                width={300}
                height={294}
              />
            </div>
          </div>
          {imagemFocadaBackground && (
            <div className="flex justify-center w-full mb-8">
              <img
                src="/hero.webp"
                fetchpriority="high"
                decoding="sync"
                width={600}
                height={600}
                alt="imagem ilustrativa de um Casal"
                className="object-cover rounded-[4px] h-[400px] w-[450px] md:h-[600px] md:w-[600px] lg:h-[500px] lg:w-[500px]"
              />
            </div>
          )}
          <div>
            <span
              className={`inline-flex mb-6 items-center capitalize rounded-full font-secondFont ${themeButton} ${titleColor} px-4 py-1.5 text-sm font-medium  ring-1 ring-inset ring-neutral-400`}
            >
              {content.hero.texts.etiqueta}
            </span>
          </div>
          <div>
            <h1
              className={`text-4xl ${heroTitleFontWeight} tracking-tight capitalize sm:text-5xl lg:text-6xl font-mainFont ${titleColor}`}
            >
              {content.hero.texts.titulo.antes}{" "}
              <span className={`${heroTitleFocus}`}>
                {content.hero.texts.titulo.palavraFocada}
              </span>{" "}
              {content.hero.texts.titulo.depois}
            </h1>
          </div>
          <div>
            <p
              className={`max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-fond/85 font-secondFont ${subtitleColor}`}
            >
              {content.hero.texts.subtitulo}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.hero.texts.labelBotaoPrincial}
              colorMode={`${themeButtonPrimary}`}
            />
            <CtaButton
              icon={content.util.svgCalendario}
              link={content.util.ctaWhatsapp}
              label={content.hero.texts.labelBotaoSecundario}
              colorMode={`${themeButton}`}
            />
          </div>
          <div className="absolute -translate-x-1/2 bottom-6 left-1/2">
            <MotionDivDownToUp>
              <svg
                className={`w-8 h-8 ${titleColor} animate-bounce`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </MotionDivDownToUp>
          </div>
        </div>
      </div>
    </>
  );
}
