import Image from "next/image"
import Link from "next/link"
import Menu from "./menu"
import ThemeToggle from "./toggle";

const Navbar = () =>{
    return(
    <div className="h-20 px-4 md:px-8 lg:px-16 relative text-cyan-600 ">
        <div className="h-full flex items-center justify-between mt-2 lg:hidden">
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
            <Menu/>
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
                <div className="flex items-center justify-center gap-8 text-xl">
                    <Link href="">Especialidades</Link>
                    <Link href="">Serviços</Link>
                    <Link href="">Sobre</Link>
                    <Link href="">Equipe</Link>
                    <Link href="">Adoção</Link>
                    <Link href="">Contato</Link>
                </div>
            </div>

            <div>
                <ThemeToggle/>
            </div>

        </div>

    </div>
)};

export default Navbar;
