import Header from "@/components/Header";
import Hero_banner from "@/components/Hero_banner";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Arte from "@/components/Arte";

import Link from "next/link";

// Icones
import { FaPalette } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-black min-h-screen bg-background">
      <Header />
      <Hero_banner />

      <section className="py-16 px-4 flex flex-col items-center justify-center bg-gray-50">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gradient-primary font-banner mb-12">
            Mas por que escolher o Pincelar?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col gap-4 text-center items-center p-4">
              <FaPalette className="text-orange-500 text-5xl hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold">Variedade de Produtos</h2>
              <p className="text-gray-600">
                Cada peça é criada por artistas da comunidade com paixão e
                dedicação.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-center items-center p-4">
              <GiReceiveMoney className="text-orange-500 text-5xl hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold">Qualidade Garantida</h2>
              <p className="text-gray-600">
                Suporte direto aos artistas com preços transparentes e sem
                intermediários.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-center items-center p-4">
              <FaHandsHelping className="text-orange-500 text-5xl hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold uppercase md:normal-case">
                Segurança
              </h2>
              <p className="text-gray-600">
                Nossa equipe está sempre pronta para ajudar em qualquer etapa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center pb-2 text-gradient-primary font-banner">
          Obras em destaque
        </h1>
        <div className="w-full max-w-7xl">
          <Cards />
        </div>
      </section>

      <section>
        <Arte />
      </section>

      <section className="py-16 px-4 flex flex-col items-center justify-center bg-gradient-to-r from-5 to-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white font-banner">
          Você é um artista?
        </h1>
        <p className="text-white max-w-2xl text-center">
          Junte-se à comunidade de artistas e compartilhe sua arte com o mundo!
        </p>
        <Link
          href="/cadastro"
          className="bg-white hover:bg-orange-500 text-orange-500 hover:text-white transition-colors mt-4 font-bold py-2 px-4 rounded-lg text-lg"
        >
          Começe a Vender
        </Link>
      </section>
      <Footer />
    </div>
  );
}
