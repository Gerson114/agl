import type { Metadata } from "next";
import Link from "next/link";
import {
    FaArrowTrendUp,
    FaGears,
    FaFileInvoice,
    FaUsers,
    FaChartLine,
    FaListCheck,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import Demonstracao from "../components/demonstracao/demonstracao";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

export const metadata: Metadata = {
    title: "Sistemas | Chonnostech",
    description:
        "Sistemas internos sob medida para organizar tarefas, equipes, dados e processos da empresa em um só lugar.",
    alternates: { canonical: "/sistema" },
};

interface Modulo {
    icone: IconType;
    titulo: string;
    descricao: string;
}

const modulos: Modulo[] = [
    {
        icone: FaArrowTrendUp,
        titulo: "Vendas",
        descricao: "Pedidos, faturamento e comissões acompanhados em tempo real, sem depender de planilha paralela.",
    },
    {
        icone: FaFileInvoice,
        titulo: "Financeiro",
        descricao: "Contas a pagar e a receber, fluxo de caixa e fechamento do mês num só lugar, sempre atualizado.",
    },
    {
        icone: FaGears,
        titulo: "Automação de rotinas",
        descricao: "Reduza tarefas manuais com fluxos e notificações definidos para o processo da sua empresa.",
    },
    {
        icone: FaListCheck,
        titulo: "Tarefas e projetos",
        descricao: "Demandas, responsáveis, prioridades e prazos organizados por etapa do processo.",
    },
    {
        icone: FaUsers,
        titulo: "Equipe",
        descricao: "Usuários com permissões próprias: cada pessoa vê e mexe só no que precisa.",
    },
    {
        icone: FaChartLine,
        titulo: "Dashboards",
        descricao: "Indicadores e relatórios da operação reunidos para acompanhar resultados e tomar decisões.",
    },
];

export default function SistemaPage() {
    return (
        <>
            <section className="w-full py-20 px-4 bg-white">
                <Reveal className="max-w-3xl mx-auto text-center mb-14">
                    <Eyebrow>O sistema</Eyebrow>
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Um sistema interno montado de acordo com os processos da sua empresa
                    </h1>
                    <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                    <p
                        className="mt-6 text-slate-600 text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Desenvolvemos sistemas internos conforme a rotina da sua equipe: gestão de tarefas,
                        dashboards, vendas, financeiro, estoque e automações, no mesmo ambiente.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {modulos.map((m, index) => {
                        const Icone = m.icone;
                        return (
                            <Reveal key={m.titulo} delay={index * 80}>
                                <div className="h-full flex flex-col gap-4 p-6 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-center w-11 h-11 bg-[#1D4FE0]/10">
                                        <Icone className="text-lg text-[#1D4FE0]" />
                                    </div>
                                    <h3
                                        className="text-base font-bold text-black tracking-tight"
                                        style={{ fontFamily: FONT_DISPLAY }}
                                    >
                                        {m.titulo}
                                    </h3>
                                    <p
                                        className="text-sm text-slate-600 leading-relaxed"
                                        style={{ fontFamily: FONT_BODY }}
                                    >
                                        {m.descricao}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            <Demonstracao />

            <section className="w-full py-20 px-4 bg-white">
                <Reveal className="max-w-3xl mx-auto text-center">
                    <Eyebrow>Para quem é</Eyebrow>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Mais clareza para as decisões da sua empresa
                    </h2>
                    <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                    <p
                        className="mt-6 text-slate-600 text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Reúna informações que hoje estão em planilhas e conversas. Um sistema interno pode organizar tarefas, responsabilidades e etapas do trabalho, para que a equipe acompanhe a operação em um só lugar.
                    </p>
                    <Link
                        href="/contato"
                        className="mt-8 inline-flex items-center justify-center gap-2 bg-[#1D4FE0] hover:bg-[#1640C2] text-white font-semibold text-sm sm:text-base px-9 py-3.5 shadow-lg hover:shadow-xl transition-all duration-200"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Contar o que preciso
                    </Link>
                </Reveal>
            </section>
        </>
    );
}
