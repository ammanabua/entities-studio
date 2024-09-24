'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname, useSearchParams, useParams } from "next/navigation"
import { NextResponse } from "next/server"
import axios from "axios";
import { addArt } from "@/redux/cartSlice"
import { useDispatch } from 'react-redux'
import {useState, useEffect} from "react";


export default async function Page (){
    const params = useParams();
    const productId = params.id;
    const dispatch = useDispatch();
    // const res = await fetch(`http://localhost:3000/api/images/${params.id}`)
    // const art = await res.json();

    const [art, setArt] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);

    const loadArt = async () => {
       const res = await fetch(`http://localhost:3000/api/images/${productId}`);

       const data = await res.json();
        setArt(data);
        setLoading(false)
    }

    useEffect(() => {
        loadArt();
    },[])

    const handleClick = () => {
        dispatch(addArt({ ...art, quantity, price}));
    }

    console.log(art);

  return (
      <section className="w-full bg-white flex justify-center py-24">
          <div className="text-center">
            <div>
                <p className='w-full flex justify-start font-krona text-xs font-light'>
                    Back
                </p>
            </div>
              <h1 className="uppercase text-center text-2xl mb-8">
                  Family Portrait
              </h1>

              <Image
                  src={art.image.url}
                  width={350}
                  height={280}
                  alt="Directions Please"
                  sizes="100vw"
                  style={{
                      width: "100%",
                      height: "auto"
                  }} />

              <h2 className="text-xl pt-8">
                  {art.image.title}
              </h2>

              <p className="font-rubik font-light w-40 m-auto text-sm mt-4">{art.image.desc}</p>

              <p className="font-rubik font-light text-sm my-8">
                  4 x 3&quot; Canvas
              </p>

              <p className="font-rubik text-lg font-medium mb-8">
                  £{art.image.price}
              </p>

              <button onClick={handleClick} href="/checkout" className="font-rubik font-light border border-black p-4 rounded-3xl text-sm">
                  Collect
              </button>
          </div>
      </section>
  );
}
