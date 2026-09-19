import type { Metadata } from "next";
import Solucoes from "../components/solucoes/solucoes";

export const metadata: Metadata = {
    title: "Soluções | Chonnostech",
    description:
        "Sistema de gestão personalizado, loja virtual e site institucional. Compare as opções e fale direto no WhatsApp.",
    alternates: { canonical: "/solucoes" },
};

export default function SolucoesPage() {
    return <Solucoes headingLevel="h1" />;
}
