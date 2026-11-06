import { FaLaptopCode, FaListCheck, FaChartLine, FaGears } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const NUMERO_WHATSAPP = "5581983583549";

export interface Servico {
    icone: IconType;
    titulo: string;
    descricao: string;
    preco: string;
    prefixoPreco: string;
    sufixoPreco?: string;
    sobConsulta?: boolean;
    url: string;
    destaque: boolean;
    badge?: string;
    condicoes: { pagamento: string; bonus?: string[] } | null;
    linkSlug: string;
}

export const servicos: Servico[] = [
    {
        icone: FaLaptopCode,
        titulo: "Sistema interno sob medida",
        descricao: "Um sistema para organizar informações, rotinas e decisões, desenvolvido conforme a operação da sua empresa.",
        preco: "100", prefixoPreco: "a partir de R$", sufixoPreco: "/mês",
        url: "seusistema.com.br/painel", destaque: true, badge: "Sob medida",
        condicoes: {
            pagamento: "Aluguel a partir de R$ 100/mês. Para a compra do sistema, o escopo e o investimento são definidos após entendermos o seu negócio.",
            bonus: ["Levantamento do processo atual", "Módulos de tarefas, equipe e operação", "Dashboard com indicadores do negócio", "Suporte técnico conforme o plano"],
        },
        linkSlug: "/contato",
    },
    {
        icone: FaGears,
        titulo: "Automação de processos",
        descricao: "Conecte etapas e ferramentas para reduzir tarefas manuais e acompanhar a execução dos processos.",
        preco: "", prefixoPreco: "projeto sob medida", sobConsulta: true,
        url: "seusistema.com.br/automacoes", destaque: false, badge: "Menos tarefas repetitivas",
        condicoes: {
            pagamento: "A proposta considera as etapas do processo, as ferramentas envolvidas e as regras do seu negócio.",
            bonus: ["Mapeamento do processo", "Integrações entre sistemas e APIs", "Notificações, rotinas e atualizações", "Acompanhamento das etapas automatizadas"],
        },
        linkSlug: "/contato",
    },
    {
        icone: FaListCheck,
        titulo: "Gestão de tarefas e equipes",
        descricao: "Organize projetos, demandas, responsáveis, prioridades e prazos em um espaço compartilhado pela equipe.",
        preco: "", prefixoPreco: "projeto sob medida", sobConsulta: true,
        url: "seusistema.com.br/tarefas", destaque: false,
        condicoes: {
            pagamento: "Escopo e investimento definidos conforme o fluxo de trabalho e o tamanho da equipe.",
            bonus: ["Demandas organizadas por etapa", "Responsáveis, prioridades e prazos", "Acompanhamento de status e entregas", "Visões por equipe ou projeto"],
        },
        linkSlug: "/contato",
    },
    {
        icone: FaChartLine,
        titulo: "Dashboards e indicadores",
        descricao: "Acompanhe os dados importantes da operação em painéis claros, configurados para as decisões da sua empresa.",
        preco: "", prefixoPreco: "projeto sob medida", sobConsulta: true,
        url: "seusistema.com.br/indicadores", destaque: false,
        condicoes: {
            pagamento: "Escopo definido conforme os indicadores, fontes de dados e integrações necessárias.",
            bonus: ["Indicadores definidos com a sua equipe", "Visões por período, setor e responsável", "Dados organizados em um painel", "Relatórios para acompanhar a operação"],
        },
        linkSlug: "/contato",
    },
];
