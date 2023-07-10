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
        <>
            <div className='flex flex-2'>
                <table className=''>
                    <tbody>
                        <tr className=''>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {cart.products.map((product) => (
                            <tr className='' key={product._id}>
                                <td>
                                    <div className=''>
                                        <Image className='' src={product.img} layout="fill" objectFit="cover" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <span className=''>{product.title}</span>
                                </td>
                                <td>
                                    <span className=''>
                                        {product.extras.map((extra) => (
                                            <span key={extra._id}>{extra.text}</span>
                                         ))}
                                    </span>
                                </td>
                                <td>
                                    <span className=''>{product.price}</span>
                                </td>
                                <td>
                                    <span className=''>{product.quantity}</span>
                                </td>
                                <td>
                                    <span className=''>{product.price * product.quantity}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-1'>
                <div className=''>
                    <h2 className=''>Cart Total</h2>
                    <div className=''>
                        <b className=''>Subtotal: </b> {cart.total}
                    </div>
                    <div className=''>
                        <b className=''>Discount: </b> N0.00
                    </div>
                    <div className=''>
                        <b className=''>Delivery: </b> N0.00
                    </div>
                    <div className=''>
                        <b className=''>Total: </b> {cart.total}
                    </div>
                    <div className=''>
                        
                        {open ? (
                            <div>
                                <button className=''>Pay with Stripe</button>

                                <button className='' onClick={() => setCash(true)}>Cash on Delivery</button>
                            </div>
                        ) : (
                            <button onClick={() => setOpen(true)} className=''>CHECKOUT</button>
                        )}
                    </div>
                </div>
            </div>        
        </>
    )

console.log(cart);
  return (
    <>
        <div className=''>
            <h1 className=''>Shopping Cart</h1>

            <div className=''>
                 <EmptyCart />
            </div>
        </div>
    </>
  );
};

export default Cart