import { adminDb } from "@/app/firebase/admin";
import Adicionarpet from "@/components/adocao/adicionarpet";
import Editar from "@/components/adocao/editarPet";

export default async function Cadastro() {
  const snap = await adminDb
    .collection("pets")
    .orderBy("createdAt", "desc")
    .get();
  const pets = snap.docs.map((d) => ({ id: d.id, ...d.data() })) as any[];

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
