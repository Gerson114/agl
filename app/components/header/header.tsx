"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const FONT_DISPLAY = "'Plus Jakarta Sans', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

function subscribeNoop() {
    return () => {};
}

function getMontadoClient() {
    return true;
}

function getMontadoServer() {
    return false;
}

const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Sobre", href: "#sobre" },
    { label: "Demonstração", href: "#demonstracao" },
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
                        id="btn-fechar-menu"
                        type="button"
                        onClick={onFechar}
                        aria-label="Fechar menu"
                        className="p-2 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors outline-none"
                    >
                        <FaTimes className="text-lg" />
                    </button>
                </div>

                <div className="flex flex-col gap-2 px-4 pt-4 pb-6">
                    <nav aria-label="Menu móvel" className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={onFechar}
                                className="block px-4 py-3 text-[15px] font-medium text-slate-700 hover:bg-slate-100 hover:text-[#0B3B8C] transition-colors"
                                style={{ fontFamily: FONT_BODY }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <Link
                        id="btn-whatsapp-mobile"
                        href="#contato"
                        onClick={onFechar}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-[#0B3B8C] hover:bg-[#0A3277] px-4 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                        style={{ fontFamily: FONT_BODY }}
                    >
                        <FaWhatsapp className="text-base" />
                        Falar no WhatsApp
                    </Link>
                </div>
            </div>
        </>
    );
}

export default function Header() {
    const [rolado, setRolado] = useState(false);
    const [menuAberto, setMenuAberto] = useState(false);
    // só temos "document.body" depois de montar no cliente
    const montado = useSyncExternalStore(subscribeNoop, getMontadoClient, getMontadoServer);

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
            <div
                className={`max-w-325 mx-auto flex items-center justify-between px-6 transition-all duration-300 ease-in-out ${
                    rolado ? "py-2.5" : "py-4"
                }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <span
                        aria-hidden="true"
                        className={`flex items-center justify-center bg-linear-to-br from-[#0B3B8C] to-[#0A2F70] text-white shadow-md group-hover:shadow-lg group-hover:from-[#0A3277] group-hover:to-[#082458] transition-all duration-300 ${
                            rolado ? "w-8 h-8" : "w-10 h-10"
                        }`}
                    >
                        <span
                            className={`font-bold tracking-tight transition-all duration-300 ${
                                rolado ? "text-[11px]" : "text-xs"
                            }`}
                            style={{ fontFamily: FONT_DISPLAY }}
                        >
                            AGL
                        </span>
                    </span>
                    <span
                        className={`font-bold tracking-tight text-black transition-all duration-300 ${
                            rolado ? "text-lg" : "text-xl"
                        }`}
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        AGL Digital
                    </span>
                </Link>

                {/* Navegação */}
                <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 text-[15px] font-medium text-slate-600 hover:text-[#0B3B8C] transition-colors duration-200 hover:bg-blue-50/70 group"
                            style={{ fontFamily: FONT_BODY }}
                        >
                            {link.label}
                            <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#0B3B8C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        id="btn-toggle-menu"
                        type="button"
                        onClick={() => setMenuAberto((prev) => !prev)}
                        aria-expanded={menuAberto}
                        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                        className="md:hidden relative z-50 p-2 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors outline-none"
                    >
                        {menuAberto ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                    </button>

                    <Link
                        id="btn-whatsapp-header"
                        href="#contato"
                        className={`hidden md:inline-flex items-center gap-2 bg-[#0B3B8C] hover:bg-[#0A3277] text-white font-semibold text-sm shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ${
                            rolado ? "px-4 py-2" : "px-5 py-2.5"
                        }`}
                        style={{ fontFamily: FONT_BODY }}
                    >
                        <FaWhatsapp className="text-base" />
                        <span>Entre em contato</span>
                    </Link>
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