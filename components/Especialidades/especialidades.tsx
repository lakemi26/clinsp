import Titulo from "../uteis/titulo";
import CardEspecialidades from "./cardEspecialidades";

const Especialidades = () => {
  return (
    <div id="especialidades">
      <Titulo titulo="Nossas Especialidades" />
      <div className="flex justify-center gap-10 flex-col items-center lg:flex-row">
        <CardEspecialidades
          image="/gato.png"
          title="Medicina de Felinos"
          text="Sabemos que gatos têm necessidades únicas e merecem um cuidado especial!
	Realizamos atendimento exclusivo para felinos, com consultório dedicado e ambiente preparado para garantir o conforto e bem-estar do felino."
          especial="Aqui, o seu gatinho é acolhido com carinho e atenção desde a primeira consulta."
        />
        <CardEspecialidades
          image="/odontologia_vet.png"
          title="Odontologia Veterinária"
          text="Cuidar da saúde bucal do seu pet é essencial!
	Oferecemos serviços de profilaxia dentária (remoção de placas, cálculo e polimento) para prevenir doenças.
	Também realizamos tratamentos periodontais para casos mais avançados, que podem afetar não só a boca, mas também o coração, figado, rins e outros orgãos.
"
          especial="A saúde do seu pet começa com um bom cuidado bucal."
        />
        <CardEspecialidades
          image="/oncologia_vet.png"
          title="Oncologia Veterinária"
          text="Cuidar com sensibilidade e precisão faz toda a diferença no tratamento do câncer.
	Realizamos diagnóstico completo, cirurgias oncológicas, quimeoterapia, criocirurgia e eletroquimioterapia, conforme a necessidade de cada caso."
          especial="Com acompanhamento dedicado, buscamos oferecer mais qualidade de vida e conforto aos pets e às suas famílias."
        />
      </div>
    </div>
  );
};

export default Especialidades;
