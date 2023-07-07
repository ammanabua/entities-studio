'use client'
import './globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import store from '../redux/store'
import { Provider } from 'react-redux'


export const metadata = {
  title: 'Welcome to Entities Studio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-krona ">
        <Provider store={store}>
          <Navbar />
          
            {children}
          
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
