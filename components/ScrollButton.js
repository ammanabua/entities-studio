'use client'
import { useEffect, useState } from 'react';
import {TfiAngleUp} from 'react-icons/tfi'; 
  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 500){ 
      setVisible(true) 
    }  
    else if (scrolled <= 500){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible); 

  }, [])
  
  
  return ( 
    <button style={{display: visible ? 'inline' : 'none', transitionDelay: 0.5}} onClick={scrollToTop} className='fixed w-[50px] bottom-6 right-6 h-[50px] border border-black cursor-pointer bg-[#18B039]'> 
     <TfiAngleUp className='m-auto' /> 
    </button> 
  ); 
}
  
export default ScrollButton; 