'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { NextResponse } from "next/server"
import { useEffect, useState } from 'react'

  

const Page = () => {

    const router = useRouter()
    const {slug} = router.query //this is [lang], [category] and [sub]
    const [product, setProduct] = useState(null)

    const loadProduct = async function (slug) {
        // for exemple...
        const res = await fetch(`/api/images/${slug}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        const response = await res.json()
        setProduct(response)
        console.log(product)
        return response
    }
    
    useEffect(() => {
        loadProduct(slug)
    }, [slug])


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
                  sizes="100vw"
                  style={{
                      width: "100%",
                      height: "auto"
                  }} />

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
  );
}

export default Page