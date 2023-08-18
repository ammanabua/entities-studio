import Image from "next/image"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Featured from "@/components/Featured"
import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 overflow-hidden">
      <header className="flex w-full justify-center pt-20">
        <Image
          src="/header.png"
          width={390}
          height={280}
          alt="Entities Studio"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </header>
      
      <Featured />

      <Link href="/events" className='font-rubik font-bold uppercase bg-gray-300 p-4 w-80 md:w-96 border-none text-center text-sm my-5'>
       Explore Events 
      </Link>
    </main>
  );
}
