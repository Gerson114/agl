export default function Logo({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 40 40"
            className={className}
            aria-hidden="true"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="20" cy="20" r="20" fill="#1D4FE0" />
            <path
                d="M27.5 12.8a10.4 10.4 0 1 0 0 14.4"
                stroke="#fff"
                strokeWidth="4.4"
                strokeLinecap="round"
                fill="none"
            />
            <circle cx="21.5" cy="20" r="3.1" fill="#fff" />
        </svg>
    );
}
