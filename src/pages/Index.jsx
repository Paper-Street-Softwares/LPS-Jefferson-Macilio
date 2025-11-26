import React from "react";
import Hero from "../sections/Hero";

const Personalizado = React.lazy(() => import("../sections/Personalizado"));

export default function Index() {
  const colorMode = "light"; // default, light e dark

  return (
    <>
      <Hero colorMode={colorMode} imagemFocadaBackground={true} />
      <main>
        <Personalizado />
      </main>
    </>
  );
}
