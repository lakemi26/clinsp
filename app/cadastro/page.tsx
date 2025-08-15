import { adminDb } from "@/app/firebase/admin";
import Adicionarpet from "@/components/adocao/adicionarpet";
import Editar from "@/components/adocao/editarPet";

interface Data {
  id: string;
  imageUrl: string;
  nome: string;
  descricao: string;
}

export default async function Cadastro() {
  const snap = await adminDb
    .collection("pets")
    .orderBy("createdAt", "desc")
    .get();
  const pets = snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Data[];

  return (
    <div className="space-y-7 mt-7 p-5">
      <Adicionarpet />
      <div className="flex flex-wrap gap-5 justify-center">
        {pets.map((p) => (
          <Editar
            key={p.id}
            id={p.id}
            imageUrl={p.imageUrl}
            nome={p.nome}
            descricao={p.descricao}
          />
        ))}
      </div>
    </div>
  );
}
