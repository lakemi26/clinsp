import Image from "next/image";
import Titulo from "../uteis/titulo";

const Servicos = () => {
  return (
    <div className="">
      <Titulo titulo="Nossos Serviços" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-15 lg:gap-30 bg-gradient-to-b from-white to-cyan-50">
        <div className="w-[400px] h-[410px] md:w-[500px] md:h-[380px] border-2 border-solid border-cyan-500 rounded-2xl p-5 pb-0 relative">
          <div className="flex gap-2 items-center ">
            <div className="w-[40px]">
              <Image
                alt="Serviços"
                src="/estetoscopio.png"
                width={500}
                height={500}
              />
            </div>
            <h2 className="text-xl text-cyan-700 font-semibold my-4">
              Consultas e Acompanhamento Clínico
            </h2>
          </div>
          <p>
            Oferecemos{" "}
            <span className="text-cyan-700 font-bold">
              consultas com profissionais especializados em cães e gatos
            </span>
            , sempre com atenção, carinho e responsabilidade.
            <br />
            Nosso time é capacitado para realizar um atendimento completo, com
            acompanhamento contínuo e suporte para diagnóstico e tratamento de
            diversas patologias.
          </p>
          <p className="mt-5 text-[20px] font-semibold text-cyan-500">
            Aqui, cada consulta é feita com amor, escuta e dedicação.
          </p>
          <div className=" m-auto absolute bottom-0 w-full flex justify-center left-0">
            <Image alt="Olhos" src="/cabecinhas.png" width={400} height={500} />
          </div>
        </div>
        <div className="w-[400px] h-[410px] md:w-[500px] md:h-[380px] border-2 border-solid border-cyan-500 rounded-2xl p-5 bg-gradient-to-b from-white to-cyan-50 relative">
          <div className="flex gap-2 items-center">
            <div className="w-[40px]">
              <Image alt="Serviços" src="/teste.png" width={500} height={500} />
            </div>
            <h2 className="text-xl text-cyan-700 font-semibold my-4">
              Exames laboratoriais e de imagem
            </h2>
          </div>
          <h2 className="text-xl text-cyan-700 font-semibold my-4">
            Exames laboratoriais e de imagem
          </h2>
          <ul className=" ml-5 list-disc marker:text-cyan-700">
            <li>Exames laboratoriais (sangue, urina e fezes)</li>
            <li>Eletrocardiograma (ECG)</li>
            <li>Citologia</li>
            <li>Histopatologia</li>
          </ul>
          <h2 className="text-lg text-cyan-600 font-semibold my-2">
            Com agendamento prévio:
          </h2>
          <ul className=" ml-5 list-disc marker:text-cyan-700">
            <li>Ultrassonografia</li>
            <li>Raio-X</li>
            <li>Ecocardiograma</li>
          </ul>
          <div className="absolute bottom-0 left-[300px]">
            <Image alt="Olhos" src="/olhos.png" width={150} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
