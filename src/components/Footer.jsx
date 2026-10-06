import { Link } from 'react-router-dom'
import Logo from "@/components/Logo";
import { Copyright } from 'lucide-react';
import { padding } from '@/lib/styles'

function Footer() {
    return (
        <footer className={`bg-custom-brown w-full h-auto p-4 flex flex-col text-custom-white gap-4 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-6 ${padding} justify-between`}>
            <div className='bg-red-500'>
                <Logo place={false}  />
                <h1 className='text-3xl font-heading font-black text-center'>PEDULIBUMI</h1>
            </div>
            <div className='flex flex-col bg-green-500 gap-4 md:col-span-2 md:grid md:grid-cols-2 md:gap-8 place-content-between flex'>
                <div>
                    <h1 className='text-custom-yellow font-bold text-xl'>TENTANG</h1>
                    <p>Gerakan sederhana untuk membiasakan pilah dan 3R di lingkungan</p>
                </div>
                <div className=''>
                    <h1 className='text-custom-yellow font-bold text-xl'>MENU</h1>
                    <Link to='/' className='inline hover:text-custom-yellow'>Beranda</Link>
                    <br></br>
                    <Link to='/tips-dan-aksi' className='hover:text-custom-yellow inline'>Tips dan Aksi</Link>
                    <br></br>
                    <Link to='/galeri' className='hover:text-custom-yellow inline'>Galeri</Link>
                    <br></br>
                    <Link to='/eko-suit' className='hover:text-custom-yellow inline'>Eko Suit</Link>
                    <br></br>
                    <Link to='/eko-pilah' className='hover:text-custom-yellow inline'>Pilah Sampah</Link>
                </div>
            </div>
            <div className='border-t bg-yellow-500 border-custom-white pt-4 md:col-span-3 '>
                <p className='flex flex-wrap gap-2 text-gray-200 text-sm items-center'>
                    <Copyright size='14' />
                    <span>2025 PEDULI BUMI, SMKN 46 JAKARTA.</span>
                </p>
                <p className='mt-2 font-bold'>PILAH ITU GAMPANG, YANG SUSAH MULAINYA</p>
            </div>
        </footer>
    )
}

export default Footer