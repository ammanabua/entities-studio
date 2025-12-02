'use client'
import { useRef } from 'react'
import './globals.css'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import { makeStore } from '@/src/redux/store'
import { Provider } from 'react-redux'
import ScrollButton from '@/src/components/ScrollButton'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  const storeRef = useRef<ReturnType<typeof makeStore> | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
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
