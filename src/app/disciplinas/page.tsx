import { disciplinas } from "@/data/disciplinas";

export default function PaginaDisciplinas() {
  return (
    <section className="area disciplinas">
      <div className="identidade">Disciplinas</div>
      <h1>Catálogo de disciplinas</h1>
      <p>Total de disciplinas: <strong>{disciplinas.length}</strong></p>
      <ul className="grade catalogo">
        {disciplinas.map((disciplina) => (
          <li key={disciplina.id} className="cartao">
            <span>ID {disciplina.id}</span>
            <h2>{disciplina.name}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
