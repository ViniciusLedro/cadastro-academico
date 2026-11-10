"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDadosAcademicos } from "@/components/DadosAcademicos";

export default function FormularioAluno() {
  const { cadastrarAluno, pronto } = useDadosAcademicos();
  const router = useRouter();
  const [erro, setErro] = useState("");

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    const ra = String(dados.get("ra") ?? "").trim();
    const nome = String(dados.get("nome") ?? "");
    const resultado = cadastrarAluno(/^\d+$/.test(ra) ? Number(ra) : NaN, nome);

    if (resultado) {
      setErro(resultado);
      return;
    }
    setErro("");
    router.push("/alunos");
  }

  return (
    <form onSubmit={enviar} className="formulario">
      <label htmlFor="ra">RA</label>
      <input id="ra" name="ra" inputMode="numeric" required />
      <label htmlFor="nome">Nome completo</label>
      <input id="nome" name="nome" required />
      {erro && <p className="aviso" role="alert">{erro}</p>}
      <div className="acoes">
        <button type="submit" disabled={!pronto}>Cadastrar aluno</button>
        <Link href="/alunos">Voltar à listagem</Link>
      </div>
    </form>
  );
}
