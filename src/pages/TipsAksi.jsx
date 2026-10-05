import backgroundLeaf from './../assets/images/background-leaf.png'

function TipsAksi() {
    return(
        <div className="bg-custom-white ">
            <hero className='h-70 block relative bg-green-500 sm:h-78 md:h-86 lg:h-94 xl:h-102'>
                <img src={backgroundLeaf} alt="alt" className='absolute opacity-10 w-full h-full' />
                <div className='p-8 w-full h-full flex flex-col justify-center items-center gap-3 sm:p-16 md:p-24 lg:p-32 xl:px-52 lg:gap-5'>
                    <h1 className="text-2xl text-center font-bold text-cust text-black sm:text-3xl md:text-4xl lg:text-5xl">Apa Saja Yang Sudah Kamu Lakukan Untuk Bumi Kita?</h1>
                    <p className='text-sm text-center text-black sm:text-base md:text-xl  lg:text-2xl'>Langkah nyata dimulai dari kesadaran kolektif dalam mengurangi, memilah, dan mengolah sampah.</p>
                </div>
            </hero>
            <div className='bg-linear-to-b from-green-500 to to-custom-white w-full h-4'></div>
            <div className='bg-custom-white h-80 p-8'>
                <h1 className='text-xl font-bold text-center mb-4'>Hal Yang Dapat Kamu Lakukan Untuk Merawat Bumi</h1>
                <div className='bg-red-500 w-full h-48'>
                    <div className='bg-green-500 w-[50%] h-48'></div>
                </div>
            </div>
        </div>
    )
}

export default TipsAksi