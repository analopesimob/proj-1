"use client";

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSenhaChange(event: ChangeEvent<HTMLInputElement>) {
    setSenha(event.target.value);
  }

  function fazerCadastro() {
    console.log("Email:", email);
    console.log("Senha:", senha);
    setEmail("");
    setSenha("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-500 to-indigo-600  flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <Link href="/" className="text-indigo-700 flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Voltar para início</span>
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Cadastre-se
        </h2>

        <div>
          <div className="mb-4">
            <label className="block text-slate-900 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border border-gray-300 text-slate-700 rounded-md"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-900 mb-2" htmlFor="senha">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={handleSenhaChange}
              className="w-full px-3 py-2 border border-gray-300 text-slate-700 rounded-md"
              placeholder="sua senha"
              required
            />
          </div>

          <button
            type="button"
            onClick={fazerCadastro}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Criar conta
          </button>
        </div>

        <p className="mt-4 text-center text-slate-900">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-indigo-700">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
