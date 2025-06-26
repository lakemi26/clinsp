import Image from "next/image";

interface SobreProps {
  image?: string;
  title: string;
}

const CardSobre = ({ image, title }: SobreProps) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-dashed rounded-xl border-cyan-600 hover:border-solid justify-center items-center w-[135px] h-[130px] md:w-[150px] md:h-[180px] ">
      <Image
        className=""
        src={!!image ? image : "/logo_clinsp.png"}
        alt="Especialidades Parceiros"
        width={80}
        height={100}
      />
      <p className="text-center text-cyan-700 font-extrabold text-md md:text-xl">
        {title}
      </p>
    </div>
  );
};

export default CardSobre;
