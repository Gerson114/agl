import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0B1120] text-white py-10 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold">PlannerAgency</h3>
                    <p className="text-sm text-white/80 mt-1">Ajudamos sua marca a crescer online.</p>
                </div>

                <nav className="flex flex-wrap justify-center gap-4">
                    <a href="/#top" className="text-sm text-white/80 hover:text-white">Home</a>
                    <a href="/#como-funciona" className="text-sm text-white/80 hover:text-white">Como Funciona</a>
                    <a href="/#solucoes" className="text-sm text-white/80 hover:text-white">Soluções</a>
                    <a href="/#parceiros" className="text-sm text-white/80 hover:text-white">Parceiros</a>
                    <a href="/#contato" className="text-sm text-white/80 hover:text-white">Contato</a>
                </nav>

                <div className="flex items-center gap-3">
                    <a href="https://wa.me/55" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                        <FaWhatsapp />
                    </a>
                    <a href="#" className="text-white/80 hover:text-white">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-white/80 hover:text-white">
                        <FaFacebook />
                    </a>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-8 text-center text-white/60 text-sm">
                © {new Date().getFullYear()} PlannerAgency. Todos os direitos reservados.
            </div>
        </footer>
    );
}
