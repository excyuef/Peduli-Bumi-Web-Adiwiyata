import { categories } from "@/data/category";
import { cn } from "@/lib/utils";

export default function Category({
    id,
    size = "sm",
    isActive,
    isLabel = false,
    onClick,
}) {

    const category = categories.find((c) => c.id === id);

    return (
        <button
            onClick={onClick}
            className={cn(
                "px-3 py-1 rounded-2xl border-3 border-foreground font-semibold",
                {
                    "text-xs": size === "xs",
                    "text-sm": size === "sm",
                    "text-base": size === "md",
                },
                isLabel || isActive
                    ? category.bg
                    : "bg-background"
            )}
        >
            {category.label}
        </button>
    );
}