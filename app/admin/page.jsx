'use client'
import React from 'react'
import Image from 'next/image'
import AddNewArt from '@/app/components/AddNewArt'
import AddNewCollection from "@/app/components/AddNewCollection";
import AddNewEvent from "@/app/components/AddNewEvent";

const page = () => {
  return (

    <main className='bg-white flex justify-center align-center w-full pb-24'>
        <section className='lg:my-12 w-full min-h-screen'>
            <div className='grid grid-cols-2 border border-red-700 w-full m-auto h-4/5'>
                <div className='flex bg-gray-300 justify-center items-center'>Available Pieces</div>
                <div className='flex bg-blue-200 justify-center items-center'>Collections</div>
                <div className='flex bg-red-200 justify-center items-center'>Events</div>
                <div className='flex bg-yellow-400 justify-center items-center'>Completed Orders</div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <div className='border border-black rounded-xl lg:p-4 cursor-pointer'>
                    <AddNewArt />
                </div>
                <div className='border border-black rounded-xl lg:p-4 cursor-pointer'>
                    <AddNewCollection />
                </div>
                <div className='border border-black rounded-xl lg:p-4 cursor-pointer'>
                    <AddNewEvent />
                </div>
            </div>
        </section>
    </main>
  )
}

export default page