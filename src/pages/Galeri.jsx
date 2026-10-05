import GaleriImageCard from "@/components/GalleryImageCard";

export default function Galeri() {
    return (
        <div className="grid grid-cols-3 gap-x-6 h-full">
            <div
            className="flex flex-col gap-6">
                <GaleriImageCard />
                <GaleriImageCard />
                <GaleriImageCard />
            </div>
                        <div
            className="flex flex-col gap-6">
                <GaleriImageCard />
                <GaleriImageCard />
                <GaleriImageCard />
            </div>
                        <div
            className="flex flex-col gap-6">
                <GaleriImageCard />
                <GaleriImageCard />
                <GaleriImageCard />
            </div>
        </div>
    );
}
