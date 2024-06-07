'use client'
import React from 'react'
import Image from 'next/image'
import AddNewArt from '@/app/components/AddNewArt'

const page = () => {
  return (

    <main className='bg-white flex justify-center align-center w-full pb-24'>
        <section className='my-12 w-full min-h-screen'>
            <div className='grid grid-cols-2 border border-red-700 my-8 w-4/5 m-auto h-4/5'>
                <div className='flex bg-gray-300 justify-center items-center'>Available Pieces</div>
                <div className='flex bg-blue-200 justify-center items-center'>Collections</div>
                <div className='flex bg-red-200 justify-center items-center'>Events</div>
                <div className='flex bg-yellow-400 justify-center items-center'>Completed Orders</div>
            </div>
            <div className='flex lg:space-x-12 justify-center'>
                <div className='border border-black rounded-xl p-4 cursor-pointer'>
                    <div>
                        <AddNewArt />
                    </div>
                </div>
                <div className='border border-black rounded-xl p-4 cursor-pointer'>
                    <Image 
                        src='/collection.png'
                        height={60}
                        width={60}
                        alt="Add New Collection"
                        className="m-auto"
                    />
                    <p>
                        New Collection
                    </p>
                </div>
                <div className='border border-black rounded-xl p-4 cursor-pointer'>
                    <Image 
                        src='/newevent.png'
                        height={60}
                        width={60}
                        alt="Add New 
                        Event"
                        className="m-auto"
                    />
                    <p>
                        New Event
                    </p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page