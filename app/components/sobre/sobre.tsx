import { FaLaptopCode, FaRocket, FaHandshake, FaShieldAlt } from "react-icons/fa";
import type { IconType } from "react-icons";
import Reveal from "../ui/Reveal";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

interface Pilar {
    icone: IconType;
    titulo: string;
    descricao: string;
}

const pilares: Pilar[] = [
    {
        icone: FaLaptopCode,
        titulo: "Sistemas sob medida",
        descricao:
            "Painéis, CRMs, automações e integrações desenhados a partir do seu processo real — não um pacote genérico adaptado às pressas.",
    },
    {
        icone: FaRocket,
        titulo: "Sites e landing pages que convertem",
        descricao:
            "Páginas rápidas, responsivas e otimizadas para SEO, pensadas para transformar visita em contato e contato em cliente.",
    },
    {
        icone: FaHandshake,
        titulo: "Atendimento direto",
        descricao:
            "Sem intermediários: você fala com quem desenvolve, entende o escopo e acompanha cada etapa do projeto.",
    },
    {
        icone: FaShieldAlt,
        titulo: "Transparência e propriedade",
        descricao:
            "Código, conteúdo e domínio são seus desde a entrega. Condições claras, sem letra miúda.",
    },
];

export default function Sobre() {
    return (
        <section id="sobre" className="w-full py-20 px-4 bg-white">
            <Reveal className="max-w-5xl mx-auto text-center mb-14">
                <span
                    className="inline-block text-[#0B3B8C] text-sm font-semibold uppercase tracking-widest mb-3"
                    style={{ fontFamily: FONT_MONO }}
                >
                    &lt;Sobre a AGL Digital /&gt;
                </span>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                    style={{ fontFamily: FONT_DISPLAY }}
                >
                    Tecnologia sob medida para o seu negócio crescer
                </h2>
                <div className="mt-5 mx-auto w-16 h-1.5 bg-[#0B3B8C]" />
                <p
                    className="mt-6 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto"
                    style={{ fontFamily: FONT_BODY }}
                >
                    A AGL Digital é uma empresa de tecnologia focada em dois pilares:{" "}
                    <strong className="text-black font-semibold">sistemas web personalizados</strong> que
                    organizam e automatizam processos, e{" "}
                    <strong className="text-black font-semibold">
                        sites e landing pages de alta conversão
                    </strong>{" "}
                    que colocam sua empresa no ar com uma presença digital que gera resultado. Cada projeto
                    é construído sob medida — do primeiro requisito à última linha de código.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {pilares.map((pilar, index) => {
                    const Icone = pilar.icone;
                    return (
                        <Reveal key={pilar.titulo} delay={index * 90}>
                            <div className="h-full flex flex-col gap-4 p-6 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center justify-center w-11 h-11 bg-[#0B3B8C]/10">
                                    <Icone className="text-lg text-[#0B3B8C]" />
                                </div>
                                <h3
                                    className="text-base font-bold text-black tracking-tight"
                                    style={{ fontFamily: FONT_DISPLAY }}
                                >
                                    {pilar.titulo}
                                </h3>
                                <p
                                    className="text-sm text-slate-600 leading-relaxed"
                                    style={{ fontFamily: FONT_BODY }}
                                >
                                    {pilar.descricao}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
