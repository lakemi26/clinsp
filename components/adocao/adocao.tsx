import Titulo from "../uteis/titulo";
import CardAdocao from "./cardAdocao";

const Adocao = () => {
  return (
    <div id="adocao">
      <Titulo titulo="Adoção" />
      <div className="flex justify-center flex-wrap gap-5">
        <CardAdocao
          image="/adocao1.jpg"
          nome="Romeu"
          texto="Sou o Romeu: carinhoso, calmo e feito pra amar. Quer ser meu final feliz?"
        />
        <CardAdocao
          image="/adocao2.jpg"
          nome="Mia"
          texto="Oi, sou a Mia! Pequenina, fofa e pronta pra te encher de ronrons."
        />
        <CardAdocao
          image="/adocao3.jpg"
          nome="Tom"
          texto="Me chama de Tom! Brinco, corro e dou as melhores sonecas no colo."
        />
        <CardAdocao
          image="/adocao4.jpg"
          nome="Lola"
          texto="Sou a Lola, uma gatinha doce que só quer um lar cheio de amor 💕"
        />
      </div>
    </div>
  );
};

export default Adocao;
