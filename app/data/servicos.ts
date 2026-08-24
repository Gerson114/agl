import { FaRocket, FaCode, FaLaptopCode } from "react-icons/fa";
import type { IconType } from "react-icons";

export const NUMERO_WHATSAPP = "5581983583549"; // DDI + DDD + número, sem espaços ou símbolos

export interface Servico {
    icone: IconType;
    titulo: string;
    descricao: string;
    preco: string;
    prefixoPreco: string;
    sufixoPreco?: string;
    sobConsulta?: boolean;
    url: string;
    destaque: boolean;
    badge?: string;
    condicoes: {
        pagamento: string;
        bonus?: string[];
    } | null;
    linkSlug: string;
}

export const servicos: Servico[] = [
    {
        icone: FaLaptopCode,
        titulo: "Sistema Web Personalizado",
        descricao:
            "Painéis administrativos, CRMs, automações e integrações desenvolvidos sob medida para o processo da sua empresa — nada de sistema genérico.",
        preco: "",
        prefixoPreco: "investimento",
        sobConsulta: true,
        url: "seusistema.com.br/painel",
        destaque: true,
        badge: "Sob medida",
        condicoes: {
            pagamento: "Escopo, prazo e valor definidos após entender sua necessidade.",
            bonus: [
                "Levantamento de requisitos gratuito",
                "Arquitetura pensada para crescer com o negócio",
                "Suporte técnico durante a implantação",
                "Código e dados 100% seus",
            ],
        },
        linkSlug: "#contato",
    },
    {
        icone: FaRocket,
        titulo: "Landing Page de Alta Conversão",
        descricao:
            "Página única ultra-otimizada para transformar visitantes em clientes. Perfeita para campanhas de tráfego pago no Google, Meta e TikTok Ads.",
        preco: "500",
        prefixoPreco: "a partir de R$",
        url: "sualandingpage.com.br",
        destaque: false,
        badge: "Mais popular",
        condicoes: {
            pagamento: "Pagamento facilitado: 50% no início e 50% na entrega.",
            bonus: [
                "Domínio grátis no 1º ano",
                "Otimização de SEO inclusa",
                "3 meses de hospedagem grátis",
                "3 meses de manutenção grátis (ajustes de textos e imagens)",
            ],
        },
        linkSlug: "#contato",
    },
    {
        icone: FaCode,
        titulo: "Site Institucional Completo",
        descricao:
            "Presença digital robusta com múltiplas páginas para passar autoridade, apresentar sua empresa, serviços e canais de contato.",
        preco: "800,00",
        prefixoPreco: "a partir de R$",
        url: "suaempresa.com.br",
        destaque: false,
        condicoes: {
            pagamento: "Pagamento facilitado: 50% no início e 50% na entrega.",
            bonus: [
                "Domínio grátis no 1º ano",
                "Otimização de SEO nas páginas",
                "6 meses de hospedagem grátis",
                "1 mês de manutenção grátis (ajustes de textos e imagens)",
            ],
        },
        linkSlug: "#contato",
    },
];
