import Adocao from "@/components/adocao/adocao";
import Banner from "@/components/Banner/banner";
import Equipe from "@/components/Equipe/equipe";
import Especialidades from "@/components/Especialidades/especialidades";
import Footer from "@/components/Footer/footer";
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
      <Adocao />
      <Footer />
    </div>
  );
}
