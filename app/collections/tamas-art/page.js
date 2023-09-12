'use client'
import Image from "next/image"
import Link from 'next/link'
import { collections } from '../../data'
import TamasGrid from "@/components/TamasGrid"

export const metadata = {
    title: 'Tamas Art - Entities Studio',
    description: '',
}



const page = () => {
    
  return (
      <section className='bg-[#FF6868] pb-4 flex justify-center w-full'>
          <TamasGrid />
      </section>
  );
}

export default page