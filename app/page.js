import Image from "next/image"
import Featured from "@/app/components/Featured"
import Link from 'next/link'

export const metadata = {
  title: 'Welcome to Entities Studio',
  description: '',
}

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

      <Link href="/events" className='font-rubik font-bold uppercase bg-gray-300 p-4 w-80 h-14 md:w-[480px] text-center text-sm my-5 hover:border hover:border-black hover:bg-transparent transition duration-500'>
       ‹ Explore Events ›
      </Link>
    </main>
  );
}
