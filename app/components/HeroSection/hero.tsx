import Image from "next/image";
import ScrollLink from "./ScrollLink";
import banner from "../../../public/HS_Full_Bleed_1_optmised.webp";

const FONT_DISPLAY = "'Bricolage Grotesque', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

export default function Hero() {
    return (
        <div
            id="top"
            aria-labelledby="hero-title"
            className="relative w-full h-140 sm:h-150 md:h-125 lg:h-160 overflow-hidden"
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
            `}</style>

            <Image
                src={banner}
                alt="Equipe trabalhando em estratégias de marketing digital"
                fill
                priority
                quality={85}
                className="object-cover object-center"
            />

            {/* Gradiente vertical (mobile): reforça contraste embaixo, onde fica o texto */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/15 md:hidden" />

            {/* Gradiente horizontal (desktop): escuro na esquerda, some na direita */}
            <div className="absolute inset-0 hidden md:block bg-linear-to-r from-black/85 via-black/50 to-black/10" />

            <div className="absolute inset-0 flex items-end md:items-center">
                <div className="w-full max-w-325 mx-auto px-6 lg:px-16 xl:px-24 pb-12 md:pb-0">
                    <div className="text-white max-w-2xl">
                        <span
                            className="inline-block text-[#FF8A65] text-sm sm:text-base font-medium tracking-wide mb-4"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Performance & aquisição de clientes
                        </span>

                        <h1
                            id="hero-title"
                            className="font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
                            style={{ fontFamily: FONT_DISPLAY }}
                        >
                            Conectamos sua marca
                            <br />
                            às pessoas certas
                        </h1>

                        <div className="mt-5 w-16 h-1.5 rounded-full bg-[#1E5BFB]" />

                        <p
                            className="mt-5 text-base sm:text-lg text-slate-200 max-w-136 leading-relaxed"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            Mais leads, mais vendas, mais crescimento.
                        </p>

                        <div id="orcamento" className="mt-8 flex flex-wrap gap-4">
                            <ScrollLink
                                id="btn-solicitar-orcamento"
                                href="#contato"
                                className="inline-flex items-center justify-center py-3.5 px-9 rounded-lg bg-[#1E5BFB] text-sm sm:text-base font-semibold text-white shadow-[0_8px_0_0_#0B1120] hover:shadow-[0_4px_0_0_#0B1120] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all duration-150 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1E5BFB] focus:ring-offset-2 focus:ring-offset-black"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                Solicitar Orçamento
                            </ScrollLink>

                            <ScrollLink
                                id="btn-saiba-mais"
                                href="#como-funciona"
                                className="inline-flex items-center justify-center py-3.5 px-9 rounded-lg border border-white/50 text-sm sm:text-base font-semibold text-white hover:bg-white/10 hover:border-white transition-colors duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                Saiba Mais
                            </ScrollLink>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}