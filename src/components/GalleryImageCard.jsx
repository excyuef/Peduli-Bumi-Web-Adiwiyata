import { useState } from "react";
import { MapPin, CalendarDays } from "lucide-react";

import Jenis from "@/components/Jenis"

export default function ImageCard({
    name = "Sungai bersih hati happy",
    desc = "Siswa, guru, dan warga turun bersama merawat sungai. Sebanyak 180 kg sampah berhasil diangkat dan dipilah.",
    image = "https://placedog.net/400/400",
}) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="w-full h-96 overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0_0_#000] group ease duration-100 transition-all p-2">
            <div className="h-full w-full rounded-lg overflow-hidden group-hover:h-36 transition-all border-3 border-foreground">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover ease duration-100 transition-all"
                />
                <button
                    onClick={() => setLiked(!liked)}
                    aria-label={
                        liked ? "Hapus dari favorit" : "Tambah ke favorit"
                    }
                    aria-pressed={liked}
                    className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill={liked ? "#ef4444" : "none"}
                        stroke="black"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
                    </svg>
                </button>
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in flex flex-col gap-1 items-start justify-center mt-3 px-1">
                <Content name={name} desc={desc}/>
            </div>
        </div>
    );
}

const Content = ({name ,desc}) => (
    <>
        <Jenis bg="bg-primary">Edukasi</Jenis>
        <h3 className="text-xl font-heading text-black">{name}</h3>

        <div className="flex gap-1 items-center">
            <CalendarDays strokeWidth={3} size={18} />
            <span className="text-sm font-medium">8 Januari 2009</span>
        </div>

        <div className="flex gap-1 items-center">
            <MapPin strokeWidth={3} size={18} />
            <span className="text-sm font-medium">SMKN 46 Jakarta</span>
        </div>

        <p className="text-sm font-medium text-gray-500 mt-2">{desc}</p>
    </>
);
