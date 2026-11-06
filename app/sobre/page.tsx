import type { Metadata } from "next";
import Link from "next/link";
import {
    FaHandshake,
    FaShieldHalved,
    FaHeadset,
    FaScrewdriverWrench,
    FaMagnifyingGlass,
    FaCode,
    FaTruck,
    FaComments,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import Sobre from "../components/sobre/sobre";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

export const metadata: Metadata = {
    title: "Sobre | Chonnostech",
    description:
        "A Chonnostech desenvolve sistemas internos para empresas e automações de processos que conectam tarefas, equipes e informações em soluções sob medida.",
    alternates: { canonical: "/sobre" },
};

interface Diferencial {
    icone: IconType;
    titulo: string;
    descricao: string;
}

const diferenciais: Diferencial[] = [
    {
        icone: FaHandshake,
        titulo: "Atendimento direto",
        descricao: "Sem intermediários: você fala com quem desenvolve, entende o escopo e acompanha cada etapa do projeto.",
    },
    {
        icone: FaShieldHalved,
        titulo: "Transparência e propriedade",
        descricao: "Código, conteúdo e domínio são seus desde a entrega. Condições claras, sem letra miúda.",
    },
    {
        icone: FaScrewdriverWrench,
        titulo: "Tecnologia sob medida",
        descricao: "Nada de pacote genérico adaptado às pressas. Cada sistema é desenhado a partir do processo real da sua empresa.",
    },
    {
        icone: FaHeadset,
        titulo: "Suporte contínuo",
        descricao: "Depois da entrega, você continua com suporte técnico e manutenção — não fica sozinho quando surge uma dúvida.",
    },
];

interface Etapa {
    icone: IconType;
    numero: string;
    titulo: string;
    descricao: string;
}

const etapas: Etapa[] = [
    {
        icone: FaMagnifyingGlass,
        numero: "01",
        titulo: "Diagnóstico",
        descricao: "Entendemos o processo real da sua empresa: o que trava, o que já funciona e o que precisa virar sistema.",
    },
    {
        icone: FaCode,
        numero: "02",
        titulo: "Desenvolvimento",
        descricao: "Desenvolvemos sistemas internos e automações de processos conforme as necessidades reais da sua empresa, com acompanhamento ao longo do projeto.",
    },
    {
        icone: FaTruck,
        numero: "03",
        titulo: "Entrega",
        descricao: "Você recebe o projeto no ar, testado, com o código e os dados 100% seus desde o primeiro dia.",
    },
    {
        icone: FaComments,
        numero: "04",
        titulo: "Suporte contínuo",
        descricao: "Acompanhamos o pós-entrega: ajustes, dúvidas e evolução do sistema conforme a sua empresa cresce.",
    },
];

export default function SobrePage() {
    return (
        <>
            <Sobre headingLevel="h1" />

            <section className="w-full py-20 px-4 bg-[#F5F6FA]">
                <Reveal className="max-w-3xl mx-auto text-center mb-14">
                    <Eyebrow>Como trabalhamos</Eyebrow>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        O que muda quando você fecha com a gente
                    </h2>
                    <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {diferenciais.map((d, index) => {
                        const Icone = d.icone;
                        return (
                            <Reveal key={d.titulo} delay={index * 90}>
                                <div className="h-full flex flex-col gap-4 p-6 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-center w-11 h-11 bg-[#1D4FE0]/10">
                                        <Icone className="text-lg text-[#1D4FE0]" />
                                    </div>
                                    <h3
                                        className="text-base font-bold text-black tracking-tight"
                                        style={{ fontFamily: FONT_DISPLAY }}
                                    >
                                        {d.titulo}
                                    </h3>
                                    <p
                                        className="text-sm text-slate-600 leading-relaxed"
                                        style={{ fontFamily: FONT_BODY }}
                                    >
                                        {d.descricao}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            <section className="w-full py-20 px-4 bg-white">
                <Reveal className="max-w-3xl mx-auto text-center mb-14">
                    <Eyebrow>Nosso processo</Eyebrow>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Do diagnóstico ao suporte contínuo
                    </h2>
                    <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {etapas.map((etapa, index) => {
                        const Icone = etapa.icone;
                        return (
                            <Reveal key={etapa.titulo} delay={index * 90} className="relative">
                                <div className="h-full flex flex-col gap-4 p-6 border border-slate-200 bg-white">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center justify-center w-11 h-11 bg-[#1D4FE0]/10">
                                            <Icone className="text-lg text-[#1D4FE0]" />
                                        </div>
                                        <span
                                            className="text-2xl font-bold text-slate-200"
                                            style={{ fontFamily: FONT_MONO }}
                                        >
                                            {etapa.numero}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-base font-bold text-black tracking-tight"
                                        style={{ fontFamily: FONT_DISPLAY }}
                                    >
                                        {etapa.titulo}
                                    </h3>
                                    <p
                                        className="text-sm text-slate-600 leading-relaxed"
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

            <section className="w-full py-20 px-4 bg-[#0B1120] text-center">
                <Reveal className="max-w-2xl mx-auto">
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Quer entender como isso funciona no seu negócio?
                    </h2>
                    <p
                        className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Conta pra gente o que trava no seu processo hoje. A gente mostra o caminho.
                    </p>
                    <Link
                        href="/contato"
                        className="mt-8 inline-flex items-center justify-center gap-2 bg-[#1D4FE0] hover:bg-[#1640C2] text-white font-semibold text-sm sm:text-base px-9 py-3.5 shadow-lg hover:shadow-xl transition-all duration-200"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Falar com a gente
                    </Link>
                </Reveal>
            </section>
        </>
    );
}
