import { Link } from 'react-router-dom'
import { Earth, House, Leaf, Image } from 'lucide-react'

const navItems = [
    { name: 'Beranda', path: '/', icon: 'House'},
    { name: 'Tips dan Aksi', path: '/tips-dan-aksi', icon: 'Leaf'},
    { name: 'Galeri', path: '/galeri', icon: 'Image'}
]

function NavBar() {
    return (
        <nav className='w-full h-16 bg-green-500 flex items-center p-4'>
            <div className='flex items-center gap-1'>
                <Earth className='text-custom-white font-semibold' />
                <h1 className='text-custom-white font-semibold text-xl '>PeduliBumi</h1>
            </div>
            <div className='w-full'>

            </div>
        </nav>
    )
}

export default NavBar