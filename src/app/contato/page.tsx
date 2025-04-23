import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <div className="  px-20 py-24 text-gray-900 bg-gradient-to-tr from-purple-500 to-indigo-600">
      <div className="relative rounded-3xl bg-slate-200 shadow-3xl px-16 py-16">
        <Link href="/" className="text-indigo-800 flex items-center gap-2">
          <ArrowLeft size={16} />
          <span>Voltar para início</span>
        </Link>

        <section className=" text-slate-900 py-16 ">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-widest text-slate-900 text-sm mb-2">
                Fale Conosco
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Estamos aqui para ajudar
              </h2>
              <p className="text-lg text-slate-900 mb-10">
                Entre em contato com a nossa equipe e descubra como podemos
                transformar a burocracia imobiliária em algo simples e
                eficiente.
              </p>

              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <Phone className="text-black w-6 h-6" />
                  <span className="text-lg font-medium">
                    +55 (00) 0000-0000
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-black w-6 h-6" />
                  <span className="text-lg font-medium">
                    contato@therealestate.com.br
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900">
              <h3 className="text-2xl font-semibold mb-4">
                Envie uma mensagem
              </h3>
              <p className="text-slate-800 mt-2 mb-6">
                Prefere conversar com a IA? Deixe sua mensagem e nossa
                assistente virtual te responde rapidinho.
              </p>
              <button className="transform rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-700 px-18 py-3 font-bold text-white flex items-center shadow-lg transition-all duration-200 hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2"/>
                  Iniciar conversa
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
