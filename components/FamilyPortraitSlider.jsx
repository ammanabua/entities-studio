'use client'
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"


const FamilyPortraitSlider = ({ images }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
    };
    const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1);
    };
    const handleDotClick = (index) => {
    setCurrentIndex(index);
     }


  return (
    <div className='bg-[#EBE6D3] lg:bg-gradient-to-r lg:bg-gradient-90 from-black from-30% via-[#EBE6D3] via-30% to-[#EBE6D3] py-28 lg:py-8 px-12 min-h-screen align-center w-full lg:w-10/12 lg:m-auto overflow-hidden'>
        
        <div className='sm:flex justify-center align-center h-full items-center z-10 lg:absolute'>
            
            <div className='w-full md:w-1/2 px-8 lg:w-1/3 lg:order-2'>
                <h3 className='text-xl md:text-4xl md:font-bold text-left tracking-wide'>{images[currentIndex].name}</h3>
                <p className='font-rubik text-left text-xl font-light tracking-wide mb-12 w-full tracking-wide'>{images[currentIndex].intro}</p>
            </div>
            
            <motion.div  
                className='w-full md:w-1/2 lg:w-1/3'>
                <Link href="/collections/family-portrait/details">
                    <Image
                        key={currentIndex}
                        src={images[currentIndex].url}
                        alt="Voids"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full lg:h-96" />
                </Link>

                {/* Navigation Links */}

                <div className='lg:hidden flex w-28 align-center justify-between mt-12 font-rubik'>
                    <div className='w-12 h-12 bg-white items-center flex align-center justify-center font-light hover:bg-[#EB6F07] hover:text-white' onClick={handlePrevious}>
                        ‹
                    </div>
                    <div className='w-12 h-12 bg-white items-center flex align-center justify-center font-light hover:bg-[#EB6F07] hover:text-white' onClick={handleNext}>
                        ›
                    </div>
                </div>
                <div className='invisible lg:visible flex w-full ml-72 align-center justify-between mt-28 bottom-0 font-rubik'>
                    <div className="flex w-28 justify-between">
                        <div className='w-12 h-12 bg-transparent items-center flex align-center justify-center font-light' onClick={handlePrevious}>
                            ‹ Prev
                        </div>
                        <div className='w-12 h-12 bg-transparent items-center flex align-center justify-center font-light' onClick={handleNext}>
                            Next ›
                        </div>
                    </div>
                    <div>
                        Page No
                    </div>
                </div>
            </motion.div>
        </div>

        {/* LEFT SIDE SOCIAL LINKS */}

        <div className="hidden lg:flex h-screen justify-center items-center align-center absolute left-36 top-60 mt-12 w-1/5 z-30 m-auto">
            <div className="space-y-4">
                <div className="bg-[#1A1A1A] rounded-full p-2">
                    <Link href='https://www.tiktok.com' className="">
                        <Image
                            src='/tiktok.svg'
                            height={20}
                            width={20}
                            alt="Tiktok"
                            className="" />
                    </Link>
                    
                </div>
                <div className="bg-[#1A1A1A] rounded-full p-2">
                    <Link href='https://www.youtube.com' className="">
                        <Image
                            src='/youtube.svg'
                            height={20}
                            width={20}
                            alt="Twitter" />
                    </Link>
                    
                </div>
                <div className="bg-[#1A1A1A] rounded-full p-2">
                    <Link href='https://www.instagram.com' className="">
                        <Image
                            src='/ig.svg'
                            height={20}
                            width={20}
                            alt="Twitter" />
                    </Link>
                    
                </div>
                <div className="bg-[#1A1A1A] rounded-full p-2">
                    <Link href='https://www.twitter.com' className="">
                        <Image
                            src='/twitter.svg'
                            height={20}
                            width={20}
                            alt="Twitter"
                            className="" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FamilyPortraitSlider