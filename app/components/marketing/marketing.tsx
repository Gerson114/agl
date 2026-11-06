import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { HiCheckCircle } from "react-icons/hi";
import { canais, frentes, etapas } from "../../data/marketing";
import { NUMERO_WHATSAPP } from "../../data/servicos";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

function linkWhatsapp(assunto: string) {
    const texto = `Olá! Quero falar sobre marketing digital: ${assunto}.`;
    return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

export default function Marketing({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" } = {}) {
    const Heading = headingLevel;

    return (
        <section id="marketing" className="w-full bg-white">
            {/* Abertura */}
            <div className="w-full py-14 px-4 bg-[#F5F6FA] border-b border-slate-200">
                <Reveal className="max-w-3xl mx-auto text-center">
                    <Eyebrow>Marketing digital</Eyebrow>
                    <Heading
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Sua empresa aparecendo onde o cliente já está
                    </Heading>
                    <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                    <p
                        className="mt-6 text-slate-600 text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Instagram, Facebook, Google e WhatsApp trabalhando juntos: conteúdo para
                        atrair, anúncio para acelerar e sistema para registrar cada venda que
                        entrou.
                    </p>
                </Reveal>
            </div>

            {/* Canais */}
            <div className="w-full py-16 px-4">
                <Reveal className="max-w-3xl mx-auto text-center mb-12">
                    <Eyebrow>Canais</Eyebrow>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Onde a gente coloca a sua marca
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {canais.map((canal, index) => {
                        const Icone = canal.icone;
                        return (
                            <Reveal key={canal.nome} delay={index * 80}>
                                <div className="h-full flex flex-col gap-4 p-6 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-center w-11 h-11 bg-[#1D4FE0]/10">
                                        <Icone className="text-lg text-[#1D4FE0]" />
                                    </div>
                                    <h3
                                        className="text-base font-bold text-black tracking-tight"
                                        style={{ fontFamily: FONT_DISPLAY }}
                                    >
                                        {canal.nome}
                                    </h3>
                                    <p
                                        className="text-sm text-slate-600 leading-relaxed"
                                        style={{ fontFamily: FONT_BODY }}
                                    >
                                        {canal.descricao}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>

            {/* Frentes de trabalho */}
            <div className="w-full py-16 px-4 bg-[#F5F6FA] border-y border-slate-200">
                <Reveal className="max-w-3xl mx-auto text-center mb-12">
                    <Eyebrow>O que entregamos</Eyebrow>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Cada frente com entrega no papel
                    </h2>
                    <p
                        className="mt-5 text-slate-600 text-base leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Você contrata só as frentes que o seu momento pede. Nada de pacote fechado
                        com serviço que a sua empresa não vai usar.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {frentes.map((frente, index) => {
                        const Icone = frente.icone;
                        return (
                            <Reveal key={frente.titulo} delay={index * 80} className="h-full">
                                <div className="h-full flex flex-col gap-4 p-6 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center justify-center w-11 h-11 bg-[#1D4FE0]/10">
                                        <Icone className="text-lg text-[#1D4FE0]" />
                                    </div>
                                    <h3
                                        className="text-base font-bold text-black tracking-tight"
                                        style={{ fontFamily: FONT_DISPLAY }}
                                    >
                                        {frente.titulo}
                                    </h3>
                                    <p
                                        className="text-sm text-slate-600 leading-relaxed"
                                        style={{ fontFamily: FONT_BODY }}
                                    >
                                        {frente.descricao}
                                    </p>
                                    <ul className="mt-auto space-y-1.5 pt-3 border-t border-slate-100">
                                        {frente.entregas.map((entrega) => (
                                            <li key={entrega} className="flex items-start gap-2">
                                                <HiCheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
                                                <span
                                                    className="text-xs text-slate-700 leading-relaxed"
                                                    style={{ fontFamily: FONT_BODY }}
                                                >
                                                    {entrega}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={linkWhatsapp(frente.titulo)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1D4FE0] hover:bg-[#1640C2] text-white text-sm font-semibold transition-colors duration-200"
                                        style={{ fontFamily: FONT_BODY }}
                                    >
                                        <FaWhatsapp className="text-base" />
                                        Quero esta frente
                                    </a>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>

            {/* Processo */}
            <div className="w-full py-16 px-4">
                <Reveal className="max-w-3xl mx-auto text-center mb-12">
                    <Eyebrow>Como funciona</Eyebrow>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Do diagnóstico ao relatório de venda
                    </h2>
                </Reveal>

                <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                    {etapas.map((etapa, index) => (
                        <Reveal key={etapa.numero} delay={index * 80} className="h-full">
                            <li className="h-full flex flex-col gap-3 p-5 border border-slate-200 bg-white">
                                <span
                                    className="text-sm font-semibold text-[#1D4FE0]"
                                    style={{ fontFamily: FONT_MONO }}
                                >
                                    {etapa.numero}
                                </span>
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
                            </li>
                        </Reveal>
                    ))}
                </ol>
            </div>

            {/* Marketing + sistema */}
            <div className="w-full py-20 px-4 bg-[#0B1120]">
                <Reveal className="max-w-3xl mx-auto text-center">
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Marketing traz o lead. O sistema mostra a venda.
                    </h2>
                    <p
                        className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Campanha sem sistema você não sabe quanto voltou. Aqui o lead do Instagram
                        ou do Facebook entra no painel de vendas, e você vê custo por lead,
                        orçamento enviado e venda fechada na mesma tela.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contato"
                            className="inline-flex items-center justify-center gap-2 bg-[#1D4FE0] hover:bg-[#1640C2] text-white font-semibold text-sm sm:text-base px-9 py-3.5 shadow-lg hover:shadow-xl transition-all duration-200"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Pedir diagnóstico gratuito
                        </Link>
                        <Link
                            href="/sistema"
                            className="inline-flex items-center justify-center gap-2 border border-white/40 bg-white/5 text-white font-semibold text-sm sm:text-base px-9 py-3.5 hover:bg-white/15 hover:border-white/70 transition-all duration-200"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Ver o sistema de vendas
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
