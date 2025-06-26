import Image from "next/image";

interface TituloProps {
  titulo: string;
}

const Titulo = ({ titulo }: TituloProps) => {
  return (
    <div className="flex gap-2 items-center ml-8 md:ml-18 lg:ml-20 xl:ml-35 mt-30 mb-15">
      <div className="w-[30px]">
        <Image alt="Cinsp" src="/patas.png" width={500} height={500} />
      </div>
      <h1 className="text-cyan-600 font-bold text-4xl ">{titulo}</h1>
    </div>
  );
};

export default Titulo;
