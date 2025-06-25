import Titulo from "../uteis/titulo";

const Servicos = () => {
  return (
    <div className="">
      <Titulo titulo="Nossos Serviços" />
      <div className="flex flex-col lg:flex-row justify-center gap-30 bg-gradient-to-b from-white to-cyan-50">
        <div className="w-[500px] border-2 border-solid border-cyan-500 rounded-2xl p-5">
          <h2 className="text-xl text-cyan-700 font-semibold my-4">
            Consultas e Acompanhamento Clínico
          </h2>
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
        </div>
        <div className="w-[500px] border-2 border-solid border-cyan-500 rounded-2xl p-5 bg-gradient-to-b from-white to-cyan-50">
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
        </div>
      </div>
    </div>
  );
};

export default Servicos;
