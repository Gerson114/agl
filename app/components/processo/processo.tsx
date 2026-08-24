import { FaComments, FaFileSignature, FaLaptopCode, FaClipboardCheck, FaHeadset } from "react-icons/fa";
import type { IconType } from "react-icons";
import Reveal from "../ui/Reveal";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

interface Etapa {
    icone: IconType;
    titulo: string;
    descricao: string;
}

const etapas: Etapa[] = [
    {
        icone: FaComments,
        titulo: "Briefing e diagnóstico",
        descricao: "Entendemos seu negócio, seu público e o problema real que o projeto precisa resolver.",
    },
    {
        icone: FaFileSignature,
        titulo: "Proposta e escopo",
        descricao: "Funcionalidades, páginas, prazo e investimento definidos com clareza antes de começar.",
    },
    {
        icone: FaLaptopCode,
        titulo: "Design e desenvolvimento",
        descricao: "Interface alinhada à sua marca e código responsivo, rápido e otimizado para SEO.",
    },
    {
        icone: FaClipboardCheck,
        titulo: "Entrega e testes",
        descricao: "Revisão com você antes de publicar — ajustes finos até o resultado ficar do seu jeito.",
    },
    {
        icone: FaHeadset,
        titulo: "Suporte contínuo",
        descricao: "Acompanhamento após o lançamento, com canal direto para dúvidas e ajustes.",
    },
];

export default function Processo() {
    return (
        <section className="w-full pt-20 pb-14 px-4 bg-white">
            <Reveal className="text-center mb-14 max-w-2xl mx-auto">
                <span
                    className="inline-block text-[#0B3B8C] text-sm font-semibold uppercase tracking-widest mb-3"
                    style={{ fontFamily: FONT_MONO }}
                >
                    &lt;Nosso Processo /&gt;
                </span>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                    style={{ fontFamily: FONT_DISPLAY }}
                >
                    Do primeiro contato à entrega, passo a passo
                </h2>
                <div className="mt-5 mx-auto w-16 h-1.5 bg-[#0B3B8C]" />
                <p
                    className="mt-6 text-slate-600 text-lg leading-relaxed"
                    style={{ fontFamily: FONT_BODY }}
                >
                    Um processo simples e transparente, para você acompanhar exatamente
                    onde o projeto está em cada etapa.
                </p>
            </Reveal>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {etapas.map((etapa, index) => {
                    const Icone = etapa.icone;
                    return (
                        <Reveal key={etapa.titulo} delay={index * 90}>
                            <div className="h-full relative flex flex-col gap-3 p-5 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <span
                                    className="text-xs font-semibold text-slate-400"
                                    style={{ fontFamily: FONT_MONO }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="flex items-center justify-center w-10 h-10 bg-[#0B3B8C]/10">
                                    <Icone className="text-base text-[#0B3B8C]" />
                                </div>
                                <h3
                                    className="text-sm font-bold text-black tracking-tight"
                                    style={{ fontFamily: FONT_DISPLAY }}
                                >
                                    {etapa.titulo}
                                </h3>
                                <p
                                    className="text-xs text-slate-600 leading-relaxed"
                                    style={{ fontFamily: FONT_BODY }}
                                >
                                    {etapa.descricao}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
