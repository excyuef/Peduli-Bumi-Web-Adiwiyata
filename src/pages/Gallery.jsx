import { useState } from "react";
import ImageCard from "@/components/ImageCard";
import { padding } from "@/lib/styles";
import Category from "@/components/Category";
import { categories } from "@/data/category";
import { gallery } from "@/data/gallery";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("semua");
    const [selectedActiveId, setActiveId] = useState(null);

    const data = gallery.filter((g) => {
        return selectedCategory === "semua"
            ? true
            : g.categoryId === selectedCategory;
    });

    return (
        <div className={`flex flex-col gap-6 ${padding} pt-24 pb-12`}>
            <div className="flex flex-col gap-4">
                <h1 className="font-heading text-3xl" data-aos="fade-up">
                    BUKAN CUMA WACANA. INI AKSINYA!
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="100">Setiap foto punya cerita. Setiap Aksi bikin perubahan</h2>
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((c, index) => {
                    return (
                        <div key={c.id} data-aos="fade-up" data-aos-delay={String(index * 75)}>
                            <Category
                                id={c.id}
                                size="sm"
                                isActive={selectedCategory === c.id}
                                onClick={() => setSelectedCategory(c.id)}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="text-sm" data-aos="fade-up">
                {data.length} cerita pilihan dari {categories.length - 1} jenis
                kegiatan
            </div>

            <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 ${padding}`}
            >
                {data.map((item, index) => {
                    return (
                        <div key={item.id} data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
                            <ImageCard
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
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
