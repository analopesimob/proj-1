import React from "react";
import { LogIn } from "lucide-react";
import { Scale, House, SearchCheck } from "lucide-react";
import Card from "@/components/Card";
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
              <Link href="/servicos" className="text-white hover:text-purple-400">
                <span> Serviços </span>
              </Link>
              <a href="#" className="text-white hover:text-purple-400">
                Contato
              </a>

              <div className="relative">
                <div className="flex items-center space-x-2 rounded-sm text-white hover:text-purple-400">
                <Link href="/cadastro" className="flex items-center space-x-2 rounded-sm text-white hover:text-purple-400">
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
              <button
                className="transform rounded-2xl bg-indigo-700 px-6 py-3 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105"
                // onClick={() => console.log("Iniciar teste")}
              >
                Iniciar teste
              </button>
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

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card
            variant="feature"
            title="Contratos de Compra e Venda"
            description="Criamos contratos personalizados para compra e venda de imóveis seguindo todas as normas legais vigentes."
            icon={<Scale size={32} className="text-purple-600" />}
          />
          <Card
            variant="feature"
            title="Contratos de Locação"
            description="Elaboramos contratos de aluguel completos que protegem os direitos de proprietários e inquilinos."
            icon={<House size={32} className="text-purple-600" />}
          />
          <Card
            variant="feature"
            title="Análise e Correção"
            description="Revisamos contratos existentes para garantir conformidade legal e sugerir melhorias."
            icon={<SearchCheck size={32} className="text-purple-600" />}
          />
        </div>
      </div>
      <Recursos />
      <Ai />
      <Rodape />
    </>
  );
}
