import type { Metadata } from "next";
import Contato from "../components/contato/contato";

export const metadata: Metadata = {
    title: "Contato | Chonnostech",
    description:
        "Solicite uma proposta de sistema interno ou automação de processos. Fale com a Chonnostech pelo WhatsApp, e-mail ou formulário.",
    alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
    return <Contato headingLevel="h1" />;
}
