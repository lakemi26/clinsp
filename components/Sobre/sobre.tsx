import Image from "next/image";
import Titulo from "../uteis/titulo";
import CardSobre from "./cardSobre";

const Sobre = () => {
  return (
    <div>
      <Titulo titulo="Sobre Nós" />
      <div className="bg-gradient-to-b from-cyan-100 via-cyan-50 to-cyan-100 flex p-5 gap-10 justify-center w-[85%] m-auto rounded-2xl">
        <div className="w-[400px]  rounded-2xl overflow-hidden hidden lg:block">
          <Image
            alt="Sobre a ClinSP"
            src="/clinsp_sobre.jpg"
            width={500}
            height={500}
          />
        </div>
        <div className="max-w-[600px] w-full space-y-3.5">
          <p className="font-semibold text-cyan-950">
            Na ClinSP, cuidar é mais do que um serviço, é uma missão com amor e
            compromisso. Nossa equipe está em constante aprimoramento, buscando
            sempre oferecer o melhor para garantir saúde, bem-estar, qualidade
            de vida aos pets e tranquilidade ás suas famílias.
          </p>
          <p className="font-semibold text-cyan-950">
            Nosso foco vai além do tratamento: acreditamos na{" "}
            <span className="font-extrabold text-cyan-600">
              prevenção como parte essencial do cuidado
            </span>
            . E para oferecer um atendimento mais completo, contamos com
            parcerias em diversas especialidades, como:
          </p>
          <div className="flex gap-5 md:flex-row md:gap-10 flex-wrap m-auto">
            <CardSobre image="/acupuntura.png" title="Acupuntura" />
            <CardSobre image="/dermatologia.png" title="Dermatologia" />
            <CardSobre image="/oftalmologia.png" title="Oftalmologia" />
            <CardSobre image="/hematologia.png" title="Hematologia" />
            <CardSobre image="/ortopedia.png" title="Ortopedia" />
            <CardSobre image="/cardiologia.png" title="Cardiologia" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
