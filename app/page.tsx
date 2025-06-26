import Banner from "@/components/Banner/banner";
import Equipe from "@/components/Equipe/equipe";
import Especialidades from "@/components/Especialidades/especialidades";
import Servicos from "@/components/Servicos/servicos";
import Sobre from "@/components/Sobre/sobre";

export default function Home() {
  return (
    <div>
      <Banner />
      <Especialidades />
      <Servicos />
      <Sobre />
      <Equipe />
    </div>
  );
}
