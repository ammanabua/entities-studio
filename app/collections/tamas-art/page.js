import Image from "next/image"
import React from 'react'
import Link from 'next/link'
import { collections } from '../../data'

const page = () => {
    
  return (
      <section className='bg-[#FF6868] pb-4 flex justify-center w-full'>
          <div className='flex-col'>
          
              <h2 className='font-barrio text-3xl text-center py-16'>Tamas Art</h2>

              <div className='grid grid-cols-1 align-center sm:grid-cols-2 justify-center lg:grid-cols-3 w-full px-16'>
                  
                  <Link href='/collections/tamas-art/details'>
                      <div className='m-auto w-2/3'>
                          <Image
                              src='/tamas-art/get-home-safe.webp'
                              width={258}
                              height={197}
                              alt="Get Home Safe"
                              className="w-full h-auto"
                            />
                          <p className='underline text-xl mt-8'>Art</p>
                          <p className='text-3xl'>“Get Home Safe”</p>

                      </div>
                  </Link>

                  <div className='m-auto w-2/3 mt-12 row-span-2 content-center'>
                      <Image
                          src='/tamas-art/smiles.webp'
                          width={258}
                          height={197}
                          alt="Smiles"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <p className='underline text-xl mt-8'>Art</p>
                      <p className='text-3xl'>Smiles</p>

                  </div>

                  <div className='m-auto w-2/3 mt-12'>
                      <Image
                          src='/tamas-art/walk-with-you.webp'
                          width={258}
                          height={197}
                          alt="Can I Walk With You?"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <p className='underline text-xl mt-8'>Art</p>
                      <p className='text-3xl'>“Can I Walk With You?”</p>

                  </div>

                  <div className='m-auto w-2/3 mt-12'>
                      <Image
                          src='/tamas-art/friends.webp'
                          width={258}
                          height={197}
                          alt="Hanging With Friends"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <p className='underline text-xl mt-8'>Art</p>
                      <p className='text-3xl'>The World Outside is Within (World Between Places)</p>

                  </div>

                  <div className='m-auto w-2/3 mt-12'>
                      <Image
                          src='/tamas-art/what.webp'
                          width={258}
                          height={197}
                          alt="What am I?"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <p className='underline text-xl mt-8'>Art</p>
                      <p className='text-3xl'>“What am I?”</p>

                  </div>

                  <div className='m-auto w-2/3 mt-12'>
                      <Image
                          src='/tamas-art/fascination.webp'
                          width={258}
                          height={197}
                          alt="A Fascination"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <p className='underline text-xl mt-8'>Art</p>
                      <p className='text-3xl'>A Fascination</p>

                  </div>

                  <div className='m-auto w-2/3 mt-12'>
                      <Image
                          src='/tamas-art/shadows.webp'
                          width={258}
                          height={197}
                          alt="Shadow Peoples"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <p className='underline text-xl mt-8'>Art</p>
                      <p className='text-3xl'>Shadow Peoples</p>

                  </div>

                  <div className='m-auto w-2/3 mt-12'>
                      <Image
                          src='/tamas-art/greys.webp'
                          width={258}
                          height={197}
                          alt="The Grey Matters"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <p className='underline text-xl mt-8'>Art</p>
                      <p className='text-3xl'>The Grey Matters</p>

                  </div>

                  <div className='m-auto w-2/3 mt-12'>
                      <Image
                          src='/tamas-art/road.webp'
                          width={258}
                          height={197}
                          alt="The Road Behind My House"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <p className='underline text-xl mt-8'>Art</p>
                      <p className='text-3xl'>The Road Behind My House</p>

                  </div>

                  <div className='m-auto w-2/3 mt-12'>
                      <Image
                          src='/tamas-art/directions.webp'
                          width={258}
                          height={197}
                          alt="Directions Please"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <p className='underline text-xl mt-8'>Art</p>
                      <p className='text-3xl'>Directions Please</p>

                  </div>
              </div>

                <div className='flex w-full mt-24 mb-4 justify-center'>
                    <Link href="/collections" className='font-rubik bg-gray-300 text-center uppercase font-bold p-6 w-80 border-none text-sm'>
                        Back to Collections
                    </Link>
                </div>
          </div>
      </section>
  );
}

export default page