'use client'
import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link';

const Page = () => {

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
    <section className='bg-[#FF6868] w-full flex justify-center'>
      <div className='align-center justify-between mt-32 mb-4 px-8'>
        
        <div className='w-full lg:flex justify-center gap-16'>
          <div className='w-full lg:w-3/5'>
            <Link href="/images/fascination">
              <Image
                src='/tamas-art/fascination-dg.png'
                width='0'
                height='0'
                alt="tamas art"
                className='mb-8 w-full h-auto m-auto'
                sizes="100vw"          
              />

            </Link>


            <Image
              src='/tamas-art/fascination-live.jpg'
              width='0'
              height='0'
              alt='tamas art fascination live'
              className='w-full h-auto m-auto'
              sizes='100vw'
            />
          </div>

          <div className='w-full lg:w-1/4'>
            <h2 className='text-3xl my-12'>A Fascination</h2>

            <div className='bg-[#D5D5D5] w-100 lg:w-72 p-4 mb-12'>
              <p className='font-rubik text-xl'>A Great Big Fish enchanted by a little pistachio shell.</p>
            </div>

            <div className='text-lg [&>*:nth-child(2)]:mb-4 mt-8'>
              <h3>Collection</h3>
              <h3>Tamas Art</h3>
              <h3>Category</h3>
              <h3>Art</h3>
            </div>
          </div>
        </div>

        <div className='flex w-full justify-between font-rubik text-base mt-40 mb-8'>
          <div>Prev</div>
          <div>Home</div>
          <div>Next</div>
        </div>
      </div>

    </section>
  );
}

export default Page