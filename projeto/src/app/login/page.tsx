"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { FaArtstation, FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';

interface LoginData {
  email: string;
  password: string;
}

export default function Login(): React.ReactElement {
  // Estado tipado com nossa interface
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Manipulador de mudança nos inputs com tipagem de evento do React
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Manipulador do envio do formulário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulação de chamada de API
      console.log("Enviando via TypeScript:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
        
        <div className="text-center mb-10">
          <div className="inline-flex">
            <img src="./logo-cheia.png" alt="Logo Pincelar" className="w-15 h-15" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 font-banner">Pincelar</h2>
          <p className="text-gray-500 mt-2">Sua galeria de arte autêntica</p>
        </div>

        {/* Login Social */}
        <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-100 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all active:scale-95">
          <FaGoogle className="text-red-500" />
          Continuar com Google
        </button>

        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <span className="text-gray-400 text-sm uppercase tracking-wider">ou</span>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">E-mail</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="exemplo@email.com"
                className="focus:outline-hidden caret-pink-500 w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-semibold text-gray-700">Senha</label>
              <Link href="#" className="text-xs text-[#550F8F] hover:underline">Esqueceu a senha?</Link>
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="focus:outline-hidden caret-pink-500 w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-[#F26E10] to-[#550F8F] text-white font-bold rounded-xl shadow-lg hover:shadow-orange-200 hover:brightness-110 transition-all active:scale-95 disabled:opacity-70"
          >
            {isLoading ? "Autenticando..." : "Entrar na Galeria"}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600">
          Ainda não tem conta?{' '}
          <Link href="/cadastro" className="text-[#F26E10] font-bold hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}