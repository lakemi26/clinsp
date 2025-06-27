import Image from "next/image";

interface AdocaoProps {
  image?: string;
  nome: string;
  texto: string;
}

const CardAdocao = ({ image, nome, texto }: AdocaoProps) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-dashed rounded-xl border-cyan-600 hover:border-solid justify-center items-center w-[300px] h-[350px] p-2">
      <div className="w-[280px] h-[180px] overflow-hidden rounded-2xl">
        <Image
          src={!!image ? image : "/logo_clinsp_img.png"}
          alt="Pet para adoção na saúde"
          width={300}
          height={200}
        />
      </div>
      <h2 className="text-cyan-700 font-bold text-2xl">{nome}</h2>
      <p className="text-center text-cyan-900 h-[30%]">{texto}</p>
    </div>
  );
};

export default CardAdocao;
