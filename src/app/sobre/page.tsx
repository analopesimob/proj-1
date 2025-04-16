import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileSliders,
  FileStack,
  Scale,
  CircleUserRound,
} from "lucide-react";

export default function Sobre() {
  return (
    <main className=" px-20 py-12 text-gray-800 bg-gradient-to-tr from-purple-500 to-indigo-600">
      <div className="relative rounded-3xl bg-slate-200 shadow-3xl px-20 py-16">
        <div className="mb-6">
          <Link href="/" className="text-indigo-800 flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Voltar para início</span>
          </Link>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-slate-900 ">
              Sobre a The Real Estate
            </h1>
            <p className="text-lg mb-6">
              Na The Real Estate acreditamos que a burocracia não precisa ser um
              obstáculo. Utilizamos inteligência artificial para transformar
              processos imobiliários em{" "}
              <strong className="text-purple-700">
                {" "}
                soluções rápidas, seguras e totalmente digitais.
              </strong>
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Nossa Missão
            </h2>
            <p className="mb-6">
              Automatizar e simplificar a criação de contratos imobiliários,
              oferecendo segurança jurídica, praticidade e economia de tempo
              para corretores, proprietários e imobiliárias.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center self-start mt-12">
            <img
              src="/sobre.png"
              alt="Ilustração The Real Estate"
              className="w-full max-w-md"
            />
          </div>
        </div>
        <div className="max-w-3xl mx-auto flex flex-1/2 items-center gap-12 mt-20 mb-20">
          <ul className="list-disc list-inside space-y-1 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              O que oferecemos
            </h2>
            <li>Contratos inteligentes e personalizados</li>
            <li>Validade jurídica garantida</li>
            <li>Análise e correção com IA</li>
            <li>Interface intuitiva e segura</li>
          </ul>

          <div className="bg-slate-100 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-1 text-slate-900">
              Por que confiar na The Real Estate?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-x-2 mt-4">
                {<FileSliders className="text-purple-600" />} IA especializada
                em contratos imobiliários
              </li>
              <li className="flex items-center gap-x-2">
                {<FileStack className="text-purple-600" />} Geração de
                documentos em minutos
              </li>
              <li className="flex items-center gap-x-2">
                {<Scale className="text-purple-600" />} Economia com assessoria
                jurídica
              </li>
              <li className="flex items-center gap-x-2">
                {<CircleUserRound className="text-purple-600" />} Suporte
                humanizado e eficiente
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
