"use client";

import { useState, FormEvent } from "react";
import {
    FaUser,
    FaPhone,
    FaCommentDots,
    FaWhatsapp,
    FaChevronDown,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";
import { NUMERO_WHATSAPP, servicos as servicosDisponiveis } from "../../data/servicos";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

const NUMERO = NUMERO_WHATSAPP;

const servicos = [
    ...servicosDisponiveis.map((s) => s.titulo),
    "Ainda não sei, quero uma indicação",
];

export default function Contato({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" } = {}) {
    const Heading = headingLevel;
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [servico, setServico] = useState(servicos[0]);
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!nome.trim() || !telefone.trim()) {
            setErro("Preencha nome e telefone para continuar.");
            return;
        }
        setErro("");

        const texto =
            `Olá! Meu nome é ${nome}.\n` +
            `Tenho interesse em: ${servico}.\n` +
            (mensagem.trim() ? `Mensagem: ${mensagem}\n` : "") +
            `Telefone para contato: ${telefone}`;

        const link = `https://wa.me/${NUMERO}?text=${encodeURIComponent(texto)}`;
        window.open(link, "_blank", "noopener,noreferrer");
    }

    return (
        <section id="contato" className="w-full py-20 px-4 bg-[#F5F6FA]">
            <div className="max-w-5xl mx-auto">
                <Reveal className="text-center mb-12">
                    <Eyebrow>Fale com a gente</Eyebrow>
                    <Heading
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Vamos tirar sua empresa da planilha?
                    </Heading>
                    <div className="mt-5 mx-auto w-16 h-1.5 bg-[#1D4FE0]" />
                    <p
                        className="mt-6 text-slate-600 text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Preencha os dados abaixo e sua mensagem já chega prontinha no nosso
                        WhatsApp. Sem enrolação.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <Reveal direction="left" className="lg:col-span-2 flex flex-col gap-4">
                        <div className="border border-slate-200 bg-white p-6 flex flex-col gap-5">
                            <h3
                                className="text-sm font-bold text-black uppercase tracking-wide"
                                style={{ fontFamily: FONT_DISPLAY }}
                            >
                                Contato direto
                            </h3>

                            <a
                                href={`https://wa.me/${NUMERO}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-slate-700 hover:text-[#1D4FE0] transition-colors"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                <FaWhatsapp className="text-[#1D4FE0] shrink-0" />
                                <span className="text-sm">(81) 98358-3549</span>
                            </a>

                            <a
                                href="mailto:contato@chonnostech.com.br"
                                className="flex items-center gap-3 text-slate-700 hover:text-[#1D4FE0] transition-colors"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                <FaEnvelope className="text-[#1D4FE0] shrink-0" />
                                <span className="text-sm">contato@chonnostech.com.br</span>
                            </a>

                            <div className="flex items-center gap-3 text-slate-700">
                                <FaMapMarkerAlt className="text-[#1D4FE0] shrink-0" />
                                <span className="text-sm" style={{ fontFamily: FONT_BODY }}>
                                    Recife, PE — atendimento para todo o Brasil
                                </span>
                            </div>

                            <div className="flex items-center gap-3 text-slate-700">
                                <FaClock className="text-[#1D4FE0] shrink-0" />
                                <span className="text-sm" style={{ fontFamily: FONT_BODY }}>
                                    Respondemos em até 1 dia útil
                                </span>
                            </div>
                        </div>
                    </Reveal>

                <Reveal direction="right" delay={100} className="lg:col-span-3">
                <form
                    onSubmit={handleSubmit}
                    className="w-full bg-white border border-slate-200 shadow-sm p-6 sm:p-10 flex flex-col gap-6"
                >
                    {/* Nome */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="nome"
                            className="text-sm font-semibold text-black"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Nome
                        </label>
                        <div className="flex items-center gap-3 border border-slate-200 px-4 py-3 focus-within:border-[#1D4FE0] transition-colors">
                            <FaUser className="text-slate-400 shrink-0" />
                            <input
                                id="nome"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Como podemos te chamar?"
                                className="w-full outline-none text-slate-800 placeholder:text-slate-400"
                                style={{ fontFamily: FONT_BODY }}
                            />
                        </div>
                    </div>

                    {/* Telefone */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="telefone"
                            className="text-sm font-semibold text-black"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Telefone / WhatsApp
                        </label>
                        <div className="flex items-center gap-3 border border-slate-200 px-4 py-3 focus-within:border-[#1D4FE0] transition-colors">
                            <FaPhone className="text-slate-400 shrink-0" />
                            <input
                                id="telefone"
                                type="tel"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder="(81) 90000-0000"
                                className="w-full outline-none text-slate-800 placeholder:text-slate-400"
                                style={{ fontFamily: FONT_BODY }}
                            />
                        </div>
                    </div>

                    {/* Serviço */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="servico"
                            className="text-sm font-semibold text-black"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Serviço de interesse
                        </label>
                        <div className="relative">
                            <select
                                id="servico"
                                value={servico}
                                onChange={(e) => setServico(e.target.value)}
                                className="w-full appearance-none border border-slate-200 px-4 py-3 pr-10 outline-none text-slate-800 focus:border-[#1D4FE0] transition-colors bg-white"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                {servicos.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                        </div>
                    </div>

                    {/* Mensagem */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="mensagem"
                            className="text-sm font-semibold text-black"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Mensagem <span className="text-slate-400 font-normal">(opcional)</span>
                        </label>
                        <div className="flex items-start gap-3 border border-slate-200 px-4 py-3 focus-within:border-[#1D4FE0] transition-colors">
                            <FaCommentDots className="text-slate-400 shrink-0 mt-1" />
                            <textarea
                                id="mensagem"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                placeholder="Conte um pouco sobre o que você precisa..."
                                rows={3}
                                className="w-full outline-none resize-none text-slate-800 placeholder:text-slate-400"
                                style={{ fontFamily: FONT_BODY }}
                            />
                        </div>
                    </div>

                    {erro && (
                        <p className="text-sm text-red-500" style={{ fontFamily: FONT_BODY }}>
                            {erro}
                        </p>
                    )}

                    <button
                        id="btn-enviar-whatsapp"
                        type="submit"
                        className="mt-2 inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-base px-8 py-4 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 outline-none"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        <FaWhatsapp className="text-xl" />
                        Enviar pelo WhatsApp
                    </button>

                    <p
                        className="text-xs text-slate-400 text-center"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Ao enviar, você será redirecionado para o WhatsApp com a mensagem já
                        preenchida.
                    </p>
                </form>
                </Reveal>
                </div>
            </div>
        </section>
    );
}