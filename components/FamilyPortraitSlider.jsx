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
    <div className='bg-[#EBE6D3] py-28 px-12 justify-center align-center w-full'>
        <div className='sm:flex items-center'>
            <div className='w-full md:w-1/2 px-8'>
                <h3 className='text-xl md:text-4xl md:font-bold text-left tracking-wide'>{images[currentIndex].name}</h3>
                <p className='font-rubik text-left text-xl font-light tracking-wide mb-12 w-full tracking-wide'>{images[currentIndex].intro}</p>
            </div>
            
            <motion.div  
                className='w-full md:w-1/2'>
                <Link href="/collections/family-portrait/details">
                    <Image
                        key={currentIndex}
                        src={images[currentIndex].url}
                        alt="Voids"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto" />
                </Link>
                <div className='flex w-28 align-center justify-between mt-12 font-rubik'>
                    <div className='w-12 h-12 bg-white items-center flex align-center justify-center font-light hover:bg-[#EB6F07] hover:text-white' onClick={handlePrevious}>
                        ‹
                    </div>
                    <div className='w-12 h-12 bg-white items-center flex align-center justify-center font-light hover:bg-[#EB6F07] hover:text-white' onClick={handleNext}>
                        ›
                    </div>
                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default FamilyPortraitSlider