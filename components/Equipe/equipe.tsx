import Titulo from "../uteis/titulo";
import CardEquipe from "./cardEquipe";

const Equipe = () => {
  return (
    <div id="equipe">
      <Titulo titulo="Nossa Equipe" />
      <div className="flex justify-center flex-wrap gap-5">
        <CardEquipe
          image="/DraSilvia.png"
          nome="Dra. Silvia"
          especialidade="🐱 Especialista em Felinos"
          texto="Apaixonada por gatos (e com propriedade para isso - ela é mãe de 15 gatinhos!), a Dra.Silvia oferece um atendimento exclusivo e acolhedor para os felinos na ClinSP.
Com seu olhar atento e coração gigante, ela cuida de cada gatinho com o se fosse dela."
        />
        <CardEquipe
          image="/DraAndressa.png"
          nome="Dra. Andressa"
          especialidade="🐾 Clínica Geral"
          texto="Com um jeito doce e escuta atenta, a Dra. Andressa transforma cada consulta em um momento de acolhimento para o pet e para a família.
Na ClinSP, ela é referência em cuidado integral, acompanhando desde o primeiro vacininho até os momentos mais delicados da vida dos nossos companheiros."
        />
        <CardEquipe
          image="/DrFernando.png"
          nome="Dr. Fernando"
          especialidade="🐶 Especialista em Cães"
          texto="Com um carinho especial por raças pequenas e um talento nato para acalmar até os cãezinhos mais ansiosos, o Dr. Fernando cuida dos peludos da ClinSP como verdadeiros membros da família.
Seu consultório é sempre cheio de patinhas nervosas e rabinhos abanando de alegria!"
        />
        <CardEquipe
          image="/DraAna.png"
          nome="Dra. Ana"
          especialidade="🐰 Especialista em Animais de Pequeno Porte"
          texto="Quieta, gentil e extremamente dedicada, a Dra. Ana é a melhor amiga dos coelhos, hamsters e outros pequenos companheiros.
Na ClinSP, ela é a responsável por trazer conforto e saúde para os pets mais delicados — sempre com um toque calmo e preciso."
        />
        <CardEquipe
          image="/DrLeonardo.png"
          nome="Dr. Leonardo"
          especialidade="🐦 Especialista em Animais Silvestres e Exóticos"
          texto="O Dr. Leonardo tem um fascínio encantador por animais diferentes — de calopsitas a porquinhos-da-índia, ele entende cada um com sensibilidade e técnica.
Na ClinSP, ele é conhecido como o “encantador dos exóticos”, tratando cada bichinho com respeito, cuidado e atenção às suas particularidades."
        />
      </div>
    </div>
  );
};

export default Equipe;
