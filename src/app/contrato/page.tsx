"use client";

import { Home, Key, FileEdit, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ContractTypeSelector() {
  const router = useRouter();

  function handleSelectContract(type: string) {
    router.push(`/gerar-contrato?tipo=${type}`);
  }
  

  return (
    <section className="bg-slate-200 min-h-screen py-16 flex flex-col items-center text-slate-900">
		<div className="mb-6">
          <Link href="/" className="text-indigo-800 flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Voltar para início</span>
          </Link>
        </div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Qual tipo de contrato você deseja gerar?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card: Compra e Venda */}
        <Link href="/contrato/venda">
          <span
            onClick={() => handleSelectContract("compra-venda")}
            className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col items-center hover:bg-purple-400/40 transition cursor-pointer"
          >
            <Home className="w-16 h-16 text-purple-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Compra e Venda</h2>
            <p className="text-slate-800 text-center">
              Contrato completo para transações de compra e venda de imóveis com
              segurança e clareza jurídica.
            </p>
          </span>
        </Link>

        {/* Card: Locação */}
        <Link href="/contrato/locacao">
          <span
            onClick={() => handleSelectContract("locacao")}
            className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col items-center hover:bg-purple-400/40 transition cursor-pointer"
          >
            <Key className="w-16 h-16 text-purple-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Locação</h2>
            <p className="text-slate-800 text-center">
              Modelo de contrato ideal para locações residenciais, comerciais ou
              temporada, adaptado às suas necessidades.
            </p>
          </span>
        </Link>

        {/* Card: Revisão */}
        <div
          onClick={() => handleSelectContract("revisao")}
          className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col items-center hover:bg-purple-400/40 transition cursor-pointer"
        >
          <FileEdit className="w-16 h-16 text-purple-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Revisão de Contrato</h2>
          <p className="text-slate-800 text-center">
            Revise, atualize ou corrija contratos existentes com auxílio da
            nossa inteligência artificial.
          </p>
        </div>
      </div>
    </section>
  );
}
