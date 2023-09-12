'use client'
import Flipbook from '@/components/Flipbook'
import Image from "next/image"
import Link from 'next/link'
import { motion } from 'framer-motion'
import FamilyPortraitSlider from '@/components/FamilyPortraitSlider'

export const metadata = {
  title: 'Family Portrait - Entities Studio',
  description: '',
}


const images = [
    {
        name: "Welcome Home",
        intro: "Welcoming a future home with both old and new family members living, learning and experiencing life together. Embedded with a new set of values that tie our bonds closer together.",
        url: "/family-portrait/welcome-home.webp"
      },
      {
        name: "Not Forgotten People",
        intro: "To my extended links that I never took the time to form an authentic bond with. This piece is an active reminder to continue to make an effort and reach out to my community at large.",
        url: "/family-portrait/not-forgotten.webp"
      },
      {
        name: "The Inner Circle",
        intro: "Within my family bonds; some relationships are strong, some are mild and others are still forming. If we call ourselves a family, it’s our duty to take the time to assist each connection to thrive.",
        url: "/family-portrait/inner-circle.webp"
      },
      {
        name: "Ties",
        intro: "The connections flowing between my immediate family which extends and grows as we bond with others.",
        url: "/family-portrait/ties.webp"
      },
      {
        name: "Grandmas Shadow",
        intro: "In honor of my Grandmothers. May their memories within me continue to connect me to a vibrant and industrial heritage of strength, love and vitality.",
        url: "/family-portrait/grandmas-shadow.webp"
      },
      {
        name: "Blue Soldier Riddle",
        intro: "In the face of adversities, he learns from your mistakes and studying his opponents. He remains open to every outcome as he knows he shall conquer and gain more knowledge exploring his adventurous spirit",
        url: "/family-portrait/blue-soldier.png"
      },
      {
        name: "Voids",
        intro: "Patience comes at a price, when you live on dreams and hopes. Bide your time, wait your turn - a pit of wants are formed as you ignore the world around you.",
        url: "/family-portrait/voids.webp"
      },
      {
        name: "First Date",
        intro: "Happy Anniversary Dad and Mom. A relationship that started a new extension of our family lineage. Their relationship taught me lots of values that will be a foundation to my own extension. Be playful and loving to each other.",
        url: "/family-portrait/first-date.png"
      },
      {
        name: "Siblings",
        intro: "As siblings, you fight, you quarrel, you yell, you annoy each other but you laugh, you protect, you learn to enjoy each other’s company. For my sibling - My Besties",
        url: "/family-portrait/siblings.webp"
      },
      {
        name: "Ancestral Lines",
        intro: "An eternal connection I will always have with my culture, tradition and heritage, as nothing can sever the blood ties linking me to my ancestry. I carry them with me always.",
        url: "/family-portrait/ancestral-lines.png"
      },
      {
        name: "My Family",
        intro: "A family portrait reflecting the different personalities within my family unit",
        url: "/family-portrait/my-family.webp"
      },
  ];

const page = () => {
  return (
    <section className='w-full align-center text-center pt-28 mb-4'> 
        <h2 className='text-4xl font-bold uppercase mb-20'>
            Family Portrait
        </h2>

        <FamilyPortraitSlider images={images} />

        <div className='mt-12'>
            <h2 className='text-2xl uppercase'>The Booklet</h2>
            <p className='font-rubik text-xl text-semibold tracking-wider mt-4'>(swipe right to left)</p>
        </div>

        <div className='h-screen border-dashed border-black border-4 mb-16 flex justify-center align-center'>
            <Flipbook images={images} />
        </div>

        <div className='flex justify-center w-full'>
            <Image
                src="/family-portrait.png"
                width={250}
                height={250}
                alt="Family Portrait"
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto"
                }} />
        </div>
        <div className='flex - justify-center w-full'>
            <Link href="/collections" className='font-rubik bg-gray-300 uppercase font-bold p-3 w-80 border-none text-center text-sm mt-20'>
                Back to Collections
            </Link>
        </div>
    </section>
  );
}

export default page