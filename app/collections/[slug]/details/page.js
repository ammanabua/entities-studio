import Image from "next/legacy/image"
import Link from "next/link"
import { NextResponse } from "next/server"

const page = () => {
  return (
    <section className="w-full bg-white flex justify-center py-24">
        <div className="text-center">
            <h1 className="uppercase text-center text-2xl mb-8">
                Family Portrait
            </h1>

            <Image
                src='/tamas-art/directions-live.jpg'
                width={350}
                height={280}
                alt="Directions Please"
                layout="responsive" 
            />

            <h2 className="text-xl pt-8">
                Directions Please
            </h2>

            <p className="font-rubik font-light w-40 m-auto text-sm mt-4">There is always help to give, all you have to do is ask.</p>

            <p className="font-rubik font-light text-sm my-8">
                4 x 3" Canvas
            </p>

            <p className="font-rubik text-lg font-medium mb-8">
                £2,000
            </p>

            <Link href="/checkout" className="font-rubik font-light border border-black p-4 rounded-3xl text-sm">
                Collect
            </Link>
        </div>
    </section>
  )
}

export default page