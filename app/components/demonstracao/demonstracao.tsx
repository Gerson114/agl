"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NUMERO_WHATSAPP } from "../../data/servicos";
import Reveal from "../ui/Reveal";
import imgProdutos from "../../../public/demo/slide-produtos.webp";
import imgEstoque from "../../../public/demo/slide-estoque.webp";
import imgBanners from "../../../public/demo/slide-banners.webp";
import imgCadastro from "../../../public/demo/slide-cadastro.webp";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const linkWhatsapp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
    "Olá! Vi a demonstração do sistema no site e quero um sistema assim para o meu negócio."
)}`;

interface Slide {
    label: string;
    img: StaticImageData;
    titulo: string;
    descricao: string;
    pontos: string[];
}

const slides: Slide[] = [
    {
        label: "Produtos",
        img: imgProdutos,
        titulo: "Cada produto, com preço, promoção e estoque na mesma tela",
        descricao:
            "O painel mostra de cara quantas peças existem, quantas estão sem estoque e o valor total parado em estoque — sem precisar abrir planilha nenhuma.",
        pontos: [
            "Catálogo com foto, preço e status (disponível / sem estoque)",
            "Promoção calculada automaticamente a partir do preço antigo",
            "Tamanho, cor, tecido e localização visíveis no card",
        ],
    },
    {
        label: "Estoque",
        img: imgEstoque,
        titulo: "Saiba exatamente onde cada peça está guardada",
        descricao:
            "O estoque é organizado por rua e bloco, do jeito que a loja física funciona de verdade — não é só um número solto.",
        pontos: [
            "Peças agrupadas por rua e bloco de armazenamento",
            "Transferência de local em um clique",
            "Marcação de avaria sem sair da tela de estoque",
        ],
    },
    {
        label: "Banners",
        img: imgBanners,
        titulo: "Controle o que aparece na vitrine, sem mexer em código",
        descricao:
            "Título, descrição, imagem, valor e link de cada banner da loja são editados por formulário — quem administra a loja não depende de programador para trocar uma promoção.",
        pontos: [
            "Banner pode linkar direto para um produto do catálogo",
            "Ordem de exibição e status ativo/inativo configuráveis",
            "Mudança aparece na loja (frontp) na hora",
        ],
    },
    {
        label: "Cadastro",
        img: imgCadastro,
        titulo: "Cadastra o produto e vê a etiqueta pronta em tempo real",
        descricao:
            "Enquanto você preenche nome, preço e especificações, a pré-visualização da etiqueta ao lado atualiza sozinha — é a mesma etiqueta que vai pro produto de verdade.",
        pontos: [
            "Formulário dividido em etapas: informações, especificações, valores, local",
            "Pré-visualização da etiqueta atualiza a cada tecla digitada",
            "Cada tamanho marcado vira um item de estoque independente",
        ],
    },
];

export default function Demonstracao() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const t = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, 5000);
        return () => clearInterval(t);
    }, [paused]);

    function go(i: number) {
        setIndex((i + slides.length) % slides.length);
        setPaused(true);
    }

    const atual = slides[index];

    return (
        <section id="demonstracao" className="w-full py-20 px-4 bg-[#0B1120]">
            <Reveal className="max-w-3xl mx-auto text-center mb-14">
                <span
                    className="inline-block text-[#6FA0EC] text-sm font-semibold uppercase tracking-widest mb-3"
                    style={{ fontFamily: FONT_MONO }}
                >
                    &lt;Sistema real em funcionamento /&gt;
                </span>
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                    style={{ fontFamily: FONT_DISPLAY }}
                >
                    Isso aqui não é print de mockup, é o sistema rodando
                </h2>
                <div className="mt-5 mx-auto w-16 h-1.5 bg-[#0B3B8C]" />
                <p
                    className="mt-6 text-slate-300 text-lg leading-relaxed"
                    style={{ fontFamily: FONT_BODY }}
                >
                    Um painel administrativo de verdade, do jeito que entregamos para os nossos
                    clientes. Passeie pelas telas abaixo.
                </p>
            </Reveal>

            <Reveal delay={100} className="max-w-6xl mx-auto">
                {/* abas numeradas */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    {slides.map((s, i) => (
                        <button
                            key={s.label}
                            type="button"
                            onClick={() => go(i)}
                            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold border transition-colors duration-200 ${
                                i === index
                                    ? "bg-[#0B3B8C] border-[#0B3B8C] text-white"
                                    : "bg-transparent border-white/15 text-slate-400 hover:border-white/30 hover:text-white"
                            }`}
                            style={{ fontFamily: FONT_MONO }}
                        >
                            {String(i + 1).padStart(2, "0")}
                            <span style={{ fontFamily: FONT_BODY }} className="font-medium">
                                {s.label}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                    {/* frame do navegador com a captura de tela */}
                    <div className="lg:col-span-3 relative">
                        <div className="overflow-hidden border border-white/10 bg-[#0E1526] shadow-2xl shadow-black/40">
                            <div className="flex items-center gap-3 px-4 py-3 bg-[#131B2E] border-b border-white/10">
                                <div className="flex gap-1.5 shrink-0">
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                </div>
                                <span
                                    className="flex-1 text-center sm:text-left text-[11px] text-slate-400 bg-[#0B1120] border border-white/10 px-3 py-1 truncate"
                                    style={{ fontFamily: FONT_MONO }}
                                >
                                    seusistema.com.br/painel/{atual.label.toLowerCase()}
                                </span>
                            </div>
                            <div
                                className="relative w-full bg-[#0B1120]"
                                style={{ aspectRatio: "4 / 3" }}
                            >
                                {slides.map((s, i) => (
                                    <Image
                                        key={s.label}
                                        src={s.img}
                                        alt={`Tela de ${s.label} do sistema: ${s.titulo}`}
                                        fill
                                        placeholder="blur"
                                        quality={95}
                                        sizes="(max-width: 1024px) 100vw, 640px"
                                        className={`object-cover object-top transition-opacity duration-500 ease-in-out ${
                                            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* setas */}
                        <button
                            type="button"
                            onClick={() => go(index - 1)}
                            aria-label="Tela anterior"
                            className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 items-center justify-center bg-[#131B2E] border border-white/15 text-white hover:bg-[#0B3B8C] hover:border-[#0B3B8C] transition-colors"
                        >
                            <FaChevronLeft className="text-xs" />
                        </button>
                        <button
                            type="button"
                            onClick={() => go(index + 1)}
                            aria-label="Próxima tela"
                            className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-4 w-9 h-9 items-center justify-center bg-[#131B2E] border border-white/15 text-white hover:bg-[#0B3B8C] hover:border-[#0B3B8C] transition-colors"
                        >
                            <FaChevronRight className="text-xs" />
                        </button>
                    </div>

                    {/* texto explicando a tela ativa */}
                    <div key={atual.label} className="lg:col-span-2 demo-fade">
                        <span
                            className="text-[#6FA0EC] text-xs font-semibold uppercase tracking-widest"
                            style={{ fontFamily: FONT_MONO }}
                        >
                            Tela {String(index + 1).padStart(2, "0")} de {String(slides.length).padStart(2, "0")}
                        </span>
                        <h3
                            className="mt-3 text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug"
                            style={{ fontFamily: FONT_DISPLAY }}
                        >
                            {atual.titulo}
                        </h3>
                        <p
                            className="mt-4 text-slate-300 text-sm leading-relaxed"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            {atual.descricao}
                        </p>
                        <ul className="mt-5 flex flex-col gap-2.5">
                            {atual.pontos.map((ponto) => (
                                <li
                                    key={ponto}
                                    className="flex items-start gap-2.5 text-sm text-slate-300"
                                    style={{ fontFamily: FONT_BODY }}
                                >
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#6FA0EC] shrink-0" />
                                    {ponto}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
                    <p
                        className="text-sm text-slate-400 max-w-md"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Cada sistema é construído sob medida para o seu processo — este é só um
                        exemplo do tipo de painel que sai daqui.
                    </p>
                    <a
                        href={linkWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#0B3B8C] hover:bg-[#0A3277] text-white font-semibold text-sm px-6 py-3.5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        <FaWhatsapp className="text-base" />
                        Quero um sistema assim
                    </a>
                </div>
            </Reveal>

            <style>{`
                @keyframes demoFadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .demo-fade { animation: demoFadeIn .45s ease both; }
                @media (prefers-reduced-motion: reduce) {
                    .demo-fade { animation: none; }
                }
            `}</style>
        </section>
    );
}
