"use client";

import Link from "next/link";
import {
  Search,
  FileText,
  Shield,
  PenTool,
  Send,
  LayoutDashboard,
  MessageSquare,
  Cloud,
  FileCheck,
  BrainCircuit,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <FileText />,
    title: "Geração de Contratos com IA",
    description:
      "Gere contratos personalizados com inteligência artificial em minutos.",
  },
  {
    id: 2,
    icon: <Shield />,
    title: "Validação Jurídica Instantânea",
    description:
      "Checagem automatizada para garantir validade jurídica e proteção das partes.",
  },
  {
    id: 3,
    icon: <PenTool />,
    title: "Assinatura Digital Integrada",
    description:
      "Envie e assine eletronicamente com segurança e validade legal.",
  },
  {
    id: 4,
    icon: <Send />,
    title: "Envio Automatizado para Clientes",
    description: "Gere, revise, assine e envie sem sair da plataforma.",
  },
  {
    id: 5,
    icon: <LayoutDashboard />,
    title: "Painel de Gestão de Contratos",
    description:
      "Visualize todos os contratos organizados por status, cliente ou tipo.",
  },
  {
    id: 6,
    icon: <BrainCircuit />,
    title: "Correção e Sugestões com IA",
    description:
      "Receba ajustes automáticos em cláusulas baseados no tipo de contrato.",
  },
  {
    id: 7,
    icon: <Cloud />,
    title: "Armazenamento Seguro em Nuvem",
    description: "Documentos criptografados, disponíveis a qualquer momento.",
  },
  {
    id: 8,
    icon: <FileCheck />,
    title: "Modelos Personalizáveis",
    description:
      "Crie templates próprios com campos dinâmicos prontos para preencher.",
  },
  {
    id: 9,
    icon: <MessageSquare />,
    title: "Chat Jurídico com IA",
    description: "Tire dúvidas sobre cláusulas jurídicas em linguagem simples.",
  },
];

export default function ServicosPage() {
  return (
    <div className="  px-20 py-12 text-gray-900 bg-gradient-to-tr from-purple-500 to-indigo-600">
      <div className="relative rounded-3xl bg-slate-100 shadow-3xl px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 items- mb-12">
          <Link href="/" className="text-indigo-800 flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Voltar para início</span>
          </Link>
        </div>
        {/* HERO BANNER */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Serviços Inteligentes
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Transforme a burocracia imobiliária em eficiência com IA
          </p>
          <div className="relative max-w-md mx-auto mt-8">
            <input
              type="text"
              placeholder="Busque um serviço específico..."
              className="w-full py-4 px-6 pr-12 text-base rounded-full bg-white text-gray-800 placeholder-gray-400 
			  shadow-3xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <Search
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600"
              size={20}
            />
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-xl text-purple-600">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-800 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className=" py-6 px-6 pr-12 text-base text-slate-900 ">
          <div className="mx-auto px-4 text-center">
            <h2 className="md:text-4xl font-bold mb-4">
              Pronto para revolucionar seus processos imobiliários?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Economize tempo, reduza erros e ofereça uma experiência superior
              aos seus clientes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contrato">
                <button className="bg-gradient-to-tr from-purple-500 to-indigo-600 text-white font-bold py-3 px-5 rounded-lg transition-all duration-200 hover:scale-105">
                  Teste Grátis
                </button>
              </Link>
              <Link href="/valor">
                <button className="bg-transparent border-2 border-purple-500  text-purple-600 font-bold py-2 px-5 rounded-lg hover:bg-slate-100 transition-all duration-200 hover:scale-105">
                  Ver Preços
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className=" py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-slate-900">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  question:
                    "Os contratos gerados pela IA têm validade jurídica?",
                  answer:
                    "Sim, todos os contratos são desenvolvidos com base na legislação atual e passam por processos de validação para garantir sua conformidade legal.",
                },
                {
                  id: 2,
                  question: "É possível personalizar os modelos de contrato?",
                  answer:
                    "Absolutamente! Nossa plataforma permite que você adapte os modelos às suas necessidades específicas, incluindo cláusulas personalizadas.",
                },
                {
                  id: 3,
                  question: "Como funciona o armazenamento em nuvem?",
                  answer:
                    "Seus documentos são armazenados com criptografia de ponta a ponta em servidores seguros, com backups automáticos diários.",
                },
                {
                  id: 4,
                  question:
                    "Quanto tempo leva para gerar um contrato completo?",
                  answer:
                    "Em média, apenas 3 minutos após o preenchimento das informações necessárias. Contratos mais complexos podem levar até 5 minutos.",
                },
              ].map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow p-5">
                  <h3 className="font-bold text-md text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-800 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
