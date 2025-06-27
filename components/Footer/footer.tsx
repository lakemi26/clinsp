import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="mt-30 bg-cyan-700 flex flex-col gap-5 md:flex-row justify-around md:items-center p-10">
        <div>
          <Image alt="" src="/logo_clinsp.png" width={200} height={200}></Image>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center mb-3">
            <Image alt="" src="/pata.png" width={25} height={25}></Image>
            <p className="text-cyan-50 font-extrabold">Contato:</p>
          </div>
          <div className="flex gap-1 items-center mb-3">
            <Image alt="" src="/telefone.png" width={25} height={25}></Image>
            <p className="text-cyan-50 font-semibold">(11)99149-5258</p>
          </div>
          <div className="flex gap-1 items-center mb-3">
            <Image alt="" src="/email.png" width={25} height={25}></Image>
            <p className="text-cyan-50 font-semibold">clinspvet@gmail.com</p>
          </div>
          <div className="flex gap-1 items-center mb-3">
            <Image alt="" src="/pin.png" width={25} height={25}></Image>
            <Link href="http://bit.ly/4l2ua36">
              <p className="text-cyan-50 font-semibold">
                Av. Jabaquara, 1469 - loja 47
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center mb-3">
            <Image alt="" src="/relogio.png" width={25} height={25}></Image>
            <p className="text-cyan-50 font-extrabold">Horários:</p>
          </div>
          <p className="text-cyan-50 font-semibold md:ml-[25px] ">
            Seg à Sex - 9h às 17h30
          </p>
          <p className="text-cyan-50 font-semibold md:ml-[25px]">
            Sab - 9h às 12h30
          </p>
          <p className="text-cyan-50 font-semibold md:ml-[25px]">
            Dom - Fechado
          </p>
        </div>
      </div>
      <div className="bg-cyan-800">
        <p className="w-fit m-auto text-cyan-50">
          @{new Date().getFullYear()} <a href="">ClinSP</a> Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
