export default function EmDesenvolvimento() {
  return (
    <main className="w-full h-screen bg-gradient-to-br from-[#F26E10] to-[#550F8F] text-white flex flex-col items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-white">
          🚧 Página em Desenvolvimento
        </h1>
        <p className="mt-6 text-gray-200 leading-relaxed">
          Estamos trabalhando nessa funcionalidade para trazer a melhor
          experiência possível. Volte em breve.
        </p>

        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-[var(--color-1)] rounded-lg hover:opacity-90 transition"
        >
          Voltar para Home
        </a>
      </div>
    </main>
  );
}