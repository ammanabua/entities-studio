'use client'
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";

// // import required modules
// import { EffectCards } from "swiper";

// export default function App() {
//   return (
//     <>      
//         <Swiper
//           effect={"cards"}
//           grabCursor={true}
//           modules={[EffectCards]}
//           className="w-2/4 align-center justify-center overflow-hidden"
//         >
//           <SwiperSlide className="bg-white">Slide 1</SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//           <SwiperSlide>Slide 3</SwiperSlide>
//           <SwiperSlide>Slide 4</SwiperSlide>
//           <SwiperSlide>Slide 5</SwiperSlide>
//           <SwiperSlide>Slide 6</SwiperSlide>
//           <SwiperSlide>Slide 7</SwiperSlide>
//           <SwiperSlide>Slide 8</SwiperSlide>
//           <SwiperSlide>Slide 9</SwiperSlide>
//         </Swiper>
//     </>
//   );
// }





import { useEffect, useState } from 'react'
import axios from 'axios'
import {collections} from '../app/data'






export default async function Flipbook () {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function getCollections() {
      setLoading(true);
       await fetch('/api/collections')
      .then((response) => {
        response.json()
      }).then((data) => {
        console.log(data);
        setCollections(data)
        setLoading(false)})
    }
    getCollections();
  },[])

  if (loading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>    
  return (
    <section className='h-screen w-1/2 align-center flex-col'>
      <div className='bg-blue-200 h-3/4  items-center'>
        <div>Family Portrait</div>
      </div>
    </section>
  )
}