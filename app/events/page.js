import Image from "next/image"
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Events - Entities Studio',
  description: '',
}

const page = () => {
  return (
    <section className='mt-24'>
      <div className='h-auto py-12 md:py-24 lg:py-16 px-8 md:flex items-center justify-between bg-white border-gray-700 border-2 w-5/6 m-auto'>
          <div className='w-full md:w-1/2 justify-center m-auto md:mx-4 md:order-2'>
            <Image
              src='/event.png'
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt="Tamas Art Live"
            />
          </div>

          <div className="align-center md:m-auto md:w-1/2">
            <h2 className='uppercase text-xl font-bold mt-8 px-4'>Ended</h2>

            <Link href='/events/tamas-art-live'>
              <p className='text-4xl underline font-bold px-4 md:p-0'>Tamas Art live @DINA</p>
            </Link>

            <div className='w-full bg-[#d5d5d5] font-rubik m-auto tracking-wider'>
              <p className='mt-4 px-4 py-4 text-sm'>90s Themed Red Carpet Funky Disco Party</p>
              <p className='text-sm text-right pr-4 pb-4'>⚡ Powered by <span>@Ifyscocktails</span></p>
            </div>
          </div>
      </div>
      

      <p className='my-20 w-4/6 font-bold text-black opacity-70 ml-12 md:ml-20 text-xl'>good things come to those who wait..</p>

      <div className='flex w-full mt-24 mb-4 justify-center'>
        <Link href="/collections" className='flex items-center justify-center font-rubik bg-gray-300 text-center uppercase font-bold p-3 w-[480px] h-14 border-none text-sm hover:underline hover:text-white transition duration-500'>
            ‹ Explore Collections ›
        </Link>
      </div>

    </section>
  );
}

export default page