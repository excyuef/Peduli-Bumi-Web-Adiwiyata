export default function jenis({children, bg}) {
    return (
        <button
            className={`px-3 py-1 rounded-2xl ${bg} border-3 border-foreground text-sm font-semibold`}
        >
            {children}
        </button>
    );
}
