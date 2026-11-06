import {
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    FaGoogle,
    FaTiktok,
    FaLinkedin,
    FaBullhorn,
    FaCamera,
    FaChartPie,
    FaCommentDots,
    FaMagnifyingGlassChart,
    FaFilter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export interface Canal {
    icone: IconType;
    nome: string;
    descricao: string;
}

/** Canais onde a empresa do cliente passa a aparecer e vender. */
export const canais: Canal[] = [
    {
        icone: FaInstagram,
        nome: "Instagram",
        descricao:
            "Feed, Stories e Reels com calendário fixo de postagem, para o perfil parar de ficar parado.",
    },
    {
        icone: FaFacebook,
        nome: "Facebook",
        descricao:
            "Página organizada e anúncios no Meta Ads mirando o público que compra na sua região.",
    },
    {
        icone: FaWhatsapp,
        nome: "WhatsApp",
        descricao:
            "O anúncio cai direto na conversa, com mensagem pronta e o lead registrado no sistema.",
    },
    {
        icone: FaGoogle,
        nome: "Google",
        descricao:
            "Google Ads e perfil da empresa no Google para aparecer na hora em que o cliente procura.",
    },
    {
        icone: FaTiktok,
        nome: "TikTok",
        descricao:
            "Vídeo curto e TikTok Ads para alcançar público novo com custo por visualização baixo.",
    },
    {
        icone: FaLinkedin,
        nome: "LinkedIn",
        descricao:
            "Conteúdo e prospecção para quem vende B2B e precisa falar com empresa, não com consumidor.",
    },
];

export interface FrenteMarketing {
    icone: IconType;
    titulo: string;
    descricao: string;
    entregas: string[];
}

/** Frentes de trabalho do marketing digital. */
export const frentes: FrenteMarketing[] = [
    {
        icone: FaBullhorn,
        titulo: "Gestão de redes sociais",
        descricao:
            "Cuidamos do Instagram e do Facebook da sua empresa: linha de conteúdo, postagem e resposta.",
        entregas: [
            "Calendário mensal de conteúdo aprovado por você",
            "Posts, Stories e Reels publicados na frequência combinada",
            "Legendas, hashtags e call to action para WhatsApp",
            "Resposta de comentários e direct nas mensagens de venda",
        ],
    },
    {
        icone: FaFilter,
        titulo: "Tráfego pago (Meta e Google Ads)",
        descricao:
            "Anúncio no Facebook, Instagram e Google apontado para quem tem intenção de comprar.",
        entregas: [
            "Estrutura de campanha, público e orçamento diário",
            "Criativos de anúncio em imagem e vídeo",
            "Pixel da Meta e conversões configurados no site",
            "Teste de criativo e ajuste semanal de verba",
        ],
    },
    {
        icone: FaCamera,
        titulo: "Criação de conteúdo",
        descricao:
            "Material que a empresa não consegue produzir no dia a dia, feito com a sua identidade visual.",
        entregas: [
            "Identidade visual aplicada em todos os posts",
            "Roteiro e edição de vídeo curto para Reels e TikTok",
            "Tratamento de fotos de produto e de equipe",
            "Banners para site, loja virtual e campanha",
        ],
    },
    {
        icone: FaCommentDots,
        titulo: "Funil de vendas no WhatsApp",
        descricao:
            "O clique no anúncio vira conversa, a conversa vira orçamento e o orçamento entra no sistema.",
        entregas: [
            "Link de anúncio direto para o WhatsApp com mensagem pronta",
            "Roteiro de atendimento para a equipe de vendas",
            "Lead registrado no sistema com a origem do anúncio",
            "Acompanhamento de quem pediu orçamento e não fechou",
        ],
    },
    {
        icone: FaMagnifyingGlassChart,
        titulo: "SEO e presença no Google",
        descricao:
            "Aparecer sem pagar por clique: site otimizado e perfil da empresa no Google atualizado.",
        entregas: [
            "Pesquisa de palavra-chave do seu setor e cidade",
            "Textos e títulos das páginas otimizados",
            "Google Business Profile com fotos, horário e avaliações",
            "Site rápido e aprovado no Core Web Vitals",
        ],
    },
    {
        icone: FaChartPie,
        titulo: "Relatório e dados de campanha",
        descricao:
            "Você vê quanto entrou de lead, quanto custou e quanto virou venda — no mesmo painel da gestão.",
        entregas: [
            "Google Analytics 4 e Tag Manager instalados",
            "Painel com leads, custo por lead e vendas fechadas",
            "Relatório mensal com o que funcionou e o que cortar",
            "Reunião de resultado para decidir o próximo mês",
        ],
    },
];

export interface EtapaMarketing {
    numero: string;
    titulo: string;
    descricao: string;
}

/** Como o trabalho acontece, do diagnóstico ao relatório. */
export const etapas: EtapaMarketing[] = [
    {
        numero: "01",
        titulo: "Diagnóstico",
        descricao:
            "Olhamos o seu Instagram, o seu Facebook, o site e o histórico de vendas para saber de onde o cliente chega hoje.",
    },
    {
        numero: "02",
        titulo: "Estratégia",
        descricao:
            "Definimos público, oferta, canais e verba. Você aprova antes de qualquer real ser investido em anúncio.",
    },
    {
        numero: "03",
        titulo: "Produção e veiculação",
        descricao:
            "Criamos o conteúdo, subimos as campanhas no Meta Ads e no Google Ads e ligamos o funil no WhatsApp.",
    },
    {
        numero: "04",
        titulo: "Otimização",
        descricao:
            "Acompanhamento semanal: pausamos o que gasta sem retorno e reforçamos o criativo que traz venda.",
    },
    {
        numero: "05",
        titulo: "Relatório",
        descricao:
            "Todo mês você recebe lead gerado, custo por lead e venda fechada, com a decisão do próximo ciclo.",
    },
];
