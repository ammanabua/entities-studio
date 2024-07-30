'use client'
import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { NextResponse } from "next/server"
import { addArt } from "../../../redux/cartSlice"
import { useDispatch } from 'react-redux'
  

export default async function Page () {
    
    const [art, setArt] = useState(null)
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = (1);

    const router = useRouter();
    const dispatch = useDispatch();

    const loadProduct = async function (slug) {
        // for exemple...
        const res = await fetch(`http://localhost:3000/api/images/${slug}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        const response = await res.json()
        console.log(response)
        setArt(response)
        return response
    }
    
    useEffect(() => {
        loadProduct()
    }, [])


    const handleClick = () => {
        dispatch(addArt({ ...art, price, quantity}));
    }



  return (
      <section className="w-full bg-white flex justify-center py-24">
          <div className="text-center">
            <div onClick={() => router.back({ scroll: false})}>
                <p className='w-full flex justify-start font-krona text-xs font-light'>
                    Back
                </p>
            </div>
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
                  4 x 3&quot; Canvas
              </p>

              <p className="font-rubik text-lg font-medium mb-8">
                  £2,000
              </p>

              <button href="/checkout" className="font-rubik font-light border border-black p-4 rounded-3xl text-sm" onClick={handleClick}>
                  Collect
              </button>
          </div>
      </section>
  );
}


