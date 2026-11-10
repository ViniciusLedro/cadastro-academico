import type { ReactNode } from "react";
import Link from "next/link";

export default function LayoutAlunos({ children }: { children: ReactNode }) {
  return (
    <section className="area alunos">
      <div className="identidade">Alunos</div>
      <div className="colunas-alunos">
        <aside className="painel">
          <nav className="menu-lateral" aria-label="Menu de alunos">
            <Link href="/alunos">Consultar alunos</Link>
            <Link href="/alunos/novo">Cadastrar aluno</Link>
          </nav>
        </aside>
        <div className="painel">
          {children}
        </div>
      </div>
    </section>
  );
}
