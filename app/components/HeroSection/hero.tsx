import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/HS_Full_Bleed_1_optmised.webp";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

export default function Hero() {
    return (
        <div
            id="top"
            aria-labelledby="hero-title"
            className="relative w-full h-140 sm:h-150 md:h-125 lg:h-160 overflow-hidden"
        >
            {/* A imagem se estende pra cima (top: -6rem) pra ficar visível atrás do header fixo/transparente,
                sem puxar o texto (que fica no bloco abaixo, sem esse deslocamento) para debaixo do menu.
                Offset via inline style (não via classe utilitária) porque o valor precisa bater exatamente
                com a altura do header/pt-24 do <main>, independente da escala de spacing do Tailwind. */}
            <div className="absolute inset-x-0 bottom-0 hero-zoom" style={{ top: "-6rem" }}>
                <Image
                    src={banner}
                    alt="Equipe trabalhando em estratégias de marketing digital"
                    fill
                    priority
                    quality={85}
                    className="object-cover object-center"
                />
            </div>

            {/* Gradiente vertical (mobile): reforça contraste embaixo, onde fica o texto */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/15 md:hidden" />

            {/* Gradiente horizontal (desktop): escuro na esquerda, some na direita */}
            <div className="absolute inset-0 hidden md:block bg-linear-to-r from-black/85 via-black/50 to-black/10" />

            <div className="absolute inset-0 flex items-end md:items-center">
                <div className="w-full max-w-325 mx-auto px-6 lg:px-16 xl:px-24 pb-12 md:pb-0">
                    <div className="text-white max-w-2xl">
                        <span
                            className="hero-in inline-flex items-center gap-2 text-[#BFD7FF] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-5"
                            style={{ fontFamily: FONT_BODY, animationDelay: "0ms" }}
                        >
                            <span className="w-6 h-px bg-[#BFD7FF]" />
                            Sistemas sob medida & páginas que vendem
                        </span>

                        <h1
                            id="hero-title"
                            className="hero-in font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
                            style={{ fontFamily: FONT_DISPLAY, animationDelay: "90ms" }}
                        >
                            Sistemas personalizados
                            <br />
                            e landing pages que vendem
                        </h1>

                        <div
                            className="hero-in mt-5 w-16 h-1.5 bg-[#0B3B8C]"
                            style={{ animationDelay: "180ms" }}
                        />

                        <p
                            className="hero-in mt-5 text-base sm:text-lg text-slate-200 max-w-136 leading-relaxed"
                            style={{ fontFamily: FONT_BODY, animationDelay: "240ms" }}
                        >
                            Do software feito sob medida para o seu processo à página que
                            transforma visitante em cliente — sua operação digital, do jeito certo.
                        </p>

                        <div
                            className="hero-in mt-8 flex flex-wrap gap-4"
                            style={{ animationDelay: "320ms" }}
                        >
                            <Link
                                id="btn-solicitar-orcamento"
                                href="#contato"
                                className="inline-flex items-center justify-center py-3.5 px-9 bg-[#0B3B8C] text-sm sm:text-base font-semibold text-white shadow-lg shadow-black/20 hover:bg-[#0A3277] hover:shadow-xl transition-all duration-200 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B3B8C] focus:ring-offset-2 focus:ring-offset-black"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                Solicitar Orçamento
                            </Link>

                            <Link
                                id="btn-saiba-mais"
                                href="#como-funciona"
                                className="inline-flex items-center justify-center py-3.5 px-9 border border-white/40 bg-white/5 backdrop-blur-sm text-sm sm:text-base font-semibold text-white hover:bg-white/15 hover:border-white/70 transition-all duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                Saiba Mais
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}