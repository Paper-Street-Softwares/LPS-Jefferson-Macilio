import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import CardTransformacao from "../components/cards/CardTransformacao";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionHeader from "../components/sectionElements/SectionHeader.jsx";
import content from "../content/Content";

export default function Transformacao() {
  return (
    <>
      <div className="bg-white">
        <SectionArea>
          <div className="flex flex-col items-center mx-auto max-w-7xl">
            <SectionHeader title={content.transformacao.texts.titulo} />

            {(() => {
              const cardsConfig = [
                {
                  key: "antes",
                  data: content.transformacao.antes,
                  styles: {
                    cardClasses: "bg-neutral-50/90 shadow-lg hover:shadow-xl",
                    etiquetaClasses: "text-fontLighter bg-darker",
                    bulletClasses: "bg-darker",
                    textoClasses: "text-lg text-gray-700",
                  },
                },
                {
                  key: "depois",
                  data: content.transformacao.depois,
                  styles: {
                    cardClasses: "bg-lighter/20 shadow-lg hover:shadow-xl",
                    etiquetaClasses: "text-fontLighter bg-lighter",
                    bulletClasses: "bg-lighter",
                    textoClasses: "text-lg text-gray-900",
                  },
                },
              ];

              return (
                <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-2">
                  {cardsConfig.map((config) => (
                    <CardTransformacao
                      key={config.key}
                      data={config.data}
                      styles={config.styles}
                    />
                  ))}
                </div>
              );
            })()}

            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.transformacao.texts.labelBotaoPrincial}
              colorMode="light"
            />
          </div>
        </SectionArea>
      </div>
    </>
  );
}
