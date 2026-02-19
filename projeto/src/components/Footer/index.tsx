import Link from "next/link";

export default function index() {
  return (
      <section className="py-16 px-4 flex flex-col items-center justify-center bg-gray-900">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white font-banner">
          Você é um artista?
        </h1>
        <p className="text-white max-w-2xl text-center">
          Junte-se à comunidade de artistas e compartilhe sua arte com o mundo!
        </p>
        <Link href="/cadastro" className="bg-white hover:bg-orange-500 text-orange-500 hover:text-white transition-colors mt-4 font-bold py-2 px-4 rounded-lg text-lg">
          Começe a Vender
        </Link>
      </section>
  )
}
