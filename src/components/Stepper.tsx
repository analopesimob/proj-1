import React from "react";
import { CircleCheckBig } from "lucide-react";

const Stepper = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <CircleCheckBig className="w-10 h-1o text-purple-600 mb-4" />
        <span className="text-sm text-gray-700 ml-2">Clientes</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-indigo-700 rounded-full"></div>
        <span className="text-sm text-gray-700 ml-2">Imóvel</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-indigo-700 rounded-full"></div>
        <span className="text-sm text-gray-700 ml-2">Contrato</span>
      </div>
    </div>
  );
};
export default Stepper;
