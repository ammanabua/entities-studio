'use client'
import React, { useEffect } from 'react'
import axios from 'axios'
// import { collections } from '../data'

// async function getCollections() {
//   const res = await fetch('/api/collections')

//   return res.json()
// }

// useEffect(() => {

// }, [])

export default async function Flipbook () {

  
  // const data = await getCollections();

  // console.log(data)
  
  return (
    <section className='h-screen p-8 align-center flex-col'>
      <div className='bg-blue-200 h-3/4'>
        The Flipbook
      </div>
    </section>
  )
}


      
