import { notFound } from "next/navigation";
import DetalhesAluno from "@/components/DetalhesAluno";

export default async function PaginaDetalhesAluno({ params }: { params: Promise<{ ra: string }> }) {
  const { ra } = await params;
  const numero = Number(ra);
  if (!/^\d+$/.test(ra) || !Number.isSafeInteger(numero) || numero <= 0) notFound();

  return <DetalhesAluno ra={numero} />;
}
