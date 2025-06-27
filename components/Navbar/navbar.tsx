import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 relative text-cyan-600 ">
      <div className="h-full flex items-center justify-between mt-2 lg:hidden ">
        {/*Mobile */}
        <Link href={"/"}>
          <div className="flex">
            <Image
              src="/logo_clinsp_img.png"
              width={72}
              height={100}
              alt="Logo Clinsp"
            />
            <Image
              src="/logo_clinsp_text.png"
              width={150}
              height={100}
              alt="Logo Clinsp"
            />
          </div>
        </Link>
        <Menu />
      </div>

      {/*Bigger Screens */}
      <div className="hidden lg:flex items-center justify-between gap-8 h-full mt-2">
        <div className="absolute">
          <Link href={"/"}>
            <div className="flex">
              <Image
                src="/logo_clinsp_img.png"
                width={72}
                height={100}
                alt="Logo Clinsp"
              />
              <Image
                src="/logo_clinsp_text.png"
                width={150}
                height={100}
                alt="Logo Clinsp"
                className="opacity-0 xl:opacity-100"
              />
            </div>
          </Link>
        </div>

        <div className="m-auto flex items-center justify-between">
          <div className="flex items-center justify-center gap-8 text-xl font-medium">
            <Link href="#especialidades" className="group relative">
              Especialidades
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-300 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link href="#servicos" className="group relative">
              Serviços
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-300 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link href="#sobre" className="group relative">
              Sobre
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-300 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link href="#equipe" className="group relative">
              Equipe
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-300 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link href="" className="group relative">
              Adoção
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-300 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
