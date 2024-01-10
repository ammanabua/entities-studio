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
import Link from "next/link";

export default function Flipbook({ collection }) {  

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
            <div className="flex justify-center border-2 border-black m-4 lg:h-[94%] bg-white p-8 items-center tracking-wide">
              <div>
                <h1 className="border-2 border-black font-bold text-3xl uppercase p-4 bg-gray-200">Acknowledgement</h1>
                
                <div className="border-2 border-black p-8 bg-gray-200 my-12 space-y-8 leading-7">
                  <p>This exhibition is dedicated to my family, my culture, my lineage. To those I never got the pleasure to meet or spend enough time with.</p>
                  <p>Their memories flow through my veins, connecting me to a rich heritage filled with joy, wealth and life.</p>

                  <p>I honor you all.</p>

                  <Image
                    src='/head.png'
                    width={60}
                    height={40}
                    alt='Entities Studio'
                    style={{
                      maxWidth: "100%",
                      height: 'auto',
                      margin: 'auto'
                    }} 
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* INTRO */}

          <SwiperSlide className="bg-[#E96F1D] h-full">
            <div className="flex border-2 border-black m-4 lg:h-[94%] items-center bg-[#E7E7D0] p-8 space-y-4">
              <div className="space-y-8 text-sm tracking-wide leading-6">
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

          {/*ART PAGES */}
          {collection.map((item) => (
            <SwiperSlide key={item._id} className="bg-[#E96F1D] align-center h-full items-center">
                <div className="border-2 border-black m-4 lg:h-[94%] bg-white p-8">
                  <div>
                    <Link href={`/images/${item.slug}`}>
                      <Image 
                        src={item.url}
                        alt={item.title}
                        width="400"
                        height="0"
                        className="w-full lg:h-72" 
                      />
                    </Link>
                  </div>
                  <div className="border-2 border-black p-4 bg-gray-200 mt-4 h-52">
                    <h2 className="font-rubik text-3xl font-bold">{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                  <div className="flex w-full justify-end mt-4 right-8">
                    <Image
                      src='/head.png'
                      width={40}
                      height={26}
                      alt='Entities Studio'
                      className="flex"
                    />
                  </div>
                </div>
              </SwiperSlide>
          ))}

          {/* BACK PAGE */}

          <SwiperSlide className="bg-[#E96F1D] h-full">
            <div className="flex flex-col justify-center border-2 border-black m-4 lg:h-[94%] bg-white p-2 items-center tracking-wide">
              <div className="border-2 border-black bg-[#E7E5CE] p-4 w-11/12">
                <h1 className="font-bold text-3xl uppercase mb-4">Artist Bio</h1>
                <p className="text-xs">Making sure that dreams and moments do not fade away without being acknowledged.</p>
              </div>

              <div className="border-2 border-black bg-[#E7E5CE] my-4">
                <div className="text-xs tracking-widest pt-4 px-2 space-y-4">
                  <p>This collection is centered around my move to the UK with my family as a child, being close with my family and holding on to my memories of my time in Nigeria. I explore my childhood memories and me coming to terms with my growth and development as an individual, accepting my successes and failures within my childhood.</p>
                  <p>This collection honors my lineage and family for being there along the way, guiding and strengthening me through each of my decisions.</p>

                  <p>FAMILY PORTRAIT will connect with the art communities that uphold values and principles that reflect mine, such as creativity, fearlessness and individuality. I want this work to encourage and inspire others, challenging them to venture outside their comfort zone and embrace their changes.</p>

                  <div className="w-100 flex justify-end">
                    <Image
                      src='/head.png'
                      width={50}
                      height={46}
                      alt='Entities Studio'
                      className=""
                    />
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}

              <div className="my-4 w-100 flex justify-between text-[0.5rem] font-bold gap-4 tracking-tigher">
                <div className="flex justify-center items-center">
                    <Link href='https://www.entities.studio' target="_blank" className="">
                        <Image
                            src='/www.png'
                            height={25}
                            width={25}
                            alt="Tiktok"
                            className="m-auto" 
                        />

                        <p className="">https://entities.studio</p>
                    </Link>   
                </div>
                <div className="flex justify-center items-center">
                    <Link href='https://www.tiktok.com/@entities.studio' target="_blank" className="">
                        <Image
                          src='/tiktokf.svg'
                          height={25}
                          width={25}
                          alt="Tiktok"
                          className="m-auto" 
                        />

                        <p className="">@entities.studio</p>
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link href='https://www.youtube.com/@chimdidaentity' target="_blank" className="">
                      <Image
                        src='/youtubef.svg'
                        height={25}
                        width={25}
                        alt="Youtube"
                        className="m-auto"
                      />

                      <p className="">Chim'Di Da Entity</p>

                    </Link>
                    
                </div>
                <div className="flex justify-center items-center">
                    <Link href='https://www.instagram.com/entities_universe' target="_blank" className="">
                        <Image
                          src='/instaf.svg'
                          height={25}
                          width={25}
                          alt="Twitter" 
                          className="m-auto"
                        />

                        <p className="">@entities_universe</p>
                    </Link>
                    
                </div>
                <div className="flex justify-center items-center">
                    <Link href='https://www.twitter.com/chimdidaentity' target="_blank" className="">
                        <Image
                          src='/twitterf.svg'
                          height={25}
                          width={25}
                          alt="Twitter"
                          className="m-auto" 
                        />

                        <p className="">@chimdaentity</p>
                    </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
    </>
  );
}