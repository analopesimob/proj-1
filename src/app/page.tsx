"use client";

import React, { use } from "react";
import { LogIn } from "lucide-react";
import { Scale, House, SearchCheck } from "lucide-react";
import Recursos from "@/components/Recursos";
import Ai from "@/components/Ai";
import Rodape from "@/components/Rodape";
import Link from "next/link";

export default function HomePage() {
  // Para detectar a rolagem da página
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Para menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Efeito para detectar rolagem
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header fixo que permanece com a rolagem */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo3.png" alt="logo" className="w-10" />
            <h1
              className={`ml-3 text-2xl font-bold ${
                isScrolled ? "text-purple-700" : "text-white"
              }`}
            >
              The Real Estate
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/sobre"
              className={`font-medium transition-all hover:text-purple-500 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Sobre
            </Link>
            <Link
              href="/servicos"
              className={`font-medium transition-all hover:text-purple-500 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Serviços
            </Link>
            <Link
              href="/contato"
              className={`font-medium transition-all hover:text-purple-500 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Contato
            </Link>

            <Link href="/cadastro">
              <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg transition-all shadow-lg">
                <LogIn size={18} />
                <span>Entrar</span>
              </button>
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={`w-6 h-0.5 mb-1.5 ${
                isScrolled ? "bg-gray-900" : "bg-white"
              } transition-all ${
                mobileMenuOpen && "transform rotate-45 translate-y-2"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 mb-1.5 ${
                isScrolled ? "bg-gray-900" : "bg-white"
              } transition-all ${mobileMenuOpen && "opacity-0"}`}
            ></div>
            <div
              className={`w-6 h-0.5 ${
                isScrolled ? "bg-gray-900" : "bg-white"
              } transition-all ${
                mobileMenuOpen && "transform -rotate-45 -translate-y-2"
              }`}
            ></div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ${
            mobileMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md px-6 py-4 shadow-lg">
            <Link
              href="/sobre"
              className="block py-3 text-gray-800 font-medium border-b border-gray-200 hover:text-purple-600"
            >
              Sobre
            </Link>
            <Link
              href="/servicos"
              className="block py-3 text-gray-800 font-medium border-b border-gray-200 hover:text-purple-600"
            >
              Serviços
            </Link>
            <Link
              href="/contato"
              className="block py-3 text-gray-800 font-medium border-b border-gray-200 hover:text-purple-600"
            >
              Contato
            </Link>

            <Link href="/cadastro" className="block py-3 mt-2">
              <button className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg transition-all">
                <LogIn size={18} />
                <span>Entrar</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="p-1">
        <div className="relative rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-800 shadow-2xl">
          {/* hero section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:px-52 pt-20  ">
            <div className=" text-left">
              <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-light text-white">
                Transforme burocracia imobiliária em simplicidade com apenas um
                clique
              </h1>
              <p className="py-6 text-purple-100 text-xl">
                Nossa plataforma utiliza inteligência artificial para gerar
                contratos imobiliários personalizados, seguros e juridicamente
                válidos em questão de minutos.
              </p>
              <Link href="/contrato">
                <button className="transform rounded-2xl bg-slate-800 px-6 py-3 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105">
                  Iniciar teste
                </button>
              </Link>
            </div>
            <img
              src="/contract.png"
              alt="contract"
              className="w-60 sm:w-72 md:w-80 mt-6 lg:mt-0"
            />
          </div>
        </div>
      </div>
      {/* Services section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-center text-2xl sm:text-3xl font-light text-gray-900">
          Nossos serviços
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          <Link href="/contrato/venda">
            <div className="bg-white shadow-lg sm:shadow-xl md:shadow-2xl p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl flex flex-col items-center hover:bg-purple-400/40 transition cursor-pointer h-full">
              <Scale className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600 mb-2 sm:mb-3 md:mb-4" />
              <h2 className="text-lg sm:text-xl text-slate-900 font-semibold mb-2">
                Contratos de Compra e Venda
              </h2>
              <p className="text-sm sm:text-base text-slate-800 text-center">
                Criamos contratos personalizados para compra e venda de imóveis
                seguindo todas as normas legais vigentes.
              </p>
            </div>
          </Link>

          <Link href="/contrato/locacao">
            <div className="bg-white shadow-lg sm:shadow-xl md:shadow-2xl p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl flex flex-col items-center hover:bg-purple-400/40 transition cursor-pointer h-full">
              <House className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600 mb-2 sm:mb-3 md:mb-4" />
              <h2 className="text-lg sm:text-xl text-slate-900 font-semibold mb-2">
                Contratos de Locação
              </h2>
              <p className="text-sm sm:text-base text-slate-800 text-center">
                Elaboramos contratos de aluguel completos que protegem os
                direitos de proprietários e inquilinos.
              </p>
            </div>
          </Link>

          <div className="bg-white shadow-lg sm:shadow-xl md:shadow-2xl p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl flex flex-col items-center hover:bg-purple-400/40 transition cursor-pointer h-full">
            <SearchCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600 mb-2 sm:mb-3 md:mb-4" />
            <h2 className="text-lg sm:text-xl text-slate-900 font-semibold mb-2">
              Análise e Correção
            </h2>
            <p className="text-sm sm:text-base text-slate-800 text-center">
              Revisamos contratos existentes para garantir conformidade legal e
              sugerir melhorias.
            </p>
          </div>
        </div>
      </div>

      <Recursos />
      <Ai />
      <Rodape />
    </>
  );
}
