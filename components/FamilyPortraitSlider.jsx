'use client'
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCards, Autoplay, Pagination, Navigation, EffectCreative } from "swiper";


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
    <div className='bg-[#EBE6D3] lg:bg-gradient-to-r lg:bg-gradient-90 from-black from-25% via-[#EBE6D3] via-25% to-[#EBE6D3] py-28 lg:py-0 px-12 min-h-screen align-center w-full lg:w-10/12 lg:m-auto overflow-hidden'>
        
        <div className='sm:flex justify-center align-center h-full z-10 lg:absolute items-center'>
            
            <div className='w-full md:w-1/2 px-4 lg:w-1/3 lg:order-2'>
                <h3 className='text-xl md:text-4xl md:font-bold text-left tracking-wide mb-8'>{images[currentIndex].name}</h3>
                <p className='font-rubik text-left text-xl font-light tracking-wider mb-12 w-full tracking-wide'>{images[currentIndex].intro}</p>
            </div>
            
            <motion.div  
                className='w-full md:w-1/2 lg:w-1/3 mr-8'>
                <Link href="/images/slug">
                    <Image
                        key={currentIndex}
                        src={images[currentIndex].url}
                        alt="Voids"
                        width="490"
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
            </motion.div>
            <div className='invisible lg:visible flex w-2/3 ml-32 items-center justify-between bottom-4 font-rubik z-40 text-[#777D96] absolute px-16'>
                <div className="flex w-44 justify-between font-rubik text-xl font-medium">
                    <div className='w-24 h-24 bg-transparent items-center flex align-center justify-center cursor-pointer' onClick={handlePrevious}>
                        ‹ Prev
                    </div>
                    <div className='w-24 h-24 bg-transparent items-center flex align-center justify-center cursor-pointer' onClick={handleNext}>
                        Next ›
                    </div>
                </div>
                <div className="font-rubik">
                    <span className="text-4xl text-[#32374B]">{currentIndex + 1}</span><span className="text-xl absolute w-8"> / {images.length}</span>
                </div>
            </div>
        </div>

        {/* LEFT SIDE SOCIAL LINKS */}

        <div className="hidden lg:flex h-screen justify-center items-center align-center absolute left-24 w-1/5 z-30 m-auto">
            <div className="space-y-4">
                <div className="bg-[#1A1A1A] rounded-full p-2">
                    <Link href='https://www.tiktok.com/@entities.studio' target="_blank" className="">
                        <Image
                            src='/tiktok.svg'
                            height={15}
                            width={15}
                            alt="Tiktok"
                            className="" />
                    </Link>
                    
                </div>
                <div className="bg-[#1A1A1A] rounded-full p-2">
                    <Link href='https://www.youtube.com/@chimdidaentity' target="_blank" className="">
                        <Image
                            src='/youtube.svg'
                            height={15}
                            width={15}
                            alt="Twitter" />
                    </Link>
                    
                </div>
                <div className="bg-[#1A1A1A] rounded-full p-2">
                    <Link href='https://www.instagram.com/entities_universe' target="_blank" className="">
                        <Image
                            src='/ig.svg'
                            height={15}
                            width={15}
                            alt="Twitter" />
                    </Link>
                    
                </div>
                <div className="bg-[#1A1A1A] rounded-full p-2">
                    <Link href='https://www.twitter.com/chimdidaentity' target="_blank" className="">
                        <Image
                            src='/twitter.svg'
                            height={15}
                            width={15}
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