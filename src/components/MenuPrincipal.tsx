"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const itens = [
  { href: "/", texto: "Início" },
  { href: "/alunos", texto: "Alunos" },
  { href: "/disciplinas", texto: "Disciplinas" },
  { href: "/matriculas", texto: "Matrículas" },
];

export default function MenuPrincipal() {
  const caminho = usePathname();

  return (
    <nav className="menu-principal" aria-label="Menu principal">
      {itens.map(({ href, texto }) => {
        const exato = caminho === href;
        const ativo = exato || (href !== "/" && caminho.startsWith(href + "/"));

        return (
          <Link key={href} href={href} className={ativo ? "ativo" : undefined}
            aria-current={exato ? "page" : ativo ? "location" : undefined}>
            {texto}
          </Link>
        );
      })}
    </nav>
  );
}
