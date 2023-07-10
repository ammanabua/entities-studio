'use client'
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default async function Flipbook() {

  async function getCollections() {
    let res = await fetch('http://localhost:3000/api/collections');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return res.json();
  }
  
  let { collections } = await getCollections()
    
  return (
    <>      
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-2/4 align-center justify-center overflow-hidden"
        >

          {collections.map((collection) => (
            <SwiperSlide className="bg-white" key={collection.title}>
              {collection.title}
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
}