import { TitleLg ,TitleSection , TitleSm } from '@/components/Title'
import React, { useEffect, useState } from 'react'


export default function Hero() {
  const [scale,setScale] = useState(1.1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroscale = Math.max(1.1 - (scrollPosition * 0.00015), 1); // Adjust the scale factor and minimum scale value as needed
      setScale(heroscale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scale]);
  return (
    <section id='hero'>
        <div className='hero-background' style={{scale: `${scale}`}}/>        
        <div className='hero-title'>
            <TitleSm title='Developing Innovative Strategies'/><br/>
            <TitleLg title='ACHIEVING GROWTH'/><br/>
            <button className='main-button'>Book A Consultation</button>
        </div>
    </section>
  )
}
