"use client";

import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="">
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={50}
        color="#00C4CC"
        duration={0.8}
      />
      {isOpen && (
        <div className="absolute bg-white text-cyan-600 left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="#especialidades">Especialidades</Link>
          <Link href="#servicos">Serviços</Link>
          <Link href="#sobre">Sobre</Link>
          <Link href="#equipe">Equipe</Link>
          <Link href="#adocao">Adoção</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
