import Link from "next/link";
import HeroIllustration from "./HeroIllustration";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

export default function Hero() {
    return (
        <div
            id="top"
            aria-labelledby="hero-title"
            className="relative w-full overflow-hidden bg-[#0B1120]"
        >
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(1100px 500px at 85% -10%, rgba(29,79,224,0.35), transparent 60%), radial-gradient(700px 400px at 10% 110%, rgba(242,133,61,0.15), transparent 55%)",
                }}
            />

            <div className="relative w-full max-w-325 mx-auto px-6 lg:px-16 xl:px-24 pt-12 pb-20 md:pt-16 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div className="text-white max-w-2xl">
                        <span
                            className="hero-in inline-flex items-center gap-2 text-[#BFD7FF] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-5"
                            style={{ fontFamily: FONT_BODY, animationDelay: "0ms" }}
                        >
                            <span className="w-6 h-px bg-[#BFD7FF]" />
                            Sistemas internos · Automação de processos
                        </span>

                        <h1
                            id="hero-title"
                            className="hero-in font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
                            style={{ fontFamily: FONT_DISPLAY, animationDelay: "90ms" }}
                        >
                            Sistemas internos.
                            <br />
                            <span className="text-[#F2853D]">Automação de processos.</span>
                        </h1>

                        <div
                            className="hero-in mt-5 w-16 h-1.5 bg-[#1D4FE0]"
                            style={{ animationDelay: "180ms" }}
                        />

                        <p
                            className="hero-in mt-5 text-base sm:text-lg text-slate-300 max-w-136 leading-relaxed"
                            style={{ fontFamily: FONT_BODY, animationDelay: "240ms" }}
                        >
                            Organize tarefas e automatize processos em um só lugar.
                        </p>

                        <div
                            className="hero-in mt-8 flex flex-wrap gap-4"
                            style={{ animationDelay: "320ms" }}
                        >
                            <Link
                                id="btn-solicitar-orcamento"
                                href="/contato"
                                className="inline-flex items-center justify-center py-3.5 px-9 bg-[#1D4FE0] text-sm sm:text-base font-semibold text-white shadow-lg shadow-black/20 hover:bg-[#1640C2] hover:shadow-xl transition-all duration-200 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1D4FE0] focus:ring-offset-2 focus:ring-offset-black"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                Falar conosco
                            </Link>

                            <Link
                                id="btn-saiba-mais"
                                href="/automacoes"
                                className="inline-flex items-center justify-center py-3.5 px-9 border border-white/40 bg-white/5 backdrop-blur-sm text-sm sm:text-base font-semibold text-white hover:bg-white/15 hover:border-white/70 transition-all duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                Ver automações
                            </Link>
                        </div>
                    </div>

                    {/* Ilustração animada de sistemas e processos conectados */}
                    <div className="hero-in" style={{ animationDelay: "200ms" }}>
                        <HeroIllustration />
                    </div>
                </div>
            </div>
        </div>
    );
}
