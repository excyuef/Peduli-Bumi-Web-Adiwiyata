import { useState } from "react";
import GalleryImageCard from "@/components/GalleryImageCard";
import { padding } from "@/lib/styles";
import Category from "@/components/Category";
import { categories } from "@/data/category";
import { gallery } from "@/data/gallery";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("semua");

    return (
        <div className={`pt-24 flex flex-col gap-6 ${padding}`}>
            <div className="flex flex-col gap-4">
                <h1 className="font-heading text-3xl">
                    BUKAN CUMA WACANA. INI AKSINYA!
                </h1>
                <h2>Setiap foto punya cerita. Setiap Aksi bikin perubahan</h2>
            </div>

            <div className="flex gap-2">
                {categories.map((c) => {
                    return (
                        <Category
                            key={c.id}
                            id={c.id}
                            size="sm"
                            isActive={selectedCategory === c.id}
                            onClick={() => setSelectedCategory(c.id)}
                        />
                    );
                })}
            </div>

            <div className={`grid grid-cols-4 gap-x-6 gap-y-6 h-200`}>
                {gallery.map((item) => {
                    return (
                        <GalleryImageCard
                            key={item.id}
                            {...item}
                        ></GalleryImageCard>
                    );
                })}
            </div>
        </div>
    );
}
