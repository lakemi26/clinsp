import Adocao from "@/components/adocao/adocao";
import Ambientes from "@/components/ambientes/ambientes";
import Banner from "@/components/Banner/banner";
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
      {/* <Equipe /> */}
      <Adocao />
      <Ambientes />
      <Footer />
    </div>
  );
}
