import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Logo from "../ui/Logo";

export default function Footer() {
    return (
        <footer className="bg-[#0B1120] text-white py-10 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-center md:text-left">
                    <Logo className="w-9 h-9 shrink-0" />
                    <div>
                        <h3 className="text-lg font-bold">Chonnostech</h3>
                        <p className="text-sm text-white/80 mt-1">
                            Sistema, site e loja online para a sua empresa.
                        </p>
                    </div>
                </div>

                <nav aria-label="Links do rodapé" className="flex flex-wrap justify-center gap-4">
                    <Link href="/" className="text-sm text-white/80 hover:text-white">Home</Link>
                    <Link href="/sobre" className="text-sm text-white/80 hover:text-white">Sobre</Link>
                    <Link href="/sistema" className="text-sm text-white/80 hover:text-white">Sistemas</Link>
                    <Link href="/como-funciona" className="text-sm text-white/80 hover:text-white">Como Funciona</Link>
                    <Link href="/solucoes" className="text-sm text-white/80 hover:text-white">Soluções</Link>
                    <Link href="/contato" className="text-sm text-white/80 hover:text-white">Contato</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link id="btn-whatsapp-footer" href="/contato" className="text-white/80 hover:text-white">
                        <FaWhatsapp />
                    </Link>
                    <a
                        href="https://www.instagram.com/chonnostech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-8 text-center text-white/60 text-sm">
                © {new Date().getFullYear()} Chonnostech. Todos os direitos reservados.
            </div>
        </footer>
    );
}
