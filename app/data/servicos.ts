import { FaLaptopCode, FaShoppingCart, FaGlobe } from "react-icons/fa";
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
        titulo: "Sistema Personalizado (Dashboard)",
        descricao:
            "Vendas, financeiro, equipe e operação num painel só, atualizado na hora — sob medida para o processo real da sua empresa.",
        preco: "100",
        prefixoPreco: "a partir de R$",
        sufixoPreco: "/mês",
        url: "seusistema.com.br/painel",
        destaque: true,
        badge: "Sob medida",
        condicoes: {
            pagamento: "A partir de R$ 100/mês alugando o sistema, sem comprar. Para comprar (código 100% seu), escopo e valor são definidos após entender o seu negócio.",
            bonus: [
                "Levantamento gratuito do seu processo atual",
                "Módulos sob medida: vendas, financeiro, estoque, cobrança",
                "Dashboard atualizado em tempo real",
                "Suporte técnico incluso no plano",
            ],
        },
        linkSlug: "/contato",
    },
    {
        icone: FaShoppingCart,
        titulo: "Loja Virtual (Loja Online)",
        descricao:
            "Sua empresa vendendo pela internet, com catálogo, carrinho e pagamento integrados ao mesmo sistema que controla o seu negócio.",
        preco: "1.200",
        prefixoPreco: "a partir de R$",
        url: "sualoja.com.br",
        destaque: false,
        badge: "Venda 24h",
        condicoes: {
            pagamento: "Pagamento facilitado: 50% no início e 50% na entrega.",
            bonus: [
                "Domínio grátis no 1º ano",
                "Catálogo sincronizado com o sistema",
                "3 meses de hospedagem grátis",
                "3 meses de manutenção grátis (ajustes de textos e imagens)",
            ],
        },
        linkSlug: "/contato",
    },
    {
        icone: FaGlobe,
        titulo: "Site Institucional",
        descricao:
            "Presença profissional na internet para passar confiança, aparecer no Google e reunir WhatsApp, redes sociais e contato num só lugar.",
        preco: "500",
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
        linkSlug: "/contato",
    },
];
