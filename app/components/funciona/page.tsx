"use client";

import { useState } from "react";
import {
    FaChevronDown,
    FaFileSignature,
    FaGift,
    FaCreditCard,
    FaGlobe,
} from "react-icons/fa";

const FONT_DISPLAY = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const etapas = [
    {
        icone: FaFileSignature,
        titulo: "O site é seu, desde o primeiro dia",
        resumo: "Sem letrinha miúda: propriedade é sua.",
        conteudo:
            "Assim que o site fica pronto e é entregue, ele é 100% seu — código, conteúdo e domínio. Você não fica refém da agência para continuar existindo online.",
    },
    {
        icone: FaGift,
        titulo: "3 primeiros meses: hospedagem e domínio grátis",
        resumo: "Você usa, testa e valida sem custo nenhum.",
        conteudo:
            "Nos 3 primeiros meses após a entrega, a hospedagem e o domínio ficam por nossa conta. É tempo suficiente para o site provar valor antes de qualquer cobrança recorrente.",
    },
    {
        icone: FaCreditCard,
        titulo: "Depois dos 3 meses: R$ 80/mês, se você quiser continuar com a gente",
        resumo: "Só paga quem decide ficar hospedado conosco.",
        conteudo:
            "Passado esse período, se você quiser manter a hospedagem com a gente, o investimento passa a ser de R$ 80,00 por mês. Se preferir migrar para outro provedor, pode levar o site — ele é seu.",
    },
    {
        icone: FaGlobe,
        titulo: "O que está incluso nesse valor mensal",
        resumo: "Domínio grátis + 1 manutenção por mês.",
        conteudo:
            "Ficando na nossa hospedagem, o domínio continua grátis enquanto você estiver com a gente, e você tem direito a 1 manutenção mensal (ajustes de textos, imagens e pequenos updates) sem custo adicional.",
    },
];

function ItemAcordeao({
    etapa,
    numero,
    aberto,
    onToggle,
}: {
    etapa: (typeof etapas)[number];
    numero: number;
    aberto: boolean;
    onToggle: () => void;
}) {
    const Icone = etapa.icone;

    return (
        <div
            className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                aberto ? "border-[#1E5BFB] bg-blue-50/40" : "border-slate-200 bg-white"
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
                    className={`shrink-0 text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center ${
                        aberto ? "bg-[#1E5BFB] text-white" : "bg-slate-100 text-slate-500"
                    }`}
                    style={{ fontFamily: FONT_MONO }}
                >
                    {String(numero).padStart(2, "0")}
                </span>

                <span
                    className={`shrink-0 hidden sm:flex items-center justify-center w-10 h-10 rounded-xl ${
                        aberto ? "bg-[#1E5BFB]/10" : "bg-slate-50"
                    }`}
                >
                    <Icone className={`text-lg ${aberto ? "text-[#1E5BFB]" : "text-slate-400"}`} />
                </span>

                <span className="flex-1 min-w-0">
                    <span
                        className="block text-base sm:text-lg font-semibold text-[#0B1120] tracking-tight"
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
                        aberto ? "rotate-180 text-[#1E5BFB]" : ""
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
    const [aberto, setAberto] = useState<number | null>(0);

    return (
        <section id="como-funciona" className="w-full py-20 px-4 bg-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');
            `}</style>

            <div className="text-center mb-14 max-w-2xl mx-auto">
                <span
                    className="inline-block text-[#1E5BFB] text-sm font-semibold uppercase tracking-widest mb-3"
                    style={{ fontFamily: FONT_MONO }}
                >
                    &lt;Como Funciona /&gt;
                </span>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-tight"
                    style={{ fontFamily: FONT_DISPLAY }}
                >
                    Do seu site pronto até a hospedagem contínua
                </h2>
                <div className="mt-5 mx-auto w-16 h-1.5 rounded-full bg-[#1E5BFB]" />
                <p
                    className="mt-6 text-slate-600 text-lg leading-relaxed"
                    style={{ fontFamily: FONT_BODY }}
                >
                    Transparência do início ao fim: o site é seu, o período grátis tem prazo
                    definido e o que vem depois cabe no bolso.
                </p>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-4">
                {etapas.map((etapa, index) => (
                    <ItemAcordeao
                        key={etapa.titulo}
                        etapa={etapa}
                        numero={index + 1}
                        aberto={aberto === index}
                        onToggle={() => setAberto(aberto === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    );
}