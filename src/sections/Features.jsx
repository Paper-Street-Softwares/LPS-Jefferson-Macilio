import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import CardFeatures from "../components/cards/CardFeatures";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionHeader from "../components/sectionElements/SectionHeader.jsx";
import content from "../content/Content";

export default function Features() {
  return (
    <>
      <div className="bg-neutral-100">
        <SectionArea>
          <div className="flex flex-col items-center mx-auto max-w-7xl ">
            <SectionHeader title={content.features.texts.titulo} />

            <div className="flex flex-col items-start gap-10 mb-16 md:flex-row md:flex-wrap md:justify-center">
              {content.features.cards
                .filter((card) => card.index !== 0)
                .map((card) => (
                  <CardFeatures modal={false} key={card.index} {...card} />
                ))}
            </div>

            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.features.texts.labelBotaoPrincial}
              colorMode="light"
            />
          </div>
        </SectionArea>
      </div>
    </>
  );
}
