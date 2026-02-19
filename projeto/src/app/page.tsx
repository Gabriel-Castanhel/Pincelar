import Header from "@/components/Header";
import Hero_banner from "@/components/Hero_banner";
import Cards from "@/components/Cards";

// Icones
import { FaPalette } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-black min-h-screen">
      <Header />
      <Hero_banner />

      {/* Seção "Por que escolher": py-16 dá o respiro sem travar a altura */}
      <section className="py-16 px-4 flex flex-col items-center justify-center bg-gray-50">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gradient-primary font-banner mb-12">
            Mas por que escolher o Pincelar?
          </h1>

          {/* Grid Responsivo: 1 coluna no mobile, 3 colunas no desktop (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            
            {/* Item 1 */}
            <div className="flex flex-col gap-4 text-center items-center p-4">
              <FaPalette className="text-orange-500 text-5xl hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold">Variedade de Produtos</h2>
              <p className="text-gray-600">
                Cada peça é criada por artistas da comunidade com paixão e dedicação.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-4 text-center items-center p-4">
              <GiReceiveMoney className="text-orange-500 text-5xl hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold">Qualidade Garantida</h2>
              <p className="text-gray-600">
                Suporte direto aos artistas com preços transparentes e sem intermediários.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col gap-4 text-center items-center p-4">
              <FaHandsHelping className="text-orange-500 text-5xl hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold uppercase md:normal-case">Segurança</h2>
              <p className="text-gray-600">
                Nossa equipe está sempre pronta para ajudar em qualquer etapa.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Destaques */}
      <section className="py-16 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary font-banner">
          Obras em destaque
        </h1>
        <div className="w-full max-w-7xl">
          <Cards />
        </div>
      </section>
    </div>
  );
}