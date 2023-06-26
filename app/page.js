import Image from "next/legacy/image"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <header className="flex w-full justify-center pt-20">
          <Image
            src="/header.png"
            width={390}
            height={280}
            alt="Entities Studio" 
          />
        </header>
        <section className='w-full mb-8'>
          <div className='justify-center flex border-dotted border-8 border-black flex rounded-3xl p-5'>
            <Image
                src="/family-portrait.png"
                width={1440}
                height={900}
                alt="Family Portrait" 
              />
          </div>
          <div className='w-full text-center my-8 underline font-bold text-2xl my-20'>
            <Link href='/collections/family-portrait'>
            🍃Family Portrait🍃
            </Link>
          </div>
        </section>
        <section className='w-full flex-col'>
          <div className='justify-center flex border-dotted border-8 border-black flex rounded-3xl'>
            <Image
                src="/tamas-art.png"
                width={1440}
                height={900}
                alt='Tamas Art' 
              />
          </div>
          <h2 className='text-center w-full underline font-bold text-2xl my-20'>
            <Link href="/collections/tamas-art">
              ✨Tama's Art✨
            </Link>
          </h2>
        </section>

        <Link href="/events" className='font-rubik font-bold uppercase bg-gray-300 p-4 w-80 md:w-96 border-none text-center text-sm my-5'>
         Explore Events 
        </Link>
      </main>
  )
}
