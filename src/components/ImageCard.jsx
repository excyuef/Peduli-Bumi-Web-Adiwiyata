import { useState } from "react";
import { MapPin, CalendarDays, Heart } from "lucide-react";
import Category from "@/components/Category";

export default function ImageCard({
    name,
    desc,
    image,
    categoryId,
    date,
    location,
    isActive,
    onClick,
}) {
    const [liked, setLiked] = useState(false);

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.target !== e.currentTarget) return;
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
            className={`w-full h-106 md:h-102 overflow-hidden border-2 border-black bg-background  transition-all duration-100 p-2 hover:shadow-[1px_1px_0_var(--ink)] hover:translate-y-[5px] hover:translate-x-[5px] shadow-[7px_7px_0_var(--ink)]`}
        >
            <div
                className={`relative w-full overflow-hidden border-3 border-foreground transition-all ${isActive ? "h-36" : "h-full"}`}
            >
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-all duration-100"
                />

                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        setLiked(!liked);
                    }}
                    aria-label={
                        liked ? "Hapus dari favorit" : "Tambah ke favorit"
                    }
                    aria-pressed={liked}
                    className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white"
                >
                    <Heart
                        size={20}
                        strokeWidth={3}
                        className={`text-black transition-colors ${liked ? "fill-red-500" : "fill-white"}`}
                    />
                </button>
            </div>

            {isActive && (
                <div className="flex flex-col gap-1 items-start mt-3">
                    <Content
                        categoryId={categoryId}
                        name={name}
                        desc={desc}
                        date={date}
                        location={location}
                    />
                </div>
            )}
        </div>
    );
}

const Content = ({ categoryId, name, desc, date, location }) => (
    <>
        <Category id={categoryId} size="xs" isLabel={true} />

        <div className="flex flex-col gap-1 px-1">
            <h3 className="text-xl font-heading text-black">{name}</h3>

            <div className="flex gap-1 items-center">
                <CalendarDays strokeWidth={3} size={18} />
                <span className="text-sm font-medium">{date}</span>
            </div>

            <div className="flex gap-1 items-center">
                <MapPin strokeWidth={3} size={18} />
                <span className="text-sm font-medium">{location}</span>
            </div>

            <p className="text-sm font-medium text-gray-500 mt-2">{desc}</p>
        </div>
    </>
);
