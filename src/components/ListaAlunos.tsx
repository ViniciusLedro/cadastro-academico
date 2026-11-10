"use client";

import Link from "next/link";
import { useDadosAcademicos } from "@/components/DadosAcademicos";

export default function ListaAlunos() {
  const { alunos, pronto } = useDadosAcademicos();
  if (!pronto) return <p role="status">Carregando alunos…</p>;

  return (
    <>
      <p>Total de alunos: <strong>{alunos.length}</strong></p>
      <ul className="lista-alunos">
        {alunos.map((aluno) => (
          <li key={aluno.ra}>
            <Link href={`/alunos/${aluno.ra}`}>{aluno.name}</Link>
            <span>RA {aluno.ra}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
