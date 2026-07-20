import { FaRocket, FaCode, FaWhatsapp, FaChartLine } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import type { ComponentType, ReactElement } from "react";

const FONT_DISPLAY = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

interface Servico {
    icone: ComponentType<any>;
    titulo: string;
    descricao: string;
    preco: string;
    prefixoPreco: string;
    sufixoPreco?: string;
    url: string;
    destaque: boolean;
    condicoes: {
        pagamento: string;
        bonus?: string[];
    } | null;
    linkSlug: string;
}

const servicos: Servico[] = [
    {
        icone: FaRocket,
        titulo: "Landing Page de Alta Conversão",
        descricao:
            "Página única ultra-otimizada para transformar visitantes em clientes. Perfeita para campanhas de tráfego pago no Google, Meta e TikTok Ads.",
        preco: "500",
        prefixoPreco: "a partir de R$",
        url: "sualandingpage.com.br",
        destaque: true,
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
    {
        icone: FaChartLine,
        titulo: "Rastreamento com Google Analytics",
        descricao:
            "Monitoramento básico do seu site: quantas pessoas visitam, de onde vêm e quais páginas mais acessam. Ideal para quem quer começar a tomar decisões com dados.",
        preco: "50",
        prefixoPreco: "plano mensal",
        sufixoPreco: "/mês",
        url: "analytics.seusite.com.br",
        destaque: false,
        condicoes: {
            pagamento: "Cobrança mensal recorrente, sem fidelidade — cancele quando quiser.",
            bonus: [
                "Configuração completa do Google Analytics",
                "Painel de visitantes e origem de tráfego",
                "Relatório mensal de desempenho",
                "Suporte via WhatsApp para dúvidas",
            ],
        },
        linkSlug: "#contato",
    },
];

// Barra de navegador — o "cartão de visitas" visual de cada card,
// reforçando que o que está à venda é, literalmente, um endereço na web.
interface BarraNavegadorProps {
    destaque: boolean;
    url: string;
}

function BarraNavegador({ destaque, url }: BarraNavegadorProps) {
    return (
        <div
            className={`flex items-center gap-2 px-4 py-2 border-b ${
                destaque
                    ? "bg-[#10182B] border-white/10"
                    : "bg-slate-50 border-slate-200"
            }`}
        >
            <div className="flex gap-1.5 shrink-0">
                <span className={`w-2.5 h-2.5 rounded-full ${destaque ? "bg-white/25" : "bg-slate-300"}`} />
                <span className={`w-2.5 h-2.5 rounded-full ${destaque ? "bg-white/25" : "bg-slate-300"}`} />
                <span className={`w-2.5 h-2.5 rounded-full ${destaque ? "bg-white/25" : "bg-slate-300"}`} />
            </div>
            <div
                className={`flex-1 flex items-center gap-2 rounded-md px-3 py-1.5 min-w-0 ${
                    destaque ? "bg-white/10" : "bg-white border border-slate-200"
                }`}
            >
                <svg
                    className={`w-3 h-3 shrink-0 ${destaque ? "text-emerald-300" : "text-emerald-500"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <span
                    className={`text-xs truncate ${destaque ? "text-white/80" : "text-slate-500"}`}
                    style={{ fontFamily: FONT_MONO }}
                >
                    {url}
                </span>
            </div>
        </div>
    );
}

interface CardServicoProps {
    s: Servico;
}

function CardServico({ s }: CardServicoProps) {
    const Icone = s.icone as ComponentType<any>;
    const bonus = s.condicoes?.bonus;

    return (
        <div className="relative h-full">
            {s.destaque && (
                <span
                    className="absolute -top-3 right-6 z-10 text-[10px] font-semibold uppercase tracking-wider bg-white text-[#1E5BFB] px-3 py-1 rounded-full shadow-md border border-blue-100"
                    style={{ fontFamily: FONT_MONO }}
                >
                    Mais popular
                </span>
            )}

            <a
                href={s.linkSlug}
                className={`group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                    s.destaque
                        ? "bg-[#1E5BFB] border-[#1E5BFB] text-white shadow-xl shadow-blue-200/60"
                        : "bg-white border-slate-200 text-slate-800 shadow-sm hover:border-blue-200"
                }`}
            >
                <BarraNavegador destaque={s.destaque} url={s.url} />

                <div className="flex flex-col gap-4 p-5 sm:p-6 flex-1">
                    {/* Ícone */}
                    <div
                        className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-300 ${
                            s.destaque
                                ? "bg-white/15"
                                : "bg-[#1E5BFB]/10 group-hover:bg-[#1E5BFB]/15"
                        }`}
                    >
                        <Icone className={`text-base ${s.destaque ? "text-white" : "text-[#1E5BFB]"}`} />
                    </div>

                    {/* Título e descrição */}
                    <div className="flex flex-col gap-1.5">
                        <h3
                            className={`text-lg font-bold tracking-tight ${
                                s.destaque ? "text-white" : "text-[#0B1120]"
                            }`}
                            style={{ fontFamily: FONT_DISPLAY }}
                        >
                            {s.titulo}
                        </h3>
                        <p
                            className={`text-xs leading-relaxed ${
                                s.destaque ? "text-white/90" : "text-slate-600"
                            }`}
                            style={{ fontFamily: FONT_BODY }}
                        >
                            {s.descricao}
                        </p>
                    </div>

                    {/* Condições e bônus */}
                    {s.condicoes && (
                        <div
                            className={`flex flex-col gap-2 p-3 rounded-lg ${
                                s.destaque ? "bg-white/10" : "bg-slate-50 border border-slate-100"
                            }`}
                        >
                            <p
                                className={`text-[11px] font-semibold ${
                                    s.destaque ? "text-white" : "text-slate-800"
                                }`}
                                style={{ fontFamily: FONT_BODY }}
                            >
                                {s.condicoes.pagamento}
                            </p>

                            {bonus && bonus.length > 0 && (
                                <ul className="space-y-1">
                                    {bonus.map((item, index) => (
                                        <li key={index} className="flex items-start gap-1.5">
                                            <HiCheckCircle
                                                className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                                    s.destaque ? "text-emerald-300" : "text-emerald-600"
                                                }`}
                                            />
                                            <span
                                                className={`text-[11px] ${
                                                    s.destaque ? "text-blue-50" : "text-slate-700"
                                                }`}
                                                style={{ fontFamily: FONT_BODY }}
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {/* Preço */}
                    <div
                        className={`mt-auto pt-3 border-t ${
                            s.destaque ? "border-white/15" : "border-slate-100"
                        }`}
                    >
                        <span
                            className={`text-[10px] uppercase tracking-wider block mb-0.5 font-semibold ${
                                s.destaque ? "text-blue-100" : "text-slate-400"
                            }`}
                            style={{ fontFamily: FONT_MONO }}
                        >
                            {s.prefixoPreco}
                        </span>
                        <span
                            className={`text-2xl font-semibold tracking-tight ${
                                s.destaque ? "text-white" : "text-[#1E5BFB]"
                            }`}
                            style={{ fontFamily: FONT_MONO }}
                        >
                            R$ {s.preco}
                            {s.sufixoPreco && (
                                <span
                                    className={`text-base font-medium ml-1 ${
                                        s.destaque ? "text-blue-100" : "text-slate-400"
                                    }`}
                                >
                                    {s.sufixoPreco}
                                </span>
                            )}
                        </span>
                    </div>

                    {/* CTA visual */}
                    <div
                        className={`text-xs font-semibold flex items-center gap-1.5 transition-colors duration-200 ${
                            s.destaque
                                ? "text-white/90 group-hover:text-white"
                                : "text-[#1E5BFB] group-hover:text-blue-700"
                        }`}
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Saber mais sobre este modelo
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default function Oferta(): ReactElement {
    return (
        // w-full + sem margin/padding lateral aqui de propósito: se o fundo ainda
        // não ocupar a tela toda, o padding está vindo de um <div> pai (layout/App)
        // que envolve esta section com container/px-*. Deixe o pai sem padding
        // horizontal e controle o respiro só internamente (max-w-5xl mx-auto abaixo).
        <section id="solucoes" className="w-full py-14 px-4 bg-[#F5F6FA]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');
            `}</style>

            {/* Header */}
            <div className="text-center mb-10">
                <span
                    className="inline-block text-[#1E5BFB] text-sm font-semibold uppercase tracking-widest mb-3"
                    style={{ fontFamily: FONT_MONO }}
                >
                    &lt;Nossas Soluções Web /&gt;
                </span>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-tight max-w-2xl mx-auto"
                    style={{ fontFamily: FONT_DISPLAY }}
                >
                    Escolha a melhor opção para o seu negócio
                </h2>
                <div className="mt-5 mx-auto w-16 h-1.5 rounded-full bg-[#1E5BFB]" />
                <p
                    className="mt-6 text-slate-600 text-lg max-w-xl mx-auto leading-relaxed"
                    style={{ fontFamily: FONT_BODY }}
                >
                    Desenvolvemos estruturas digitais focadas em gerar autoridade,
                    atrair leads qualificados e aumentar suas vendas.
                </p>
            </div>

            {/* Grid de cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
                {servicos.map((s) => (
                    <CardServico key={s.titulo} s={s} />
                ))}
            </div>

            {/* CTA final */}
            <div className="mt-12 text-center">
                <p className="text-slate-500 mb-6 text-sm" style={{ fontFamily: FONT_BODY }}>
                    Não sabe qual escolher? Nós te ajudamos.
                </p>
                <a
                    href="/#contato"
                    className="inline-flex items-center gap-3 bg-[#0B1120] hover:bg-slate-800 text-white font-semibold text-base px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
                    style={{ fontFamily: FONT_BODY }}
                >
                    <FaWhatsapp className="text-xl text-emerald-400" />
                    Falar com um especialista
                </a>
            </div>
        </section>
    );
}