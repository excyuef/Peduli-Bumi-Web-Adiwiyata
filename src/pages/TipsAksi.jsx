import Organik from '../assets/organik.svg?react'
import Anorganik from '../assets/anorganik.svg?react'
import B3 from '../assets/b3.svg?react'
import Residu from '../assets/residu.svg?react'

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
            <div className=''>
                <h1 className='font-heading text-5xl mb-4'>SALAH BUANG? TIDAK LAGI</h1>
                <p className='text-xl'>Kenali isinya, cek labelnya, lalu pilih tempatnya. Empat kategori ini bikin pilah sampah jadi lebih gampang.</p>
            </div>
            <div className='flex flex-col gap-4'> 
                {tempatSampah.map((tempat) => (
                    <TrashCard key={tempat.jenis} jenis={tempat.jenis} sub={tempat.sub} img={tempat.img} bg={tempat.bg} sampah={tempat.sampah} tips={tempat.tips} />
                ))}
                
            </div>
        </hero>
    )
}


function TipsAksi() {
    return(
        <div className="bg-custom-white w-full h-full">
            <Hero />
            <div className='bg-custom-green w-full h-full'>d</div>
        </div>
    )
}

export default TipsAksi