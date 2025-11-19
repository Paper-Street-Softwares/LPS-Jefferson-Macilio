import WhatsappFloatingButton from "../components/buttons/WhatsappFloatingButton";
import About from "../sections/About";
import Cta from "../sections/Cta";
import Features from "../sections/Features";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Transformacao from "../sections/Transformacao";

export default function Index() {
  return (
    <>
      <Hero imagemFocadaBackground={false} />
      <main>
        <Features />
        <Transformacao />
        <Cta />
        <About />
      </main>
      <Footer />
      <WhatsappFloatingButton />
    </>
  );
}
