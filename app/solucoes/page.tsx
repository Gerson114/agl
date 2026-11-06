import type { Metadata } from "next";
import Solucoes from "../components/solucoes/solucoes";

export const metadata: Metadata = {
    title: "Sistemas Internos e Automação de Processos | Chonnostech",
    description:
        "Compare sistemas internos, gestão de tarefas, dashboards e automação de processos. Projetos sob medida para a operação da sua empresa.",
    alternates: { canonical: "/solucoes" },
};

export default function SolucoesPage() {
    return <Solucoes headingLevel="h1" />;
}
