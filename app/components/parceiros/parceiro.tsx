
const parceiros = [
    { nome: "Planner", sigla: "PL" },
    { nome: "Agência X", sigla: "AX" },
    { nome: "Media Pro", sigla: "MP" },
    { nome: "Growth Co", sigla: "GC" },
    { nome: "Brand Lab", sigla: "BL" },
];

export default function Parceiros() {
    return (
        <section id="parceiros" className="py-16 px-4">

            <div className="flex flex-wrap justify-center gap-5">
                {parceiros.map((p) => (
                    <div
                        key={p.nome}
                        className="group flex flex-col items-center justify-center gap-3 w-40 h-36 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >
                    
                        <div className="flex items-center justify-center w-14 h-14 rounded-[5px] bg-[#4E018D]/10 group-hover:bg-[#4E018D]/20 transition-colors duration-300">
                            <span className="text-[#4E018D] font-bold text-lg">
                                {p.sigla}
                            </span>
                        </div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-[#4E018D] transition-colors duration-300">
                            {p.nome}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
