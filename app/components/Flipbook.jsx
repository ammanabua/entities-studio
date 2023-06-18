import React from 'react'
import { collections } from '../data'



const Flipbook = () => {

    console.log(collections)
  return (
    <section className='h-screen p-8 align-center flex-col'>
      <div className='bg-blue-200 h-3/4'>
        The Flipbook
      </div>
    </section>
  )
}

export default Flipbook