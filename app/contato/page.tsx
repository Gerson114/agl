import type { Metadata } from "next";
import Contato from "../components/contato/contato";

export const metadata: Metadata = {
    title: "Contato | Chonnostech",
    description:
        "Fale com o Chonnostech pelo WhatsApp, e-mail ou formulário. Respondemos em até 1 dia útil.",
    alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
    return <Contato headingLevel="h1" />;
}
