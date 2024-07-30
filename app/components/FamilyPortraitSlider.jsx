

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { getFamilyPortrait } from "@/app/lib/data";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCards, Autoplay, Pagination, Navigation, EffectCreative } from "swiper";
import Carousel from "./Carousel"


export default async function FamilyPortraitSlider (){

  const collection = await getFamilyPortrait();
    
  return (
    <>
        <div className='bg-[#EBE6D3] lg:bg-gradient-to-r lg:bg-gradient-90 from-black from-25% via-[#EBE6D3] via-25% to-[#EBE6D3] py-28 lg:py-0 px-12 min-h-screen align-center w-full lg:w-10/12 lg:m-auto overflow-hidden'>
            
            {/* IMAGE SLIDER */}
        
            <div className='sm:flex justify-center align-center h-full z-10 lg:absolute items-center'>
                <div className="w-full">
                    <Carousel collection={collection} />
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
    </>
  )
}
