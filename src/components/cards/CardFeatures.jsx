import MotionDivDownToUp from "../animations/MotionDownToUp.jsx";
import CtaButton from "../buttons/CtaButton.jsx";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X, MoveRight } from "lucide-react";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function CardFeatures({
  icone: Icone,
  titulo,
  descricao,
  labelBotaoModal,
  textoModal,
  modal,
}) {
  const [visible, setVisible] = useState(false);
  const abrirModal = () => {
    setVisible(true);
  };

  return (
    <MotionDivDownToUp className="p-8 bg-white shadow-lg hover:shadow-xl md:w-[30%] flex flex-col justify-center items-center">
      {" "}
      <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-transparent border-2 border-solid rounded-lg text-darker/50 border-lighter">
        {Icone && <Icone size={24} strokeWidth={1.5} />}
      </div>
      <h3 className="mb-2 text-xl font-extrabold text-center text-gray-900 capitalize font-secondFont">
        {titulo}
      </h3>
      <p className="leading-5 text-center text-fontDarker/70 font-secondFont">
        {descricao}
      </p>
      {modal === true && (
        <div className="mt-4">
          <a
            onClick={abrirModal}
            className="cursor-pointer underline text-darker font-secondFont"
          >
            {labelBotaoModal}
          </a>
        </div>
      )}{" "}
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={<span className="text-black">{titulo}</span>}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{
          "4000px": "641px",
          "1024px": "641px",
          "641px": "85vw",
        }}
      >
        {textoModal}
      </Dialog>
    </MotionDivDownToUp>
  );
}

export default CardFeatures;
