import Link from "next/link";

export default function PaginaInicial() {
  return (
    <>
      <header className="introducao">
        <h1>Cadastro acadêmico</h1>
        <p>Consulte e cadastre alunos e matrículas e explore as disciplinas do curso.</p>
      </header>
      <div className="grade">
        <Link href="/alunos" className="cartao alunos">
          <h2>Alunos</h2>
          <p>Consulte os alunos pelo RA ou adicione um novo cadastro.</p>
        </Link>
        <Link href="/disciplinas" className="cartao disciplinas">
          <h2>Disciplinas</h2>
          <p>Confira o catálogo de disciplinas do curso.</p>
        </Link>
        <Link href="/matriculas" className="cartao matriculas">
          <h2>Matrículas</h2>
          <p>Consulte as matrículas e vincule alunos a disciplinas.</p>
        </Link>
      </div>
    </>
  );
}
