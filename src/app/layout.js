'use client'
import { useRef } from "react";
import './globals.css'
import Head from 'next/head'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import { makeStore } from '@/src/redux/store'
import {Provider, useDispatch} from 'react-redux'
import ScrollButton from '@/src/components/ScrollButton'




export default function RootLayout({ children }) {

    const storeRef = useRef();


    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

  return (
    <html lang="en" suppressHydrationWarning>
        <body className="font-krona ">
            <Provider store={storeRef.current}>
                <Navbar />
                    {children}
                <ScrollButton />
                <Footer />
            </Provider>
        </body>
    </html>
  )
}
