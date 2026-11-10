"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { disciplinas } from "@/data/disciplinas";
import { useDadosAcademicos } from "@/components/DadosAcademicos";

export default function FormularioMatricula() {
  const { alunos, cadastrarMatricula, pronto } = useDadosAcademicos();
  const router = useRouter();
  const [erro, setErro] = useState("");

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    const resultado = cadastrarMatricula(Number(dados.get("aluno")), Number(dados.get("disciplina")));

    if (resultado) {
      setErro(resultado);
      return;
    }
    setErro("");
    router.push("/matriculas");
  }

  return (
    <form onSubmit={enviar} className="formulario">
      <label htmlFor="aluno">Aluno</label>
      <select id="aluno" name="aluno" defaultValue="" disabled={!pronto} required>
        <option value="" disabled>Selecione um aluno</option>
        {pronto && alunos.map((aluno) => (
          <option key={aluno.ra} value={aluno.ra}>{aluno.name} ({aluno.ra})</option>
        ))}
      </select>
      <label htmlFor="disciplina">Disciplina</label>
      <select id="disciplina" name="disciplina" defaultValue="" required>
        <option value="" disabled>Selecione uma disciplina</option>
        {disciplinas.map((disciplina) => (
          <option key={disciplina.id} value={disciplina.id}>{disciplina.name}</option>
        ))}
      </select>
      {erro && <p className="aviso" role="alert">{erro}</p>}
      <div className="acoes">
        <button type="submit" disabled={!pronto}>Cadastrar matrícula</button>
        <Link href="/matriculas">Voltar à listagem</Link>
      </div>
    </form>
  );
}
