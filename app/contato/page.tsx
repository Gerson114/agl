import { createPageMetadata } from "../lib/metadata";
import Contato from "../components/contato/contato";

export const metadata = createPageMetadata({
    title: "Contato e Orçamentos | Chonnostech",
    description:
        "Fale com a Chonnostech pelo WhatsApp, e-mail ou formulário. Conte como sua empresa trabalha e solicite uma proposta de sistema interno ou automação.",
    path: "/contato",
});

export default function ContatoPage() {
    return <Contato headingLevel="h1" />;
}
