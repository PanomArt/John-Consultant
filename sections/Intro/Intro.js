import React from 'react'
import { intro } from '@/data/data'
import { TitleSection } from '@/components/Title'

export default function Intro() {
  return (
    <section id='introduction'>
           <div className='intro-container'>
                 {intro.map((item)=>(
                      <div className='intro-card' key={item.id}>
                             <TitleSection title={item.title}/>
                             <p className='intro-des mt-40'>{item.des}</p>
                             <button className='secondary-button mt-80'>More Info</button>
                      </div>
                 ))}
           </div>
    </section>
  )
}
