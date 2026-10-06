import { useState } from "react";
import ImageCard from "@/components/ImageCard";
import { padding } from "@/lib/styles";
import Category from "@/components/Category";
import { categories } from "@/data/category";
import { gallery } from "@/data/gallery";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("semua");
    const [selectedActiveId, setActiveId] = useState(null);

    let data = gallery.filter((g) => {
        return selectedCategory === "semua"
            ? true
            : g.categoryId === selectedCategory;
    });

    let dataCount = data.length;

    return (
        <div className={`flex flex-col gap-6 ${padding} pt-24`}>
            <div className="flex flex-col gap-4">
                <h1 className="font-heading text-3xl">
                    BUKAN CUMA WACANA. INI AKSINYA!
                </h1>
                <h2>Setiap foto punya cerita. Setiap Aksi bikin perubahan</h2>
            </div>

            <div className="flex flex-wrap gap-2">
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

            <div className="text-sm">
                {dataCount} cerita pilihan dari 6 jenis kegiatan
            </div>

            <div
                className={`grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6 ${padding}`}
            >
                {data.map((item) => {
                    return (
                        <ImageCard
                            key={item.id}
                            isActive={item.id === selectedActiveId}
                            onClick={() => {
                                setActiveId(
                                    selectedActiveId === item.id
                                        ? null
                                        : item.id,
                                );
                            }}
                            {...item}
                        ></ImageCard>
                    );
                })}
            </div>
        </div>
    );
}
