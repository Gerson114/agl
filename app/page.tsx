import Link from "next/link";
import {
    FaLaptopCode,
    FaGears,
    FaArrowRight,
    FaHandshake,
    FaShieldHalved,
    FaHeadset,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import Hero from "./components/HeroSection/hero";
import Sobre from "./components/sobre/sobre";
import Reveal from "./components/ui/Reveal";
import Eyebrow from "./components/ui/Eyebrow";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

interface Destaque {
    icone: IconType;
    texto: string;
}

const destaques: Destaque[] = [
    { icone: FaShieldHalved, texto: "Sistemas internos sob medida" },
    { icone: FaHandshake, texto: "Automação dos seus processos" },
    { icone: FaHeadset, texto: "Atendimento direto com quem desenvolve" },
];

const paginas = [
    {
        icone: FaLaptopCode,
        titulo: "Sistemas internos",
        descricao: "Reúna tarefas, equipes e dados da operação em um sistema feito para a rotina da sua empresa.",
        href: "/sistema",
    },
    {
        icone: FaGears,
        titulo: "Automação de processos",
        descricao: "Conecte ferramentas e automatize etapas repetitivas conforme as regras do seu negócio.",
        href: "/automacoes",
    },
    {
        icone: FaShieldHalved,
        titulo: "Dashboards e indicadores",
        descricao: "Acompanhe tarefas e indicadores da operação em painéis pensados para sua equipe.",
        href: "/sistema",
    },
];

export default function Home() {
    return (
        <>
            <Hero />

            <div className="w-full bg-white border-b border-slate-100 py-6 px-4">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
                    {destaques.map((d) => {
                        const Icone = d.icone;
                        return (
                            <div key={d.texto} className="flex items-center gap-2.5">
                                <Icone className="text-[#1D4FE0] text-base shrink-0" />
                                <span
                                    className="text-sm font-medium text-slate-700"
                                    style={{ fontFamily: FONT_BODY }}
                                >
                                    {d.texto}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Sobre />

            <section className="w-full py-20 px-4 bg-[#F8F9FC]">
                <Reveal className="max-w-3xl mx-auto text-center mb-12">
                    <Eyebrow>Explore</Eyebrow>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Sistemas internos e automações para sua empresa
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {paginas.map((p, index) => {
                        const Icone = p.icone;
                        return (
                            <Reveal key={p.href} delay={index * 90} className="h-full">
                                <Link
                                    href={p.href}
                                    className="group h-full flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-7 transition-colors duration-200 hover:border-blue-300 sm:p-8"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg rounded-lg bg-[#1D4FE0]/10">
                                        <Icone className="text-lg text-[#1D4FE0]" />
                                    </div>
                                    <h3
                                        className="text-base font-bold text-black tracking-tight"
                                        style={{ fontFamily: FONT_DISPLAY }}
                                    >
                                        {p.titulo}
                                    </h3>
                                    <p
                                        className="text-sm text-slate-600 leading-relaxed flex-1"
                                        style={{ fontFamily: FONT_BODY }}
                                    >
                                        {p.descricao}
                                    </p>
                                    <span
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4FE0]"
                                        style={{ fontFamily: FONT_BODY }}
                                    >
                                        Ver mais
                                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            <section className="w-full py-20 px-4 bg-[#F5F6FA] text-center">
                <Reveal className="max-w-2xl mx-auto">
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Sua equipe pronta para trabalhar com mais clareza?
                    </h2>
                    <p
                        className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Conte como sua empresa trabalha. Vamos encontrar o sistema ou a automação que faz sentido para sua operação.
                    </p>
                    <Link
                        href="/contato"
                        className="mt-8 inline-flex items-center justify-center gap-2 bg-[#1D4FE0] hover:bg-[#1640C2] text-white font-semibold text-sm sm:text-base px-9 py-3.5 shadow-lg hover:shadow-xl transition-all duration-200"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Conversar sobre meu processo
                    </Link>
                </Reveal>
            </section>
        </>
    );
}
