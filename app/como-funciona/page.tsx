import type { Metadata } from "next";
import Funciona from "../components/funciona/page";

export const metadata: Metadata = {
    title: "Como Funciona | Chonnostech",
    description:
        "Entenda o modelo: o sistema é seu desde o primeiro dia, com período grátis de hospedagem e manutenção, e mensalidade acessível depois.",
    alternates: { canonical: "/como-funciona" },
};

export default function ComoFuncionaPage() {
    return <Funciona headingLevel="h1" />;
}
