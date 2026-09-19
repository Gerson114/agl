const FONT_MONO = "'JetBrains Mono', monospace";

export default function Eyebrow({
    children,
    tone = "light",
    align = "center",
}: {
    children: string;
    tone?: "light" | "dark";
    align?: "center" | "left";
}) {
    return (
        <div
            className={`inline-flex items-center gap-2 mb-3 ${
                align === "center" ? "justify-center" : "justify-start"
            }`}
        >
            <span className={`w-4 h-px ${tone === "dark" ? "bg-[#6E9CFF]" : "bg-[#1D4FE0]"}`} />
            <span
                className={`text-sm font-semibold uppercase tracking-widest ${
                    tone === "dark" ? "text-[#6E9CFF]" : "text-[#1D4FE0]"
                }`}
                style={{ fontFamily: FONT_MONO }}
            >
                {children}
            </span>
        </div>
    );
}
