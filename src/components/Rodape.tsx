import React from "react";
import { Instagram, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const Rodape: React.FC = () => {
  return (
    <div className="p-6 text-slate-900">
      <div className="rounded-3xl bg-slate-400 py-10 text-center lg:px-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="">
              <div className="flex max-h-screen justify-between">
                <div className="flex items-center">
                  <img src="logo3.png" alt="logo" className="w-10" />
                  <Link href="/#">
                    <h1 className="flex h-10 items-center text-2xl font-semibold text-white">
                      The Real Estate
                    </h1>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-start font-bold">Nossos Serviços</h3>
              <ul className="space-y-3 text-start text-sm">
                <li>
                  <Link href="/contrato/venda" className="hover:text-purple-900">
                    <span>Contratos de Compra e Venda</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contrato/locacao"
                    className="hover:text-purple-900"
                  >
                    <span>Contratos de Locação</span>
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-900">
                    Análise e Correção
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-start font-bold">Sobre Nós</h3>
              <ul className="space-y-3 text-start text-sm">
                <li>
                  <a href="#" className="hover:text-purple-900">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-900">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-purple-900">
                    <span>Fale Conosco</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-start font-bold">Contato</h3>
              <ul className="space-y-3 text-start text-sm">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-1 hover:text-purple-900"
                  >
                    <Mail size={20} /> contato@therealestate.com
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-pink-600">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="hover:text-blue-600">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="hover:text-red-600">
                      <Youtube size={20} />
                    </a>
                    <a href="#" className="hover:text-blue-800">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between border-t pt-8 text-sm md:flex-row">
          <div>© 2025 The Real Estate</div>
          <div>Rohde Softwares © 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Rodape;
