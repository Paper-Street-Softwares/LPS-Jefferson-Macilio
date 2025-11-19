import React from "react";
import MotionDivDownToUp from "../animations/MotionDownToUp.jsx";

function CardTransformacao({ data, styles }) {
  const { etiqueta, pontos } = data;

  const { cardClasses, etiquetaClasses, bulletClasses, textoClasses } = styles;

  return (
    <MotionDivDownToUp className={`p-8  ${cardClasses}`}>
      <div className="flex justify-center md:justify-start">
        <span
          className={`inline-block px-4 py-1 mb-6 text-sm font-extrabold rounded-full font-mainFont ${etiquetaClasses}`}
        >
          {etiqueta}
        </span>
      </div>
      <ul className="space-y-4">
        {pontos
          .filter((ponto) => ponto.index !== 0)
          .map((ponto) => (
            <li key={ponto.index} className="flex items-top">
              <span
                className={`flex-shrink-0 h-2.5 w-2.5 rounded-full mt-[10px] mr-3 ${bulletClasses}`}
              ></span>

              <span className={textoClasses}>{ponto.texto}</span>
            </li>
          ))}
      </ul>
    </MotionDivDownToUp>
  );
}

export default CardTransformacao;
