import Image from "next/image"
import banner from "../../../public/HS_Full_Bleed_1_optmised.webp"

export default function Hero() {
    return (
        <div className="relative w-full h-100 md:h-125 lg:h-160">
            <Image
                src={banner}
                alt="banner"
                fill
                quality={85}
                className="object-cover object-center"
            />

            {/* Gradient overlay: escuro na esquerda, transparente na direita */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/10" />

            <div className="absolute inset-0 flex items-center">
                <div className="w-full max-w-325 mx-auto px-6 lg:px-16 xl:px-24">
                    <div className="text-white max-w-2xl">

                       
                       

                        <h1 className="font-extrabold text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-5xl md:leading-14">
                            Conectamos sua marca <br /> às pessoas certas
                        </h1>

                        
                        <div className="mt-5 w-16 h-1 rounded-full bg-[#1E5BFB]" />

                        <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-150 leading-relaxed">
                            Mais Leads, Mais Vendas, Mais Cresciment
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="/#contato"
                                className="py-3 px-10 rounded-[5px] bg-[#1E5BFB] text-sm sm:text-base font-semibold hover:bg-blue-600 hover:-translate-y-1 transform transition duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Solicitar Orçamento
                            </a>

                            <a
                                href="/#como-funciona"
                                className="py-3 px-10 rounded-[5px] border border-white/60 text-sm sm:text-base font-semibold hover:-translate-y-1 transition duration-300 ease-in-out text-white hover:bg-white/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
                            >
                                Saiba Mais
                            </a>
                        </div>    

                    </div>
                </div>
            </div>
        </div>
    )
}