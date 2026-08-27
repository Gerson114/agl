import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0B1120] text-white py-10 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold">AGL Digital</h3>
                    <p className="text-sm text-white/80 mt-1">Sistemas web personalizados e landing pages de alta conversão.</p>
                </div>

                <nav aria-label="Links do rodapé" className="flex flex-wrap justify-center gap-4">
                    <Link href="#top" className="text-sm text-white/80 hover:text-white">Home</Link>
                    <Link href="#sobre" className="text-sm text-white/80 hover:text-white">Sobre</Link>
                    <Link href="#demonstracao" className="text-sm text-white/80 hover:text-white">Demonstração</Link>
                    <Link href="#como-funciona" className="text-sm text-white/80 hover:text-white">Como Funciona</Link>
                    <Link href="#solucoes" className="text-sm text-white/80 hover:text-white">Soluções</Link>
                    <Link href="#contato" className="text-sm text-white/80 hover:text-white">Contato</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link id="btn-whatsapp-footer" href="#contato" className="text-white/80 hover:text-white">
                        <FaWhatsapp />
                    </Link>
                    <a href="#" className="text-white/80 hover:text-white">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-white/80 hover:text-white">
                        <FaFacebook />
                    </a>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-8 text-center text-white/60 text-sm">
                © {new Date().getFullYear()} AGL Digital. Todos os direitos reservados.
            </div>
        </footer>
    );
}
