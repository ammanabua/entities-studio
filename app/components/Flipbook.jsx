import React from 'react'
import axios from 'axios'
// import { collections } from '../data'



const Flipbook = ({ collections }) => {
  
  console.log({collections})
  return (
    <section className='h-screen p-8 align-center flex-col'>
      <div className='bg-blue-200 h-3/4'>
        The Flipbook
      </div>
    </section>
  )
}

export default Flipbook
      
export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/collections')

  return { props: { collections: res.data } }
}