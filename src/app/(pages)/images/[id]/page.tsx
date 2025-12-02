'use client'
import Image from 'next/image'
import { useRouter, useParams } from 'next/navigation'
import { addArt } from '@/src/redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Loader from '@/src/components/Loader'
import type { RootState } from '@/src/redux/store'

export default function Page() {
  const params = useParams<{ id: string }>()
  const productId = params.id
  const router = useRouter()

  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.art)

  const [art, setArt] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(`/api/images/${productId}`)
        const result = await response.json()
        setArt(result)
      } catch (error) {
        console.error('Error fetching data: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [productId])

  const handleClick = () => {
    if (art) {
      dispatch(addArt({ ...art }))
      router.push('/cart')
    }
  }

  return (
    <section className="w-full bg-white flex justify-center py-24">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-center">
          <div>
            <p className="w-full flex justify-start font-krona text-xs font-light">Back</p>
          </div>
          <h1 className="uppercase text-center text-2xl mb-8">{art.image.tag}</h1>

          <Image src={art.image.url} width={250} height={180} alt="Directions Please" sizes="70vw" style={{ width: '100%', height: 'auto' }} />

          <h2 className="text-xl pt-8">{art.image.title}</h2>

          <p className="font-rubik font-light m-auto text-sm mt-4">{art.image.desc}</p>

          <p className="font-rubik font-light text-sm my-8">4 x 3&quot; Canvas</p>

          <p className="font-rubik text-lg font-medium mb-8">£{art.image.price}</p>

          <button onClick={handleClick} className="font-rubik font-light border border-black p-4 rounded-3xl text-sm">Collect</button>
        </div>
      )}
    </section>
  )
}
