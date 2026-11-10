"use client";

import { disciplinas } from "@/data/disciplinas";
import { useDadosAcademicos } from "@/components/DadosAcademicos";

export default function TabelaMatriculas() {
  const { alunos, matriculas, pronto } = useDadosAcademicos();
  if (!pronto) return <p role="status">Carregando matrículas…</p>;

  return (
    <>
      <p>Total de matrículas: <strong>{matriculas.length}</strong></p>
      {matriculas.length === 0 ? (
        <p>Nenhuma matrícula cadastrada.</p>
      ) : (
        <div className="tabela-rolagem">
          <table aria-label="Matrículas cadastradas">
            <thead>
              <tr><th scope="col">RA</th><th scope="col">Aluno</th><th scope="col">Disciplina</th></tr>
            </thead>
            <tbody>
              {matriculas.map(({ student_ra, course_id }) => (
                <tr key={`${student_ra}-${course_id}`}>
                  <td>{student_ra}</td>
                  <td>{alunos.find((aluno) => aluno.ra === student_ra)?.name ?? "Aluno não encontrado"}</td>
                  <td>{disciplinas.find((disciplina) => disciplina.id === course_id)?.name ?? "Disciplina não encontrada"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
