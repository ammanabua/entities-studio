import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <Image
        src="/head.png"
        width={95}
        height={70}
        alt="Entities Studio"
        style={{
            maxWidth: "100%",
            height: "auto"
        }} />
    </div>
  )
}

export default Loader