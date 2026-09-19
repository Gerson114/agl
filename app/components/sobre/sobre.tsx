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
        titulo: "Decisão em tempo real",
        descricao: "Não com dado de três semanas atrás. Você abre a tela e vê o que está acontecendo na empresa agora.",
    },
    {
        icone: FaFileInvoiceDollar,
        titulo: "Fim da planilha",
        descricao: "Acabou a tarde inteira fechando planilha no fim do mês. O sistema atualiza sozinho.",
    },
    {
        icone: FaSitemap,
        titulo: "Processos organizados",
        descricao: "Cada etapa do seu processo — do pedido ao pagamento — no mesmo lugar, sem depender de memória.",
    },
    {
        icone: FaChartLine,
        titulo: "Tudo num painel só",
        descricao: "Vendas, financeiro e equipe no mesmo lugar, sem precisar copiar número de canto nenhum.",
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
                    Menos planilha. Mais decisão.
                </Heading>
                <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                <p
                    className="mt-6 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto"
                    style={{ fontFamily: FONT_BODY }}
                >
                    O Chonnostech implementa e usa tecnologia para atender empresas:{" "}
                    <strong className="text-black font-semibold">
                        soluções em sistemas e automações
                    </strong>{" "}
                    que otimizam a gestão do seu negócio, conectando{" "}
                    <strong className="text-black font-semibold">
                        pessoas, processos e vendas
                    </strong>{" "}
                    em um só lugar.{" "}
                    <strong className="text-black font-semibold">
                        Sistema, site e loja online para a sua empresa.
                    </strong>
                </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {pilares.map((pilar, index) => {
                    const Icone = pilar.icone;
                    return (
                        <Reveal key={pilar.titulo} delay={index * 90}>
                            <div className="h-full flex flex-col gap-4 p-6 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
