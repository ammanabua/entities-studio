'use client'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { reset } from '@/src/redux/cartSlice'
import Link from 'next/link'

const Cart = () => {
  const cart = useSelector((state: any) => state.cart)
  const [open, setOpen] = useState(false)
  const [cash, setCash] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()

  const createOrder = async (data: any) => {
    try {
      const res = await axios.post('/api/orders', data)
      if (res.status === 201) {
        dispatch(reset())
        // router.push(`/orders/${res.data._id}`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const EmptyCart = () => (
    <div className="flex flex-col justify-center items-center">
      <Image src="/warning.svg" width={60} height={60} alt="Entities Studio" />
      <h4 className="text-center font-thin font-rubik">
        Your cart is empty
        <Link href="/collections" className="text-orange-700">
          , pick some items!
        </Link>
      </h4>
    </div>
  )

  const FilledCart = () => (
    <main className="md:flex justify-center w-full md:w-4/5 space-x-12 px-16 m-auto">
      <div className="w-full md:w-[70%]">
        <table className="table-auto text-left w-full">
          <tbody>
            <tr className="">
              <th>Piece</th>
              <th>Title</th>
              <th>Size</th>
              <th>Price</th>
            </tr>
          </tbody>
          <tbody className="font-rubik">
            {cart.art.map((item: any) => (
              <tr className="" key={item.image._id}>
                <td>
                  <div className="">
                    <Image className="" src={item.image.url} width={80} height={60} alt="" />
                  </div>
                </td>
                <td>
                  <span className="">{item.image.title}</span>
                </td>
                <td>
                  <span className="">4 x 5</span>
                </td>
                <td>
                  <span className="">${item.image.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-start p-8 w-60 bg-gray-800 rounded-xl">
        <div className="text-white">
          <h2 className="font-rubik mb-4">Cart Summary</h2>
          <div className="">
            <b className="">Subtotal: </b> £ {cart.total}
          </div>
          <div className="">
            {open ? (
              <div>
                <button className="">Pay with Stripe</button>
                <button className="" onClick={() => setCash(true)}>
                  Cash on Delivery
                </button>
              </div>
            ) : (
              <button onClick={() => setOpen(true)} className="bg-green-500 p-4 mt-8 rounded-md">
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  )

  return (
    <>
      <div className="min-h-screen bg-white flex-col justify-centre items-center align-center pt-16">
        <h1 className="text-center">Entities Basket</h1>
        <div className="mt-20">{!cart.art.length ? <EmptyCart /> : <FilledCart />}</div>
      </div>
    </>
  )
}

export default Cart
