"use client";

import { useState, FormEvent } from "react";
import { FaUser, FaPhone, FaCommentDots, FaWhatsapp, FaChevronDown } from "react-icons/fa";

const FONT_DISPLAY = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const NUMERO = "5581983583549"; // DDI + DDD + número, sem espaços ou símbolos

const servicos = [
    "Landing Page de Alta Conversão",
    "Site Institucional Completo",
    "Ainda não sei, quero uma indicação",
];

export default function Contato() {
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
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');
            `}</style>

            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-[#1E5BFB] text-sm font-semibold uppercase tracking-widest mb-3"
                        style={{ fontFamily: FONT_MONO }}
                    >
                        &lt;Fale com a gente /&gt;
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Vamos tirar seu site do papel
                    </h2>
                    <div className="mt-5 mx-auto w-16 h-1.5 rounded-full bg-[#1E5BFB]" />
                    <p
                        className="mt-6 text-slate-600 text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Preencha os dados abaixo e sua mensagem já chega prontinha no nosso
                        WhatsApp.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 flex flex-col gap-6"
                >
                    {/* Nome */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="nome"
                            className="text-sm font-semibold text-[#0B1120]"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Nome
                        </label>
                        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-[#1E5BFB] transition-colors">
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
                            className="text-sm font-semibold text-[#0B1120]"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Telefone / WhatsApp
                        </label>
                        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-[#1E5BFB] transition-colors">
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
                            className="text-sm font-semibold text-[#0B1120]"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Serviço de interesse
                        </label>
                        <div className="relative">
                            <select
                                id="servico"
                                value={servico}
                                onChange={(e) => setServico(e.target.value)}
                                className="w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 pr-10 outline-none text-slate-800 focus:border-[#1E5BFB] transition-colors bg-white"
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
                            className="text-sm font-semibold text-[#0B1120]"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Mensagem <span className="text-slate-400 font-normal">(opcional)</span>
                        </label>
                        <div className="flex items-start gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-[#1E5BFB] transition-colors">
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
                        className="mt-2 inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 outline-none"
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
            </div>
        </section>
    );
}