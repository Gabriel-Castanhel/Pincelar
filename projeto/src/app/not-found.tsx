import Header from "@/components/Header";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center mt-20">
          Ops... Página Não Encontrada
        </h1>
        <p className="text-center mt-5">
          A página que você procurou não foi encontrada.
        </p>
        <p className="text-center mt-5">
          Por favor, volte para a página inicial e tente novamente.
        </p>
        <img src="/not-found-robot.png" alt="" className="h-full" />
      </div>
    </div>
  );
}
