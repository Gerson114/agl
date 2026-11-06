import { createPageMetadata } from "../lib/metadata";
import Solucoes from "../components/solucoes/solucoes";

export const metadata = createPageMetadata({
    title: "Soluções em Sistemas e Automação | Chonnostech",
    description:
        "Conheça as soluções da Chonnostech: sistemas internos, gestão de tarefas, dashboards e automação. Defina o projeto ideal para a operação da sua empresa.",
    path: "/solucoes",
});

export default function SolucoesPage() {
    return <Solucoes headingLevel="h1" />;
}
