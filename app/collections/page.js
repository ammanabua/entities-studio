import React from 'react'
import Image from "next/image"
import Link from 'next/link'





export default async function page () {


    return (
        <section className='w-full flex-col justify-center text-center pt-32'> 
                
            <h2 className='text-2xl font-semibold mb-10 tracking-wider  md:text-4xl'>New and old bits.. </h2>

            <div className='w-full px-8'>
                

                <div className='my-16 md:flex justify-center items-center w-full'>
                    <div className='md:w-1/2'>
                        <Image
                            src='/collection1.png'
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full h-auto"
                            alt='Family Portrait' />
                    </div>
                    
                    <div className='md:w-1/2'>
                        <h2 className='overline text-2xl font-bold my-5 md:w-40 lg:w-80 m-auto leading-none'>Family Portrait</h2>

                        <p className='font-rubik text-left text-lg bg-white w-64 md:w-52 lg:w-7/12 p-3 m-auto mb-8'>This collection is centered around my move to the UK with my family as a child, being close with my family and holding on to my memories of my time in Nigeria. This collection honors my lineage and family for being there along the way, guiding and strengthening me through each of my decisions.</p>

                        <Link href='/collections/family-portrait' className='bg-black text-white p-5'>🖼️ Explore Collection</Link>
                    </div>
                </div>

                <div className='my-16 md:flex justify-center items-center w-full'>

                    <div className='w-full md:w-1/2 mt-8 order-2'>

                        <Image
                            src='/collection2.png'
                            alt="Tamas Art"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full h-auto" />
                        
                    </div>
                    <div className='w-full md:w-1/2'>

                        <h2 className='text-2xl my-5 font-bold'>Tamas Art</h2>

                        <p className='font-rubik text-left text-lg bg-white w-64 md:w-52 lg:w-7/12 p-3 m-auto mb-8'>“The honest truth about having a creative process and discovering the ‘final final’ art piece is learning to channel maximum energy during a low period instead of just dwelling on the emotions coursing within…”</p>

                        <Link href='/collections/tamas-art' className='bg-black text-white text-base p-5'>🖼️ Check me out</Link>
                    </div>
                </div>
                <div className='flex w-full mt-24 mb-4 justify-center'>
                    <Link href="/events" className='font-rubik bg-gray-300 text-center uppercase font-bold p-3 w-80 md:w-2/5 h-12 border-none text-sm'>
                        Explore Events
                    </Link>
                </div>
            </div>
           
        </section>
    );
}


 