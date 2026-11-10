import FormularioMatricula from "@/components/FormularioMatricula";

export default function PaginaNovaMatricula() {
  return (
    <section className="area matriculas">
      <div className="identidade">Matrículas</div>
      <div className="painel">
        <h1>Cadastrar matrícula</h1>
        <FormularioMatricula />
      </div>
    </section>
  );
}
