import { useState } from "react";

import { MapPin, CalendarDays } from "lucide-react";

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
            onClick={onClick}
            className="w-full h-106 md:h-102 overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0_0_#000] transition-all duration-100 p-2"
        >
            <div
                className={`
                    w-full rounded-lg overflow-hidden
                    border-3 border-foreground
                    transition-all
                    ${isActive ? "h-36" : "h-full"}
                `}
            >
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-all duration-100"
                />

                <button
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
                    {/* ... */}
                </button>
            </div>

            <div
                className={`
                    flex flex-col gap-1 items-start justify-center
                    mt-3 px-1
                    transition-all duration-200 ease-in
                    ${isActive ? "opacity-100" : "opacity-0"}
                `}
            >
                <Content
                    categoryId={categoryId}
                    name={name}
                    desc={desc}
                    date={date}
                    location={location}
                />
            </div>
        </div>
    );
}

const Content = ({ categoryId, name, desc, date, location }) => (
    <>
        <Category id={categoryId} size="xs" isLabel={true}></Category>
        <h3 className="text-xl font-heading text-black">{name}</h3>

        <div className="flex gap-1 items-center">
            <CalendarDays strokeWidth={3} size={18} />
            <span className="text-sm font-medium">{date}</span>
        </div>

        <div className="flex gap-1 items-center">
            <MapPin strokeWidth={3} size={18} />
            <span className="text-sm font-medium">{location}</span>
        </div>

        <p className="text-sm font-medium text-gray-500 mt-2"> {desc}</p>
    </>
);
