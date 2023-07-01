import Image from "next/image"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className=''>
      <div className='h-screen py-16 px-8 md:h-auto md:flex items-center justify-center bg-white border-gray-700 border-2 w-5/6 m-auto'>
          <div className='w-full justify-center'>
            <Image
              src='/event.png'
              width={265}
              height={254}
              alt='Event - Tamas Art Live'
              className="m-auto"
            />
          </div>

          <div className="align-center md:m-auto">
            <h2 className='uppercase text-xl font-bold mt-8 px-4'>Ended</h2>

            <Link href='/events/tamas-art-live'>
              <p className='text-4xl underline font-bold px-4 md:p-0'>Tamas Art live @DINA</p>
            </Link>

            <div className='w-full bg-[#d5d5d5] font-rubik m-auto tracking-wider'>
              <p className='mt-8 px-4 py-8 text-sm'>90s Themed Red Carpet Funky Disco Party</p>
              <p className='text-sm text-right px-4 pb-4'>⚡ Powered by <span>@Ifyscocktails</span></p>
            </div>
          </div>
      </div>
      

      <p className='my-20 w-4/6 font-bold text-black opacity-70 ml-8 text-xl'>good things come to those who wait..</p>

      <div className='flex w-full mt-24 mb-4 justify-center'>
        <Link href="/collections" className='font-rubik bg-gray-300 text-center uppercase font-bold p-3 w-96 border-none text-sm'>
            Explore Collections
        </Link>
      </div>

    </section>
  );
}

export default page