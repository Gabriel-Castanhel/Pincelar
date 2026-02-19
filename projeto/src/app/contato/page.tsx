import React from 'react';
import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contato() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-banner text-gray-900 sm:text-5xl">
            Entre em <span className="text-[#F26E10]">Contato</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-light">
            Tem alguma dúvida sobre uma obra ou quer expor sua arte? Adoraríamos ouvir você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Coluna 1: Informações de Contato */}
          <div className="bg-gradient-to-br from-[#F26E10] to-[#550F8F] p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl opacity-80" />
                  <span className="text-lg">contato.pincelar@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl opacity-80" />
                  <span className="text-lg">+55 (48) 98847-9775 </span>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl opacity-80" />
                  <span className="text-lg">Florianópolis, SC - Brasil</span>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-12">
              <p className="text-sm uppercase tracking-widest opacity-70 mb-4">Siga-nos</p>
              <div className="flex gap-6">
                <a href="#" className="hover:scale-125 transition-transform"><FaInstagram size={28} /></a>
                
              </div>
            </div>
          </div>

          {/* Coluna 2: Formulário */}
          <div className="p-10">
            <form className="grid grid-cols-1 gap-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#F26E10] focus:border-[#F26E10] border p-3"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#F26E10] focus:border-[#F26E10] border p-3"
                    placeholder="email@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700">Assunto</label>
                <select id="assunto" className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#F26E10] focus:border-[#F26E10] border p-3 bg-white">
                  <option>Dúvida sobre compra</option>
                  <option>Sou artista e quero participar</option>
                  <option>Sugestão ou Crítica</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#F26E10] focus:border-[#F26E10] border p-3"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F26E10] text-white font-bold py-4 rounded-lg hover:bg-[#d45d0d] transition-all shadow-lg hover:shadow-orange-200"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}