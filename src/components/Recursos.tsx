import React from "react";
import {
  Handshake,
  ScanEye, ShieldCheck, LaptopMinimalCheck, Bot,
} from "lucide-react";

const Descricao: React.FC = () => {
  return (
    <div className="bg-slate-300 py-20 text-slate-900 md:px-8 lg:px-52">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-3xl font-bold">
                Transforme a Burocracia
              </h2>

              <p>
                Nossa plataforma utiliza inteligência artificial avançada para
                gerar contratos imobiliários personalizados em questão de
                minutos. Eliminamos as complexidades jurídicas enquanto
                garantimos conformidade com todas as normas legais vigentes.
              </p>

              <p className="mt-4">
                Com nossa tecnologia, você pode criar, revisar e finalizar
                contratos legalmente válidos com apenas alguns cliques. Nossa IA
                analisa cada detalhe para garantir que todos os aspectos
                importantes sejam abordados em cada documento.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="mr-2 text-purple-600">✓</div>
                  <span>Contratos 100% Válidos</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-purple-600">✓</div>
                  <span>Interface Intuitiva</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-purple-600">✓</div>
                  <span>Geração Instantânea de Contratos</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-purple-600">✓</div>
                  <span>Decisões Baseadas em Dados</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="mr-2 text-purple-600">✓</div>
                  <span>Alta Segurança Jurídica</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-purple-600">✓</div>
                  <span>Contratos Personalizados</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-purple-600">✓</div>
                  <span>Responsivo e Escalável</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-purple-600">✓</div>
                  <span>Redução de Custos com Assessoria</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-100 p-8">
            <h2 className="mb-8 text-3xl font-bold">Recursos</h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <Handshake className="h-6 w-6 text-purple-600"/>
                </div>
                <span className="text-lg">Interface Amigável</span>
              </div>

              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
				<ScanEye className="h-6 w-6 text-purple-600"/>
                </div>
                <span className="text-lg">Foco em Precisão</span>
              </div>

              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                 <ShieldCheck className="h-6 w-6 text-purple-600"/>
                </div>
                <span className="text-lg">Aplicação Segura</span>
              </div>

              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <LaptopMinimalCheck className="h-6 w-6 text-purple-600"/>
                </div>
                <span className="text-lg">Fluxo de Experiência Otimizado</span>
              </div>

              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
               <Bot className="h-6 w-6 text-purple-600"/>
                </div>
                <span className="text-lg">
                  Inteligência Artificial Avançada
                </span>
              </div>
            </div>

            <button className="mt-10 w-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 py-3 font-medium text-white">
              GERAR CONTRATO AGORA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descricao;
