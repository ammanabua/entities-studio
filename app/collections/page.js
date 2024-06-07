import React from 'react'
import Image from "next/image"
import Link from 'next/link'


export const metadata = {
    title: 'Collections - Entities Studio',
    description: '',
  }


export default async function page () {

    return (
        <section className='w-full flex-col justify-center text-center mt-56 lg:px-36'> 
                
            <h2 className='text-2xl font-semibold mb-10 tracking-wider  md:text-4xl'>New and old bits.. </h2>

            <div className='w-full px-8 items-center'>
                

                <div className='mt-16 md:flex justify-center items-center w-full'>
                    <div className='md:w-1/2'>
                        <Link href='/collections/family-portrait'>

                            <Image
                                src='/collection1.png'
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-full h-auto"
                                alt='Family Portrait' 
                            />
                        </Link>
                    </div>
                    
                    <div className='flex flex-col m-auto items-center md:w-1/2'>
                        <h2 className='overline text-2xl font-bold my-5 md:w-40 lg:w-80 m-auto leading-none'>Family Portrait</h2>

                        <p className='font-rubik text-left text-lg bg-white w-64 md:w-52 lg:w-9/12 p-4 m-auto mb-8'>This collection is centered around my move to the UK with my family as a child, being close with my family and holding on to my memories of my time in Nigeria. <br /> This collection honors my lineage and family for being there along the way, guiding and strengthening me through each of my decisions.</p>

                        <Link href='/collections/family-portrait' className="w-[365px] h-16 bg-black text-white p-5 hover:bg-white hover:text-black">🖼️ Explore collection</Link>
                    </div>
                </div>

                <div className='mb-16 md:flex justify-center items-center w-full'>

                    <div className='w-full md:w-1/2 mt-8 order-2'>
                        <Link href='/collections/tamas-art' >

                            <Image
                                src='/collection2.png'
                                alt="Tamas Art"
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-full h-auto"
                            />
                        
                        </Link>
                    </div>
                    <div className='w-full md:w-1/2'>

                        <h2 className='text-2xl my-5 font-bold'>Tamas Art</h2>

                        <p className='font-rubik text-left text-lg bg-white w-64 md:w-52 lg:w-9/12 p-4 m-auto mb-8'>“The honest truth about having a creative process and discovering the ‘final final’ art piece is learning to channel maximum energy during a low period instead of just dwelling on the emotions coursing within…”</p>

                        <Link href='/collections/tamas-art' className='h-16 w-[262px] bg-black text-white hover:bg-white hover:text-black text-base p-5'>🖼️ Check me out</Link>
                    </div>
                </div>
                <div className='flex w-full mt-24 mb-4 justify-center'>
                    <Link href="/events" className='flex items-center justify-center font-rubik bg-[#D5D5D5] text-center uppercase font-bold p-3 w-[480px] h-14 md:w-2/5 border-none text-sm'>
                        <p className='hover:text-white'>
                         Explore Events
                        </p>
                    </Link>
                </div>
            </div>
           
        </section>
    );
}


 