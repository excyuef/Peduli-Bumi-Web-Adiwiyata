import Organik from '../assets/organik.svg?react'
import Anorganik from '../assets/anorganik.svg?react'
import B3 from '../assets/b3.svg?react'
import Residu from '../assets/residu.svg?react'

import Reduce from '../assets/reduce.svg?react'
import Reuse from '../assets/reuse.svg?react'
import Recycle from '../assets/recycle.svg?react'

import { ShieldCheck } from 'lucide-react'

const iconMap = {
    Organik,
    Anorganik,
    B3,
    Residu
}

const tempatSampah = [
    { jenis: 'ORGANIK', sub: 'Mudai Terurai', img: 'Organik', bg: 'bg-custom-green', sampah: 'Sisa nasi, kulit buah, dan daun kering', tips: 'Pisahkan dari plastik. Masukkan ke wadah organik untuk kompos.' },
    { jenis: 'ANORGANIK', sub: 'Bersih & Kering', img: 'Anorganik', bg: 'bg-custom-yellow', sampah: 'Botol plastik, kaleng, kardus, dan kertas bersih', tips: 'Kosongkan, bersihkan, lalu keringkan. Masukkan ke tempat sampah.' },
    { jenis: 'B3', sub: 'Berbahaya & Berbau', img: 'B3', bg: 'bg-custom-red', sampah: 'Baterai bekas, lampu rusak, dan kemasan bahan kimia.', tips: 'Jangan sentuh, buka, atau olah sendiri. Laporkan kepada guru.' },
    { jenis: 'RESIDU', sub: 'Tidak Dapat Diolah', img: 'Residu', bg: 'bg-custom-purple', sampah: 'Tisu kotor, bungkus berminyak, dan masker bekas.', tips: 'Jangan sentuh, buka, atau olah sendiri. Laporkan kepada guru.' }
];

const threeR = [
    { no: '01', icon: 'Reduce', judul: 'Reduce', sub: 'KURANGI DARI AWAL', caption: 'Sampah terbaik adalah sampah yang tidak jadi kita hasilkan.', tips: ['Bawa tumbler dan kotak bekal', 'Ambil makanan secukupnya', 'Tolak sedotan sekali pakai'] },
    { no: '02', icon: 'Reuse', judul: 'Reuse', sub: 'PAKAI LAGI, LAGI, DAN LAGI', caption: 'Barang masih layak? Beri kesempatan untuk dipakai kembali', tips: ['Gunakan sisi kosong kertas', 'Tukar buku dan alat tulis layak', 'Jadikan toples wadah alat kelas'] },
    { no: '03', icon: 'Recycle', judul: 'Recycle', sub: 'OLAH JADI SESUATU', caption: 'Pilah bahan yang tepat supaya bisa punya kehidupan baru.', tips: ['Setor kertas ke bank sampah', 'Komposka sisa buah dan daun', 'Pisahkan botol bersih untuk didaur ulang'] }
]

const iconRMap = {
    Reduce,
    Reuse,
    Recycle
}

function TrashCard({jenis, sub, img, bg, sampah, tips}) {
    const IconComponent = iconMap[img]
    return (
        <div className={`${bg} w-full h-min-90 border-black border-3 shadow-black shadow`}>
            <div className='w-full h-[70%] p-4  place-content-between flex flex-col'>
                <h1 className='text-xl font-semibold font-space'>{jenis}</h1>                    <div className='flex justify-center content-between'>
                    {IconComponent && <IconComponent />}
                </div>
                <p className='font-semibold'>{sub}</p>                </div>
              <div className='w-full h-[30%] bg-custom-white border-t-3 border-black p-4'>
                <p className='font-semibold mb-2'>{sampah}</p>                    
                <p className='text-sm'>{tips}</p>
              </div>
        </div>
    )
}

function Hero() {
    return (
        <hero className='w-full h-auto bg-custom-white flex flex-col py-20 pt-28 px-4 gap-4'>
            <div>
                <h1 className='font-heading text-5xl mb-4'>SALAH BUANG? TIDAK LAGI</h1>
                <p className='text-xl'>Kenali isinya, cek labelnya, lalu pilih tempatnya. Empat kategori ini bikin pilah sampah jadi lebih gampang.</p>
            </div>
            <div className='flex flex-col gap-4'> 
                {tempatSampah.map((tempat) => (
                    <TrashCard key={tempat.jenis} jenis={tempat.jenis} sub={tempat.sub} img={tempat.img} bg={tempat.bg} sampah={tempat.sampah} tips={tempat.tips} />
                ))}
                
            </div>
            <div className='w-full bg-custom-yellow flex items-center gap-2 p-4 border-3 border-black'>
                <ShieldCheck size={100} />
                <p className='font-bold'>B3 bukan proyek siswa. Guru atau petugas terlatih menyimpan dengan aman dan menyerahkannya ke pengelola berizin. Jangan dicampur atau dibakar.</p>
            </div>
        </hero>
    )
}

function RCard({no, icon, judul, sub, caption, tips}) {
    const IconComponent = iconRMap[icon]
    return (
        <div className='bg-custom-white h-90 flex flex-col border-3 border-black p-4'>
                    <div className='h-[60%] flex flex-col'>
                        <div className='flex place-content-between'>
                            <h1 className='font-bold text-5xl'>{no}</h1>
                            {IconComponent && <IconComponent />}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold text-4xl'>{judul}</h1>
                            <p className='font-semibold'>{sub}</p>
                            <p>{caption}</p>
                        </div>
                    </div>
                    <div className='h-[40%] border-t-3 border-black'>
                        <ol className='flex flex-col gap-2 pt-4'>
                            {tips.map((item) => (
                                <li className='flex gap-2'>
                                    <span className="font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
    )
}

function Main() {
    return (
        <div className='w-full h-auto bg-custom-green flex flex-col p-4 py-12 gap-4 border-t-3 border-black'>
            <div>
                <h1 className='font-heading text-5xl mb-4'>3R BUKAN CUMA SLOGAN</h1>
                <p className='text-xl'>Urutannya penting: kurangi dulu, pakai kembali, baru daur ulang. Mulai dari hal yang bisa kamu lakukan hari ini.</p>
            </div>
            <div className='flex flex-col gap-4'>
                {threeR.map((r) => (
                    <RCard key={r.no} no={r.no} icon={r.icon} judul={r.judul} sub={r.sub} caption={r.caption} tips={r.tips} />
                ))}
            </div>
            <div className='w-full bg-custom-yellow gap-2 p-4 border-3 border-black -rotate-2'>
                <p className='font-bold text-center'>Tidak harus sempurna, yang penting rutin.</p>
            </div>
        </div>
    )
}


function TipsAksi() {
    return(
        <div className="bg-custom-white w-full h-full">
            <Hero />
            <Main />
        </div>
    )
}

export default TipsAksi