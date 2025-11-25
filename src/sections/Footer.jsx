import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X, MoveRight } from "lucide-react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { themes } from "../content/Themes";

export default function Footer({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const abrirModal = () => {
    setVisible(true);
  };

  const { backgroundDiv, textColor, minitag, mainColor } =
    themes[colorMode] || themes.default;

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={content.footer.imagem.background}
            alt="Imagem ilustrativa"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${backgroundDiv}`}></div>
        </div>
        <SectionArea paddingbot={false} className="pb-8">
          <div className="relative z-10 mx-auto text-center max-w-7xl ">
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
                {content.footer.texts.etiqueta}
              </span>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <h2
                className={`max-w-3xl mx-auto mt-6 text-3xl text-${textColor} font-mainFont lg:text-4xl mb-12 font-medium`}
              >
                {content.footer.texts.titulo}
              </h2>
            </MotionDivDownToUp>

            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.footer.texts.labelBotaoPrincial}
              colorMode="light"
            />

            <MotionDivDownToUp>
              <div
                className={`max-w-xs mx-auto mt-16 border-t border-neutral-500/50`}
              ></div>
            </MotionDivDownToUp>

            <div
              className={`mt-12 text-sm text-${textColor} flex flex-col gap-2 opacity-75`}
            >
              <p>{content.footer.texts.direitosReservados}</p>
              <p>
                Desenvolvido com excelência por{" "}
                <a
                  target="_blank"
                  href="https://paperstreet.com.br"
                  className="underline"
                >
                  Paper Street
                </a>
              </p>
              <button
                onClick={abrirModal}
                aria-label="Abre um Modal com os termos da Política de privacidade"
                className="underline cursor-pointer outline-none w-fit mx-auto"
              >
                Políticas de privacidade
              </button>{" "}
            </div>
          </div>
          <Dialog
            className="font-secondFont"
            closeIcon={<X size={20} />}
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
