import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X, MoveRight } from "lucide-react";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const abrirModal = () => {
    setVisible(true);
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={content.footer.imagem.background}
            alt="Imagem ilustrativa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/90"></div>
        </div>
        <SectionArea>
          <div className="relative z-10 mx-auto text-center max-w-7xl ">
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
                {content.footer.texts.etiqueta}
              </span>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <h2 className="max-w-3xl mx-auto mt-6 text-3xl text-fontLighter font-mainFont lg:text-4xl">
                {content.footer.texts.titulo}
              </h2>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <p className="max-w-2xl mx-auto mt-4 mb-16 text-lg text-fontLighter">
                {content.footer.texts.subtitulo}
              </p>
            </MotionDivDownToUp>

            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.footer.texts.labelBotaoPrincial}
              colorMode="light"
            />

            <MotionDivDownToUp>
              <div className="max-w-xs mx-auto mt-16 border-t border-white/10"></div>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <p className="mt-6 text-sm text-fontLighter/50">
                {content.footer.pontos.ponto1} • {content.footer.pontos.ponto2}{" "}
                • {content.footer.pontos.ponto3}
              </p>
            </MotionDivDownToUp>

            <div className="mt-12 text-sm text-fontLighter/50 ">
              {content.footer.texts.direitosReservados}{" "}
              <a onClick={abrirModal} className="underline cursor-pointer">
                Políticas de privacidade
              </a>{" "}
              - Desenvolvido com excelência por{" "}
              <a
                target="_blank"
                href="https://paperstreet.com.br"
                className="underline"
              >
                Paper Street
              </a>
            </div>
          </div>
          <Dialog
            className="font-secondFont"
            closeIcon={<X size={20} />}
            // header={
            //   <span className="text-black">Políticas de privacidade</span>
            // }
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: "50vw" }}
            breakpoints={{
              "4000px": "641px",
              "1024px": "641px",
              "641px": "85vw",
            }}
          >
            {content.footer.texts.privacidade}
          </Dialog>
        </SectionArea>
      </div>
    </>
  );
}
