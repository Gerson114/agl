import { FaClock, FaFileInvoiceDollar, FaSitemap, FaChartLine } from "react-icons/fa6";
import type { IconType } from "react-icons";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

interface Pilar {
    icone: IconType;
    titulo: string;
    descricao: string;
}

const pilares: Pilar[] = [
    {
        icone: FaClock,
        titulo: "Visão da operação",
        descricao: "Reúna dados e atividades num painel atualizado para acompanhar o que acontece na empresa.",
    },
    {
        icone: FaFileInvoiceDollar,
        titulo: "Menos tarefas repetidas",
        descricao: "Conecte etapas do processo e reduza lançamentos e conferências feitos manualmente.",
    },
    {
        icone: FaSitemap,
        titulo: "Processos organizados",
        descricao: "Cada etapa do seu processo — do pedido ao pagamento — no mesmo lugar, sem depender de memória.",
    },
    {
        icone: FaChartLine,
        titulo: "Processos conectados",
        descricao: "Conecte equipes, informações e ferramentas nos fluxos de trabalho da empresa.",
    },
];

export default function Sobre({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" } = {}) {
    const Heading = headingLevel;
    return (
        <section id="sobre" className="w-full py-20 px-4 bg-white">
            <Reveal className="max-w-5xl mx-auto text-center mb-14">
                <Eyebrow>Sobre o Chonnostech</Eyebrow>
                <Heading
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                    style={{ fontFamily: FONT_DISPLAY }}
                >
                    Menos tarefa manual. Mais clareza.
                </Heading>
                <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                <p
                    className="mt-6 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto"
                    style={{ fontFamily: FONT_BODY }}
                >
                    A Chonnostech desenvolve para empresas:{" "}
                    <strong className="text-black font-semibold">
                        soluções em sistemas e automações
                    </strong>{" "}
                    que otimizam a gestão do seu negócio, conectando{" "}
                    <strong className="text-black font-semibold">
                        tarefas, equipes e processos
                    </strong>{" "}
                    em um só lugar.{" "}
                    <strong className="text-black font-semibold">
                        Sistemas internos e automação para a sua empresa.
                    </strong>
                </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-5xl mx-auto">
                {pilares.map((pilar, index) => {
                    const Icone = pilar.icone;
                    return (
                        <Reveal key={pilar.titulo} delay={index * 90}>
                            <div className="h-full flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-blue-300">
                                <div className="flex items-center justify-center w-11 h-11 bg-[#1D4FE0]/10">
                                    <Icone className="text-lg text-[#1D4FE0]" />
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
