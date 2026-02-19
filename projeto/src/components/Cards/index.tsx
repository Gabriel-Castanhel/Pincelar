import React from "react";

interface Obra {
  id: number;
  title: string;
  descricao: string;
}

interface Props {
  obra: Obra;
}

// 1. Componente Filho: Melhoramos o padding e o ajuste da imagem
const CardFilho = ({ obra }: Props) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <figure className="w-full aspect-square overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60"
          alt={obra.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-gray-800">{obra.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{obra.descricao}</p>
        <span className="">R$ 200</span>
        <button className="mt-4 w-full py-2 bg-[#F26E10] text-white rounded-lg font-medium hover:bg-[#d45d0d] transition-colors">
          Ver Detalhes
        </button>
      </div>
    </article>
  );
};

// 2. Componente Pai: Aqui acontece a mágica da responsividade
const CardPai = () => {
  const obras = [
    { id: 1, title: "Nascer do Sol", descricao: "Uma obra vibrante capturando a luz da manhã." },
    { id: 2, title: "Abstração Azul", descricao: "Exploração de formas e tons oceânicos profundos." },
    { id: 3, title: "Retrato Urbano", descricao: "A vida cotidiana expressa em traços modernos." },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl mx-auto px-4">
      {obras.map((obra) => (
        <CardFilho key={obra.id} obra={obra} />
      ))}
    </div>
  );
};

export default CardPai;