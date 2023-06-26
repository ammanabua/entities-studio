import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


export const metadata = {
  title: 'Collections - Entities Studio',
  description: '',
}

export default function CollectionsLayout({ children }) {
  return (
      <div className="font-krona ">        
          {children}
      </div>
  )
}
