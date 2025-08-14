import Adicionarpet from "@/components/adocao/adicionarpet";
import Editar from "@/components/adocao/editarAdocao";
import React from "react";

const Cadastro = () => {
  return (
    <div className="space-y-7 mt-7 p-5">
      <Adicionarpet />
      <div className="flex gap-5 justify-center">
        <Editar
          image="/adocao1.jpg"
          nome="Romeu"
          texto="Sou o Romeu: carinhoso, calmo e feito pra amar. Quer ser meu final feliz?"
        />
        <Editar
          image="/adocao1.jpg"
          nome="Romeu"
          texto="Sou o Romeu: carinhoso, calmo e feito pra amar. Quer ser meu final feliz?"
        />
        <Editar
          image="/adocao1.jpg"
          nome="Romeu"
          texto="Sou o Romeu: carinhoso, calmo e feito pra amar. Quer ser meu final feliz?"
        />
        <Editar
          image="/adocao1.jpg"
          nome="Romeu"
          texto="Sou o Romeu: carinhoso, calmo e feito pra amar. Quer ser meu final feliz?"
        />
        <Editar
          image="/adocao1.jpg"
          nome="Romeu"
          texto="Sou o Romeu: carinhoso, calmo e feito pra amar. Quer ser meu final feliz?"
        />
      </div>
    </div>
  );
};

export default Cadastro;
