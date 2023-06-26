import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className='bg-[#FF6868] w-full flex justify-center'>
      <div className='flex-col align-center justify-between mt-32 mb-4 w-100'>
        <Image
          src='/tamas-art/fascination-dg.png'
          width={308}
          height={231}
          alt="tamas art" 
          className='mb-8 w-full'
        />



        <Image
          src='/tamas-art/fascination-live.jpg'
          width={308}
          height={231}
          alt='tamas art fascination live'
          className=''
        />

        <h2 className='text-3xl my-12'>A Fascination</h2>

        <div className='bg-[#D5D5D5] w-80 p-4 mb-12'>
          <p className='font-rubik text-xl'>A Great Big Fish enchanted by a little pistachio shell.</p>
        </div>

        <div className='text-lg [&>*:nth-child(2)]:mb-4 mt-8'>
          <h3>Collection</h3>
          <h3>Tamas Art</h3>
          <h3>Category</h3>
          <h3>Art</h3>
        </div>

        <div className='flex w-full justify-between font-rubik text-base mt-40 mb-8'>
          <div>Prev</div>
          <div>Home</div>
          <div>Next</div>
        </div>
      </div>

    </section>
  )
}

export default page