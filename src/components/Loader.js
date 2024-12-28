'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const Loader = () => {
  return (
    <motion.div className='h-screen flex flex-col items-center justify-center'
      initial={{ opacity: 1}}
      animate={{ opacity: 0 }}
      transition = {{ duration: 0.5, ease: 'linear', repeat: true}}>
      <Image
        src="/head.png"
        width={95}
        height={70}
        alt="Entities Studio"
        style={{
            maxWidth: "100%",
            height: "auto"
        }} />
        <p>Loading...</p>
    </motion.div>
  )
}

export default Loader