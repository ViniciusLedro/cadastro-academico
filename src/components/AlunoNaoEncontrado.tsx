import Link from "next/link";

export default function AlunoNaoEncontrado() {
  return (
    <>
      <h1>Aluno não encontrado</h1>
      <p>Nenhum aluno foi encontrado com o RA informado.</p>
      <Link href="/alunos">Voltar à listagem</Link>
    </>
  );
}
