'use client'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import { reset } from "../../redux/cartSlice"
import Link from "next/link";


const Cart = () => {
    
    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);


    const dispatch = useDispatch();
    const router = useRouter()

    const createOrder = async (data) => {
        try{
            const res = await axios.post("http://localhost:3000/api/orders", data);

            if (res.status === 201) {
                dispatch(reset());
                router.push(`/orders/${res.data._id}`);
            }
        } catch(err) {
            console.log(err)
        }
    }


    // //PAYSTACK HOOK IMPLEMENTATION
    // const config = {
    //     reference: (new Date()).getTime().toString(),
    //     email: "user@example.com",
    //     amount: cart.total * 100,
    //     publicKey: 'pk_test_687a8ebd710403b4c2f5383c6c027d896bd074dc',
    // };
    
    // // you can call this function anything
    // const onSuccess = (reference) => {
    //   // Implementation for whatever you want to do with reference and after success call.
    //     const shipping = {
    //         name:{
    //             full_name: "Jimmy Carter"
    //         },
    //         address: {
    //             address_line_1: "Ezimba Street"
    //         }
    //     }

    //     createOrder({
    //         customer:shipping.name.full_name,
    //         address: shipping.address.address_line_1,
    //         telephone: 9059646709,
    //         total: cart.total,
    //         method: 0,
        
    //     });

    //   console.log(reference);
    // };
  
    // // you can call this function anything
    // const onClose = () => {
    //   // implementation for  whatever you want to do when the Paystack dialog closed.
    //   console.log('closed')
    // }
  
    
    // const initializePayment = usePaystackPayment(config);

    //END OF PAYSTACK HOOK IMPLEMENTATION

    const EmptyCart = () => (
        <div variant="subtitle1">Your Cart is empty, 
            <Link href="/" passHref>
                Pick some items!
            </Link>
        </div>
    );

    const FilledCart = () => (
        <main className="md:flex justify-center w-full md:w-4/5 space-x-12 px-16 m-auto">
            <div className='w-full md:w-[70%]'>
                <table className='table-auto text-left w-full'>
                    <tbody>
                        <tr className=''>
                            <th>Piece</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </tbody>
                    <tbody className="font-rubik">
                            <tr className=''>
                                <td>
                                    <div className=''>
                                        <Image className='' src='/collection1.png' width={80} height={60} alt="" />
                                    </div>
                                </td>
                                <td>
                                    <span className=''>Family Portrait</span>
                                </td>
                                <td>
                                    <span className=''>
                                        4 x 5
                                    </span>
                                </td>
                                <td>
                                    <span className=''>N40</span>
                                </td>
                                <td>
                                    <span className=''>N80</span>
                                </td>
                            </tr>
                            <tr className=''>
                                <td>
                                    <div className=''>
                                        <Image className='' src='/collection1.png' width={80} height={60} alt="" />
                                    </div>
                                </td>
                                <td>
                                    <span className=''>Family Portrait</span>
                                </td>
                                <td>
                                    <span className=''>
                                        4 x 5
                                    </span>
                                </td>
                                <td>
                                    <span className=''>N40</span>
                                </td>
                                <td>
                                    <span className=''>N80</span>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-start p-8 w-60 bg-gray-800 rounded-xl'>
                <div className='text-white'>
                    <h2 className='font-rubik mb-4'>Cart Summary</h2>
                    <div className=''>
                        <b className=''>Subtotal: </b> £ 160
                    </div>
                    <div className=''>
                        
                        {open ? (
                            <div>
                                <button className=''>Pay with Stripe</button>

                                <button className='' onClick={() => setCash(true)}>Cash on Delivery</button>
                            </div>
                        ) : (
                            <button onClick={() => setOpen(true)} className='bg-green-500 p-4 mt-8 rounded-md'>Checkout</button>
                        )}
                    </div>
                </div>
            </div>        
        </main>
    )

    console.log(cart);
  return (
    <>
        <div className='min-h-screen bg-white flex-col justify-centre items-center align-center pt-16'>
            <h1 className='text-center'>Entities Basket</h1>

            <div className='mt-20'>
                 <FilledCart />
            </div>
        </div>
    </>
  );
};

export default Cart