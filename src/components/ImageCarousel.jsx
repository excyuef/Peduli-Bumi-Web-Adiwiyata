import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImageCarousel({
    name = "Biscuit",
    description = "Golden Retriever",
    avatar = "https://i.pravatar.cc/80",
    images = [
        "https://placedog.net/500/300",
        "https://placedog.net/501/300",
        "https://placedog.net/502/300",
    ],
}) {
    const comments = 324
    const likes = 3200
    const [liked, setLiked] = React.useState(false);

    return (
        <div className="m-auto my-25 w-200 rounded-3xl border-2 border-black bg-white p-3 shadow-[0_4px_0_0_#000]">
            {/* User */}
            <div className="mb-3 flex items-center gap-2">
                <img
                    src={avatar}
                    className="h-8 w-8 rounded-full border-2 border-black object-cover"
                />

                <div className="flex flex-col leading-none">
                    <span className="text-sm font-bold text-black">
                        SMKN 46 Jakarta
                    </span>

                    <span className="text-xs text-gray-500">
                        {name} · {description}
                    </span>
                </div>
            </div>

            {/* Carousel */}
            <div className="mx-auto w-full rounded-md">
                <CarouselCard images={images}/>
            </div>

            {/* Actions */}
            <div className="mt-3 flex items-center gap-4 px-1 text-xs font-bold text-black">
                {/* Comment */}
                <button
                    type="button"
                    className="flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95"
                    aria-label="Komentar"
                >
                    <Icon d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z" />

                    {comments}
                </button>

                {/* Like */}
                <button
                    type="button"
                    onClick={() => setLiked((prev) => !prev)}
                    aria-pressed={liked}
                    aria-label={liked ? "Batal suka" : "Suka"}
                    className="flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95"
                >
                    <Icon
                        fill={liked ? "#ef4444" : "none"}
                        d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"
                    />

                    {likes + (liked ? 1 : 0)}
                </button>

                {/* Share */}
                <button
                    type="button"
                    className="ml-auto transition-transform hover:scale-105 active:scale-95"
                    aria-label="Bagikan"
                >
                    <Icon d="M12 15V3m0 0L8 7m4-4 4 4M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                </button>
            </div>
        </div>
    );
}

function Icon({ d, fill = "none" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill={fill}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d={d} />
        </svg>
    );
}

const CarouselCard = ({images}) => (
    <Carousel
        className="w-full"
        opts={{
            loop: true,
        }}
    >
        <CarouselContent>
            {images.map((src, index) => (
                <CarouselItem key={index}>
                    <img src={src} className="w-full object-cover rounded-lg" />
                </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
);
