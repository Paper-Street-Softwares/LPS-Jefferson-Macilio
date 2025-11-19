import content from "../content/Content";
import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";

export default function Hero({ imagemFocadaBackground }) {
  const themes = {
    dark: {
      backgroundDiv: "bg-red-500",
      titleColor: "text-blue-400",
      subtitleColor: "text-blue-400",
      themeButtonPrimary: "light",
      themeButton: "light",
    },

    light: {
      backgroundDiv: "bg-white/80",
      titleColor: "text-black",
      subtitleColor: "text-black",
      themeButtonPrimary: "light",
      themeButton: "dark",
    },

    default: {
      backgroundDiv: "bg-black",
      titleColor: "text-white",
      subtitleColor: "text-white",
      themeButtonPrimary: "light",
      themeButton: "dark",
    },
  };

  // 🔥 Corrigido aqui
  const {
    backgroundDiv,
    titleColor,
    subtitleColor,
    themeButton,
    themeButtonPrimary,
  } = themes.light;

  return (
    <>
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={content.hero.imagens.backgroundHero}
            alt="Imagem ilustrativa"
            className="object-cover w-full h-full"
          />
          <div
            className={`absolute inset-0 ${backgroundDiv} lg:${backgroundDiv}`}
          ></div>
        </div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 sm:pt-16 md:pt-28 ${
            imagemFocadaBackground && "lg:pt-10"
          } lg:pb-28 text-center text-fontLighter`}
        >
          <MotionDivDownToUp>
            <div className="flex items-center justify-center w-full my-6 desktop1:my-10">
              <img
                src={content.hero.imagens.logo}
                alt="Logomarca"
                className="w-[288px] phone2:w-[330px] phone3:w-[350px] h-auto mb-6"
              />
              {/* <div className="w-[288px] phone2:w-[330px] phone3:w-[350px] h-[110px] mb-6 bg-gray-300"></div> */}
            </div>
          </MotionDivDownToUp>
          {imagemFocadaBackground && (
            <MotionDivDownToUp className="flex justify-center w-full mb-8">
              <div
                style={{
                  backgroundImage: `url(${content.hero.imagens.focadaHero})`,
                }}
                className="bg-center bg-no-repeat bg-cover h-[400px] w-[450px] md:h-[600px] md:w-[600px] lg:h-[500px] lg:w-[500px]"
              />
              {/* <div className="h-[400px] w-[450px] md:h-[600px] md:w-[600px] lg:h-[500px] lg:w-[500px] bg-gray-300"></div> */}
            </MotionDivDownToUp>
          )}
          <MotionDivDownToUp>
            <span className="inline-flex mb-6 items-center capitalize rounded-full font-secondFont bg-black/60 px-4 py-1.5 text-sm font-medium text-fontLighter/80 ring-1 ring-inset ring-neutral-400">
              {content.hero.texts.etiqueta}
            </span>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <h1
              className={`text-4xl font-medium tracking-tight capitalize sm:text-5xl lg:text-6xl font-mainFont ${titleColor}`}
            >
              {content.hero.texts.titulo}
            </h1>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <p
              className={`max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-fond/85 font-secondFont ${subtitleColor}`}
            >
              {content.hero.texts.subtitulo}
            </p>
          </MotionDivDownToUp>
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
