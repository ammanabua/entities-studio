'use client'
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay, Pagination, Navigation, EffectCreative } from "swiper";
import Image from "next/image";

export default function Flipbook({ images }) {
    
  const [collections, setCollections] = useState([])


    
    const getCollections = async () => {
      const res = await fetch('/api/collections');
      const body = await res.json()
      console.log(body.collections)
      setCollections(body.collections)
    } 
    
    useEffect(() => {
      getCollections();
    },[])

  return (
    <>      
        <Swiper
          navigation={true}
          modules={[EffectCreative, Navigation]}
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              origin: 'left center',
              translate: ['-5%', 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: 'right center',
              translate: ['5%', 0, -200],
              rotate: [0, -100, 0],
            },
          }}
          className="font-sans w-4/6 lg:w-1/3 h-[90%] align-center justify-center overflow-hidden m-auto drop-shadow-xl"
        >
          
          {/* FRONT PAGE */}
          <SwiperSlide className="bg-[#E96F1D] align-center h-auto">
            <div className="border-2 border-black m-4 lg:h-[94%] bg-white p-8 space-y-4">
              <Image
                src='/chimdi.png'
                width="0"
                height="0"
                sizes="100vw"
                className="w-full border-2 border-black h-auto rounded-full p-4"
                alt="Chimdi - Entities Studio Artist" 
              />

              <h2 className="border-2 border-black bg-[#E7E7D0] h-16 items-center flex justify-center font-bold tracking-widest text-3xl uppercase">Family Portrait</h2>
              <p>by <br /> Chim'Di </p>

              <Image
                src='/head.png'
                width={70}
                height={46}
                alt='Entities Studio'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
                className="m-auto"
              />          
            </div>
          </SwiperSlide>

          {/* DESC */}

            <SwiperSlide className="bg-[#E96F1D] h-full">
              <div className=" flex justify-center border-2 border-black m-4 lg:h-[94%] bg-white p-8 items-center">
                <div>
                  <p className="font-semibold text-xl">to overcoming boundaries</p>
                  <Image
                    src='/head.png'
                    width={70}
                    height={46}
                    alt='Entities Studio'
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }}
                    className="m-auto" 
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* ACKNOWLEDGEMENT */}

            <SwiperSlide className="bg-[#E96F1D] h-full">
              <div className="border-2 border-black m-4 lg:h-[94%] bg-white p-8 items-center tracking-wide">
                <h1 className="border-2 border-black font-bold text-3xl uppercase p-4 bg-gray-200">Acknowledgement</h1>
                
                <div className="border-2 border-black p-8 bg-gray-200 my-12 leading-7">
                  <p>This exhibition is dedicated to my family, my culture, my lineage. To those I never got the pleasure to meet or spend enough time with. 
                    <br />
                  Their memories flow through my veins, connecting me to a rich heritage filled with joy, wealth and life. 
                    <br />

                    I honor you all.
                  </p>

                  <Image
                    src='/head.png'
                    width={70}
                    height={46}
                    alt='Entities Studio'
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      margin: 'auto'
                    }} 
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* INTRO */}

            <SwiperSlide className="bg-[#E96F1D] h-full">
              <div className="flex border-2 border-black m-4 lg:h-[94%] items-center bg-white p-8 space-y-4 leading-7">
                <div className="space-y-8 text-sm tracking-wide">
                  <p>FAMILY PORTRAIT is a representation of my childhood memories, emotions and concepts of my family unit through my adult mind. </p>
                  
                  <p>Each artwork gradually unfold and shines a light on specific periods of my life growing up within my family. Going through emotions that weren't explored as a child or overlooked due to future aspirations and understanding to compromise. </p>
                  
                  <p>Acknowledging these memories allows me as a being, a person, a daughter, a woman to accept my past and venture fearlessly through the world around me.</p>

                  <p>As well as looking forward to the possibility of the day I expand my own family unit which will stem from the love, patience and understanding I cultivated as a child.</p>

                  <Image
                    src='/head.png'
                    width={60}
                    height={36}
                    alt='Entities Studio'
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      margin: 'auto'
                    }} 
                  />
                </div>
              </div>
            </SwiperSlide>
            {collections.map((collection) => (
              <SwiperSlide key={collection.title} className="bg-[#E96F1D] align-center h-full items-center">
                  <div className="border-2 border-black m-4 lg:h-[94%] bg-white p-8">
                    <div>
                      {collection.title}
                    </div>
                    <div>
                      <Image src="/collection1.png"
                      alt={collection.title}
                      width="0"
                      height="0"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        margin: 'auto'
                        }} 
                        />
                    </div>
                    <div>
                      {collection.desc}
                    </div>
                  </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  );
}