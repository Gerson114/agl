"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const DIRECTION_CLASS = {
    up: "reveal-up",
    left: "reveal-left",
    right: "reveal-right",
} as const;

export default function Reveal({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    direction?: keyof typeof DIRECTION_CLASS;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${DIRECTION_CLASS[direction]} ${visible ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
