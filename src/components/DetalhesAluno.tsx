"use client";

import Link from "next/link";
import AlunoNaoEncontrado from "@/components/AlunoNaoEncontrado";
import { useDadosAcademicos } from "@/components/DadosAcademicos";

export default function DetalhesAluno({ ra }: { ra: number }) {
  const { alunos, pronto } = useDadosAcademicos();
  if (!pronto) return <p role="status">Carregando aluno…</p>;

  const aluno = alunos.find((item) => item.ra === ra);
  if (!aluno) return <AlunoNaoEncontrado />;

  return (
    <>
      <h1>Detalhes do aluno</h1>
      <dl className="detalhes">
        <dt>Nome completo</dt>
        <dd>{aluno.name}</dd>
        <dt>RA</dt>
        <dd>{aluno.ra}</dd>
      </dl>
      <Link href="/alunos">Voltar à listagem</Link>
    </>
  );
}
