'use client'
import './globals.css'
import Head from 'next/head'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import store from '../redux/store'
import { Provider } from 'react-redux'
import ScrollButton from '@/app/components/ScrollButton'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-krona ">
        <Provider store={store}>
          <Navbar />
          
            {children}
            <ScrollButton />
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
