import Image from "next/image";
import React from "react";

interface AmbientesProps {
  image: string;
}

const CardAmbientes = ({ image }: AmbientesProps) => {
  return (
    <div>
      <Image
        src={image}
        alt="Clínica veterinária na Saúde"
        width={350}
        height={350}
      />
    </div>
  );
};

export default CardAmbientes;
