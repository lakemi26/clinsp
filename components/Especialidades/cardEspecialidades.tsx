import Image from "next/image";

interface CardProps {
  image?: string;
  title: string;
  text: string;
  especial: string;
}

const CardEspecialidades = ({ image, title, text, especial }: CardProps) => {
  return (
    <div className="border-2 border-solid border-cyan-600 rounded-4xl flex flex-col justify-center w-[400px] overflow-hidden group relative pb-[32px]">
      <div>
        <Image
          className="rounded-t-4xl h-[400px] w-[400px] object-cover "
          src={!!image ? image : "/logo_clinsp.png"}
          alt="Especialidades"
          width={400}
          height={400}
        />
        <h2 className="text-[20px] text-cyan-50 w-full text-center font-bold absolute bottom-2 z-10 ">
          {title}
        </h2>
      </div>
      <div className="bg-cyan-600 flex flex-col items-center text-cyan-50 absolute bottom-0 w-full translate-y-[90%] h-full group-hover:translate-y-0 transition-transform p-3 justify-center pb-2 text-center duration-300 ">
        <p className="opacity-0 group-hover:opacity-100 transition-opacity delay-200">
          {text}
        </p>
        <p className="opacity-0 group-hover:opacity-100 transition-opacity delay-500 font-bold">
          {especial}
        </p>
      </div>
    </div>
  );
};

export default CardEspecialidades;
