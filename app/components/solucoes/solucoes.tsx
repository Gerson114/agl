import { FaWhatsapp } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { servicos, NUMERO_WHATSAPP } from "../../data/servicos";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

function linkWhatsapp(titulo: string) {
    const texto = `Olá! Tenho interesse em: ${titulo}. Pode me passar mais detalhes?`;
    return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

export default function Solucoes({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" } = {}) {
    const Heading = headingLevel;
    return (
        <section id="solucoes" className="w-full bg-white">
            <div className="w-full py-14 px-4 bg-[#F5F6FA] border-b border-slate-200">
                <Reveal className="max-w-3xl mx-auto text-center">
                    <Eyebrow>Opções para o seu projeto</Eyebrow>
                    <Heading
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Qual dessas opções é a cara do seu negócio?
                    </Heading>
                    <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                    <p
                        className="mt-6 text-slate-600 text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Compare as opções abaixo e escolha a que mais faz sentido para você.
                        Ao clicar, você já cai direto no WhatsApp com a opção escolhida.
                    </p>
                </Reveal>
            </div>

            <div className="w-full py-16 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {servicos.map((s, index) => {
                        const Icone = s.icone;
                        const bonus = s.condicoes?.bonus;

                        return (
                            <Reveal key={s.titulo} delay={index * 100} className="relative h-full">
                                {s.badge && (
                                    <span
                                        className="absolute -top-3 right-6 z-10 text-[10px] font-semibold uppercase tracking-wider bg-white text-[#1D4FE0] px-3 py-1 shadow-md border border-blue-100"
                                        style={{ fontFamily: FONT_MONO }}
                                    >
                                        {s.badge}
                                    </span>
                                )}

                                <div
                                    className={`group relative flex flex-col h-full overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                                        s.destaque
                                            ? "bg-[#1D4FE0] border-[#1D4FE0] text-white shadow-xl shadow-blue-900/20"
                                            : "bg-white border-slate-200 text-slate-800 shadow-sm hover:border-blue-200"
                                    }`}
                                >
                                    <div className="flex flex-col gap-4 p-5 sm:p-6 flex-1">
                                        <div
                                            className={`flex items-center justify-center w-9 h-9 transition-colors duration-300 ${
                                                s.destaque
                                                    ? "bg-white/15"
                                                    : "bg-[#1D4FE0]/10 group-hover:bg-[#1D4FE0]/15"
                                            }`}
                                        >
                                            <Icone
                                                className={`text-base ${s.destaque ? "text-white" : "text-[#1D4FE0]"}`}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <h3
                                                className={`text-lg font-bold tracking-tight ${
                                                    s.destaque ? "text-white" : "text-black"
                                                }`}
                                                style={{ fontFamily: FONT_DISPLAY }}
                                            >
                                                {s.titulo}
                                            </h3>
                                            <p
                                                className={`text-xs leading-relaxed ${
                                                    s.destaque ? "text-white/90" : "text-slate-600"
                                                }`}
                                                style={{ fontFamily: FONT_BODY }}
                                            >
                                                {s.descricao}
                                            </p>
                                        </div>

                                        {s.condicoes && (
                                            <div
                                                className={`flex flex-col gap-2 p-3 ${
                                                    s.destaque ? "bg-white/10" : "bg-slate-50 border border-slate-100"
                                                }`}
                                            >
                                                <p
                                                    className={`text-[11px] font-semibold ${
                                                        s.destaque ? "text-white" : "text-slate-800"
                                                    }`}
                                                    style={{ fontFamily: FONT_BODY }}
                                                >
                                                    {s.condicoes.pagamento}
                                                </p>

                                                {bonus && bonus.length > 0 && (
                                                    <ul className="space-y-1">
                                                        {bonus.map((item, index) => (
                                                            <li key={index} className="flex items-start gap-1.5">
                                                                <HiCheckCircle
                                                                    className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                                                        s.destaque ? "text-emerald-300" : "text-emerald-600"
                                                                    }`}
                                                                />
                                                                <span
                                                                    className={`text-[11px] ${
                                                                        s.destaque ? "text-blue-50" : "text-slate-700"
                                                                    }`}
                                                                    style={{ fontFamily: FONT_BODY }}
                                                                >
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}

                                        <div
                                            className={`mt-auto pt-3 border-t ${
                                                s.destaque ? "border-white/15" : "border-slate-100"
                                            }`}
                                        >
                                            <span
                                                className={`text-[10px] uppercase tracking-wider block mb-0.5 font-semibold ${
                                                    s.destaque ? "text-blue-100" : "text-slate-400"
                                                }`}
                                                style={{ fontFamily: FONT_MONO }}
                                            >
                                                {s.prefixoPreco}
                                            </span>
                                            <span
                                                className={`text-2xl font-semibold tracking-tight ${
                                                    s.destaque ? "text-white" : "text-[#1D4FE0]"
                                                }`}
                                                style={{ fontFamily: FONT_MONO }}
                                            >
                                                {s.sobConsulta ? "Sob consulta" : `R$ ${s.preco}`}
                                                {s.sufixoPreco && (
                                                    <span
                                                        className={`text-base font-medium ml-1 ${
                                                            s.destaque ? "text-blue-100" : "text-slate-400"
                                                        }`}
                                                    >
                                                        {s.sufixoPreco}
                                                    </span>
                                                )}
                                            </span>
                                        </div>

                                        <a
                                            href={linkWhatsapp(s.titulo)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`mt-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold transition-all duration-200 ${
                                                s.destaque
                                                    ? "bg-white text-[#1D4FE0] hover:bg-blue-50"
                                                    : "bg-[#1D4FE0] text-white hover:bg-[#163AA8]"
                                            }`}
                                            style={{ fontFamily: FONT_BODY }}
                                        >
                                            <FaWhatsapp className="text-base" />
                                            Escolher esta opção
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                <div className="mt-14 text-center">
                    <p className="text-slate-500 mb-6 text-sm" style={{ fontFamily: FONT_BODY }}>
                        Não sabe qual escolher? Fale com a gente e te ajudamos a decidir.
                    </p>
                    <a
                        href="/contato"
                        className="inline-flex items-center gap-3 bg-black hover:bg-zinc-900 text-white font-semibold text-base px-10 py-4 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Falar com um especialista
                    </a>
                </div>
            </div>
        </section>
    );
}
