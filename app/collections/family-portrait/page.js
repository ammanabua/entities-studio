import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <section className='flex-col w-full align-center items-center text-center pt-28 mb-4'> 
        <h2 className='text-4xl font-bold uppercase mb-20'>
            Family Portrait
        </h2>

        <div className='bg-[#EBE6D3] h-screen py-28 px-12 flex-col align-center'>
            <h3 className='text-xl text-left'>Voids</h3>
            <p className='font-rubik text-left text-xl font-light tracking-wide mb-12'>Patience comes at a price, when you live on dreams and hopes. Bide your time, wait your turn - a pit of wants are formed as you ignore the world around you.</p>
            
            <Image
                src='/family-portrait/Voids.jpg.webp'
                width={295}
                height={223}
                alt="Voids"
            />
        </div>

        <div className='mt-12'>
            <h2 className='text-2xl uppercase'>The Booklet</h2>
            <p className='font-rubik text-xl text-semibold tracking-wider mt-4'>(swipe right to left)</p>
        </div>

        <div className='border-dashed border-black border-4 mb-16'>
            <h2>
                The FLIPBOOK
            </h2>
        </div>

        <div className='flex justify-center w-full'>
            <Image
                src="/family-portrait.png"
                width={250}
                height={250}
                alt="Family Portrait"
            />
        </div>
        <div className='flex - justify-center w-full'>
            <Link href="/collections" className='font-rubik bg-gray-300 uppercase font-bold p-3 w-5/6 border-none text-center text-sm mt-20'>
                Back to Collections
            </Link>
        </div>
    </section>
  )
}

export default page