"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../ui/Logo";

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
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Sistemas", href: "/sistema" },
    { label: "Automações", href: "/automacoes" },
    { label: "Soluções", href: "/solucoes" },
    { label: "Contato", href: "/contato" },
];

function ativo(pathname: string, href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuMobile({
    aberto,
    onFechar,
    pathname,
}: {
    aberto: boolean;
    onFechar: () => void;
    pathname: string;
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
                                aria-current={ativo(pathname, link.href) ? "page" : undefined}
                                className={`block px-4 py-3 text-[15px] font-medium transition-colors ${
                                    ativo(pathname, link.href)
                                        ? "bg-blue-50 text-[#1D4FE0]"
                                        : "text-slate-700 hover:bg-slate-100 hover:text-[#1D4FE0]"
                                }`}
                                style={{ fontFamily: FONT_BODY }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <Link
                        id="btn-whatsapp-mobile"
                        href="/contato"
                        onClick={onFechar}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-[#1D4FE0] hover:bg-[#1640C2] px-4 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
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
    const pathname = usePathname();
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
                    <Logo
                        className={`shrink-0 transition-all duration-300 group-hover:scale-105 ${
                            rolado ? "w-8 h-8" : "w-10 h-10"
                        }`}
                    />
                    <span
                        className={`font-bold tracking-tight text-black transition-all duration-300 ${
                            rolado ? "text-lg" : "text-xl"
                        }`}
                        style={{ fontFamily: FONT_DISPLAY }}
                    >
                        Chonnostech
                    </span>
                </Link>

                {/* Navegação */}
                <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isAtivo = ativo(pathname, link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={isAtivo ? "page" : undefined}
                                className={`relative px-4 py-2 text-[15px] font-medium transition-colors duration-200 group ${
                                    isAtivo ? "text-[#1D4FE0]" : "text-slate-600 hover:text-[#1D4FE0] hover:bg-blue-50/70"
                                }`}
                                style={{ fontFamily: FONT_BODY }}
                            >
                                {link.label}
                                <span
                                    className={`absolute bottom-1 left-4 right-4 h-0.5 bg-[#1D4FE0] transition-transform duration-300 origin-left ${
                                        isAtivo ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </Link>
                        );
                    })}
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
                        href="/contato"
                        className={`hidden md:inline-flex items-center gap-2 bg-[#1D4FE0] hover:bg-[#1640C2] text-white font-semibold text-sm shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ${
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
                    <MenuMobile aberto={menuAberto} onFechar={() => setMenuAberto(false)} pathname={pathname} />,
                    document.body
                )}
        </header>
    );
}
