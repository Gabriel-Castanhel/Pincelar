"use client";
import { useState } from "react"
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full text-white shadow-md">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
            <Link href="/"><img src="/logo.png" alt="Logo" className="h-15 w-auto" /></Link>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-black">
          <a href="#" className="hover:text-indigo-400 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            Sobre
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            Serviços
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            Contato
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 flex flex-col gap-4 text-sm">
          <a href="#" className="hover:text-indigo-400 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            Sobre
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            Serviços
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            Contato
          </a>
        </div>
      )}
    </header>
  )
}
