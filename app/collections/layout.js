import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'



export default function CollectionsLayout({ children }) {
  return (
      <div className="font-krona ">        
          {children}
      </div>
  )
}
