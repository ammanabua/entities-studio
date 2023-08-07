import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className='bg-white min-h-content flex justify-center align-center'>
        <section className='my-12'>
            <div className='w-full border border-red-700 my-8'>
                Collections & Events
            </div>
            <div className='flex lg:space-x-12'>
                <div className='border border-black rounded-xl p-8 cursor-pointer'>
                    <Image 
                        src='/paint.png'
                        height={90}
                        width={90}
                        alt="Add New Artwork"
                        className="m-auto"
                    />
                    <p>
                        New Art
                    </p>
                </div>
                <div className='border border-black rounded-xl p-8 cursor-pointer'>
                    <Image 
                        src='/collection.png'
                        height={90}
                        width={90}
                        alt="Add New Artwork"
                        className="m-auto"
                    />
                    <p>
                        New Collection
                    </p>
                </div>
                <div className='border border-black rounded-xl p-8 cursor-pointer'>
                    <Image 
                        src='/newevent.png'
                        height={90}
                        width={90}
                        alt="Add New Artwork"
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