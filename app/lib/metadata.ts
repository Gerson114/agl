import type { Metadata } from "next";

interface PageMetadata {
    title: string;
    description: string;
    path: string;
}

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            locale: "pt_BR",
            siteName: "Chonnostech",
            url: path,
            title,
            description,
            images: [{
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Chonnostech — Sistemas Internos e Automação de Processos",
            }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/twitter-image.jpg"],
        },
    };
}

export const homeMetadata = createPageMetadata({
    title: "Sistemas Internos e Automação | Chonnostech",
    description:
        "Organize tarefas, equipes e informações com sistemas internos e automação de processos. A Chonnostech desenvolve soluções sob medida para sua empresa.",
    path: "/",
});
