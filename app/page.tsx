import Adocao from "@/components/adocao/adocao";
import Ambientes from "@/components/ambientes/ambientes";
import Banner from "@/components/Banner/banner";
import Especialidades from "@/components/Especialidades/especialidades";
import Footer from "@/components/Footer/footer";
import Servicos from "@/components/Servicos/servicos";
import Sobre from "@/components/Sobre/sobre";
import { adminDb } from "@/app/firebase/admin";

export const revalidate = 0;

type Pet = {
  id: string;
  nome: string;
  descricao: string;
  imageUrl?: string;
};

export default async function Home() {
  const snap = await adminDb
    .collection("pets")
    .orderBy("createdAt", "desc")
    .limit(8)
    .get();

  const pets: Pet[] = snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as any),
  }));

  return (
    <div>
      <Banner />
      <Especialidades />
      <Servicos />
      <Sobre />
      <Adocao pets={pets} />
      <Ambientes />
      <Footer />
    </div>
  );
}
