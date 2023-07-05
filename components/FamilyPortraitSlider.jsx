import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"


const FamilyPortraitSlider = () => {
  return (
    <div className='bg-[#EBE6D3] py-28 px-12 justify-center align-center items-center w-full'>
        <div className='md:flex'>
            <div className='w-full md:w-1/2'>
                <h3 className='text-xl md:text-4xl md:font-bold text-left'>Voids</h3>
                <p className='font-rubik text-left text-xl font-light tracking-wide mb-12 w-full'>Patience comes at a price, when you live on dreams and hopes. Bide your time, wait your turn - a pit of wants are formed as you ignore the world around you.</p>
            </div>
            
            <motion.div  
                className='w-full md:w-1/2'>
                <Link href="/collections/family-portrait/details">
                    <Image
                        src='/collection1.png'
                        alt="Voids"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto" />
                </Link>
            </motion.div>
        </div>

        <div className='flex w-28 align-center justify-between mt-12 font-rubik'>
            <Link href='/' className='w-12 h-12 bg-white items-center flex align-center justify-center font-light hover:bg-[#EB6F07] hover:text-white'>
                ‹
            </Link>
            <Link href='/' className='w-12 h-12 bg-white items-center flex align-center justify-center font-light hover:bg-[#EB6F07] hover:text-white'>
                ›
            </Link>
        </div>
    </div>
  )
}

export default FamilyPortraitSlider