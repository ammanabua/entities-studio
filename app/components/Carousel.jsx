'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi"


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCards, Autoplay, Pagination, Navigation, EffectCreative } from "swiper";

const Carousel = ({ collection }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 2000);

        return () => clearTimeout(timeout);
    }, [])
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex + 1 === collection.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? collection.length - 1 : prevIndex - 1);
    };
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    }

    
    


  return (
    <>
        <div key={collection[currentIndex]} className="flex w-full justify-center items-center lg:items-start">
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ y:200, opacity:0, }}
                    animate = {{opacity: 1, y: 0, transition:{duration: 0.8}}}
                    exit={{opacity: 0, y: -50, transition:{duration: 0.4} }}
                    key={currentIndex}
                    className='w-full md:w-1/2 px-4 lg:w-1/3 lg:order-2'>
                    <h3 className='text-xl md:text-4xl md:font-bold text-left tracking-wide mb-8'>{collection[currentIndex].title}</h3>
                    <p className='font-rubik text-left text-xl font-light tracking-wider mb-12 w-full tracking-wide'>{collection[currentIndex].desc}</p>
                </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ x:-200, opacity:0, }}
                    animate = {{opacity: 1, y: 0, x:0, transition:{duration: 0.8}}}
                    exit={{opacity: 0}}
                    key={currentIndex}
                    className='w-full md:w-1/2 lg:w-1/3 mr-8'>
                    <Link href={`/images/${collection[currentIndex].slug}`}>
                        <Image
                            src={collection[currentIndex].url}
                            alt="Voids"
                            width="490"
                            height="0"
                            sizes="100vw"
                            className="w-full lg:h-96" />
                    </Link>

                    {/* Navigation Links for LAPTOPS & SMALLER */}

                    <div className='lg:hidden flex w-28 align-center justify-between mt-12 font-rubik'>
                        <div className='w-12 h-12 bg-white items-center flex align-center justify-center font-light hover:bg-[#EB6F07] hover:text-white' onClick={handlePrevious}>
                            ‹
                        </div>
                        <div className='w-12 h-12 bg-white items-center flex align-center justify-center font-light hover:bg-[#EB6F07] hover:text-white' onClick={handleNext}>
                            ›
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

            {/* NAV LINKS FOR LARGE SCREENS */}
        <div className='hidden lg:flex w-2/3 lg:ml-60 items-center justify-between bottom-4 font-rubik z-40 text-[#777D96] absolute px-16'>
            <div className="flex w-44 justify-between font-rubik text-xl font-medium">
                <button className='w-24 h-24 bg-transparent items-center flex align-center justify-center cursor-pointer' onClick={handlePrevious}>
                    <TfiAngleLeft className="mr-2" /> Prev
                </button>
                <button className='w-24 h-24 bg-transparent items-center flex align-center justify-center cursor-pointer' onClick={handleNext}>
                    Next <TfiAngleRight className="ml-2" />
                </button>
            </div>
            <div className="font-rubik flex items-center">
                <span className="text-[40px] text-[#32374B]">{currentIndex <= 8 ? '0' : ''}{currentIndex + 1}</span><span className="text-xl w-8"><span>/</span>{collection.length}</span>
            </div>
        </div>
    </>
  )
}

export default Carousel