import React from "react";
import { LogIn } from "lucide-react";
import { Scale, House, SearchCheck } from "lucide-react";
import Recursos from "@/components/Recursos";
import Ai from "@/components/Ai";
import Rodape from "@/components/Rodape";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="p-6">
        <div className="relative rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-700 shadow-2xl">
          {/* header section */}
          <div className="flex max-h-screen justify-between p-10 text-center lg:px-40">
            <div className="flex items-center">
              <img src="/logo3.png" alt="logo" className="w-10" />
              <h1 className="flex h-10 items-center text-2xl font-semibold text-white">
                The Real Estate
              </h1>
            </div>

            <nav className="hidden items-center space-x-6 md:flex">
              <Link href="/sobre" className="text-white hover:text-purple-400">
                <span>Sobre</span>
              </Link>
              <Link
                href="/servicos"
                className="text-white hover:text-purple-400"
              >
                <span> Serviços </span>
              </Link>
              <Link
                href="/contato"
                className="text-white hover:text-purple-400"
              >
                <span> Contato </span>
              </Link>

              <div className="relative">
                <div className="flex items-center space-x-2 rounded-sm text-white hover:text-purple-400">
                  <Link
                    href="/cadastro"
                    className="flex items-center space-x-2 rounded-sm text-white hover:text-purple-400"
                  >
                    <LogIn size={18} className="text-white" />
                    <span>Entrar</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          {/* hero section */}
          <div className="flex max-h-screen items-center justify-between gap-12 px-8 py-12 text-center lg:px-40">
            <div className="flex max-w-xl flex-col items-start text-left">
              <h1 className="mb-4 text-4xl font-light text-white lg:text-5xl">
                Transforme burocracia imobiliária em simplicidade com apenas um
                clique
              </h1>
              <p className="py-6 text-purple-100 text-xl">
                Nossa plataforma utiliza inteligência artificial para gerar
                contratos imobiliários personalizados, seguros e juridicamente
                válidos em questão de minutos.
              </p>
              <Link href="/contrato">
                <button
                  className="transform rounded-2xl bg-indigo-700 px-6 py-3 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105"
                >
                  Iniciar teste
                </button>
              </Link>
            </div>
            <img
              src="/contract.png"
              alt="contract"
              className="hidden w-80 md:block"
            />
          </div>
        </div>
      </div>
      {/* Services section */}
      <div className="px-8 py-32 lg:px-40">
        <h2 className="mb-12 text-center text-3xl font-light text-gray-900">
          Nossos serviços
        </h2>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 "></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">

          <Link href="/contrato/venda">
            <div className="bg-white shadow-2xl p-7 rounded-2xl flex flex-col items-center hover:bg-purple-400/40 transition cursor-pointer">
              <Scale className="w-8 h-8 text-purple-600 mb-4" />
              <h2 className="text-xl text-slate-900 font-semibold mb-2">
                Contratos de Compra e Venda
              </h2>
              <p className="text-slate-800 text-center">
                Criamos contratos personalizados para compra e venda de imóveis
                seguindo todas as normas legais vigentes.
              </p>
            </div>
          </Link>

          <Link href="/contrato/locacao">
            <div className="bg-white shadow-2xl p-7 rounded-2xl flex flex-col items-center hover:bg-purple-400/40 transition cursor-pointer">
              <House className="w-8 h-8 text-purple-600 mb-4" />
              <h2 className="text-xl text-slate-900 font-semibold mb-2">
                Contratos de Locação
              </h2>
              <p className="text-slate-800 text-center">
                Elaboramos contratos de aluguel completos que protegem os
                direitos de proprietários e inquilinos.
              </p>
            </div>
          </Link>

          <div className="bg-white shadow-2xl p-7 rounded-2xl flex flex-col items-center hover:bg-purple-400/40 transition cursor-pointerr">
            <SearchCheck className="w-8 h-8 text-purple-600 mb-4" />
            <h2 className="text-xl text-slate-900 font-semibold mb-2">
              Análise e Correção
            </h2>
            <p className="text-slate-800 text-center">
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
