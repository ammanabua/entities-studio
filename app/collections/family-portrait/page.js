'use client'
import Flipbook from '@/components/Flipbook'
import Image from "next/image"
import Link from 'next/link'
import { motion } from 'framer-motion'
import FamilyPortraitSlider from '@/components/FamilyPortraitSlider'
import { useEffect, useState } from 'react'
import { json } from 'micro'





export default function Page () {

  const [images, setImages] = useState([])

  // RUN FUNCTION ON PAGE LOAD TO GET IMAGES FROM DB
  useEffect(() => {
    getImages();
  },[]);



  // GET ALL IMAGES FROM DB
  async function getImages () {
    const res = await fetch('http://localhost:3000/api/images');
    const body = await res.json()
    console.log(body.images)
    setImages(body.images)
  } 

  

  //FILTER IMAGES FOR THE FAMILY-PORTRAIT COLLECTION
  const collection = images.filter((item) => {
    return item.tag == "family-portrait"
  })

  console.log(collection)

  return (
    <>
      {!collection ? <section>
        Loading!
      </section> : 
      <section className='w-full align-center text-center pt-28 mb-4'> 
          <h2 className='text-4xl font-bold uppercase mb-20'>
              Family Portrait
          </h2>

          <div>
            <FamilyPortraitSlider collection={collection} />
          </div>

          <div className='mt-12'>
              <h2 className='text-2xl uppercase'>The Booklet</h2>
              <p className='font-rubik text-xl text-semibold tracking-wider mt-4'>(swipe right to left)</p>
          </div>

          <div className='h-screen border-dashed border-black border-4 mb-16 flex justify-center align-center'>
              <Flipbook collection={collection} />
          </div>

          <div className='flex justify-center w-full'>
              <Image
                  src="/family-portrait.png"
                  width={250}
                  height={250}
                  alt="Family Portrait"
                  sizes="100vw"
                  style={{
                      width: "100%",
                      height: "auto"
                  }} />
          </div>
          <div className='flex justify-center items-center w-full'>
              <Link href="/collections" className='flex font-rubik bg-gray-300 uppercase font-bold p-3 h-14 w-[480px] border-none items-center justify-center text-sm mt-20 hover:text-white hover:underline transition duration-500'>
                  ‹ Back to Collections ›
              </Link>
          </div>
      </section>
      }
    </>
  );
}
