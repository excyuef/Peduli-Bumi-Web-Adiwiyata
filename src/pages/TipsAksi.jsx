import Organik from "../assets/organik.svg?react";
import Anorganik from "../assets/anorganik.svg?react";
import B3 from "../assets/b3.svg?react";
import Residu from "../assets/residu.svg?react";

import Reduce from "../assets/reduce.svg?react";
import Reuse from "../assets/reuse.svg?react";
import Recycle from "../assets/recycle.svg?react";

import { ShieldCheck } from "lucide-react";

import { padding } from '@/lib/styles'

import { tempatSampah, threeR } from '@/data/tipsAksi'

const iconMap = {
    Organik,
    Anorganik,
    B3,
    Residu,
};

const iconRMap = {
    Reduce,
    Reuse,
    Recycle,
};

function TrashCard({ jenis, sub, img, bg, sampah, tips }) {
    const IconComponent = iconMap[img];
    return (
        <div
            className={`${bg} w-full min-h-88 h-full flex flex-col border-black border-3 shadow-black shadow hover:-translate-y-1 duration-300`}
        >
            <div className="w-full flex-1 p-4 place-content-between flex flex-col">
                <h1 className="text-xl font-semibold font-space">{jenis}</h1>{" "}
                <div className="flex justify-center content-between">
                    {IconComponent && <IconComponent />}
                </div>
                <p className="font-semibold">{sub}</p>{" "}
            </div>
            <div className="w-full bg-custom-white border-t-3 border-black p-4">
                <p className="font-semibold mb-2">{sampah}</p>
                <p className="text-sm">{tips}</p>
            </div>
        </div>
    );
}

function Hero() {
    return (
        <div className="w-full h-auto bg-custom-white flex flex-col py-20 pt-28 px-4 gap-4 sm:px-6 md:px-8 lg:px12 xl:px-16">
            <div>
                <h1 className="font-heading text-5xl mb-4">
                    SALAH BUANG? TIDAK LAGI
                </h1>
                <p className="text-xl">
                    Kenali isinya, cek labelnya, lalu pilih tempatnya. Empat
                    kategori ini bikin pilah sampah jadi lebih gampang.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {tempatSampah.map((tempat) => (
                    <TrashCard
                        key={tempat.jenis}
                        jenis={tempat.jenis}
                        sub={tempat.sub}
                        img={tempat.img}
                        bg={tempat.bg}
                        sampah={tempat.sampah}
                        tips={tempat.tips}
                    />
                ))}
            </div>
            <div className="w-full min-w-0 bg-custom-yellow flex gap-3 p-4 border-3 border-black justify-center items-center">
                <ShieldCheck
                    size={48}
                    className="size-10 md:size-14 shrink-0"
                />
                <p className="min-w-0 flex-1 wrap-break-word text-sm md:text-base font-bold leading-relaxed">
                    B3 bukan proyek siswa. Guru atau petugas terlatih menyimpan
                    dengan aman dan menyerahkannya ke pengelola berizin. Jangan
                    dicampur atau dibakar.
                </p>
            </div>
        </div>
    );
}

function RCard({ no, icon, judul, sub, caption, tips, className = "" }) {
    const IconComponent = iconRMap[icon];
    return (
        <div
            className={`bg-custom-white min-h-90 h-full flex flex-col border-3 border-black p-4 hover:-translate-y-1 duration-300 ${className}`}
        >
            <div className="flex-1 flex flex-col">
                <div className="flex place-content-between">
                    <h1 className="font-bold text-5xl">{no}</h1>
                    {IconComponent && (
                        <IconComponent className="hover:[animation:spin_3s_linear_infinite]" />
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-4xl">{judul}</h1>
                    <p className="font-semibold">{sub}</p>
                    <p>{caption}</p>
                </div>
            </div>
            <div className="border-t-3 border-black">
                <ol className="flex flex-col gap-2 pt-4">
                    {tips.map((item) => (
                        <li className="flex gap-2">
                            <span className="font-bold">✓</span>
                            {item}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

function Main() {
    return (
        <div className={`w-full h-auto bg-custom-green flex flex-col p-4 py-12 gap-4 border-t-3 border-black ${padding} `}>
            <div>
                <h1 className="font-heading text-5xl mb-4">
                    3R BUKAN CUMA SLOGAN
                </h1>
                <p className="text-xl">
                    Urutannya penting: kurangi dulu, pakai kembali, baru daur
                    ulang. Mulai dari hal yang bisa kamu lakukan hari ini.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {threeR.map((r, index) => (
                    <RCard
                        key={r.no}
                        no={r.no}
                        icon={r.icon}
                        judul={r.judul}
                        sub={r.sub}
                        caption={r.caption}
                        tips={r.tips}
                        className={
                            index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                        }
                    />
                ))}
            </div>
            <div className="w-full min-w-0 bg-custom-yellow p-4 border-3 border-black -rotate-1 hover:rotate-0 duration-300">
                <p className="min-w-0 wrap-break-word text-sm md:text-base font-bold text-center leading-relaxed">
                    Tidak harus sempurna, yang penting rutin.
                </p>
            </div>
        </div>
    );
}

function TipsAksi() {
    return (
        <div className="bg-custom-white w-full h-full">
            <Hero />
            <Main />
        </div>
    );
}

export default TipsAksi;
