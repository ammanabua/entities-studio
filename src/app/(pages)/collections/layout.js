import Head from 'next/head'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'



export default function CollectionsLayout({ children }) {
  return (
      <div className="font-krona">        
          {children}
      </div>
  )
}
