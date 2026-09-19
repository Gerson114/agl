import type { Metadata } from "next";
import Link from "next/link";
import {
    FaArrowTrendUp,
    FaBoxesStacked,
    FaFileInvoice,
    FaUsers,
    FaCartShopping,
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
        "Sistema de gestão sob medida: vendas, financeiro, estoque, cobrança e equipe organizados num painel só, atualizado na hora.",
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
        icone: FaBoxesStacked,
        titulo: "Estoque",
        descricao: "Controle de entrada, saída e localização — para quem trabalha com produto físico.",
    },
    {
        icone: FaListCheck,
        titulo: "Cobrança",
        descricao: "Acompanhamento de pendências e inadimplência, com lembretes automáticos para o cliente.",
    },
    {
        icone: FaUsers,
        titulo: "Equipe",
        descricao: "Usuários com permissões próprias: cada pessoa vê e mexe só no que precisa.",
    },
    {
        icone: FaCartShopping,
        titulo: "Loja online",
        descricao: "Catálogo e pedidos da loja virtual sincronizados com o mesmo sistema de gestão.",
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
                        Um sistema, montado a partir dos módulos que a sua empresa precisa
                    </h1>
                    <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                    <p
                        className="mt-6 text-slate-600 text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Nem toda empresa precisa de tudo. Por isso cada sistema é montado sob
                        medida, combinando só os módulos que fazem sentido para o seu processo.
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
                        Qualquer empresa que ainda decide no achismo
                    </h2>
                    <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                    <p
                        className="mt-6 text-slate-600 text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Não importa o setor: se a sua empresa ainda fecha o mês na planilha, se
                        depende de caderno ou de memória para saber o que vendeu, o que sobrou no
                        caixa ou o que falta cobrar — o sistema resolve isso.
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
