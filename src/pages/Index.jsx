import WhatsappFloatingButton from "../components/buttons/WhatsappFloatingButton";
import About from "../sections/About";
import ComoPedir from "../sections/ComoPedir";
import Cta from "../sections/Cta";
import Features from "../sections/Features";
import Footer from "../sections/Footer";
import Graficos from "../sections/Graficos";
import Hero from "../sections/Hero";
import IsencaoIR from "../sections/IsencaoIR";
import Personalizado from "../sections/Personalizado";
import Steps from "../sections/Steps";
import Transformacao from "../sections/Transformacao";

export default function Index() {
  const colorMode = "light"; // default, light e dark

  return (
    <>
      <Hero colorMode={colorMode} imagemFocadaBackground={false} />
      <main>
        {/* <Features /> */}
        <Personalizado />
        {/* <IsencaoIR />
        <ComoPedir />
        <Graficos />
        <Steps /> */}
        {/* <Transformacao /> */}
        {/* <Cta colorMode={colorMode} /> */}
        {/* <About /> */}
      </main>
      {/* <Footer colorMode={colorMode} />
      <WhatsappFloatingButton /> */}
    </>
  );
}
