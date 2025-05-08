import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center md:justify-start">
          <img 
            src="/AI.png" 
            alt="Inteligência Artificial" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain" 
          />
        </div>
        <div className="order-1 md:order-2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Revolucione seus Negócios Imobiliários!
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-800 mb-4 sm:mb-6">
            Transforme semanas de burocracia em apenas minutos com nosso sistema
            de contratos por IA. Economize tempo e dinheiro enquanto se concentra
            no que realmente importa: <span className="font-bold">VENDER MAIS!</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-800">
            Enquanto os concorrentes ainda estão preparando documentos, você já
            estará fechando sua próxima venda. Eficiência que se converte
            diretamente em lucro!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;