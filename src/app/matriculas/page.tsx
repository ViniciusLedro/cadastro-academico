import Link from "next/link";
import TabelaMatriculas from "@/components/TabelaMatriculas";

export default function PaginaMatriculas() {
  return (
    <section className="area matriculas">
      <div className="identidade">Matrículas</div>
      <div className="painel">
        <div className="barra">
          <h1>Consultar matrículas</h1>
          <Link href="/matriculas/nova" className="botao">Nova matrícula</Link>
        </div>
        <TabelaMatriculas />
      </div>
    </section>
  );
}
