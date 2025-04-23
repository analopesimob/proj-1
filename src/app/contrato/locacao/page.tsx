import { ChevronRight } from "lucide-react";

export default function ContractGenerator() {
  return (
    <section className="bg-slate-200 min-h-screen py-10 px-6 md:px-20 text-white">
      {/* Container flex para as duas colunas */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Coluna da esquerda (1/3) */}
        <aside className="w-full md:w-1/3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4 mb-8">
            {/* <FileText className="w-8 h-8" /> */}

            <h2 className="text-2xl font-bold">Contrato de Locação</h2>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              name="cpfCnpj"
              placeholder="CPF/CNPJ"
              className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70"
            />
            <input
              type="text"
              name="name"
              placeholder="Nome / Razão Social"
              className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70"
            />
            <input
              type="text"
              name="name"
              placeholder="CEP"
              className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70"
            />
            <input
              type="text"
              name="name"
              placeholder="Endereço"
              className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70"
            />

            <select
              name="estadoCivil"
              className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70"
              defaultValue=""
            >
              <option value="" disabled>
                Estado Civil
              </option>
              <option value="solteiro">Solteiro(a)</option>
              <option value="casado">Casado(a)</option>
              <option value="separado">Separado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
            </select>

            {/* <h1> Cônjuge</h1>
		  <input 
              type="text" 
              name="cpfCnpj"
              placeholder="CPF/CNPJ" 
              className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70" 
            />
            <input 
              type="text" 
              name="name"
              placeholder="Nome / Razão Social" 
              className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70"
            />
			 <input 
              type="text" 
              name="name"
              placeholder="CEP" 
              className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70"
            />
			 <input 
              type="text" 
              name="name"
              placeholder="Endereço" 
              className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70"
            />
		
			<select
			name="estadoCivil"
			className="w-full bg-white/20 text-white rounded-lg px-4 py-3 focus:outline-none placeholder-white/70"
		  >
			<option defaultValue="" disabled selected>Estado Civil</option>
			<option value="solteiro">Solteiro(a)</option>
			<option value="casado">Casado(a)</option>
			<option value="separado">Separado(a)</option>
			<option value="divorciado">Divorciado(a)</option>
			<option value="viuvo">Viúvo(a)</option>
		  </select> */}
          </div>

          <button className="mt-8 flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-100 transition">
            Próximo
            <ChevronRight className="w-5 h-5" />
          </button>
        </aside>

        {/* Coluna da direita (2/3) */}
        <div className="w-full md:w-2/3 bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Contrato Pré-visualizado</h3>
          <p className="mb-6 text-gray-600 text-sm">
            Este é um rascunho do seu contrato baseado nas informações
            preenchidas:
          </p>
          <div className="text-gray-700 space-y-6">
            <p>
              As partes acima identificadas têm, entre si, justo e acertado o
              presente Contrato de Prestação de Serviços Imobiliários, que se
              regerá pelas cláusulas seguintes e pelas condições descritas.
            </p>

            <p className="font-bold">DO OBJETO DO CONTRATO</p>
            <p>
              Este contrato tem por objeto a intermediação da venda ou locação
              de imóveis, promovida pela plataforma "The Real Estate",
              utilizando inteligência artificial para otimizar e garantir maior
              segurança no processo.
            </p>
            <p> ... </p>
          </div>
        </div>
      </div>
    </section>
  );
}
