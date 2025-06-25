interface TituloProps {
  titulo: string;
}

const Titulo = ({ titulo }: TituloProps) => {
  return (
    <h1 className="text-cyan-600 font-bold text-4xl ml-10 my-6">{titulo}</h1>
  );
};

export default Titulo;
