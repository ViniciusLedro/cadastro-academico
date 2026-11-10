import Link from "next/link";

export default function EnderecoNaoEncontrado() {
  return (
    <section className="painel">
      <h1>Endereço não encontrado</h1>
      <p>Confira o endereço digitado ou use o menu para acessar uma área do sistema.</p>
      <Link href="/">Voltar ao início</Link>
    </section>
  );
}
