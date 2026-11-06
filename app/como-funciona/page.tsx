import type { Metadata } from "next";
import Funciona from "../components/funciona/funciona";

export const metadata: Metadata = {
    title: "Como Funciona | Chonnostech",
    description:
        "Entenda as etapas para criar seu sistema interno ou automatizar processos: diagnóstico, escopo, desenvolvimento, implantação e suporte.",
    alternates: { canonical: "/como-funciona" },
};

export default function ComoFuncionaPage() {
    return <Funciona headingLevel="h1" />;
}
