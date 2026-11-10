import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import MenuPrincipal from "@/components/MenuPrincipal";
import { ProvedorAcademico } from "@/components/DadosAcademicos";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cadastro acadêmico",
  description: "Consulta de alunos, disciplinas e matrículas.",
};

export default function LayoutRaiz({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="cabecalho">
          <div className="largura barra">
            <Link href="/" className="marca">Cadastro acadêmico</Link>
            <MenuPrincipal />
          </div>
        </header>
        <ProvedorAcademico>
          <main className="largura conteudo">{children}</main>
        </ProvedorAcademico>
        <footer className="rodape">
          <div className="largura">Laboratório de Desenvolvimento Web · Atividade 1</div>
        </footer>
      </body>
    </html>
  );
}
