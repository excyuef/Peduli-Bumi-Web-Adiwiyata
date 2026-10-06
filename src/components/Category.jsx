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
    const pressed = isLabel || isActive;
    const Tag = isLabel ? "span" : "button";

    return (
        <Tag
            {...(!isLabel && { type: "button", onClick })}
            className={cn(
                "inline-block px-3 py-1 rounded-2xl border-3 border-foreground font-semibold",
                "transition-all duration-150 ease-out motion-reduce:transition-none",
                {
                    "text-xs": size === "xs",
                    "text-sm": size === "sm",
                    "text-base": size === "md",
                },
                pressed
                    ? `${category.bg} translate-x-1 translate-y-1 shadow-[1px_1px_0_var(--ink)]`
                    : "bg-background shadow-[5px_5px_0_var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0_var(--ink)]",
                !isLabel && "cursor-pointer"
            )}
        >
            {category.label}
        </Tag>
    );
}