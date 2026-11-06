import { createPageMetadata } from "../lib/metadata";
import Funciona from "../components/funciona/funciona";

export const metadata = createPageMetadata({
    title: "Como Funciona a Contratação | Chonnostech",
    description:
        "Entenda como contratar seu sistema na Chonnostech: compra ou aluguel, propriedade do código, hospedagem, manutenção e condições de suporte após a entrega.",
    path: "/como-funciona",
});

export default function ComoFuncionaPage() {
    return <Funciona headingLevel="h1" />;
}
