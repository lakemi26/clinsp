import Image from "next/image";

interface EquipeProps {
  image?: string;
  nome: string;
  especialidade: string;
  texto: string;
}

const CardEquipe = ({ image, nome, especialidade, texto }: EquipeProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-[300px] rounded-2xl shadow-[5px_5px_6px_0px_rgba(149,_157,_165,_0.2)] gap-2 p-3">
      <Image
        className="rounded-full "
        src={!!image ? image : "/logo_clinsp_img.png"}
        alt="Especialidades"
        width={200}
        height={200}
      />
      <h2 className="text-2xl font-bold text-cyan-600 ">{nome}</h2>
      <h3 className="text-lg font-semibold text-cyan-700 text-center">
        {especialidade}
      </h3>
      <p className="text-center text-[14px] text-cyan-950">{texto}</p>
    </div>
  );
};

export default CardEquipe;
