import React from "react";
import Titulo from "../uteis/titulo";
import CardAmbientes from "./cardAmbientes";

const Ambientes = () => {
  return (
    <div id="ambientes">
      <Titulo titulo="Nossos Ambientes" />
      <div className="flex justify-center gap-10 flex-col items-center lg:flex-row">
        <CardAmbientes image="/clinsp4.jpg" />
        <CardAmbientes image="/clinsp1.jpg" />
        <CardAmbientes image="/clinsp3.jpg" />
      </div>
    </div>
  );
};

export default Ambientes;
