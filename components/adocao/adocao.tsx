import CardAdocao from "@/components/adocao/cardAdocao";
import Titulo from "@/components/uteis/titulo";

type Pet = {
  id: string;
  nome: string;
  descricao: string;
  imageUrl?: string;
};

export default function Adocao({ pets }: { pets: Pet[] }) {
  const vazio = !pets || pets.length === 0;

  return (
    <div id="adocao" className="px-4">
      <Titulo titulo="Adoção" />
      {vazio ? (
        <p className="text-center text-[20px] font-semibold text-cyan-800 mt-4">
          Estoque de fofura zerado… por enquanto! 😉 Fique de olho, sempre temos
          novos pets cheios de amor para dar.
        </p>
      ) : (
        <div className="flex justify-center flex-wrap gap-5">
          {pets.map((p) => (
            <CardAdocao
              key={p.id}
              image={p.imageUrl || "/logo_clinsp_img.png"}
              nome={p.nome}
              texto={p.descricao}
            />
          ))}
        </div>
      )}
    </div>
  );
}
