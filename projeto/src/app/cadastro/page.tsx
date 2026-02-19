"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import {
  FaArtstation,
  FaUser,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";

// Interface para os dados de cadastro
interface RegisterData {
  nome: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Cadastro(): React.ReactElement {
  const [formData, setFormData] = useState<RegisterData>({
    nome: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    setIsLoading(true);
    try {
      console.log("Criando conta via TypeScript:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Conta criada com sucesso!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
        {/* Header do Card */}
        <div className="text-center mb-8">
          <div className="inline-flex">
            <img src="./logo-cheia.png" alt="Logo Pincelar" className="w-15 h-15" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 font-banner">
            Crie sua conta
          </h2>
          <p className="text-gray-500 mt-2">
            Junte-se à maior comunidade de arte autêntica
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nome */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Nome Completo
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="nome"
                type="text"
                required
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: Pablo Picasso"
                className="focus:outline-hidden caret-pink-500 w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl transition-all"
              />
            </div>
          </div>

          {/* Campo E-mail */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              E-mail
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="art@exemplo.com"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F26E10] focus:bg-white outline-none transition-all"
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Senha
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="No mínimo 6 caracteres"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F26E10] focus:bg-white outline-none transition-all"
              />
            </div>
          </div>

          {/* Confirmação de Senha */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Confirmar Senha
            </label>
            <div className="relative">
              <FaCheckCircle
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${formData.confirmPassword && formData.password === formData.confirmPassword ? "text-green-500" : "text-gray-400"}`}
              />
              <input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repita sua senha"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F26E10] focus:bg-white outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 py-4 bg-gradient-to-r from-[#F26E10] to-[#550F8F] text-white font-bold rounded-xl shadow-lg hover:shadow-orange-200 hover:brightness-110 transition-all active:scale-95 disabled:opacity-70"
          >
            {isLoading ? "Criando conta..." : "Começar a Pincelar"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Já faz parte da nossa comunidade?{" "}
          <Link
            href="/login"
            className="text-[#550F8F] font-bold hover:underline"
          >
            Faça Login
          </Link>
        </p>
      </div>
    </div>
  );
}
