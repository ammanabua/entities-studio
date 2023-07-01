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
// import { collections } from '../data'






export default async function Flipbook () {
    const [collections, setCollections] = useState([]);


    useEffect(() => {
      async function getCollections() {
        const res = await axios.get('http://localhost:3000/api/collections')
        
        const collections = res.data;
      
        console.log(collections)
        setCollections(collections);
      }
      getCollections();
    },[])
    
  
  return (
    <section className='h-screen w-1/2 align-center flex-col'>
      <div className='bg-blue-200 h-3/4  items-center'>
        <div>Family Portrait</div>
        {collections.map((collection) => (
          <div key={collection.title}>
              Image Div
          </div>
        ))}
      </div>
    </section>
  )
}