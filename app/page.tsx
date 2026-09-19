import Link from "next/link";
import {
    FaBuilding,
    FaLaptopCode,
    FaCartShopping,
    FaArrowRight,
    FaHandshake,
    FaShieldHalved,
    FaHeadset,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import Hero from "./components/HeroSection/hero";
import Sobre from "./components/sobre/sobre";
import Reveal from "./components/ui/Reveal";
import Eyebrow from "./components/ui/Eyebrow";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

interface Destaque {
    icone: IconType;
    texto: string;
}

const destaques: Destaque[] = [
    { icone: FaShieldHalved, texto: "Sistema 100% seu, desde o primeiro dia" },
    { icone: FaHandshake, texto: "Atendimento direto, sem intermediários" },
    { icone: FaHeadset, texto: "Suporte contínuo após a entrega" },
];

const paginas = [
    {
        icone: FaBuilding,
        titulo: "Sobre",
        descricao: "Como pensamos, como trabalhamos e o que muda quando você fecha com a gente.",
        href: "/sobre",
    },
    {
        icone: FaLaptopCode,
        titulo: "Sistemas",
        descricao: "Os módulos disponíveis e o painel administrativo rodando de verdade.",
        href: "/sistema",
    },
    {
        icone: FaCartShopping,
        titulo: "Soluções",
        descricao: "Sistema de gestão, loja virtual e site institucional — compare as opções.",
        href: "/solucoes",
    },
];

export default function Home() {
    return (
        <>
            <Hero />

            <div className="w-full bg-white border-b border-slate-100 py-6 px-4">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
                    {destaques.map((d) => {
                        const Icone = d.icone;
                        return (
                            <div key={d.texto} className="flex items-center gap-2.5">
                                <Icone className="text-[#1D4FE0] text-base shrink-0" />
                                <span
                                    className="text-sm font-medium text-slate-700"
                                    style={{ fontFamily: FONT_BODY }}
                                >
                                    {d.texto}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Sobre />

            <section className="w-full py-20 px-4 bg-[#F5F6FA]">
                <Reveal className="max-w-3xl mx-auto text-center mb-12">
                    <Eyebrow>Explore</Eyebrow>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Conheça o Chonnostech por dentro
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {paginas.map((p, index) => {
                        const Icone = p.icone;
                        return (
                            <Reveal key={p.href} delay={index * 90} className="h-full">
                                <Link
                                    href={p.href}
                                    className="group h-full flex flex-col gap-4 p-6 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-center w-11 h-11 bg-[#1D4FE0]/10">
                                        <Icone className="text-lg text-[#1D4FE0]" />
                                    </div>
                                    <h3
                                        className="text-base font-bold text-black tracking-tight"
                                        style={{ fontFamily: FONT_DISPLAY }}
                                    >
                                        {p.titulo}
                                    </h3>
                                    <p
                                        className="text-sm text-slate-600 leading-relaxed flex-1"
                                        style={{ fontFamily: FONT_BODY }}
                                    >
                                        {p.descricao}
                                    </p>
                                    <span
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4FE0]"
                                        style={{ fontFamily: FONT_BODY }}
                                    >
                                        Ver mais
                                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            <section className="w-full py-20 px-4 bg-[#0B1120] text-center">
                <Reveal className="max-w-2xl mx-auto">
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Pronto para ver isso rodando na sua empresa?
                    </h2>
                    <p
                        className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Fale com a gente e mostramos como fica o sistema no seu negócio.
                    </p>
                    <Link
                        href="/contato"
                        className="mt-8 inline-flex items-center justify-center gap-2 bg-[#1D4FE0] hover:bg-[#1640C2] text-white font-semibold text-sm sm:text-base px-9 py-3.5 shadow-lg hover:shadow-xl transition-all duration-200"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        Falar com a gente
                    </Link>
                </Reveal>
            </section>
        </>
    );
}
