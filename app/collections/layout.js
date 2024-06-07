import Head from 'next/head'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'



export default function CollectionsLayout({ children }) {
  return (
      <div className="font-krona">        
          {children}
      </div>
  )
}
