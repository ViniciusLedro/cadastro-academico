"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { alunos as alunosIniciais, type Aluno } from "@/data/alunos";
import { disciplinas } from "@/data/disciplinas";
import { matriculas as matriculasIniciais, type Matricula } from "@/data/matriculas";

type Dados = {
  alunos: Aluno[];
  matriculas: Matricula[];
};

type ContextoAcademico = Dados & {
  pronto: boolean;
  cadastrarAluno: (ra: number, nome: string) => string | null;
  cadastrarMatricula: (ra: number, idDisciplina: number) => string | null;
};

const chave = "cadastro-academico:v1";
const dadosIniciais = { alunos: alunosIniciais, matriculas: matriculasIniciais };
const Contexto = createContext<ContextoAcademico | null>(null);

export function ProvedorAcademico({ children }: { children: ReactNode }) {
  const [dados, setDados] = useState<Dados>(dadosIniciais);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    // O localStorage só pode ser lido no navegador, depois que o componente é montado.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      const dadosSalvos = localStorage.getItem(chave);
      if (dadosSalvos) {
        setDados(JSON.parse(dadosSalvos) as Dados);
      }
    } catch {
      setDados(dadosIniciais);
    } finally {
      setPronto(true);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  function salvar(novosDados: Dados) {
    try {
      localStorage.setItem(chave, JSON.stringify(novosDados));
      setDados(novosDados);
      return null;
    } catch {
      return "Não foi possível salvar o cadastro no navegador. Verifique se o armazenamento está disponível e tente novamente.";
    }
  }

  function cadastrarAluno(ra: number, nome: string) {
    const name = nome.trim();
    if (!Number.isSafeInteger(ra) || ra <= 0 || !name) {
      return "Informe um RA inteiro positivo e o nome do aluno.";
    }

    if (dados.alunos.some((aluno) => aluno.ra === ra)) {
      return "Já existe um aluno com esse RA.";
    }

    return salvar({
      ...dados,
      alunos: [...dados.alunos, { ra, name }],
    });
  }

  function cadastrarMatricula(ra: number, idDisciplina: number) {
    if (!dados.alunos.some((aluno) => aluno.ra === ra) ||
        !disciplinas.some((disciplina) => disciplina.id === idDisciplina)) {
      return "Selecione um aluno e uma disciplina válidos.";
    }

    const matriculaDuplicada = dados.matriculas.some(
      (item) => item.student_ra === ra && item.course_id === idDisciplina,
    );
    if (matriculaDuplicada) {
      return "Este aluno já está matriculado nesta disciplina.";
    }

    return salvar({
      ...dados,
      matriculas: [...dados.matriculas, { student_ra: ra, course_id: idDisciplina }],
    });
  }

  return (
    <Contexto.Provider value={{ ...dados, pronto, cadastrarAluno, cadastrarMatricula }}>
      {children}
    </Contexto.Provider>
  );
}

export function useDadosAcademicos() {
  const contexto = useContext(Contexto);
  if (contexto === null) throw new Error("O provedor de dados acadêmicos deve envolver esta página.");
  return contexto;
}
