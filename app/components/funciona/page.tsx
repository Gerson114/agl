"use client";

import { useState } from "react";
import {
    FaChevronDown,
    FaFileSignature,
    FaGift,
    FaCreditCard,
    FaGlobe,
    FaKey,
} from "react-icons/fa";
import Reveal from "../ui/Reveal";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const gruposEtapas = [
    {
        titulo: "Sistemas Personalizados",
        itens: [
            {
                icone: FaFileSignature,
                titulo: "O sistema é seu, desde o primeiro dia",
                resumo: "Sem letrinha miúda: propriedade é sua.",
                conteudo:
                    "Assim que o sistema fica pronto e é entregue, ele é 100% seu — código e funcionalidades. Você não fica refém da agência para continuar usando.",
            },
            {
                icone: FaGift,
                titulo: "2 primeiros meses: hospedagem e manutenção grátis",
                resumo: "Você testa o sistema rodando de verdade, sem custo.",
                conteudo:
                    "Assim que o sistema é entregue, você tem 2 meses de hospedagem e manutenção inclusas, sem custo, para validar que tudo está funcionando do jeito certo.",
            },
            {
                icone: FaCreditCard,
                titulo: "Depois dos 2 meses: R$ 100/mês, se você quiser continuar com a gente",
                resumo: "Só paga quem decide ficar hospedado conosco.",
                conteudo:
                    "Passado esse período, se você quiser manter a hospedagem com a gente, o investimento passa a ser de R$ 100,00 por mês. Se preferir migrar para outro provedor, pode levar o sistema — ele é seu.",
            },
            {
                icone: FaGlobe,
                titulo: "O que está incluso nesse valor mensal",
                resumo: "Manutenção, vitrine e lógica nova inclusas.",
                conteudo:
                    "Ficando com a gente, a mensalidade de R$ 100,00 já cobre manutenção de rotina, alterações no design da vitrine e implementação de lógica nova (novas funcionalidades e regras de negócio do sistema), sem cobranças extras por fora.",
            },
            {
                icone: FaKey,
                titulo: "Não quer comprar? Você pode alugar o sistema",
                resumo: "Mesmo valor de R$ 100/mês, só que sem comprar.",
                conteudo:
                    "Se preferir não comprar, dá para alugar o sistema pelo mesmo valor de R$ 100,00 por mês. Nesse plano a manutenção continua inclusa e você pode pedir alterações na vitrine, mas não tem direito a alterações de lógica (regras internas do sistema) — só quem compra o sistema tem esse direito.",
            },
        ],
    },
];

function ItemAcordeao({
    etapa,
    numero,
    aberto,
    onToggle,
}: {
    etapa: (typeof gruposEtapas)[number]["itens"][number];
    numero: number;
    aberto: boolean;
    onToggle: () => void;
}) {
    const Icone = etapa.icone;

    return (
        <div
            className={` border transition-colors duration-300 overflow-hidden ${
                aberto ? "border-[#0B3B8C] bg-[#0B3B8C]/5" : "border-slate-200 bg-white"
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={aberto}
                className="w-full flex items-center gap-5 p-6 text-left outline-none"
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                <span
                    className={`shrink-0 text-xs font-semibold w-8 h-8 flex items-center justify-center ${
                        aberto ? "bg-[#0B3B8C] text-white" : "bg-slate-100 text-slate-500"
                    }`}
                    style={{ fontFamily: FONT_MONO }}
                >
                    {String(numero).padStart(2, "0")}
                </span>

                <span
                    className={`shrink-0 hidden sm:flex items-center justify-center w-10 h-10 ${
                        aberto ? "bg-[#0B3B8C]/10" : "bg-slate-50"
                    }`}
                >
                    <Icone className={`text-lg ${aberto ? "text-[#0B3B8C]" : "text-slate-400"}`} />
                </span>

                <span className="flex-1 min-w-0">
                    <span
                        className="block text-base sm:text-lg font-semibold text-black tracking-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        {etapa.titulo}
                    </span>
                    <span
                        className="block text-sm text-slate-500 mt-0.5"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        {etapa.resumo}
                    </span>
                </span>

                <FaChevronDown
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                        aberto ? "rotate-180 text-[#0B3B8C]" : ""
                    }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    aberto ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <p
                        className="px-6 pb-6 pl-19 sm:pl-21 text-slate-600 leading-relaxed text-sm sm:text-base"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        {etapa.conteudo}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Funciona() {
    const [aberto, setAberto] = useState<string | null>("0-0");

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: gruposEtapas.flatMap((grupo) =>
            grupo.itens.map((etapa) => ({
                "@type": "Question",
                name: etapa.titulo,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: etapa.conteudo,
                },
            }))
        ),
    };

    return (
        <section id="como-funciona" className="w-full py-20 px-4 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Reveal className="text-center mb-14 max-w-2xl mx-auto">
                <span
                    className="inline-block text-[#0B3B8C] text-sm font-semibold uppercase tracking-widest mb-3"
                    style={{ fontFamily: FONT_MONO }}
                >
                    &lt;Como Funciona /&gt;
                </span>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                    style={{ fontFamily: FONT_DISPLAY }}
                >
                    Do projeto pronto até a manutenção contínua
                </h2>
                <div className="mt-5 mx-auto w-16 h-1.5 bg-[#0B3B8C]" />
                <p
                    className="mt-6 text-slate-600 text-lg leading-relaxed"
                    style={{ fontFamily: FONT_BODY }}
                >
                    Transparência do início ao fim: o sistema é seu, o período grátis
                    tem prazo definido e o que vem depois cabe no bolso.
                </p>
            </Reveal>

            <div className="max-w-3xl mx-auto flex flex-col gap-10">
                {gruposEtapas.map((grupo, grupoIndex) => (
                    <div key={grupo.titulo} className="flex flex-col gap-4">
                        <h3
                            className="text-xs font-semibold uppercase tracking-widest text-slate-400"
                            style={{ fontFamily: FONT_MONO }}
                        >
                            {grupo.titulo}
                        </h3>
                        {grupo.itens.map((etapa, itemIndex) => {
                            const key = `${grupoIndex}-${itemIndex}`;
                            return (
                                <Reveal key={etapa.titulo} delay={itemIndex * 80}>
                                    <ItemAcordeao
                                        etapa={etapa}
                                        numero={itemIndex + 1}
                                        aberto={aberto === key}
                                        onToggle={() => setAberto(aberto === key ? null : key)}
                                    />
                                </Reveal>
                            );
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
}