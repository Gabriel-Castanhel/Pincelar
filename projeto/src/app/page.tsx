import Header from "@/components/header";
import Hero_banner from "@/components/Hero_banner";

// Icones
import { FaPalette } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";


export default function Home() {
  return (
    <div className="text-black min-h-screen p-4">
      <div>
        <Header />
      </div>
      <div>
        <Hero_banner />
      </div>

      <section className="flex flex-col items-center justify-center gap-8 h-150">
        <h1 className="text-4xl font-bold text-center mt-8 text-gradient-primary font-banner">
          Por que escolher o Pincelar?
        </h1>
        <div className="flex gap-4 w-2/3">
          <div className="bg-color-2 w-full max-w-md flex flex-col gap-4 text-center">
            <FaPalette className="text-blue-500 text-5xl hover:text-red-500 transition-colors flex justify-center items-center" />

            <h2 className="text-2xl font-bold mb-4">Variedade de Produtos</h2>
            <p>
              Cada peça é criada por artistas da comunidade com paixão e
              dedicação.
            </p>
          </div>
          <div className="bg-color-2 w-full max-w-md flex flex-col gap-4 text-center">
            <GiReceiveMoney className="text-blue-500 text-5xl hover:text-red-500 transition-colors flex justify-center items-center" />

            <h2 className="text-2xl font-bold mb-4">Qualidade Garantida</h2>
            <p className="text-center">
              Suporte direto aos artistas com preços transparentes e sem
              intermediários.
            </p>
          </div>
          <div className="bg-color-2 w-full max-w-md flex flex-col gap-4 text-center">
            <FaHandsHelping className="text-blue-500 text-5xl hover:text-red-500 transition-colors flex justify-center items-center" />

            <h2 className="text-2xl font-bold mb-4">
              Atendimento Personalizado
            </h2>
            <p>
              Nossa equipe está sempre pronta para ajudar, garantindo uma
              experiência de compra tranquila e satisfatória.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
