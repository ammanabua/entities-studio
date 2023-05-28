import './globals.css'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata = {
  title: 'Welcome to Entities Studio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-krona ">
        <Navbar />
        
          {children}
        
        <Footer />
      </body>
    </html>
  )
}
