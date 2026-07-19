"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaBolt, FaBars, FaTimes } from "react-icons/fa";

const FONT_DISPLAY = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

const NUMERO = "5581983583549"; // DDI + DDD + número, sem espaços ou símbolos

const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Contato", href: "#contato" },
];

function MenuMobile({
    aberto,
    onFechar,
}: {
    aberto: boolean;
    onFechar: () => void;
}) {
    return (
        <>
            {/* Overlay */}
                <div
                    onClick={onFechar}
                    aria-hidden="true"
                    className={`md:hidden fixed inset-0 z-9998 bg-[#0B1120]/70 backdrop-blur-sm transition-opacity duration-300 ${
                        aberto ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                />

            {/* Painel lateral (drawer) */}
            <div
                className={`md:hidden fixed top-0 right-0 z-9999 h-full w-[78%] max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
                    aberto ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                    <span
                        className="font-bold tracking-tight text-[#0B1120]"
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Menu
                    </span>
                    <button
                        type="button"
                        onClick={onFechar}
                        aria-label="Fechar menu"
                        className="p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors outline-none"
                    >
                        <FaTimes className="text-lg" />
                    </button>
                </div>

                <div className="flex flex-col gap-2 px-4 pt-4 pb-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={onFechar}
                            className="block rounded-xl px-4 py-3 text-[15px] font-medium text-slate-700 hover:bg-slate-100 hover:text-[#1E5BFB] transition-colors"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contato"
                        onClick={onFechar}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#1E5BFB] to-[#0B1120] px-4 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        <FaWhatsapp className="text-base" />
                        Falar no WhatsApp
                    </a>
                </div>
            </div>
        </>
    );
}

export default function Header() {
    const [rolado, setRolado] = useState(false);
    const [menuAberto, setMenuAberto] = useState(false);
    const [montado, setMontado] = useState(false);

    useEffect(() => {
        setMontado(true); // só temos "document.body" depois de montar no cliente
    }, []);

    useEffect(() => {
        function handleScroll() {
            setRolado(window.scrollY > 24);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Trava o scroll do fundo (inclusive no iOS) enquanto o drawer está aberto
    useEffect(() => {
        if (menuAberto) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.overflow = "";
                window.scrollTo(0, scrollY);
            };
        }
    }, [menuAberto]);

    return (
        <header
            className={`fixed top-0 z-30 w-full transition-all duration-300 ease-in-out ${
                rolado
                    ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
                    : "bg-white/75 backdrop-blur-sm border-b border-transparent"
            }`}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');
            `}</style>

            <div
                className={`max-w-325 mx-auto flex items-center justify-between px-6 transition-all duration-300 ease-in-out ${
                    rolado ? "py-2.5" : "py-4"
                }`}
            >
                {/* Logo */}
                <Link href="#top" className="flex items-center gap-2.5 group">
                    <span
                        className={`flex items-center justify-center rounded-xl bg-linear-to-br from-[#1E5BFB] to-[#0B1120] text-white shadow-md shadow-blue-200 group-hover:shadow-blue-300 transition-all duration-300 ${
                            rolado ? "w-7 h-7" : "w-9 h-9"
                        }`}
                    >
                        <Image
                            src="/ChatGPT Image 19 de jul. de 2026, 17_15_59.png"
                            alt="AGL Digital"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                        />
                    </span>
                    <span
                        className={`font-bold tracking-tight text-[#0B1120] transition-all duration-300 ${
                            rolado ? "text-lg" : "text-xl"
                        }`}
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        AGL Digital
                    </span>
                </Link>

                {/* Navegação */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 text-[15px] font-medium text-slate-600 hover:text-[#1E5BFB] transition-colors rounded-lg hover:bg-blue-50 group"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            {link.label}
                            <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#1E5BFB] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setMenuAberto((prev) => !prev)}
                        aria-expanded={menuAberto}
                        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                        className="md:hidden relative z-50 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors outline-none"
                    >
                        {menuAberto ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                    </button>

                    <a
                        href="#contato"
                        className={`hidden md:inline-flex items-center gap-2 bg-linear-to-r from-[#1E5BFB] to-[#0B1120] hover:from-[#1a4fe0] hover:to-[#060a16] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${
                            rolado ? "px-4 py-2" : "px-5 py-2.5"
                        }`}
                        style={{ fontFamily: FONT_BODY }}
                    >
                        <FaWhatsapp className="text-base" />
                        <span>Entre em contato</span>
                    </a>
                </div>
            </div>

            {/* Renderizado fora do header via portal, para escapar do
                containing block criado pelo backdrop-blur do header */}
            {montado &&
                createPortal(
                    <MenuMobile aberto={menuAberto} onFechar={() => setMenuAberto(false)} />,
                    document.body
                )}
        </header>
    );
}