import { FaLaptopCode, FaListCheck, FaGears } from "react-icons/fa6";

const FONT_MONO = "'JetBrains Mono', monospace";

const nos = [
    { icone: FaLaptopCode, label: "Sistema", cor: "#1D4FE0", pos: "top-0 left-1/2 -translate-x-1/2" },
    { icone: FaListCheck, label: "Tarefas", cor: "#F2853D", pos: "bottom-4 left-0" },
    { icone: FaGears, label: "Automações", cor: "#34D399", pos: "bottom-4 right-0" },
];

export default function HeroIllustration() {
    return (
        <div
            role="img"
            aria-label="Ilustração animada: sistemas internos, gestão de tarefas e automações conectados à sua empresa"
            className="relative w-full aspect-square max-w-125 mx-auto"
        >
            {/* brilho de fundo */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(220px 220px at 50% 50%, rgba(29,79,224,0.25), transparent 70%)",
                }}
            />

            {/* grade de pontos decorativa */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                <style>{`
                    @media (prefers-reduced-motion: reduce) {
                        .light-pulse { display: none; }
                    }
                `}</style>
                <defs>
                    <pattern id="grid-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.08)" />
                    </pattern>
                    <filter id="glow-pulse" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="3.2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <rect x="0" y="0" width="400" height="400" fill="url(#grid-dots)" />

                {/* linhas conectando os 3 nós ao centro */}
                <line x1="200" y1="200" x2="200" y2="55" stroke="#1D4FE0" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.7" />
                <line x1="200" y1="200" x2="70" y2="330" stroke="#F2853D" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.7" />
                <line x1="200" y1="200" x2="330" y2="330" stroke="#34D399" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.7" />

                {/* luz viajando do centro até cada card */}
                <circle className="light-pulse" r="5" fill="#1D4FE0" filter="url(#glow-pulse)">
                    <animate attributeName="cx" values="200;200" dur="2.1s" begin="0s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="200;55" dur="2.1s" begin="0s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.75;1" dur="2.1s" begin="0s" repeatCount="indefinite" />
                    <animate attributeName="r" values="3;5;3" dur="2.1s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle className="light-pulse" r="5" fill="#F2853D" filter="url(#glow-pulse)">
                    <animate attributeName="cx" values="200;70" dur="2.1s" begin="0.7s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="200;330" dur="2.1s" begin="0.7s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.75;1" dur="2.1s" begin="0.7s" repeatCount="indefinite" />
                    <animate attributeName="r" values="3;5;3" dur="2.1s" begin="0.7s" repeatCount="indefinite" />
                </circle>
                <circle className="light-pulse" r="5" fill="#34D399" filter="url(#glow-pulse)">
                    <animate attributeName="cx" values="200;330" dur="2.1s" begin="1.4s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="200;330" dur="2.1s" begin="1.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.75;1" dur="2.1s" begin="1.4s" repeatCount="indefinite" />
                    <animate attributeName="r" values="3;5;3" dur="2.1s" begin="1.4s" repeatCount="indefinite" />
                </circle>
            </svg>

            {/* nó central: marca Chonnostech */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-[#0E1526] border-2 border-[#1D4FE0] shadow-lg shadow-blue-900/40">
                <svg viewBox="0 0 40 40" className="w-9 h-9 sm:w-10 sm:h-10" fill="none">
                    <path
                        d="M27.5 12.8a10.4 10.4 0 1 0 0 14.4"
                        stroke="#fff"
                        strokeWidth="4.4"
                        strokeLinecap="round"
                        fill="none"
                    />
                    <circle cx="21.5" cy="20" r="3.1" fill="#fff" />
                </svg>
                <span
                    className="mt-1.5 text-[9px] sm:text-[10px] font-semibold text-white/80 tracking-wide"
                    style={{ fontFamily: FONT_MONO }}
                >
                    chonnostech
                </span>
            </div>

            {/* Módulos conectados à operação da empresa */}
            {nos.map((no) => {
                const Icone = no.icone;
                return (
                    <div key={no.label} className={`absolute ${no.pos} flex flex-col items-center gap-2`}>
                        <div
                            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 border shadow-lg"
                            style={{ backgroundColor: "#131B2E", borderColor: `${no.cor}55` }}
                        >
                            <Icone className="text-xl sm:text-2xl" style={{ color: no.cor }} />
                        </div>
                        <span
                            className="text-[11px] sm:text-xs font-semibold text-white/90 bg-[#0B1120] px-2 py-0.5 border border-white/10"
                            style={{ fontFamily: FONT_MONO }}
                        >
                            {no.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
