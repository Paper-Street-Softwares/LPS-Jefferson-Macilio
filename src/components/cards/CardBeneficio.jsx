import React from "react";

function CardBeneficios({ icone: Icone, texto }) {
  return (
    <div className="flex items-center p-6 transition-all duration-300 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-transparent">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-600">
        {Icone && <Icone size={24} strokeWidth={1.5} />}
      </div>
      <span className="ml-4 text-lg font-medium text-gray-900">{texto}</span>
    </div>
  );
}

export default CardBeneficios;
