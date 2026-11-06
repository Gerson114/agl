import type { Metadata } from "next";
import Link from "next/link";
import {
    FaArrowRight,
    FaArrowsRotate,
    FaBell,
    FaFileCircleCheck,
    FaMagnifyingGlass,
    FaPlug,
    FaRegClock,
} from "react-icons/fa6";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";

export const metadata: Metadata = {
    title: "Automação de Processos para Empresas | Chonnostech",
    description: "Automatize tarefas repetitivas, conecte sistemas e acompanhe processos da sua empresa. Automação sob medida com diagnóstico, escopo e implantação acompanhada.",
    alternates: { canonical: "/automacoes" },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        siteName: "Chonnostech",
        url: "/automacoes",
        title: "Automação de processos para sua empresa | Chonnostech",
        description: "Conecte ferramentas e automatize processos conforme as regras da sua empresa.",
    },
};

const exemplos = [
    { icon: FaArrowsRotate, title: "Tarefas repetidas entre ferramentas", text: "Reduza o trabalho de copiar as mesmas informações de um sistema para outro quando uma etapa é concluída." },
    { icon: FaBell, title: "Lembretes e notificações", text: "Avise os responsáveis quando uma tarefa vencer, um pedido mudar de status ou uma aprovação estiver pendente." },
    { icon: FaFileCircleCheck, title: "Aprovações e solicitações", text: "Encaminhe solicitações à pessoa responsável e registre o andamento de cada aprovação." },
    { icon: FaPlug, title: "Integração entre sistemas", text: "Avalie conexões entre ferramentas, sistemas existentes e APIs para manter os dados sincronizados." },
];

const etapas = [
    { number: "01", title: "Mapeamos o processo", text: "Entendemos cada etapa, quem participa e onde o trabalho manual toma tempo." },
    { number: "02", title: "Definimos o escopo", text: "Identificamos as regras, ferramentas e exceções que a automação precisa respeitar." },
    { number: "03", title: "Desenvolvemos e testamos", text: "Construímos o fluxo e validamos o funcionamento com cenários da operação." },
    { number: "04", title: "Implantamos com acompanhamento", text: "Colocamos a automação em funcionamento e orientamos a equipe para acompanhá-la." },
];

const perguntas = [
    { pergunta: "Quais processos podem ser automatizados?", resposta: "Processos com etapas, regras e responsáveis definidos são bons candidatos, como transferências de informações, notificações, aprovações e tarefas repetitivas entre ferramentas. A viabilidade é avaliada durante o diagnóstico." },
    { pergunta: "É possível integrar os sistemas que minha empresa já usa?", resposta: "Depende dos sistemas envolvidos e dos acessos e integrações que eles oferecem. Analisamos essa compatibilidade antes de fechar o escopo." },
    { pergunta: "Quanto custa automatizar um processo?", resposta: "O investimento depende da quantidade de etapas, regras, exceções e integrações envolvidas. Depois de entender o processo, apresentamos uma proposta com escopo definido." },
];

export default function AutomacoesPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: perguntas.map(({ pergunta, resposta }) => ({
            "@type": "Question",
            name: pergunta,
            acceptedAnswer: { "@type": "Answer", text: resposta },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative overflow-hidden bg-[#0B1120] px-5 py-16 text-white sm:py-24">
                <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(900px 420px at 90% 0%, rgba(29,79,224,0.30), transparent 68%)" }} />
                <div className="relative mx-auto max-w-5xl">
                    <Reveal>
                        <Eyebrow tone="dark" align="left">Automação de processos</Eyebrow>
                        <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Menos etapas manuais.<br /><span className="text-[#BFD7FF]">Mais fluidez no trabalho.</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                            Automatizamos processos conforme as regras da sua empresa: tarefas repetitivas, troca de informações entre ferramentas, notificações e fluxos de aprovação.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/contato" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1D4FE0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1640C2]">
                                Conversar sobre um processo <FaArrowRight className="text-xs" aria-hidden="true" />
                            </Link>
                            <Link href="#como-funciona" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Ver como funciona</Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="px-5 py-16 sm:py-20" aria-labelledby="sinais-title">
                <div className="mx-auto max-w-5xl">
                    <Reveal className="mb-10 max-w-2xl">
                        <Eyebrow align="left">Comece pelo processo</Eyebrow>
                        <h2 id="sinais-title" className="text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl">Onde o trabalho manual se repete?</h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-600">A automação começa com o fluxo real da equipe. Estes são alguns exemplos de processos que podemos avaliar com você.</p>
                    </Reveal>
                    <div className="grid gap-5 sm:grid-cols-2">
                        {exemplos.map(({ icon: Icon, title, text }) => (
                            <Reveal key={title}>
                                <article className="h-full rounded-xl border border-slate-200 bg-white p-6 sm:p-7">
                                    <Icon className="mb-5 text-xl text-[#1D4FE0]" aria-hidden="true" />
                                    <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
                                    <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="como-funciona" className="bg-[#F7F9FC] px-5 py-16 sm:py-20" aria-labelledby="steps-title">
                <div className="mx-auto max-w-5xl">
                    <Reveal className="mb-10 max-w-2xl">
                        <Eyebrow align="left">Do diagnóstico à implantação</Eyebrow>
                        <h2 id="steps-title" className="text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl">Um fluxo claro, do começo ao acompanhamento.</h2>
                    </Reveal>
                    <ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                        {etapas.map((etapa) => (
                            <Reveal key={etapa.number} className="border-t border-slate-300 pt-5">
                                <li>
                                    <span className="text-sm font-semibold text-[#1D4FE0]">{etapa.number}</span>
                                    <h3 className="mb-2 mt-4 font-semibold text-slate-900">{etapa.title}</h3>
                                    <p className="text-sm leading-relaxed text-slate-600">{etapa.text}</p>
                                </li>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="px-5 py-16 sm:py-20" aria-labelledby="good-candidate-title">
                <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    <Reveal>
                        <Eyebrow align="left">Uma pergunta útil</Eyebrow>
                        <h2 id="good-candidate-title" className="text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl">Sua equipe repete os mesmos passos todos os dias?</h2>
                        <p className="mt-5 text-base leading-relaxed text-slate-600">Mapear as repetições, entradas e regras ajuda a descobrir onde uma automação pode simplificar o processo — e onde a decisão ainda precisa ficar com uma pessoa.</p>
                        <Link href="/sistema" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1D4FE0] hover:underline">Conhecer sistemas internos <FaArrowRight className="text-xs" aria-hidden="true" /></Link>
                    </Reveal>
                    <div className="space-y-3">
                        {perguntas.map(({ pergunta, resposta }) => (
                            <details key={pergunta} className="group rounded-xl border border-slate-200 bg-white p-5 open:border-blue-200">
                                <summary className="flex cursor-pointer list-none items-start gap-3 font-semibold text-slate-900 marker:hidden">
                                    <FaMagnifyingGlass className="mt-1 shrink-0 text-sm text-[#1D4FE0]" aria-hidden="true" />{pergunta}
                                </summary>
                                <p className="pt-4 pl-7 text-sm leading-relaxed text-slate-600">{resposta}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 pb-16 sm:pb-24">
                <Reveal className="mx-auto max-w-5xl rounded-2xl bg-[#0B1120] p-8 text-white sm:p-12">
                    <FaRegClock className="mb-5 text-2xl text-[#BFD7FF]" aria-hidden="true" />
                    <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Vamos mapear um processo da sua empresa?</h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">Conte qual etapa toma mais tempo da equipe. A partir disso, definimos juntos se um sistema interno ou uma automação faz sentido.</p>
                    <Link href="/contato" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1D4FE0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1640C2]">Falar sobre a minha operação <FaArrowRight className="text-xs" aria-hidden="true" /></Link>
                </Reveal>
            </section>
        </>
    );
}
